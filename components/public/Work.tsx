import React from "react";
import WorkCard from "./WorkCard";

const Work = () => {
    return (
        <section className="w-full lg:w-3/5 px-4 lg:px-16 py-2 lg:py-8 flex flex-col items-start justify-start font-mono">
            <h1 className="border-l-2 border-white pl-4 text-2xl my-4 text-white">
                Some stuff of mine
            </h1>
            <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-8">
                <WorkCard
                    name="Exotic Options Pricer"
                    description="A Monte Carlo simulation framework to price vanilla and exotic options of a single underlying asset via discounted expected payoffs on simulated Geometric Brownian Motion asset price paths."
                    url="https://github.com/itssammurphy/Monte-Carlo-Pricing"
                    image="/projects/exotics.png"
                />
                <WorkCard
                    name="The Autism Site"
                    description="A network for Support Workers, Behaviour Support Assistants, and Therapy Assistants to find work and connect with autistic people. Built with NextJS, Postgres, and using CI/CD principles."
                    url="https://www.theautismsite.com.au/"
                    image="/projects/tas.png"
                />
            </div>
        </section>
    );
};

export default Work;
