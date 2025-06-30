import Comments from "@/components/Comments";
import DisplayImage from "@/components/DisplayImage";
import Post from "@/components/Post";
import Link from "next/link";

const StatusPage = () => {
    return (
        <div className="">
            {" "}
            {/* PROFILE TITLE */}
            <div className="flex items-center gap-8 sticky top-0 backdrop-blur-md p-4 z-10 bg-black/50">
                <Link href="/">
                    <DisplayImage path="icons/back.svg" width={24} height={24} alt="Back" />
                </Link>
                <h1 className="font-bold text-lg">Post</h1>
            </div>
            <Post type="status" />
            <Comments />
        </div>
    );
};

export default StatusPage;
