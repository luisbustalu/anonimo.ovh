import Image from "next/image";
import { FaUser } from "react-icons/fa";

export const AboutSection = () => (
    <div className="flex w-full gap-5 text-center sm:p-10 p-2 animate-fade-up">
        <div className="flex flex-col lg:flex-row gap-5">
            <div className="text-justify lg:w-1/2 w-full">
                <div className="flex flex-row sm:gap-3 gap-1 mb-2 items-center">
                    <FaUser className="text-3xl text-yellow-200"/>
                    <div className="text-4xl" id="about-me">About me</div>
                </div>
                <div>
                    <p className={"my-2"}>Hello! I’m Luis Bustamante, a 28 years old Venezuelan Industrial
                        Engineer and back-end developer. My journey with computers started young, inspired
                        by modding in multiplayer games, where I began programming with the pseudo-language Pawn.</p>

                    <p className={"my-2"}>Although passionate about tech, I pursued a degree in Industrial
                        Engineering, graduating in 2016 from Rafael Belloso Chacín University. During
                        this period, and as a hobby, I continuously expanded my skills by learning new
                        programming languages and exploring other tech stacks. After four years in the oil
                        industry, the 2020 pandemic shifted my path toward freelancing, where I began
                        taking on small projects.</p>

                    <p className={"my-2"}>Since then, I’ve collaborated with around 30 international
                        clients on various small to mid-sized PHP, Python and JavaScript projects, helping
                        them solve technical challenges.</p>
                </div>
            </div>
            <div className="flex justify-center items-center lg:w-1/2 w-full">
                <Image
                    alt="Luis Bustamante's photo"
                    src="/main_photography.jpg"
                    className="rounded-full aspect-square object-cover w-3/4 min-w-36 max-w-80"
                    width={1000}
                    height={1000}
                />
            </div>
        </div>
    </div>
);
