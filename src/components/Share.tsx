"use client";
import { shareAction } from "@/actions";
import Image from "next/image";
import { useState } from "react";
import ImageDisplay from "./Image";

const Share = () => {
    const [media, setMedia] = useState<File | null>(null);
    const handleMediaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setMedia(e.target.files[0]);
        }
    };
    const previewURL = media ? URL.createObjectURL(media) : null;
    return (
        <form action={shareAction} className="p-4 flex gap-4">
            {/* AVATAR */}
            <div className="relative w-10 h-10 rounded-full overflow-hidden">
                <ImageDisplay path="/general/avatar.png" alt="Avatar" width={100} height={100} tr={true} />
            </div>
            {/* OTHERS */}
            <div className="flex flex-1 flex-col gap-4">
                <input type="text" placeholder="What is happening?" className="bg-transparent outline-none placeholder:text-textGray text-xl" name="desc" />
                {/* PREVIEW IMAGE */}
                {previewURL && (
                    <div className="relative rounded-xl overflow-hidden">
                        <Image src={previewURL} alt="Preview" width={600} height={600} />
                        <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white py-1 px-4 rounded-full font-bold text-sm cursor-pointer">Edit</div>
                    </div>
                )}
                {/* {isEditorOpen && previewURL && <ImageEditor onClose={() => setIsEditorOpen(false)} previewURL={previewURL} />} */}
                <div className="flex items-center justify-between gap-4 flex-wrap">
                    {" "}
                    <div className="flex gap-4 flex-wrap">
                        <input type="file" className="hidden" onChange={handleMediaChange} id="file" name="file" />
                        <label htmlFor="file">
                            <ImageDisplay path="/icons/image.svg" alt="Image" width={20} height={20} className="cursor-pointer" />
                        </label>
                        <ImageDisplay path="/icons/gif.svg" alt="Image" width={20} height={20} className="cursor-pointer" />
                        <ImageDisplay path="/icons/poll.svg" alt="Image" width={20} height={20} className="cursor-pointer" />
                        <ImageDisplay path="/icons/emoji.svg" alt="Image" width={20} height={20} className="cursor-pointer" />
                        <ImageDisplay path="/icons/schedule.svg" alt="Image" width={20} height={20} className="cursor-pointer" />
                        <ImageDisplay path="/icons/location.svg" alt="Image" width={20} height={20} className="cursor-pointer" />
                    </div>
                    <button className="bg-white text-black font-bold rounded-full py-2 px-4">Post</button>
                </div>
            </div>
        </form>
    );
};

export default Share;
