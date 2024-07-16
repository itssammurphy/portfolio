import { getImageDimensions } from "@sanity/asset-utils";
import urlBuilder from "@sanity/image-url";

const SampleImageComponent = ({ value, isInline }: any) => {
    const { width, height } = getImageDimensions(value);
    return (
        <img
            src={urlBuilder()
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

                // Avoid jumping around with aspect-ratio CSS property
                aspectRatio: width / height,
            }}
        />
    );
};

const PORTABLE_TEXT_COMPONENTS = {
    block: {
        h1: ({ children }: any) => (
            <h1 className="text-4xl font-bold my-4">{children}</h1>
        ),
        h2: ({ children }: any) => (
            <h2 className="text-3xl font-semibold my-3">{children}</h2>
        ),
        h3: ({ children }: any) => (
            <h3 className="text-2xl font-semibold my-3">{children}</h3>
        ),
        h4: ({ children }: any) => (
            <h4 className="text-xl font-semibold my-2">{children}</h4>
        ),
        blockquote: ({ children }: any) => (
            <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">
                {children}
            </blockquote>
        ),
        normal: ({ children }: any) => (
            <p className="my-2 leading-7">{children}</p>
        ),
    },
    list: {
        bullet: ({ children }: any) => (
            <ul className="list-disc list-inside my-2">{children}</ul>
        ),
        number: ({ children }: any) => (
            <ol className="list-decimal list-inside my-2">{children}</ol>
        ),
    },
    listItem: {
        bullet: ({ children }: any) => <li className="my-1">{children}</li>,
        number: ({ children }: any) => <li className="my-1">{children}</li>,
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
        image: SampleImageComponent,
    },
};

export default PORTABLE_TEXT_COMPONENTS;
