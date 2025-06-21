"use client";
import { ImageKitProvider, Video } from "@imagekit/next";

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

type VideoTypes = {
    path: string;
    className?: string;
};

const DisplayVideo = ({ path, className }: VideoTypes) => {
    return (
        <div>
            <ImageKitProvider urlEndpoint={urlEndpoint}>
                <Video
                    src={path}
                    className={className}
                    alt="Video"
                    controls
                    transformation={[{ width: "1920", height: "1080", quality: 100 }]}
                />
            </ImageKitProvider>
        </div>
    );
};
export default DisplayVideo;
