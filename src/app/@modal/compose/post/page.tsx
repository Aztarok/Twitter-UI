"use client";

import DisplayImage from "@/components/DisplayImage";
import { useRouter } from "next/navigation";

const PostModal = () => {
    const router = useRouter();

    const closeModal = () => router.back();
    return (
        <div className="absolute w-screen h-screen top-0 left-0 z-20 bg-[#293139a6] flex justify-center">
            {/* TOP */}
            <div className="py-4 px-8 rounded-xl bg-black w-[600px] h-max mt-12">
                <div className="flex items-center justify-between">
                    <div className="cursor-pointer" onClick={closeModal}>
                        X
                    </div>
                    <div className="text-iconBlue font-bold">Drafts</div>
                </div>
                {/* CENTER */}
                <div className="py-8 flex gap-4">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden">
                        <DisplayImage
                            path="general/avatar.png"
                            width={100}
                            height={100}
                            alt="Avatar"
                            tr={true}
                        />
                    </div>
                    <input
                        className="flex-1 bg-transparent outline-none text-lg"
                        type="text"
                        placeholder="What's is happening?!"
                    />
                </div>
                {/* BOTTOM */}
                <div className="flex items-center justify-between gap-4 flex-wrap border-t border-borderGray p-4">
                    <div className="flex gap-4 flex-wrap">
                        <DisplayImage
                            path="/icons/image.svg"
                            alt="Image"
                            width={20}
                            height={20}
                            className="cursor-pointer"
                        />
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
                    <button className="py-2 px-5 text-black bg-white rounded-full font-bold cursor-pointer">
                        Post
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PostModal;
