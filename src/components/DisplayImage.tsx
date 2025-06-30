import { Image, ImageKitProvider } from "@imagekit/next";

type ImageType = {
    path: string;
    width?: number;
    height?: number;
    alt: string;
    className?: string;
    tr?: boolean;
    placeholder?: "blur" | "empty";
    blurDataURL?: string;
};
const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

const DisplayImage = ({
    path,
    width,
    height,
    alt,
    className,
    tr,
    placeholder,
    blurDataURL,
}: ImageType) => {
    return (
        <ImageKitProvider urlEndpoint={urlEndpoint}>
            <Image
                src={path}
                alt={alt}
                className={className}
                placeholder={placeholder}
                blurDataURL={blurDataURL}
                loading="lazy"
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

export default DisplayImage;
