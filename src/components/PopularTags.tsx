import Link from "next/link";
import DisplayImage from "./DisplayImage";

const PopularTags = () => {
    return (
        <div className="p-4 rounded-2xl border-[1px] border-borderGray flex flex-col gap-4">
            <h1 className="text-xl font-bold text-textGrayLight">What&apos;s Happening</h1>
            {/* TREND EVENT */}
            <div className="flex gap-4">
                <div className="relative w-20 h-20 rounded-xl overflow-hidden">
                    <DisplayImage
                        path="general/cover.jpg"
                        width={120}
                        height={120}
                        alt="Event"
                        tr={true}
                    />
                </div>
                <div className="flex-1">
                    <h2 className="font-bold text-textGrayLight">Random Event</h2>
                    <span className="text-sm text-textGray">Last Night</span>
                </div>
            </div>
            {/* TOPICS */}
            <div className="">
                <div className="flex items-center justify-between">
                    <span className="text-textGray text-sm">Technology ⋅ Trending</span>
                    <DisplayImage path="/icons/infoMore.svg" alt="More" width={16} height={16} />
                </div>
                <h2 className="font-bold text-textGrayLight">OpenAI</h2>
                <span className="text-textGray text-sm">20k Tweets</span>
            </div>
            {/* TOPICS */}
            <div className="">
                <div className="flex items-center justify-between">
                    <span className="text-textGray text-sm">Technology ⋅ Trending</span>
                    <DisplayImage path="/icons/infoMore.svg" alt="More" width={16} height={16} />
                </div>
                <h2 className="font-bold text-textGrayLight">OpenAI</h2>
                <span className="text-textGray text-sm">20k Tweets</span>
            </div>
            {/* TOPICS */}
            <div className="">
                <div className="flex items-center justify-between">
                    <span className="text-textGray text-sm">Technology ⋅ Trending</span>
                    <DisplayImage path="/icons/infoMore.svg" alt="More" width={16} height={16} />
                </div>
                <h2 className="font-bold text-textGrayLight">OpenAI</h2>
                <span className="text-textGray text-sm">20k Tweets</span>
            </div>
            {/* TOPICS */}
            <div className="">
                <div className="flex items-center justify-between">
                    <span className="text-textGray text-sm">Technology ⋅ Trending</span>
                    <DisplayImage path="/icons/infoMore.svg" alt="More" width={16} height={16} />
                </div>
                <h2 className="font-bold text-textGrayLight">OpenAI</h2>
                <span className="text-textGray text-sm">20k Tweets</span>
            </div>
            <Link className="text-iconBlue" href="/">
                Show More
            </Link>
        </div>
    );
};
export default PopularTags;
