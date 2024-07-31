import { MetadataRoute } from "next";
import { SanityClient } from "@/lib/sanityClient";
import { type SanityDocument } from "@sanity/client";

async function getData() {
    const query = `*[_type == "post"] {
    "currentSlug": slug.current,
      "updated": _updatedAt
  }`;
    const data = await SanityClient.fetch(query);
    return data;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const data = await getData();
    const posts: MetadataRoute.Sitemap = data.map((post: SanityDocument) => ({
        url: `https://www.itssammurphy.com/blog/post/${post.currentSlug}`,
        lastModified: post.lastModified,
        changeFrequency: "weekly",
        priority: 0.9,
    }));

    return [
        {
            url: "https://www.itssammurphy.comp/",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
        ...posts,
    ];
}
