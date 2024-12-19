import {
    Backend_skill,
    Familiar_skill,
    Platform_Skills,
    Proficient_Skill,
} from "@/constants";
import React from 'react'
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

const Skills = () => {
    return (
        <section
            id="skills"
            className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20"
            style={{ transform: "scale(0.9)" }}
        >
            <SkillText />
            <h2 className="text-[20px] font-bold text-gray-400 mb-10 mt-[25px] text-center'">
                <i>I'm Proficient in</i>
            </h2>
            <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
                {Proficient_Skill.map((image, index) => (
                    <SkillDataProvider
                        key={index}
                        src={image.Image}
                        width={image.width}
                        height={image.height}
                        index={index}
                    />
                ))}
            </div>
            <h2 className="text-[20px] font-bold text-gray-400 mb-10 mt-10 text-center'">
                <i>I'm familiar with</i>
            </h2>
            <div className="flex flex-row justify-around flex-wrap mt-2 gap-5 items-center">
                {Familiar_skill.map((image, index) => (
                    <SkillDataProvider
                        key={index}
                        src={image.Image}
                        width={image.width}
                        height={image.height}
                        index={index}
                    />
                ))}

            </div>
            
            <div className="flex flex-row justify-around flex-wrap mt-11 gap-5 items-center">
                {Backend_skill.map((image, index) => (
                    <SkillDataProvider
                        key={index}
                        src={image.Image}
                        width={image.width}
                        height={image.height}
                        index={index}
                    />
                ))}
            </div>
            {/* <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
                {Full_stack.map((image, index) => (
                    <SkillDataProvider
                        key={index}
                        src={image.Image}
                        width={image.width}
                        height={image.height}
                        index={index}
                    />
                ))}
            </div> */}
            <h2 className="text-[20px] font-bold text-gray-400 mb-10 mt-8 text-center'"><i>Platform Tools</i></h2>
            <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
                {Platform_Skills.map((image, index) => (
                    <SkillDataProvider
                        key={index}
                        src={image.Image}
                        width={image.width}
                        height={image.height}
                        index={index}
                    />
                ))}
            </div>
            


            <div className="w-full h-full absolute">
                <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
                    <video
                        className="w-full h-auto"
                        preload="false"
                        playsInline
                        loop
                        muted
                        autoPlay
                        src="/cards-video.webm"
                    />
                </div>
            </div>





        </section>
    );
};

export default Skills;