"use client";
import React, { useState } from "react";

const AwayFromCoding = () => {
    const [filter, setFilter] = useState<string>("all");

    const filterToggle = (new_filter: string) => {
        if (filter == new_filter) {
            setFilter("all");
        } else {
            setFilter(new_filter);
        }
    };

    const MATHS_CLASSNAME = "text-amber-400";
    const COMP_CLASSNAME = "text-indigo-600";
    const BREADTH_CLASSNAME = "text-pink-600";

    type SubjectClassName =
        | "text-amber-400"
        | "text-indigo-600"
        | "text-pink-600";

    type Subject = {
        name: string;
        filters: string[];
        grade: string;
        className: SubjectClassName;
    };

    const subjects: Record<number, Subject[]> = {
        2024: [
            {
                name: "Calculus 2 MAST10006",
                filters: ["all", "maths"],
                grade: "First Class Honours",
                className: MATHS_CLASSNAME,
            },
            {
                name: "Linear Algebra MAST10007",
                filters: ["all", "maths"],
                grade: "First Class Honours",
                className: MATHS_CLASSNAME,
            },
            {
                name: "Data Analysis MAST10010",
                filters: ["all", "maths"],
                grade: "First Class Honours",
                className: MATHS_CLASSNAME,
            },
            {
                name: "Foundations of Computing COMP10001",
                filters: ["all", "comp"],
                grade: "First Class Honours",
                className: COMP_CLASSNAME,
            },
            {
                name: "Foundations of Algorithms COMP10002",
                filters: ["all", "comp"],
                grade: "First Class Honours",
                className: COMP_CLASSNAME,
            },
            {
                name: "Intercultural Communication LING10002",
                filters: ["all", "breadth"],
                grade: "First Class Honours",
                className: BREADTH_CLASSNAME,
            },
            {
                name: "Myth, Art, and Empire: Greece and Rome ANCW10002",
                filters: ["all", "breadth"],
                grade: "First Class Honours",
                className: BREADTH_CLASSNAME,
            },
        ],
    };

    return (
        <section className="w-full px-4 lg:w-3/5 lg:px-16 py-2 lg:py-8 flex flex-col items-start justify-start font-mono">
            <h1 className="border-l-2 border-white pl-4 text-2xl my-4 text-white">
                Away from VS Code
            </h1>
            <div className="border-l-2 border-gray-400 text-gray-400 pl-4 mb-8">
                <h2 className="text-xl font-semibold">Sport</h2>
                <p className="font-light">
                    Sport has always been an important extracurricular to me. At
                    the moment, I play cricket and golf, but have also
                    previously played competitive tennis. Recently I have also
                    been more regularly going to the gym, which has been helping
                    me build self-confidence, as well as improve my overall
                    fitness and strength for the sports I primarily play.
                    <br />
                    <br />
                    Last golf round: 86
                    <br />
                    Current handicap: 14.3
                    <br />
                    <br />
                    Current bench press 1RM: 60kg
                    <br />
                    2km PB: 07:51 (08:37 avg)
                </p>
            </div>
            <div className="border-l-2 border-gray-400 text-gray-400 pl-4 mb-8">
                <h2 className="text-xl font-semibold">Uni</h2>
                <p className="font-light">
                    I am currently pursuing a Bachelor of Science at the
                    University of Melbourne, planning to major in{" "}
                    <span
                        className="text-amber-400 font-bold cursor-pointer"
                        onClick={() => filterToggle("maths")}
                    >
                        Mathematics and Statistics
                    </span>{" "}
                    with an Applied Mathematics Specialisation.
                    <br />
                    <br />I am also studying a stream of{" "}
                    <span
                        className="text-indigo-600 font-bold cursor-pointer"
                        onClick={() => filterToggle("comp")}
                    >
                        Computer Science
                    </span>{" "}
                    subjects concurrent to my mathematics-oriented course, as
                    well as pursuing a{" "}
                    <span
                        className="text-pink-600 font-bold cursor-pointer"
                        onClick={() => filterToggle("breadth")}
                    >
                        breadth track
                    </span>{" "}
                    focused primarily on Linguistics.
                    <br />
                    <br />
                </p>
                <b>2024 Subjects:</b>
                <ul>
                    {subjects["2024"].map((subject: Subject, index: number) => {
                        if (subject.filters.includes(filter)) {
                            return (
                                <li key={index} className={subject.className}>
                                    {subject.name} - {subject.grade}
                                </li>
                            );
                        }
                    })}
                </ul>
            </div>
        </section>
    );
};

export default AwayFromCoding;
