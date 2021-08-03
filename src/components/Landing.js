import { ST } from "next/dist/next-server/lib/utils";
import React, { useEffect, useRef } from "react";
import styles from "../../styles/Landing.module.css";
import { gsap } from "gsap";

const Landing = () => {
  let name = useRef(null);
  let work = useRef(null);
  let work2 = useRef(null);
  let scroll = useRef(null);

  useEffect(() => {
    gsap.from(name, 1, {
      y: 100,
      ease: "Power4.out",
      opacity: 0,
      delay: 0.3,
    });
    gsap.from(work, 1, {
      y: 100,
      ease: "Power4.out",
      opacity: 0,
      delay: 0.4,
    });
    gsap.from(work2, 1, {
      y: 100,
      ease: "Power4.out",
      opacity: 0,
      delay: 0.5,
    });
    gsap.from(scroll, 1, {
      y: 100,
      ease: "Power4.out",
      opacity: 0,
      delay: 0.6,
    });
  }, []);

  return (
    <div className={styles.hero} data-scroll-section>
      <div className={styles.wrapper}>
        <div className={styles.herocnt}>
          <h1
            data-scroll
            data-scroll-speed="2"
            className={styles.name}
            ref={(el) => {
              name = el;
            }}
          >
            hii, i am anant singh designer & developer
          </h1>

          <div className={styles.work}>
            <h1>
              <span className={styles.line}>
                <span
                  data-scroll
                  data-scroll-speed="2"
                  className={styles.innerline}
                  ref={(el) => {
                    work = el;
                  }}
                >
                  Visual-UX Designer
                </span>
              </span>

              <span className={styles.line}>
                <span
                  data-scroll
                  data-scroll-speed="2"
                  className={styles.innerline}
                  ref={(el) => {
                    work2 = el;
                  }}
                >
                  UI Developer
                </span>
              </span>
            </h1>
          </div>
          <div
            className={styles.mouse}
            ref={(el) => {
              scroll = el;
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Landing;

{
  /* <div className={styles.horizontalscroll}>
          <h2
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="6"
          >
            Design
          </h2>

          <h2
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="6"
          >
            Development
          </h2>

          <h2
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="6"
          >
            Design
          </h2>

          <h2
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="6"
          >
            Development
          </h2>
        </div> */
}
