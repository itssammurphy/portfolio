import React from "react";

const Skills = () => {
    return (
        <section className="w-3/5 px-16 py-8 flex flex-col items-start justify-start font-mono">
            <h1 className="border-l-2 border-white pl-4 text-2xl my-4">
                My skills
            </h1>
            <ul className="flex flex-row flex-wrap gap-x-8 text-lg text-gray-300">
                <li>python</li>
                <li>html</li>
                <li>css</li>
                <li>typescript</li>
                <li>javascript</li>
                <li>reactjs</li>
                <li>nextjs</li>
                <li>node</li>
                <li>git</li>
                <li>postgresql</li>
                <li>mysql</li>
                <li>matlab</li>
            </ul>
        </section>
    );
};

export default Skills;
