import Image from "next/image"
import Link from "next/link"

import { SectionWrapper } from "../../utils/SectionWrapper"
import { fadeIn, zoomIn } from "@/utils/motion"
import { motion } from "framer-motion"

const features = [
    {
        head: "Secure data transmission",
        text: "Lorem ipsum dolor sit amet.",
    },
    {
        head: "Encrypted source code",
        text: "Lorem ipsum dolor sit amet.",
    },
    {
        head: "Integrated DevSecOps",
        text: "Lorem ipsum dolor sit amet.",
    },
    {
        head: "High-level Authentication",
        text: "Lorem ipsum dolor sit amet.",
    },
]

const FeatureItem = ({ head, text, index }) => {
    return (
        <motion.div 
            className="we-m-item"
            variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        >
            <div className="we-m-item-head">{head}</div>
            <div className="we-m-item-text">{text}</div>
        </motion.div>
    )
}

const Features = () => {
    return (
        <section className="we-m my-container">
            <div className="we-m-grp">
                <div className="we-m-img-wrapper">
                    <Image className="we-m-img" src={'/assets/images/appdevc.png'} alt='secure' fill/>
                </div>
                <div className="we-m-side-grp">
                    {features.map((feature, index) => (
                        <FeatureItem index={index} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SectionWrapper(Features)