"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
    slideInFromLeft,
    slideInFromRight,
    slideInFromTop
} from '@/utils/motion';
import { SparklesIcon } from '@heroicons/react/24/solid';
import Image from "next/image";

const HeroContent = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
        >
            <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
                <motion.div
                    variants={slideInFromTop}
                    className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
                >
                    <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
                    <h1 className="Welcome-text text-[13px]">
                        Fullstack Developer Portfolio
                    </h1>

                </motion.div>

                <motion.div variants={slideInFromLeft(0.5)}
                    className="flex flex-col gap-3 mt-6 text-4xl font-bold text-white max-w-[600px] w-auto h-auto"
                >
                    <span>
                        Hello👋I am, 
                    </span>

                    <motion.div variants={slideInFromLeft(0.5)}
                        className="flex flex-col gap-2 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
                    >
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Rohit Gore</span>
                    </motion.div>

                    <motion.p
                        variants={slideInFromLeft(0.8)}
                        className="text-lg text-gray-400 my-5 max-w-[600px]"
                    >
                        From Udgir, Dist.Latur,Maharashta
                    </motion.p>
                    


                </motion.div>

                <motion.p
                    variants={slideInFromLeft(0.8)}
                    className="text-lg text-gray-400 my-5 max-w-[600px]"
                >
                    I&apos;m a Computer Science Engineer Student, Seeking a great opportunity in IT world
                </motion.p>

                

                <motion.div
                    variants={slideInFromLeft(1)}
                    className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] cursor-pointer"
                >
                    <a 
                    href="https://drive.google.com/file/d/1Hc6zweyc-Bwcj32F-9QtScY4IabNyn0a/view?usp=drive_link"
                    download={"rohit_gore_resume.pdf"}
                    className="flex items-center space-x-2 cursor-pointer text-white hover:text-[#b49bff] transition-all duration-300"
                    >
                    <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
                    <h1 className="Welcome-text text-[13px]">
                        Resume Download
                    </h1>
                    </a>
                    {/* Learn More! */}
                </motion.div>

            </div>
            <motion.div
                variants={slideInFromRight(0.8)}
                className="w-full h-full flex justify-center items-center"
            >
                <Image
                    src="/mainIconsdark.svg"
                    alt="work icons"
                    height={650}
                    width={650}
                />


            </motion.div>

        </motion.div>
    );
};

export default HeroContent;