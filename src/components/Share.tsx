"use client";
import { shareAction } from "@/actions";
import Image from "next/image";
import { useState } from "react";
import DisplayImage from "./DisplayImage";
import ImageEditor from "./ImageEditor";

const Share = () => {
    const [media, setMedia] = useState<File | null>(null);
    const [isEditorOpen, setIsEditorOpen] = useState(false);
    const [settings, setSettings] = useState<{
        type: "original" | "wide" | "square";
        sensitive: boolean;
    }>({ type: "original", sensitive: false });

    const handleMediaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setMedia(e.target.files[0]);
        }
    };
    const previewURL = media ? URL.createObjectURL(media) : null;
    return (
        <form action={(formData) => shareAction(formData, settings)} className="p-4 flex gap-4">
            {/* AVATAR */}
            <div className="relative w-10 h-10 rounded-full overflow-hidden">
                <DisplayImage
                    path="/general/avatar.png"
                    alt="Avatar"
                    width={100}
                    height={100}
                    tr={true}
                />
            </div>
            {/* OTHERS */}
            <div className="flex flex-1 flex-col gap-4">
                <input
                    type="text"
                    placeholder="What is happening?"
                    className="bg-transparent outline-none placeholder:text-textGray text-xl"
                    name="desc"
                    accept="image/*,video/*"
                />
                {/* PREVIEW IMAGE */}
                {media?.type.includes("image") && previewURL && (
                    <div className="relative rounded-xl overflow-hidden">
                        <Image
                            src={previewURL}
                            alt="Preview"
                            width={600}
                            height={600}
                            className={`w-full ${
                                settings.type === "original"
                                    ? "h-full object-contain"
                                    : settings.type === "square"
                                    ? "aspect-square object-cover"
                                    : "aspect-video object-cover"
                            }`}
                        />
                        <div
                            className="absolute top-2 left-2 bg-black/50 text-white py-1 px-4 rounded-full font-bold text-sm cursor-pointer"
                            onClick={() => setIsEditorOpen(true)}
                        >
                            Edit
                        </div>
                        <div
                            className="absolute top-2 right-2 bg-black/50 text-white h-8 w-8 flex items-center justify-center rounded-full cursor-pointer font-bold text-sm"
                            onClick={() => setMedia(null)}
                        >
                            X
                        </div>
                    </div>
                )}
                {media?.type.includes("video") && previewURL && (
                    <div className="relative">
                        <video src={previewURL} controls className="w-full rounded-xl" />
                        <div
                            className="absolute top-2 right-2 bg-black/50 text-white h-8 w-8 flex items-center justify-center rounded-full cursor-pointer font-bold text-sm"
                            onClick={() => setMedia(null)}
                        >
                            X
                        </div>
                    </div>
                )}
                {isEditorOpen && previewURL && (
                    <ImageEditor
                        onClose={() => setIsEditorOpen(false)}
                        previewURL={previewURL}
                        settings={settings}
                        setSettings={setSettings}
                    />
                )}
                <div className="flex items-center justify-between gap-4 flex-wrap">
                    {" "}
                    <div className="flex gap-4 flex-wrap">
                        <input
                            type="file"
                            className="hidden"
                            onChange={handleMediaChange}
                            id="file"
                            name="file"
                        />
                        <label htmlFor="file">
                            <DisplayImage
                                path="/icons/image.svg"
                                alt="Image"
                                width={20}
                                height={20}
                                className="cursor-pointer"
                            />
                        </label>
                        <DisplayImage
                            path="/icons/gif.svg"
                            alt="Image"
                            width={20}
                            height={20}
                            className="cursor-pointer"
                        />
                        <DisplayImage
                            path="/icons/poll.svg"
                            alt="Image"
                            width={20}
                            height={20}
                            className="cursor-pointer"
                        />
                        <DisplayImage
                            path="/icons/emoji.svg"
                            alt="Image"
                            width={20}
                            height={20}
                            className="cursor-pointer"
                        />
                        <DisplayImage
                            path="/icons/schedule.svg"
                            alt="Image"
                            width={20}
                            height={20}
                            className="cursor-pointer"
                        />
                        <DisplayImage
                            path="/icons/location.svg"
                            alt="Image"
                            width={20}
                            height={20}
                            className="cursor-pointer"
                        />
                    </div>
                    <button className="bg-white text-black font-bold rounded-full py-2 px-4 cursor-pointer">
                        Post
                    </button>
                </div>
            </div>
        </form>
    );
};

export default Share;
