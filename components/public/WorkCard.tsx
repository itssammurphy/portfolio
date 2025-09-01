import Link from "next/link";
import React from "react";

const WorkCard = ({
    name,
    description,
    url,
    image,
}: {
    name: string;
    description: string;
    url: string;
    image: string;
}) => {
    return (
        <div className="w-full h-full rounded-md border-white border-2 text-white p-4 flex flex-col">
            <div className="aspect-video w-full flex-shrink-0 overflow-hidden rounded-md">
                <img
                    src={image}
                    alt={name}
                    className="h-full w-full block object-cover"
                />
            </div>

            <div className="flex-1 flex flex-col">
                <h2 className="text-2xl my-4 font-semibold text-gray-300">
                    {name}
                </h2>
                <p className="my-2 text-lg font-thin">{description}</p>
                <Link
                    href={url}
                    className="mt-auto text-lg text-blue-500 hover:text-blue-300 transition-colors underline"
                >
                    View
                </Link>
            </div>
        </div>
    );
};

export default WorkCard;
