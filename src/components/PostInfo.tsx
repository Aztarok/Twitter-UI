import ImageDisplay from "./DisplayImage";

const PostInfo = () => {
    return (
        <div className="cursor-pointer w-4 h-4 relative">
            <ImageDisplay
                path="/icons/infoMore.svg"
                alt="Post Information"
                width={100}
                height={100}
                tr={true}
            />
        </div>
    );
};
export default PostInfo;
