import Link from "next/link"
import Image from "next/image"

import { SectionWrapper } from "../../utils/SectionWrapper"
import { motion } from "framer-motion"
import { textVariant, fadeIn } from "@/utils/motion";

const About = () => {
    return (
        <section className="home-about my-container">
            <div className="row flex-lg-row-reverse">
                <div className="col-12 col-lg-6">
                    <motion.div variants={textVariant()}>
                        <h2 className="home-about-title">About Us</h2>
                        <h3 className="home-about-header">
                            Innovating with a Digital Mindset
                        </h3>
                    </motion.div>
                    <motion.div variants={fadeIn("", "", 0.1, 1)} className="home-about-text mt-3">
                        Since 2007 we have been a visionary and a reliable
                        software engineering partner for world-class brands. We
                        are a boutique digital transformation consultancy and
                        software development company that provides cutting edge
                        engineering solution
                    </motion.div>
                    <Link className="home-about-link btn mt-3 ps-0" href={"/"}>
                        Contact Us{" "}
                        <span>
                            <i className="bi bi-arrow-right"></i>
                        </span>
                    </Link>
                </div>
                <div className="col">
                    <div className="home-about-img-wrapper">
                        <Image
                            className="home-about-img"
                            alt="girl with laptop"
                            priority
                            unoptimized
                            src="/assets/images/girllaptop.png"
                            width={200}
                            height={200}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionWrapper(About);
