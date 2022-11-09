import React from 'react'
import styles from "./style.module.css";
import MobileDrawer from "./Drawer";
import Button from "../Button/Button";


function Header() {
  return (
    <div className={styles.navbar}>
      <h1 className={styles.heading}>
        CryptoTracker<span style={{ color: "var(--blue)" }}>.</span>
      </h1>
      <div className={styles.links}>
        <a href="/">
          <p className={styles.link}>Home</p>
        </a>
        <a href="/compare">
          <p className={styles.link}>Compare</p>
        </a>
        <a href="/dashboard">
          <dashboard />
        </a>
      </div>
      <MobileDrawer />
    </div>

  )
}

export default Header
