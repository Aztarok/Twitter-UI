"use server";

export const shareAction = async (formData: FormData) => {
    const file = formData.get("file") as File;
    if (!file) throw new Error("No file provided!");

    const privateKey = process.env.PRIVATE_KEY as string;
    const bytes = await file.arrayBuffer();
    const base64File = Buffer.from(bytes).toString("base64");

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
            transformation: JSON.stringify({ pre: "w-600" }),
        }),
    });

    if (!response.ok) {
        const errorText = await response.text();
        console.error("Failed to upload file:", errorText);
        throw new Error("Failed to upload file: " + errorText);
    }

    const data = await response.json();
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
