import Link from "next/link";
import Image from "next/image";

import { SectionWrapper } from "../../utils/SectionWrapper";
import { motion } from "framer-motion";
import { textVariant } from "@/utils/motion";
import { fadeIn } from "@/utils/motion";

const tech = [
    {
        image: "/assets/icons/iot.png",
        title: "Internet of Things",
        text: "Build a secure, future-proof application through the latest technologies and enhance your user experience",
    },
    {
        image: "/assets/icons/ai.png",
        title: "Artificial Intelligence",
        text: "Build a secure, future-proof application through the latest technologies and enhance your user experience",
    },
    {
        image: "/assets/icons/ml.png",
        title: "Machine Learning",
        text: "Build a secure, future-proof application through the latest technologies and enhance your user experience",
    },
]

const TechItem = ({ image, title, text, index }) => {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className="special-card">
            <div className="special-card-header">
                <div className="special-card-icon-wrapper">
                    <Image
                        className="special-card-icon"
                        src={image}
                        alt={title}
                        fill
                    />
                </div>
                <span className="special-card-title">
                    {title}
                </span>
            </div>
            <div className="special-card-text">
                {text}
            </div>
        </motion.div>
    )
}

const Tech = () => {
    return (
        <section className="my-container specialization">
            <div className="special-header">
                <motion.div
                    variants={textVariant()}
                >
                    <h2 className="special-title d-lg-none">
                        Our Other{" "}
                        <span className="fw-semibold">Specialization</span>
                    </h2>
                    <h2 className="special-title d-none d-lg-block">
                        Unlock
                        <div className="fw-semibold">
                            Cutting Edge Technologies{" "}
                        </div>
                    </h2>
                </motion.div>
                <div className="special-card-grp">
                    {tech.map((item, index) => (
                        <TechItem {...item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SectionWrapper(Tech);
