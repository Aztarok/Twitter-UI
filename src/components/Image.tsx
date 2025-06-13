import { Image, ImageKitProvider } from "@imagekit/next";

type ImageType = {
    path: string;
    width?: number;
    height?: number;
    alt: string;
    className?: string;
    tr?: boolean;
};
const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

const ImageDisplay = ({ path, width, height, alt, className, tr }: ImageType) => {
    return (
        <ImageKitProvider urlEndpoint={urlEndpoint}>
            <Image
                src={path}
                alt={alt}
                className={className}
                {...(tr
                    ? {
                          transformation: [{ width: width, height: height }],
                          width: width,
                          height: height,
                      }
                    : {
                          width: width,
                          height: height,
                      })}
            />
        </ImageKitProvider>
    );
};

export default ImageDisplay;
