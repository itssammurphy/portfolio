import About from "@/components/public/About";
import AwayFromCoding from "@/components/public/Away";
import Hero from "@/components/public/Hero";
import Road from "@/components/public/Road";
import Skills from "@/components/public/Skills";
import Work from "@/components/public/Work";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <Work />
            <Road />
            <Skills />
            <AwayFromCoding />
        </>
    );
}
