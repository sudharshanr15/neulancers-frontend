import Image from "next/image"
import Link from "next/link"

import { Hero, Expertise, Tech, About } from "../components/home"
import { motion } from "framer-motion"
import { fadeIn } from "@/utils/motion"
import ProposalCard from "@/components/ProposalCard"

export default function Home(){
  return (
    <>
      <Hero />
      <motion.section variants={fadeIn("", "", 0.1, 1)} initial="hidden" whileInView="show" className="home-intro my-container">
        <h2 className="home-intro-title">We are neulancers</h2>
        <p className="home-intro-text">We are an agency focused on <span className="text-primary">web</span> developement providing best solution to grow up your business is the prime motto we put into our work everyday</p>
        <hr className="mt-5 d-none d-lg-block" />
      </motion.section>
      <About />
      <Expertise />
      <Tech />
      <section className="my-container">
        <ProposalCard />
      </section>
    </>
  )
}