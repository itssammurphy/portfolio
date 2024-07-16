import { createClient, type ClientConfig } from "@sanity/client";

const SanityConfig: ClientConfig = {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: "production",
    useCdn: true,
    apiVersion: "2024-07-15",
};

export const SanityClient = createClient(SanityConfig);
