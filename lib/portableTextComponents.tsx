import CodeBlock from "@/components/public/CodeBlock";
import { getImageDimensions } from "@sanity/asset-utils";
import urlBuilder from "@sanity/image-url";
import imageUrlBuilder from "@sanity/image-url";
import { SanityClient } from "./sanityClient";

const builder = imageUrlBuilder(SanityClient);

function urlFor(source: string) {
    return builder.image(source);
}

const PORTABLE_TEXT_COMPONENTS = {
    block: {
        h1: ({ children }: any) => (
            <h1 className="text-4xl font-bold my-4 text-white">{children}</h1>
        ),
        h2: ({ children }: any) => (
            <h2 className="text-3xl font-semibold my-4 text-white">
                {children}
            </h2>
        ),
        h3: ({ children }: any) => (
            <h3 className="text-2xl font-semibold my-4 text-white">
                {children}
            </h3>
        ),
        h4: ({ children }: any) => (
            <h4 className="text-xl font-semibold my-4 text-white">
                {children}
            </h4>
        ),
        blockquote: ({ children }: any) => (
            <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">
                {children}
            </blockquote>
        ),
        normal: ({ children }: any) => (
            <p
                style={{
                    color: "white",
                    lineHeight: "2",
                    marginBottom: "2rem",
                }}
            >
                {children}
            </p>
        ),
    },
    list: {
        bullet: ({ children }: any) => (
            <ul
                style={{
                    listStyle: "disc",
                    listStylePosition: "inside",
                    marginTop: "1rem",
                    marginBottom: "1rem",
                }}
                className="list-disc list-inside my-2"
            >
                {children}
            </ul>
        ),
        number: ({ children }: any) => (
            <ol
                style={{
                    listStyle: "decimal",
                    listStylePosition: "inside",
                    marginTop: "1rem",
                    marginBottom: "1rem",
                }}
                className="list-decimal list-inside my-2"
            >
                {children}
            </ol>
        ),
    },
    listItem: {
        bullet: ({ children }: any) => (
            <li className="text-white list-disc my-4">{children}</li>
        ),
        number: ({ children }: any) => (
            <li className="my-4 text-white">{children}</li>
        ),
    },
    marks: {
        strong: ({ children }: any) => (
            <strong className="font-bold">{children}</strong>
        ),
        em: ({ children }: any) => <em className="italic">{children}</em>,
        code: ({ children }: any) => (
            <code className="bg-gray-100 rounded px-1 text-sm font-mono">
                {children}
            </code>
        ),
        link: ({ value, children }: any) => (
            <a href={value.href} className="text-blue-600 hover:underline">
                {children}
            </a>
        ),
    },
    types: {
        image: ({ value, isInline }: any) => {
            const { width, height } = getImageDimensions(value);
            return (
                <img
                    src={urlFor(value)
                        .image(value)
                        .width(isInline ? 100 : 800)
                        .fit("max")
                        .auto("format")
                        .url()}
                    alt={value.alt || " "}
                    loading="lazy"
                    style={{
                        // Display alongside text if image appears inside a block text span
                        display: isInline ? "inline-block" : "block",
                        marginTop: "2rem",
                        marginBottom: "2rem",
                        alignSelf: "center",
                    }}
                />
            );
        },
        code: CodeBlock,
    },
};

export default PORTABLE_TEXT_COMPONENTS;
