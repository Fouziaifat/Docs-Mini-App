import React from 'react'
import { FaRegFileAlt } from 'react-icons/fa'
import { IoCloseCircleOutline } from 'react-icons/io5'
import { MdOutlineDownloading } from 'react-icons/md'
import { motion } from "framer-motion"

const Card = ({ data, reference }) => {
    return (
        <motion.div drag dragConstraints={reference} whileDrag={{ scale: 1.1 }} dragElastic={.1} dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }} className='relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'>
            <FaRegFileAlt />
            <p className='text-sm leading-tight mt-5 font-semibold'> {data.desc}</p>
            <div className='footer absolute bottom-0 w-full left-0' >

                <div className='flex justify-between items-center  px-8 py-3'>
                    <h5>{data.fileSize} </h5>
                    <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
                        {data.close ? <IoCloseCircleOutline /> : <MdOutlineDownloading />}
                    </span>
                </div>
                {
                    data.tag.isOpen && (
                        <div className={`tag w-full py-4 ${data.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
                            <h3 className='text-sm '>{data.tagTitle}</h3>
                        </div>
                    )
                }


            </div>
        </motion.div >
    )
}

export default Card
