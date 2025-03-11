import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <motion.div 
        className="overlay"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Blur Animated Text */}
        <motion.h1
          className="blur-text"
          initial={{ filter: "blur(10px)", opacity: 0 }}
          animate={{ filter: "blur(0px)", opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          ABOUT
        </motion.h1>

        {/* Description with fade-in effect */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
        >
          The Tesla Cybertruck is an all-electric pickup truck designed for durability, performance, and futuristic innovation. 
          With an ultra-hard stainless steel exoskeleton and armored glass, it offers unmatched strength and resilience. 
          Powered by advanced electric motors, it delivers exceptional speed, towing capacity, and off-road capability. 
          Featuring a versatile cargo bed, adaptive air suspension, and a high-tech interior, the Cybertruck redefines utility and adventure. 
          Its long-range battery and Autopilot capabilities make it the future of sustainable transportation.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default About;
