import React from "react";
import Button from "../../Common/Button/Button";
import styles from "./styles.module.css"
import {motion} from "framer-motion";

function LandingIntro() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <motion.h1 
        className={styles.bigHeading}
        initial={{y:50, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{duration:.5}}
        >
          Track Crypto
          </motion.h1>
        <motion.h1 className={styles.bigHeading2}
        initial={{y:50, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{duration:0.5}}
        
        >
          Real Time.</motion.h1>
        <motion.p className={styles.para}
        initial={{y:50, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{duration:0.5}}
        >
          Track crypto through a public api in real time. Visit the dashboard to
          do so!
        </motion.p>
        <motion.div className={styles.flexBtn}
        initial={{y:50, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{duration:0.5}}
        >
          <Button text="Dashboard" />
          <Button text="Share" outlined={true} />
        </motion.div>
      </div>
      <div className={styles.phone}></div>
    </div>
  );
}

export default LandingIntro;