import Image from "next/image";
import { FaBrain } from "react-icons/fa";

const skills = [
    { name: "Python", src: "/Python.svg", style: "" },
    { name: "JavaScript", src: "/JavaScript.svg", style: "" },
    { name: "TypeScript", src: "/TypeScript.svg", style: "" },
    { name: "HTML5", src: "/HTML5.svg", style: "" },
    { name: "CSS3", src: "/CSS3.svg", style: "" },
    { name: "NextJS", src: "/NextJS.svg", style: "invert" },
    { name: "React", src: "/React.svg", style: "" },
    { name: "Git", src: "/Git.svg", style: "" },
];

export const SkillsSection = () => (
    <div className="flex flex-col w-full gap-5 sm:p-10">
        <div className="flex flex-row sm:gap-3 gap-1 mb-2 items-center">
            <FaBrain className="text-3xl text-yellow-200" />
            <div className="text-4xl" id="skills">Skills</div>
        </div>
        <div className="w-full flex sm:flex-row flex-col flex-wrap justify-items-center items-center sm:gap-14 gap-7 text-center mt-10">
            {skills.map((skill) => (
                <div key={skill.name} className="flex flex-col gap-2 w-24">
                    <Image
                        alt={`${skill.name} Logo`}
                        src={skill.src}
                        className={`h-24 w-auto ${skill.style}`}
                        width={100}
                        height={100}
                    />
                    <p>{skill.name}</p>
                </div>
            ))}
        </div>
    </div>
);
