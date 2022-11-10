import React from "react";
import Button from "../../Common/Button/Button";
import "./styles.css";
import {motion} from "framer-motion";
import PhoneComponent from "./PhoneComponent";

function LandingIntro() {
  return (
    <div className="wrapper">
      <div className="info">
        <motion.h1 
        className="bigHeading"
        initial={{y:50, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{duration:.5}}
        >
          Track Crypto
          </motion.h1>
        <motion.h1 className="bigHeading2"
        initial={{y:50, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{duration:0.5}}
        
        >
          Real Time.</motion.h1>
        <motion.p className="para"
        initial={{y:50, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{duration:0.5}}
        >
          Track crypto through a public api in real time. Visit the dashboard to
          do so!
        </motion.p>
        <motion.div className="flexBtn"
        initial={{y:50, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{duration:0.5}}
        >
          <Button text="Dashboard" />
          <Button text="Share" outlined={true} />
        </motion.div>
      </div>
      <div><PhoneComponent/></div>
    </div>
  );
}

export default LandingIntro;