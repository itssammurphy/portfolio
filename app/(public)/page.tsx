import About from "@/components/public/About";
import AwayFromCoding from "@/components/public/Away";
import Hero from "@/components/public/Hero";
import Road from "@/components/public/Road";
import Skills from "@/components/public/Skills";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <Road />
            <Skills />
            <AwayFromCoding />
        </>
    );
}
