import type { Metadata } from "next";
import { Inconsolata, Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/public/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Sam Murphy - Road to Software Engineer",
    description:
        "This is the portfolio website for Sam Murphy, a self-taught software developer from Melbourne, Australia on the road to a software engineer role.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin=""
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200..900&display=swap"
                    rel="stylesheet"
                ></link>
            </head>
            <body className={`${inter.className} bg-black text-white`}>
                <Navbar />
                <main className="bg-black w-full flex-col flex items-center justify-normal">
                    {children}
                </main>
            </body>
        </html>
    );
}
