import Image from "next/image"
import Link from "next/link"

import { SectionWrapper } from "../../utils/SectionWrapper"
import { fadeIn, textVariant } from "@/utils/motion"
import { motion } from "framer-motion"

const choose_item_1 = [
    {
        title: "Transparent Process",
        text: "We involve you in every stage of the app development journey so that you can take better decisions.",
        image: "/assets/icons/dimond.png",
    },
    {
        title: "Milestone Payments",
        text: "We deliver 100% qualified products which pass several quality checks and rigorous testing",
        image: "/assets/icons/moneybag.png",
    },
]

const choose_item_2 = [
    {
        title: "Reliable Quality",
        text: "A flexible milestone payment system enables you to pay at the time of each release, which we deliver every 15 days.",
        image: "/assets/icons/layers.png",
    },
    {
        title: "Built by experts",
        text: "Your product will be crafted by experts who are veterans in their specific domains",
        image: "/assets/icons/manlap.png",
    },
]

const ChooseItem = ({ title, text, image, index, direction}) => {
    return (
        <motion.div
            className="why-choose-card"
            variants={fadeIn(direction, "tween", index * 0.75, 0.75)}
        >
            <div className="why-choose-card-icon-wrapper">
                <Image
                    className="why-choose-card-icon"
                    src={image}
                    alt="dimond"
                    fill
                />
            </div>
            <div className="why-choose-card-title">
                {title}
            </div>
            <div className="why-choose-card-txt">
                {text}
            </div>
        </motion.div>
    )
}

const WhyChoose = () => {
    return (
        <motion.section
            className="why-choose-container my-container"
            variants={textVariant()}
        >
            <div className="why-choose-header">
                <p className="why-choose-tittle">
                    Why <span className="fw-semibold">Choose</span> Us
                </p>
                <div className="why-choose-txt text-muted">
                    Lorrem ipsum is a simple dummy text to define you
                </div>
            </div>
            <div className="why-choose-wrapper">
                <div className="why-choose-img-wrapper">
                    <Image
                        className="why-choose-img"
                        src={"/assets/images/ip.png"}
                        alt="iphone img"
                        fill
                    />
                </div>
                <div className="why-choose-card-grp why-choose-grp-1">
                    {choose_item_1.map((item, index) => (
                        <ChooseItem index={index} {...item} direction="right" />
                    ))}
                </div>
                <div className="why-choose-card-grp why-choose-grp-2">
                    {choose_item_2.map((item, index) => (
                        <ChooseItem index={index} {...item} direction="left" />
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default SectionWrapper(WhyChoose);
