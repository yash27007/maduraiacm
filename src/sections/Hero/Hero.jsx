import React from "react";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.content}>
        <div className={styles.title}>
          <h1>
            MADURAI ACM <br /> PROFESSIONAL CHAPTER
          </h1>
        </div>
        <div className={styles.subtitle}>
          <p>Where innovation meets professionalism</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
