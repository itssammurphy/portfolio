"use client";
import { Skeleton } from "@/components/ui/skeleton";
import PORTABLE_TEXT_COMPONENTS from "@/lib/portableTextComponents";
import { SanityClient } from "@/lib/sanityClient";
import { PortableText } from "next-sanity";
import { useEffect, useState } from "react";

const Post = ({ params }: { params: { slug: string } }) => {
    const slug = params.slug || "day-zero";

    const [post, setPost] = useState<any>(null);

    useEffect(() => {
        SanityClient.fetch(
            `*[_type == "post" && slug.current == '${slug}'] {
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

    return post ? (
        <article className="font-mono w-full lg:w-3/5 px-4 lg:px-16 pb-16">
            <h1 className="text-4xl font-bold mb-4 text-white">{post.title}</h1>
            <h2 className="font-semibold text-2xl text-gray-400">
                {new Date(post.publishedAt)
                    .toLocaleString("en-GB")
                    .slice(0, 17)}
            </h2>
            <img src={post.mainImage.asset.url} className="w-full my-4" />
            <PortableText
                value={post.body}
                components={PORTABLE_TEXT_COMPONENTS}
            />
        </article>
    ) : (
        <div className="w-3/5 px-16 flex flex-col items-start justify-start">
            <div className="h-16 rounded-lg w-[400px] mb-4 bg-neutral-900 animate-pulse"></div>
            <div className="h-8 rounded-lg w-[240px] bg-neutral-900 animate-pulse"></div>
            <div className="rounded-lg w-full aspect-video my-4 bg-neutral-900 animate-pulse"></div>
        </div>
    );
};

export default Post;
