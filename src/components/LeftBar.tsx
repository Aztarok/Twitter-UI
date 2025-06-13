import Link from "next/link";
import ImageDisplay from "./Image";

const menuList = [
    {
        id: 1,
        name: "Homepage",
        link: "/",
        icon: "home.svg",
    },
    {
        id: 2,
        name: "Explore",
        link: "/",
        icon: "explore.svg",
    },
    {
        id: 3,
        name: "Notification",
        link: "/",
        icon: "notification.svg",
    },
    {
        id: 4,
        name: "Messages",
        link: "/",
        icon: "message.svg",
    },
    {
        id: 5,
        name: "Bookmarks",
        link: "/",
        icon: "bookmark.svg",
    },
    {
        id: 6,
        name: "Jobs",
        link: "/",
        icon: "job.svg",
    },
    {
        id: 7,
        name: "Communities",
        link: "/",
        icon: "community.svg",
    },
    {
        id: 8,
        name: "Premium",
        link: "/",
        icon: "logo.svg",
    },
    {
        id: 9,
        name: "Profile",
        link: "/",
        icon: "profile.svg",
    },
    {
        id: 10,
        name: "More",
        link: "/",
        icon: "more.svg",
    },
];

const LeftBar = () => {
    return (
        <div className="h-screen sticky top-0 flex flex-col justify-between pt-2 pb-8">
            {/* LOGO MENU BUTTON */}
            <div className="flex flex-col gap-4 text-lg items-center xxl:items-start">
                {/* LOGO */}
                <Link href="/" className="p-2 rounded-full hover:bg-[#181818]">
                    <ImageDisplay path="/icons/logo.svg" alt="Logo" width={24} height={24} />
                </Link>
                {/* MENU LIST */}
                <div className="flex flex-col gap-4">
                    {menuList.map((item) => (
                        <Link href={item.link} className="p-2 rounded-full hover:bg-[#181818] flex items-center gap-4" key={item.id}>
                            <ImageDisplay path={`/icons/${item.icon}`} alt={item.name} width={24} height={24} />
                            <span className="hidden xxl:inline">{item.name}</span>
                        </Link>
                    ))}
                </div>
                {/* BUTTON */}
                <Link href={"/"} className="xxl:hidden bg-white text-black rounded-full font-bold w-12 h-12 flex items-center justify-center">
                    <ImageDisplay path="/icons/post.svg" alt="New Post" width={24} height={24} />
                </Link>
                <Link href={"/"} className="hidden xxl:block bg-white text-black rounded-full font-bold py-2 px-20">
                    Post
                </Link>
            </div>
            {/* USER */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden">
                        <ImageDisplay path="/general/avatar.png" alt="avatar" width={100} height={100} tr={true} />
                    </div>
                    <div className="hidden xxl:flex flex-col">
                        <span className="font-bold">Aztarok</span>
                        <span className="text-sm text-textGray">@Aztarok</span>
                    </div>
                </div>
                <div className="hidden xxl:block font-bold cursor-pointer ">...</div>
            </div>
        </div>
    );
};

export default LeftBar;
