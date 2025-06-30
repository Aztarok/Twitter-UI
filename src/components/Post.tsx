import { getFileDetails, Interactions } from "@/actions";
import ImageDisplay from "./DisplayImage";
import PostInfo from "./PostInfo";
import PostInteractions from "./PostInteractions";
import DisplayVideo from "./DisplayVideo";
import Link from "next/link";

async function toBase64(url: string): Promise<string> {
    const res = await fetch(url, { next: { revalidate: 3600 } });
    const buffer = await res.arrayBuffer();
    const b64 = Buffer.from(buffer).toString("base64");
    const mime = url.endsWith(".png") ? "image/png" : "image/jpeg";
    return `data:${mime};base64,${b64}`;
}

const Post = async ({ type }: { type?: "status" | "comment" }) => {
    // const fileDetails = await getFileDetails("68518b83b13a1025375ab275");
    // const fileDetails = await getFileDetails("68545896b13a1025371eb8d2");
    // const fileDetails = await getFileDetails("68571e1eb13a102537156195");
    const fileDetails = await getFileDetails("68571ee3b13a1025371a69fc");

    const data = await Interactions();
    let placeholder: "blur" | "empty" = "empty";
    let blurDataURL: string | undefined;
    if (!fileDetails?.url) return null;

    if (fileDetails?.customMetadata?.sensitive) {
        placeholder = "blur";
        const lqipURL = `${fileDetails.url}&tr=bl-10,q-25`; // very small + blurred
        blurDataURL = await toBase64(lqipURL);
    }
    return (
        <div className="p-4 border-y-[1px] border-borderGray">
            {/* POST TYPE*/}
            <div className="flex items-center gap-2 text-sm text-textGray mb-2 font-bold">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                    <path
                        className="fill-textGray"
                        d="M4.75 3.79l4.603 4.3-1.706 1.82L6 8.38v7.37c0 .97.784 1.75 1.75 1.75H13V20H7.75c-2.347 0-4.25-1.9-4.25-4.25V8.38L1.853 9.91.147 8.09l4.603-4.3zm11.5 2.71H11V4h5.25c2.347 0 4.25 1.9 4.25 4.25v7.37l1.647-1.53 1.706 1.82-4.603 4.3-4.603-4.3 1.706-1.82L18 15.62V8.25c0-.97-.784-1.75-1.75-1.75z"
                    />
                </svg>
                <span>Aztarok reposted</span>
            </div>
            {/* POST CONTENT */}
            {/* <div className="flex gap-4"> */}
            <div className={`flex gap-4 ${type === "status" && "flex-col"}`}>
                {/* AVATAR */}
                <div
                    className={`${
                        type === "status" && "hidden"
                    } relative w-10 h-10 rounded-full overflow-hidden`}
                >
                    <ImageDisplay
                        path="/general/avatar.png"
                        alt="Post"
                        width={100}
                        height={100}
                        tr={true}
                    />
                </div>
                {/* CONTENT */}
                <div className="flex-1 flex flex-col gap-2">
                    {/* TOP */}
                    <div className="w-full flex justify-between">
                        <Link href={`/Aztarok`} className="flex gap-4">
                            <div
                                className={`${
                                    type !== "status" && "hidden"
                                } relative w-10 h-10 rounded-full overflow-hidden`}
                            >
                                <ImageDisplay
                                    path="/general/avatar.png"
                                    alt="Post"
                                    width={100}
                                    height={100}
                                    tr={true}
                                />
                            </div>
                            <div
                                className={`flex flex-wrap ${
                                    type === "status"
                                        ? "flex-col gap-0 items-start"
                                        : "items-center gap-2"
                                }`}
                            >
                                <h1 className="text-md font-bold">Aztarok</h1>
                                <span
                                    className={`text-textGray text-sm ${
                                        type === "status" && "text-sm"
                                    }`}
                                >
                                    @Aztarok
                                </span>
                                {type !== "status" && (
                                    <span className="text-textGray text-sm">1 day ago</span>
                                )}
                            </div>
                        </Link>
                        <PostInfo />
                    </div>
                    {/* TEXT & MEDIA */}
                    <Link href={`/Aztarok/status/123`}>
                        <p className={`${type === "status" && "text-lg"}`}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.
                        </p>
                    </Link>
                    {/* <ImageDisplay path="/general/post.jpeg" alt="Post" width={600} height={600} tr={true} /> */}
                    {fileDetails?.fileType === "image" ? (
                        <ImageDisplay
                            path={fileDetails.url}
                            alt="Post"
                            width={fileDetails.width}
                            height={fileDetails.height}
                            tr={true}
                            className={fileDetails.customMetadata?.sensitive ? "" : ""}
                            placeholder={placeholder}
                            blurDataURL={blurDataURL}
                        />
                    ) : (
                        <DisplayVideo
                            path={fileDetails.url}
                            className={fileDetails?.customMetadata.sensitive ? "blur-lg" : ""}
                        />
                    )}

                    {type === "status" && (
                        <span className="text-textGray">{`12:55 PM • Jun 29, 2025`}</span>
                    )}
                    <PostInteractions {...data} />
                </div>
            </div>
        </div>
    );
};
export default Post;
