import Feed from "@/components/Feed";
import Share from "@/components/Share";
import UploadExample from "@/components/Upload";
import Link from "next/link";

export default function Home() {
    return (
        <div className="">
            <div className="px-4 pt-4 flex justify-between text-textGray font-bold border-b-[1px] border-borderGray">
                <Link className="pb-3 flex items-center mx-auto border-b-4 border-iconBlue" href="/">
                    For You
                </Link>
                <Link className="pb-3 flex items-center mx-auto" href="/following">
                    Following
                </Link>
            </div>
            {/* <UploadExample /> */}
            <Share />
            <Feed />
        </div>
    );
}
