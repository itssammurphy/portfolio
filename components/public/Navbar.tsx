"use client";
import getNowPlayingItem from "@/actions/spotify";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import SpotifyLogo from "./SpotifyLogo";
import PlayingAnimation from "./PlayingAnimation";
import Marquee from "react-fast-marquee";

const Navbar = () => {
    const [loading, setIsLoading] = useState<boolean>(true);
    const [result, setResult] = useState<any>({});

    useEffect(() => {
        Promise.all([getNowPlayingItem()]).then((results) => {
            setResult(results[0]);
            setIsLoading(false);
        });
    }, []);
    return (
        <nav className="bg-black w-full h-auto lg:h-[50px] flex flex-col items-center justify-center my-24">
            <div className="w-full grid grid-rows-2 grid-cols-2 md:grid-cols-5 lg:flex lg:flex-row lg:items-center lg:justify-between lg:w-3/5 py-2 px-4 md:py-4 lg:px-16">
                <div className="w-full lg:w-1/12 col-start-1 row-start-1 text-left flex flex-row items-center justify-start">
                    <Link
                        href="/"
                        className="text-2xl font-mono hover:text-blue-500 transition-colors ease-in-out"
                    >
                        S.M.
                    </Link>
                </div>
                <div className="col-span-2 flex flex-col items-center md:col-span-3 md:col-start-2 md:row-start-1">
                    {!loading && !result.isPlaying && (
                        <div className="hidden md:block cols-span-3 md:w-full text-center">
                            <p className="text-[#1ed760]">
                                Spotify listening activity will be shown here
                            </p>
                        </div>
                    )}
                    {!loading && result.isPlaying && (
                        <div className="flex flex-row items-center justify-start w-full gap-x-3">
                            <div className="hidden md:mr-4 md:flex md:flex-col md:items-end w-1/2">
                                <PlayingAnimation />
                                <p className="text-[#1ed760]">Now Listening</p>
                            </div>
                            <div className="hidden md:block md:w-1/6">
                                <img
                                    src={result.albumImageUrl}
                                    alt={`${result.title} album art`}
                                    className="w-full lg:w-[50px]"
                                />
                            </div>
                            <div className="hidden md:block w-1/3">
                                <Marquee
                                    play={result.title.length > 32}
                                    style={{ width: "100%" }}
                                    speed={30}
                                >
                                    <a
                                        href={result.songUrl}
                                        target="_blank"
                                        className=""
                                    >
                                        {result.title}
                                    </a>
                                </Marquee>
                                <Marquee
                                    play={result.artist.length > 32}
                                    speed={20}
                                    style={{ width: "100%" }}
                                >
                                    <p className="">{result.artist}</p>
                                </Marquee>
                            </div>
                        </div>
                    )}
                </div>
                <div className="col-start-2 md:col-start-5 row-start-1 w-full lg:w-1/12 flex flex-row items-center justify-end">
                    <Link
                        href="/blog"
                        className="text-xl hover:text-blue-500 transition-colors ease-in-out font-mono"
                    >
                        Blog
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
