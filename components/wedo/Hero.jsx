import Image from 'next/image'
import Link from 'next/link'
import { SectionWrapper } from "../../utils/SectionWrapper";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from '@/utils/motion';

const Hero = () => {
    return (
        <section
            className="wedo-hero my-container"
        >
                <div className="wedo-content">
                    <div className="row">
                        <div className="col-12 col-lg-6 order-lg-2">
                            <motion.div
                                variants={fadeIn("", "", 0.1, 0.5)} 
                                className="wedo-img-wrapper">
                                <Image className="wedo-img" src={'/assets/images/wedohero.png'} alt='hero img' fill />
                                <div className="wedo-rocket-wrapper">
                                    <Image className="wedo-rocket" src={'/assets/icons/paperplane.png'} alt='' fill />
                                </div>
                                
                            </motion.div>
                        </div>
                        <div className="col">
                            <motion.div variants={fadeIn("right", "spring", 0, 0.5)} className="wedo-body">
                                <div className="wedo-hero-title">
                                    <span className='fw-semibold'>App Development Done With </span> Latest Technology
                                </div>
                                <div className="wedo-sub-hero-txt text-muted">
                                    Lorrem ipsum is a simple dummy text to define you
                                </div>
                                <Link href={'/'}>
                                    <button className='btn wedo-contact-btn rounded-pill' type='button'>Contact Us</button>
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default SectionWrapper(Hero);