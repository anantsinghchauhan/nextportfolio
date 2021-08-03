import React, { useEffect, useRef } from "react";
import Link from "next/link";
import styles from "../../styles/Project.module.css";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { RiArrowRightLine } from "react-icons/ri";

const About = () => {
  let para = useRef(null);
  let heading = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let tl = gsap.timeline();

    tl.from(para, 1, {
      opacity: 0,
      y: 60,
      ease: "Power1.easeInOut",
      scrollTrigger: {
        trigger: para,
        scrub: 1.5,
        end: "+=300",
      },
    }).from(heading, 1, {
      opacity: 0,
      y: 60,
      ease: "Power1.easeInOut",
      scrollTrigger: {
        trigger: heading,
        scrub: 1.5,
        end: "+=300",
      },
    });
  }, []);

  return (
    <div className={styles.projects} id="projects">
      <div className={styles.projectwrapper}>
        <div
          className={styles.projectheading}
          ref={(el) => {
            heading = el;
          }}
        >
          <h1>Selected Projects</h1>
          <div className={styles.icon}></div>
        </div>

        <div className={styles.para}>
          <p
            ref={(el) => {
              para = el;
            }}
          >
            Sites reflect the personality of a company and must convey emotions{" "}
            and messages through the fusion of images, texts and animations. My
            aim is to find a meeting point between the elements to give balance
            to the composition. Let's see what I'm talking about
          </p>
        </div>

        <div className={styles.projectlist}>
          <div className={styles.grid1}>
            <div className={styles.innergrid1}>
              <div className={styles.post}>
                <div className={styles.txt}>
                  <h1>Job Cloud</h1>
                  <small className={styles.year}>( UI/UX Case Study )</small>
                </div>

                <a
                  href="https://www.behance.net/gallery/122755833/Job-Cloud"
                  target="_blank"
                >
                  <div className={styles.pimg}>
                    <div className={styles.hover}>
                      <RiArrowRightLine size={28} />
                    </div>
                  </div>
                </a>
              </div>

              <div className={styles.post}>
                <div className={styles.txt}>
                  <h1>Medi Cab</h1>
                  <small className={styles.year}>( UI/UX Case Study )</small>
                </div>
                <a
                  href="https://www.behance.net/gallery/122054373/Case-Study"
                  target="_blank"
                >
                  <div className={styles.pimg}>
                    <div className={styles.hover}>
                      <RiArrowRightLine size={28} />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className={styles.grid2}>
            <div className={styles.innergrid2}>
              <div className={styles.post}>
                <div className={styles.txt}>
                  <h1>Flight Booking App</h1>
                  <small className={styles.year}>( UI/UX Case Study)</small>
                </div>
                <a
                  href="https://www.behance.net/gallery/124615913/Flight-Booking-App"
                  target="_blank"
                >
                  <div className={styles.pimg}>
                    <div className={styles.hover}>
                      <RiArrowRightLine size={28} />
                    </div>
                  </div>
                </a>
              </div>

              {/* <div className={styles.post}>
                <div className={styles.txt}>
                  <h1>Project Name</h1>
                  <small className={styles.year}>2019</small>
                </div>
                <div className={styles.pimg}>
                  <div className={styles.hover}>
                    <RiArrowRightLine size={28} />
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* <div className={styles.animate}>
        <h1 className={styles.design}>Design</h1>
        <h1 className={styles.develop}>Development</h1>
      </div> */}
    </div>
  );
};

export default About;
