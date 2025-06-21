"use server";

const privateKey = process.env.PRIVATE_KEY as string;

export const shareAction = async (formData: FormData, settings: { type: "original" | "wide" | "square"; sensitive: boolean }) => {
    const file = formData.get("file") as File;
    if (!file) throw new Error("No file provided!");

    const bytes = await file.arrayBuffer();
    const base64File = Buffer.from(bytes).toString("base64");

    const transformation = `w-600,${settings.type === "square" ? "ar-1-1" : settings.type === "wide" ? "ar-16-9" : ""}`;
    console.log(transformation);
    console.log(file);
    const response = await fetch("https://upload.imagekit.io/api/v1/files/upload", {
        method: "POST",
        headers: {
            Authorization: "Basic " + Buffer.from(`${privateKey}:`).toString("base64"),
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
            file: base64File,
            fileName: file.name,
            folder: "/posts",
            useUniqueFileName: "true",
            ...(file.type.includes("image") && { transformation: JSON.stringify({ pre: transformation }) }),
            customMetadata: JSON.stringify({ sensitive: settings.sensitive }),
        }),
    });

    if (!response.ok) {
        const errorText = await response.text();
        console.error("Failed to upload file:", errorText);
        throw new Error("Failed to upload file: " + errorText);
    }

    const data = await response.json();
    console.log(data);
    return data;
};

export const Interactions = async () => {
    const min = 0;
    const max = 10_000_000;

    const skewed = Math.pow(Math.random(), 2.5);
    const base = Math.floor(min + (max - min) * skewed);

    const variation = (value: number) => Math.floor(value * (0.9 + Math.random() * 0.5));

    const rawLikes = variation(base);
    const rawComments = Math.floor(rawLikes / 50);
    const rawRetweets = rawLikes > 1_000_000 ? Math.floor(rawLikes / 80) : Math.floor(rawLikes / 6);

    const formatNumber = (n: number): number | string => {
        if (n >= 1_000_000) return Math.floor(n / 1_000_000) + "M";
        if (n >= 10000) return Math.floor(n / 1000) + "K";
        return n;
    };

    return { comments: formatNumber(rawComments), retweets: formatNumber(rawRetweets), likes: formatNumber(rawLikes) };
};

interface FileDetailsResponse {
    width: number;
    height: number;
    filePath: string;
    url: string;
    fileType: string;
    customMetadata: { sensitive: boolean };
}
export const getFileDetails = async (fileId: string): Promise<FileDetailsResponse | null> => {
    if (!fileId) return null;
    try {
        const res = await fetch(`https://api.imagekit.io/v1/files/${fileId}/details`, {
            headers: {
                Authorization: "Basic " + Buffer.from(`${privateKey}:`).toString("base64"),
            },
            cache: "no-cache",
        });

        if (!res.ok) throw new Error(await res.text());
        const fullData = await res.json();
        const filteredData: FileDetailsResponse = {
            width: fullData.width,
            height: fullData.height,
            filePath: fullData.filePath,
            url: fullData.url,
            fileType: fullData.fileType,
            customMetadata: fullData.customMetadata,
        };
        return filteredData as FileDetailsResponse;
    } catch (error) {
        console.error("Error fetching file details:", error);
        return null;
    }
};
