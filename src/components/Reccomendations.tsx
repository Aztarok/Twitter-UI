import Link from "next/link";
import DisplayImage from "./DisplayImage";

const Reccomendations = () => {
    return (
        <div className="p-4 rounded-2xl border-[1px] border-borderGray flex flex-col gap-4">
            {/* USER CARD */}
            <div className="flex items-center justify-between">
                {/* IMAGE AND USER INFO */}
                <div className="flex items-center gap-2">
                    <div className="relative rounded-full overflow-hidden w-10 h-10">
                        <DisplayImage
                            path="general/avatar.png"
                            width={100}
                            height={100}
                            alt="User"
                            tr={true}
                        />
                    </div>
                    <div className="">
                        <h1 className="text-md font-bold">John Doe</h1>
                        <span className="text-textGray text-sm">@JohnDoe</span>
                    </div>
                </div>
                {/* BUTTON */}
                <button className="py-1 px-4 font-semibold bg-white text-black rounded-full">
                    Follow
                </button>
            </div>
            <div className="flex items-center justify-between">
                {/* IMAGE AND USER INFO */}
                <div className="flex items-center gap-2">
                    <div className="relative rounded-full overflow-hidden w-10 h-10">
                        <DisplayImage
                            path="general/avatar.png"
                            width={100}
                            height={100}
                            alt="User"
                            tr={true}
                        />
                    </div>
                    <div className="">
                        <h1 className="text-md font-bold">John Doe</h1>
                        <span className="text-textGray text-sm">@JohnDoe</span>
                    </div>
                </div>
                {/* BUTTON */}
                <button className="py-1 px-4 font-semibold bg-white text-black rounded-full">
                    Follow
                </button>
            </div>
            <div className="flex items-center justify-between">
                {/* IMAGE AND USER INFO */}
                <div className="flex items-center gap-2">
                    <div className="relative rounded-full overflow-hidden w-10 h-10">
                        <DisplayImage
                            path="general/avatar.png"
                            width={100}
                            height={100}
                            alt="User"
                            tr={true}
                        />
                    </div>
                    <div className="">
                        <h1 className="text-md font-bold">John Doe</h1>
                        <span className="text-textGray text-sm">@JohnDoe</span>
                    </div>
                </div>
                {/* BUTTON */}
                <button className="py-1 px-4 font-semibold bg-white text-black rounded-full">
                    Follow
                </button>
            </div>
            <Link className="text-iconBlue" href="/">
                Show More
            </Link>
        </div>
    );
};
export default Reccomendations;
