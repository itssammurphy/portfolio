import PORTABLE_TEXT_COMPONENTS from "@/lib/portableTextComponents";
import { SanityClient } from "@/lib/sanityClient";
import { PortableText } from "next-sanity";
import Link from "next/link";
import React, { Suspense, useEffect, useState } from "react";

const Blog = async () => {
    const posts = await SanityClient.fetch(
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
    );

    return (
        <section className="w-full lg:w-3/5 px-4 lg:px-16 font-mono">
            <Suspense fallback={<p>Loading feed...</p>}>
                {posts.length > 0 ? (
                    posts.map((post: any, index: number) => (
                        <div
                            className="[&:nth-child(odd)]:bg-stone-950 [&:nth-child(even)]:bg-neutral-900 w-full flex flex-row items-center justify-between p-4 mb-2"
                            key={index}
                        >
                            <div className="w-1/2">
                                <h1 className="text-3xl font-bold text-white">
                                    {post.title}
                                </h1>
                                <h2 className="text-2xl font-semibold text-gray-400 mb-4">
                                    {new Date(post.publishedAt)
                                        .toLocaleString("en-GB")
                                        .slice(0, 17)}
                                </h2>
                                <Link
                                    href={`/blog/post/${post.slug.current}`}
                                    className="bg-blue-800 hover:bg-blue-500 transition-colors ease-in-out text-white px-2 py-1 rounded-md"
                                >
                                    Read this post
                                </Link>
                            </div>
                            <img
                                className="w-1/4"
                                src={post.mainImage.asset.url}
                            />
                        </div>
                    ))
                ) : (
                    <h1 className="text-white">No posts yet...</h1>
                )}
            </Suspense>
        </section>
    );
};
export default Blog;
