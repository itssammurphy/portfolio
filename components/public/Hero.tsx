"use client";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    return (
        <section className="w-full lg:w-3/5 px-4 lg:px-16 flex items-center justify-center">
            <div className="w-full flex flex-col items-center justify-normal">
                <div className="relative w-full h-[300px]">
                    <Image
                        src="/me.png"
                        alt="A photo of Sam Murphy"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
                <h1 className="my-4 text-3xl font-mono font-bold">
                    Hi, I&apos;m Sam;
                </h1>
                <p className="text-gray-300 text-wrap max-w-full font-mono font-light text-xl leading-relaxed text-center">
                    Self-taught full-stack developer passionate about all things
                    tech, maths, and sport.
                    <br />
                    <br />
                    Studying Applied Mathematics at the University of Melbourne,
                    Parkville
                </p>
                <div className="flex flex-row items-center justify-between w-[100px] mt-4">
                    <Link
                        target="_blank"
                        href="https://www.linkedin.com/in/sam-murphy-8772b0283/"
                        className="text-white hover:text-gray-400 transition-colors ease-in-out"
                    >
                        <FaLinkedin size={30} />
                    </Link>
                    <Link
                        target="_blank"
                        href="https://github.com/itssammurphy"
                    >
                        <FaGithub
                            className="text-white hover:text-gray-400 transition-colors ease-in-out"
                            size={30}
                        />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
