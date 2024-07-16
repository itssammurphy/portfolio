"use client";
import Image from "next/image";
import PostCount from "./PostCount";

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
            </div>
        </section>
    );
};

export default Hero;
