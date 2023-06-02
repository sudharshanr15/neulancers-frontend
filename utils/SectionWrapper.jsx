import { motion } from "framer-motion";
import { staggerContainer } from "./motion";

const SectionWrapper = (Component) => function Wrapper(){
    return (
        <motion.div
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
        >
            <Component />
        </motion.div>
    )
}

export {SectionWrapper}