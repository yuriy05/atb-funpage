"use client";

import "../_styles/globals.css";

import Image from "next/image";
import herologo from "../../assets/atb-hero.png";
import singer from "../../assets/atb-musician.jpg";

import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../_helpers/variants";

const locationSequence = [
  "Los Angeles, USA",
  3000,
  "Rio de Janeiro, Brazil",
  3000,
  "Paris, France",
  3000,
  "Berlin, Germany",
  3000,
  "Athens, Greece",
  3000,
];

function Hero() {
  return (
    <section className="min-h-screen py-16" id="home">
      <div className="relative flex items-center">
        {/* text */}
        <div className="flex flex-col z-20 pt-12">
          <MouseParallaxContainer
            globalFactorX={0.1}
            globalFactorY={0.2}
            resetOnLeave
            className="relative flex items-center h-[120px] xl:h-max xl:w-[840px] px-3"
          >
            <MouseParallaxChild
              factorX={0.2}
              factorY={0.4}
              className="relative"
            >
              <motion.div
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="w-[300px] h-[101.37px] xl:w-[725px] xl:h-[244.97px]"
              >
                <Image
                  src={herologo}
                  fill
                  alt="img"
                  className="object-contain"
                />
              </motion.div>
            </MouseParallaxChild>
          </MouseParallaxContainer>

          <motion.div
            variants={fadeIn("up", 1.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="min-h-[60px] flex gap-x-5 items-center ml-[75px] mb-6 text-[26px]"
          >
            <div className="hidden xl:flex items-center xl:gap-x-5">
              <p className="text-slate-50 font-semibold text-2xl">World</p>
              <p className="text-slate-50 font-semibold text-2xl">Tour</p>
              <p className="text-slate-50 font-semibold text-2xl">2024</p>
            </div>

            {/* animation */}
            <TypeAnimation
              sequence={locationSequence}
              wrapper="div"
              speed={10}
              deletionSpeed={10}
              repeat={Infinity}
              cursor={false}
              className="text-slate-50 text-2xl"
            />
          </motion.div>

          {/* <motion.div
            variants={fadeIn("up", 1.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <button className="btn btn-lg btn-accent">Get tickets</button>
          </motion.div> */}
        </div>
        {/* image */}
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="absolute right-0"
        >
          <Image
            className="opacity-50 rounded-2xl image-with-gradient-mask"
            src={singer}
            height={700}
            alt="singer"
            quality={100}
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
