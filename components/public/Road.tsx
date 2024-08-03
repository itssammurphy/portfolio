"use client";
import { SanityClient } from "@/lib/sanityClient";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Road = () => {
    const [post, setPost] = useState<any>(null);

    useEffect(() => {
        SanityClient.fetch(
            `*[_type == "post"] {
    title,
    slug,
    body,
    publishedAt,
    mainImage {
      asset -> {
        _id,
        url
      },
      alt,
    }
  } | order(publishedAt desc)`,
        )
            .then((data) => {
                setPost(data[0]);
            })
            .catch(console.error);
    }, []);

    return (
        <section className="w-full lg:w-3/5 px-4 lg:px-16 py-2 lg:py-8 flex flex-col items-start justify-start font-mono">
            <h1 className="border-l-2 border-white pl-4 text-2xl my-4 text-white">
                The Road to Full-Time SoftEng
            </h1>
            <p className="text-gray-300 text-lg">
                Join me as I embark on and document every step of my journey
                towards becoming a full-time software engineer.
                <br />
                <br />
            </p>
            {post && (
                <>
                    <b>Latest instalment:</b>
                    <div className="w-full text-black bg-white p-4 mt-2 min-h-60 flex flex-row gap-x-2">
                        <div className="w-1/2 h-full flex flex-col items-start justify-between">
                            <div>
                                <h2 className="text-4xl font-bold uppercase">
                                    {post.title.length > 45
                                        ? post.title.substr(0, 45) + "\u2026"
                                        : post.title}
                                </h2>
                                <h3 className="text-lg text-gray-500 mb-16">
                                    {new Date(post.publishedAt)
                                        .toLocaleString("en-GB")
                                        .slice(0, 17)}
                                </h3>
                            </div>
                            <Link
                                href={`/blog/post/${post.slug.current}`}
                                className="bg-blue-800 hover:bg-blue-500 transition-colors ease-in-out text-white px-2 py-1 rounded-md"
                            >
                                Read blog post
                            </Link>
                        </div>
                        <div className="w-1/2 flex items-center justify-end">
                            <img
                                src={post.mainImage.asset.url}
                                className="h-full w-full object-cover object-center my-4"
                                alt="Post associated with the latest instalment of Sam Murphy's Road to Software Engineering"
                            />
                        </div>
                    </div>
                </>
            )}
        </section>
    );
};

export default Road;
