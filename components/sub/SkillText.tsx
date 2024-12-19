"use client"


import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'

import React from 'react'

const SkillText = () => {
    return (
        <div className='w-full h-auto flex flex-col items-center justify-center'>
            <div className="absolute w-auto h-auto top-0 z-[5]">
                <motion.div
                    variants={slideInFromTop}
                    className="text-[40px] font-medium text-center text-gray-200"
                >
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">
                        {""}
                        Skills
                    </span>
                </motion.div>
            </div>
            <motion.div
                variants={slideInFromTop}
                className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
            >
                <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
                <h1 className="Welcome-text text-[13px]">
                    Programming Skills
                </h1>
            </motion.div>
            <motion.div
                variants={slideInFromLeft(0.5)}
                className='text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]'
            >
                Making apps with modern technologies
            </motion.div>
            {/* <motion.div
                variants={slideInFromRight(0.5)}
                className='text-[20px] font-bold text-gray-400 mb-10 mt-[10px] text-center'
            >
               <i>I'm Proficient in</i> 
            </motion.div> */}
        </div>
    )
}

export default SkillText