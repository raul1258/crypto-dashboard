import React from "react";
import Button from "../../Common/Button/Button";
import { RWebShare } from "react-web-share";
import "./styles.css";
import {motion} from "framer-motion";
import PhoneComponent from "./PhoneComponent";

function LandingIntro() {
  return (
    <div className="wrapper">
      <div className="info">
        <motion.h1 
        className="bigHeading"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: 1 }}
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
          <RWebShare
            data={{
              text: "Crypto Dashboard made using React JS in 2022",
              url: "https://crypto-dashboard-nov.netlify.app/",
              title: "Crypto Dashboard",
            }}
            onClick={() => console.log("shared successfully!")}
          >
            <Button text="Share" outlined={true} />
          </RWebShare>

        </motion.div>
      </div>
      <div><PhoneComponent/></div>
    </div>
  );
}

export default LandingIntro;