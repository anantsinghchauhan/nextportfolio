import React from "react";
import styles from "../../styles/Animation.module.css";

const Animation = () => {
  return (
    <div className={styles.animation}>
      <div className={styles.design} >
        <h1
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="5"
        >
          Design
        </h1>
      </div>

      <div className={styles.develop}>
        <h1>Development</h1>
        <h1>Development</h1>
        <h1>Development</h1>
        <h1>Development</h1>
        <h1>Development</h1>
        <h1>Development</h1>
        <h1>Development</h1>
        <h1>Development</h1>
        <h1>Development</h1>
        <h1>Development</h1>
        <h1>Development</h1>
        <h1>Development</h1>
        <h1>Development</h1>
        <h1>Development</h1>
      </div>
    </div>
  );
};

export default Animation;
