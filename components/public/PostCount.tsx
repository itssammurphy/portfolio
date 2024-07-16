import { SanityClient } from "@/lib/sanityClient";

export default async function PostCount() {
    const data = await SanityClient.fetch<number>(
        `count(*[_type == "post"])`,
        {},
        {
            // You can set any of the `cache` and `next` options as you would on a standard `fetch` call
            cache: "force-cache",
            next: { tags: ["post"] },
        },
    );

    return <h1>Number of pages: {data}</h1>;
}
