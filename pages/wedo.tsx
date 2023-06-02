import Image from 'next/image'
import Link from 'next/link'
import { SectionWrapper } from "../utils/SectionWrapper";
import { Hero, Offers, Features, WhyChoose} from "../components/wedo";
import { motion } from "framer-motion"
import { textVariant, fadeIn } from '@/utils/motion';

function wedo(){
    return(
        <>
            <Hero />
            <Offers />

            <motion.section variants={fadeIn("", "", 0.1, 1)} initial="hidden" whileInView="show" className="sp my-container">
                <div className="sp-head"><span className="fw-semibold">Secured</span> App Devlopment</div>
                <p className='sp-text'>Since 2007 we have been a visionary and a reliable software engineering partner for world-class brands. We are a boutique digital transformation consultancy and software development company that provides cutting edge engineering solution</p>
            </motion.section>

            <motion.section variants={fadeIn("", "", 0.1, 1)} initial="hidden" whileInView="show" className="hw my-container">
                <div className="hw-head">How we do it?</div>
                <p className="hw-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
            </motion.section>
            
            <Features />
            <WhyChoose />
        </>
    )
}

export default SectionWrapper(wedo);