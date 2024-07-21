import React from "react";

const About = () => {
    return (
        <section className="w-full lg:w-3/5 px-4 lg:px-16 py-2 lg:py-8 flex flex-col items-start justify-start font-mono">
            <h1 className="border-l-2 border-white pl-4 text-2xl my-4">
                About me
            </h1>
            <p className="text-lg leading-relaxed text-gray-300">
                I'm an 18 year-old mathematics student and self-taught
                full-stack developer from Melbourne, Australia. I wrote my first
                line of Python at 9 years old, and ever since I've been hooked!
                For me, programming has opened up new avenues and approaches to
                solving problems, which is a process I have always enjoyed.
                <br />
                <br />
                I currently have a few really cool projects in the pipeline, so
                watch this space for announcements regarding those!
                <br />
                <br />
                In high school, I was very grateful to be given the opportunity
                to develop my programming and computing skills through
                initiatives such as the Australian Informatics Olympiad, as well
                as projects and assignments within my school community. Being
                able to work with people on these projects really solidified
                programming and software engineering in my mind as not just a
                hobby, but something I was really keen to pursue in my
                professional life.
                <br />
                <br />
                In my software projects, I really enjoy working with artificial
                intelligence and machine learning, as well as optimisation and
                algorithmic problems which really force me to think of
                outside-the-box ways to efficiently work with data.
            </p>
        </section>
    );
};

export default About;
