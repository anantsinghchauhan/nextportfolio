import React, { useEffect, useRef } from "react";
import Link from "next/link";
import styles from "../../styles/Nav.module.css";
import { gsap } from "gsap";

const Nav = () => {
  let name = useRef(null);
  let links = useRef(null);

  useEffect(() => {
    gsap.from(name, 1, {
      y: 50,
      ease: "Power4.out",
      opacity: 0,
    });
    gsap.from(links, 1, {
      y: 50,
      ease: "Power4.out",
      opacity: 0,
    });
  }, []);

  return (
    <div className={styles.nav} data-scroll-section>
      <div className={styles.logo}>
        <h1
          ref={(el) => {
            name = el;
          }}
        >
          Anant Singh Chauhan
        </h1>
      </div>

      <div
        className={styles.links}
        ref={(el) => {
          links = el;
        }}
      >
        <a href="#projects">Works</a>
        <div className={styles.crc}></div>
        <a href="#about">About</a>
      </div>
    </div>
  );
};

export default Nav;
