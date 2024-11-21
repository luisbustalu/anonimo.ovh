import { MdWavingHand } from "react-icons/md";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { TbBrandFiverr } from "react-icons/tb";

export const HeroSection = () => (
    <div className="lg:pt-40 lg:px-20 sm:p-10 p-2 items-center justify-items-center gap-5 animate-fade h-full">
        <div className="sm:text-start text-center">
            <div className="flex flex-row sm:gap-2 gap-1 sm:justify-start items-center justify-center text-xl xl:text-6xl lg:text-5xl md:text-3xl sm:text-2xl">
                <MdWavingHand className="text-yellow-200 animate-wiggle-more animate-twice animate-delay-500" />
                <p>Hi, I&#39;m </p>
                <p className="bg-gray-900 p-2 font-bold text-yellow-300">Luis Bustamante</p>
            </div>
            <p className="sm:text-xl text-lg">
                An Industrial Engineer who taught himself to develop in PHP, Python and JavaScript.
            </p>
            <p className="sm:text-xl text-lg">
                Freelancing as a Backend Developer since 2022.
            </p>
            <div className="flex sm:flex-row sm:gap-6 sm:items-start items-center flex-col sm:mt-10 mt-3 gap-1">
                <Link href="https://github.com/luisbustalu" target="_blank">
                    <div className="flex flex-row items-center gap-1 hover:bg-gray-900 p-2 w-fit border-b-2 border-b-transparent hover:border-white">
                        <FaGithub /> GitHub
                    </div>
                </Link>
                <Link href="https://linkedin.com/in/luisbustalu" target="_blank">
                    <div className="flex flex-row items-center gap-1 hover:bg-gray-900 p-2 w-fit border-b-2 border-b-transparent hover:border-white">
                        <FaLinkedin /> LinkedIn
                    </div>
                </Link>
                <Link href="https://fiverr.com/luisbustalu" target="_blank">
                    <div className="flex flex-row items-center gap-1 hover:bg-gray-900 p-2 w-fit border-b-2 border-b-transparent hover:border-white">
                        <TbBrandFiverr className="fill-white" /> Fiverr
                    </div>
                </Link>
                <Link href="mailto:luis@anonimo.ovh" target="_blank">
                    <div className="flex flex-row items-center gap-1 hover:bg-gray-900 p-2 w-fit border-b-2 border-b-transparent hover:border-white">
                        <FaEnvelope /> Email
                    </div>
                </Link>
            </div>
        </div>
    </div>
);
