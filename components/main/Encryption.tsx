"use client";

import { slideInFromTop } from "@/utils/motion";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Image from "next/image";

const EducationDetails = () => {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div
            id="encryption"
            className="flex flex-row relative items-center justify-center min-h-screen w-full h-full"
        >
            {/* Header Section */}
            <div className="absolute w-auto h-auto top-0 z-[5]">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={slideInFromTop}
                    className="text-[40px] font-medium text-center text-gray-200"
                >
                    Education
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">
                        {" "}Details
                    </span>
                </motion.div>
            </div>

            {/* Content Section */}
            <div className="flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto">
                <div className="flex flex-col items-center group w-auto h-auto">
                    {/* Icon */}
                    <Image
                        src="/academic.png"
                        alt="Education Icon"
                        width={70}
                        height={70}
                        className="w-[70px] mb-5"
                    />

                    {/* Academic Details */}
                    <div className="text-center">
                        <h2 className="text-[24px] font-semibold text-gray-300">
                            Academic Details🎓
                        </h2>
                        <p className="text-[20px] text-gray-300 mt-2">
                            <i>- B.Tech in Computer Science and Engineering</i>
                        </p>
                        <p className="text-[20px] text-gray-300 mt-1">
                            <i>
                                - MIT College of Railway Engineering and Research, Barshi, Solapur
                            </i>
                        </p>
                        <p className="text-[20px] text-gray-300 mt-1">
                            <i>- CGPA: 7.85</i>
                        </p>
                    </div>

                    {/* Button and Additional Details */}
                    <motion.button
                        initial="hidden"
                        animate="visible"
                        variants={slideInFromTop}
                        whileHover={{ scale: 1.1 }}
                        className="py-2 px-4 text-center text-white cursor-pointer rounded-lg max-w-[200px] mt-5 bg-gradient-to-r from-blue-500 to-green-500 hover:from-green-500 hover:to-blue-500"
                        onClick={() => setShowDetails(!showDetails)}
                    >
                        {showDetails ? "Hide Details" : "Read More!"}
                    </motion.button>

                    {showDetails && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            className="text-[16px] mt-3 text-gray-200"
                        >
                            <p>
                                I am a recent graduate of Computer Science and Engineering from MIT College of Engineering.
                                Passionate about solving real-world problems with technology, I have a strong foundation in
                                programming languages like Python, Java, C, FullStack (MERN), and SpringBoot. My goal is to
                                create innovative and impactful solutions for the future.
                            </p>
                        </motion.div>
                    )}
                </div>
            </div>

            {/* Footer Section */}
            <div className="absolute z-[20] bottom-[10px] px-[5px]">
                <div className="cursive text-[20px] font-medium text-center text-gray-300">
                    Empowering growth through continuous learning
                </div>
            </div>

            {/* Background Video */}
            <div className="w-full flex items-start justify-center absolute">
                <video
                    loop
                    muted
                    autoPlay
                    playsInline
                    preload="auto"
                    className="w-full h-auto object-cover"
                    src="/encryption.webm"
                />
            </div>
        </div>
    );
};

export default EducationDetails;
