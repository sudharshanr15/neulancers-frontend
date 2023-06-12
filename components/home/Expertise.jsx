import Link from "next/link";
import Image from "next/image";

import { SectionWrapper } from "../../utils/SectionWrapper";
import { motion, useMotionValue, useTransform, useMotionValueEvent, useScroll } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import { zoomIn } from "../../utils/motion";
import { textVariant } from "../../utils/motion";
import { useEffect, useRef, useState } from "react";

const expertise = [
    {
        image: "/assets/icons/blub.png",
        title: "Technology Consulting",
        text: "Build a secure, future-proof application through the latest technologies and enhance your user experience",
        link: "",
    },
    {
        image: "/assets/icons/desktop.png",
        title: "Technology Consulting",
        text: "Build a secure, future-proof application through the latest technologies and enhance your user experience",
        link: "",
    },
    {
        image: "/assets/icons/telescope.png",
        title: "Technology Consulting",
        text: "Build a secure, future-proof application through the latest technologies and enhance your user experience",
        link: "",
    },
];

const ExpertiseItem = ({ image, title, text, link, index }) => {
    return (
        <motion.div
            className="expertise-card"
            variants={fadeIn("left", "spring", index * 0.75, 0.75)}
        >
            <div className="expertise-card-icon-wrapper">
                <Image
                    className="expertise-card-icon"
                    src={image}
                    alt={title}
                    fill
                />
            </div>
            <h3 className="expertise-card-title">{title}</h3>
            <p className="expertise-card-text">{text}</p>
            <Link className="expertise-link" href={link}>
                Explore Now
            </Link>
        </motion.div>
    );
};

const Expertise = () => {
    const wave_container = useRef()

    return (
        <section className="my-container expertise" ref={wave_container}>
            <div className="row g-0 justify-content-between">
                <div className="col-3 col-lg-4">
                    <div className="expertise-side-grp">
                        <h2 className="expertise-side-c">
                            <div className="expertise-side-dec">our</div>
                            <div className="expertise-side-header">
                                expertise
                            </div>
                        </h2>
                    </div>
                </div>
                <div className="col col-lg-6">
                    <div className="expertise-card-grp">
                        {expertise.map((item, index) => (
                            <ExpertiseItem index={index} {...item} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionWrapper(Expertise);
