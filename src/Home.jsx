import React, { useState } from "react";
import "./index.css";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


const Home = () => {

  const textVariants = {
    hidden: {
      opacity: 0,
      // y: "100vh"
    },
    visible: {
      opacity: 1,
      // y: 0,
      transition: {
        type: "spring",
        delay: 3.5,
        duration: 2
      }
    }
  }



  return (
    <div className="hom">
      <Typewriter
        onInit={(typewriter) => {
          typewriter.typeString("Hello, I'm Adonis!").start();
        }}
      />
      <motion.p
        variants={textVariants}
        initial="hidden"
        animate="visible"
        className="title"
      >
        I'm a Full Stack Developer from Brooklyn, New York with a passion for
        design. Outside of tech my interests lay in Fashion and Music. When I'm
        not trying to save the world with my keyboard, I'm probably working on a
        DJ Mix, or designing some graphics :).
      </motion.p>
      <Link to={`/proj`} className="cent">
        <motion.button
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="homebut hov"
        >
          Projects
        </motion.button>
      </Link>
    </div>
  );
};

export default Home;
