import Image from "next/image";
import Link from "next/link";
import { SectionWrapper } from "../../utils/SectionWrapper";
import { motion } from "framer-motion";
import { textVariant, zoomIn, fadeIn } from "@/utils/motion";

const offers = [
    {
        title: "Android App Development",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, provident?",
        image: "/assets/icons/androiddev.png",
    },
    {
        title: "Android App Development",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, provident?",
        image: "/assets/icons/webdev.png",
    },
    {
        title: "Android App Development",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, provident?",
        image: "/assets/icons/mlwhite.png",
    },
    {
        title: "Android App Development",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, provident?",
        image: "/assets/icons/chat.png",
    },
    {
        title: "Android App Development",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, provident?",
        image: "/assets/icons/aiwhite.png",
    },
    {
        title: "Android App Development",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, provident?",
        image: "/assets/icons/iotwhite.png",
    },
]

const OffersCard = ({ title, text, image, index}) => {
    index = index + 1
    return (
        <motion.div        
            className="we-offer-card"
            variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        >
            <div className="we-offer-card-count">{index}</div>
            <div className="we-offer-card-content">
                <div className="we-offer-card-tittle">
                    {title}
                </div>
                <div className="we-offer-card-text">
                    {text}
                </div>
            </div>
            <div className="we-offer-icon-container">
                <div className="we-offer-card-icon-wrapper">
                    <Image
                        className="we-offer-icon"
                        src={image}
                        alt="icon"
                        fill
                    />
                </div>
            </div>
        </motion.div>
        )
}

const Offers = () => {
    return (
        <section 
            className="we-offer-container my-container"
        >
            <motion.div
                className="we-offer-header"
                variants={fadeIn("", "", 0.1, 1)}
            >
                <div
                    className="we-offer-header-tittle"
                >
                    Our <span className="fw-semibold">Application</span>{" "}
                    Devlopment Services
                </div>
                <div className="we-offer-header-text">
                    App transforms the app development process so you can ship
                    more, faster. Deploy to six targets from a single codebase.
                </div>
            </motion.div>

            <div className="we-offer-grp">
                <motion.div
                    variants={textVariant()}
                    className="we-offer-grp-head"
                >
                    What we <span className="fw-semibold">Offer</span>
                </motion.div>
                <div className="we-offer-card-grp">
                    {offers.map((offer, index) => (
                        <OffersCard index={index} {...offer } />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SectionWrapper(Offers);
