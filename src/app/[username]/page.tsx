import DisplayImage from "@/components/DisplayImage";
import Feed from "@/components/Feed";
import Link from "next/link";

const UserPage = () => {
    return (
        <div className="">
            {/* PROFILE TITLE */}
            <div className="flex items-center gap-8 sticky top-0 backdrop-blur-md p-4 z-10 bg-black/50">
                <Link href="/">
                    <DisplayImage path="icons/back.svg" width={24} height={24} alt="Back" />
                </Link>
                <h1 className="font-bold text-lg">Aztarok</h1>
            </div>
            {/* INFO */}
            <div>
                {/* COVER & AVATAR CONTAINER */}
                <div className="relative w-full">
                    <div className="w-full aspect-[3/1] relative">
                        <DisplayImage
                            path="general/cover.jpg"
                            width={600}
                            height={200}
                            alt="Cover"
                            tr={true}
                        />
                    </div>
                    {/* AVATAR */}
                    <div className="w-1/5 aspect-square rounded-full overflow-hidden border-4 border-black bg-gray-300 absolute left-4 -translate-y-1/2">
                        <DisplayImage
                            path="general/avatar.png"
                            width={100}
                            height={100}
                            alt="Avatar"
                            tr={true}
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>
                <div className="flex w-full items-center justify-end gap-2 p-2">
                    <div className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
                        <DisplayImage path="icons/more.svg" width={20} height={20} alt="More" />
                    </div>
                    <div className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
                        <DisplayImage
                            path="icons/explore.svg"
                            width={20}
                            height={20}
                            alt="Explore"
                        />
                    </div>
                    <div className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
                        <DisplayImage
                            path="icons/message.svg"
                            width={20}
                            height={20}
                            alt="Message"
                        />
                    </div>
                    <button className="py-2 px-4 bg-white text-black font-bold rounded-full">
                        Follow
                    </button>
                </div>
                {/* USER DETAILS */}
                <div className="p-4 flex flex-col gap-2">
                    {/* USERNAME & HANDLE */}
                    <div className="">
                        <h1 className="text-2xl font-bold">Aztarok</h1>
                        <span className="text-textGray text-sm">@Aztarok</span>
                    </div>
                    <p>Aztarok is a web developer from America</p>
                    {/* JOB & LOCATION & DATE */}
                    <div className="flex gap-4 text-textGray text-[15px]">
                        <div className="flex items-center gap-2">
                            <DisplayImage
                                path="icons/userLocation.svg"
                                width={20}
                                height={20}
                                alt="Location"
                                tr={true}
                            />
                            <span>United States</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <DisplayImage
                                path="icons/date.svg"
                                width={20}
                                height={20}
                                alt="Date"
                                tr={true}
                            />
                            <span>Joined May 2023</span>
                        </div>
                    </div>
                    {/* FOLLOWINGS & FOLLOWERS */}
                    <div className="flex gap-4">
                        <div className="flex items-center gap-2">
                            <span className="font-bold">100</span>
                            <span className="text-textGray text-[15px]">Following</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="font-bold">100</span>
                            <span className="text-textGray text-[15px]">Followers</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* FEED */}
            <Feed />
        </div>
    );
};

export default UserPage;
