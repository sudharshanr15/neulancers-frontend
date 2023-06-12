import Link from "next/link";
import Image from "next/image";

import { SectionWrapper } from "../../utils/SectionWrapper";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

const Hero = () => {
    const wave = {
        hidden: {
            pathLength: 0,
        },
        show: {
            pathLength: 1,
            transition: {
                duration: 2,
                delay: 0.75,
                ease: "easeOut"
            }
        }
    }

    return (
        <section className="home my-container">
            <div className="home-content">
                <div className="row gx-1">
                    <motion.div
                        variants={fadeIn("right", "spring", 0.1, 0.75)}
                        className="col-12 col-lg-6 hero-head-wrapper"
                    >
                        <h1 className="hero-head">
                            Best Software developers in Chennai
                        </h1>
                        <p className="hero-text">
                            Finely processed farm produce, safe guaranteed and
                            secured investment platform
                        </p>
                        <button
                            className="mt-5 btn hero-btn rounded-pill ps-5 d-none d-lg-flex"
                            type="button"
                        >
                            <span>Get Started</span>{" "}
                            <span className="btn-inner-arrow">
                                <i className="bi bi-arrow-right-circle-fill"></i>
                            </span>
                        </button>
                    </motion.div>
                    <motion.div
                        className="col"
                        variants={fadeIn("", "", 0.1, 0.75)}
                    >
                        <div className="hero-img-content">
                            <div className="hero-img-wrapper">
                                <Image
                                    className="hero-img"
                                    src={"/assets/images/hero-banner.png"}
                                    alt="hero banner"
                                    fill
                                />
                            </div>
                            <button
                                className="btn hero-btn rounded-pill d-lg-none"
                                type="button"
                            >
                                <span>Get Started</span>
                                <span className="btn-inner-arrow">
                                    <i className="bi bi-arrow-right-circle-fill"></i>
                                </span>
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
            <div className="wave-container">
                <motion.svg viewBox="0 0 1377 674" fill="none" preserveAspectRatio="xMidYMax meet">
                    <motion.path variants={wave} initial="hidden" animate="show" d="M0.5 673C0.5 673 88.2816 495.201 195.5 510.5C291.629 524.216 314.846 631.542 411 618C519.487 602.721 472.237 483.588 579 459C671.296 437.744 699.502 511.993 789 481C881.997 448.796 803.142 269.387 900.5 255C984.295 242.617 989.883 388.361 1074.5 384.5C1167.65 380.251 1150.63 177.932 1238 210.5C1265.04 220.58 1268.62 126.261 1297 131.5C1335.21 138.555 1367.22 35.8036 1384.5 1" stroke="black" stroke-opacity="0.5" stroke-width="0.5" />
                </motion.svg>
            </div>
        </section>
    );
};

export default SectionWrapper(Hero);
