import Link from "next/link";
import Image from "next/image";

import { SectionWrapper } from "../../utils/SectionWrapper";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

const Hero = () => {
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
        </section>
    );
};

export default SectionWrapper(Hero);
