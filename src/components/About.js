import React, { useEffect, useRef } from "react";
import styles from "../../styles/About.module.css";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { RiArrowRightDownLine } from "react-icons/ri";

const About = () => {
  let about = useRef(null);
  let content = useRef(null);

  useEffect(() => {
    let tl = gsap.timeline();

    gsap.registerPlugin(ScrollTrigger);

    tl.from(about, 1, {
      opacity: 0,
      y: 50,
      ease: "Power1.easeInOut",
      scrollTrigger: {
        trigger: about,
        scrub: 1.8,
        end: "+=400",
      },
    }).from(content, 1, {
      opacity: 0,
      y: 50,
      ease: "Power1.easeInOut",
      scrollTrigger: {
        trigger: content,
        scrub: 1.8,
        end: "+=400",
      },
    });
  }, []);

  return (
    <div className={styles.about} id="about">
      <div
        className={styles.aboutheading}
        ref={(el) => {
          about = el;
        }}
      >
        <h1>About</h1>
        <div className={styles.icon}></div>
      </div>

      <div className={styles.aboutcontent}>
        <h1
          ref={(el) => {
            content = el;
          }}
        >
          hi! , i am Anant Singh Chauhan an enthusiast visual & UX designer and
          UI developer
        </h1>

        <div className={styles.links}>
          <a
            className={styles.link1}
            href="https://www.linkedin.com/in/anant-singh-66b510198/"
            target="_blank"
          >
            <em> </em>
            <div className={styles.innertxt}>
              <span>LinkedIn</span>
              <p>
                Link <RiArrowRightDownLine size={18} />
              </p>
            </div>
          </a>

          <a
            className={styles.link1}
            href="https://www.behance.net/anantchauhan3"
            target="_blank"
          >
            <em> </em>
            <div className={styles.innertxt}>
              <span>Behance</span>
              <p>
                Link <RiArrowRightDownLine size={18} />
              </p>
            </div>
          </a>
          {/* 
          <a className={styles.link1} href="#">
            <em> </em>
            <div className={styles.innertxt}>
              <span>Email</span>
              <p>
                Link <RiArrowRightDownLine size={18} />
              </p>
            </div>
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default About;
