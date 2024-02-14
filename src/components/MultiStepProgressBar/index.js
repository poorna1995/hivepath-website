import React, { useEffect, useState } from "react";
import { ReactComponent as InactiveStateIcon } from "../../assets/how-it-works/icons/inactive-state.svg";
import { ReactComponent as ActiveStateIcon } from "../../assets/how-it-works/icons/active-state.svg";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import { stepsData } from "./data";
const MultiStepProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const array = [0, 16, 33, 49, 67, 85];

  const [show, setShow] = useState(false);
  const showProgress = () => {
    if (window.scrollY > 50 && window.scrollY < 3200) {
      setShow(true);
    } else setShow(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", showProgress);

    return () => {
      window.removeEventListener("scroll", showProgress);
    };
  }, []);

  useEffect(() => {
    let computeProgress = () => {
      let currentPosition = document.documentElement.scrollTop;
      let SectionTop = document?.getElementById("workProcess").offsetTop;
      let sectionLength = document?.getElementById("workProcess").scrollHeight;

      let percent = ((currentPosition - SectionTop) / sectionLength) * 100;

      if (percent <= 0) {
        return (percent = 0);
      }
      if (percent >= 87) {
        return (percent = 87);
      }
      setProgress(percent);
    };

    // Adding event listener on mounting
    window.addEventListener("scroll", computeProgress);

    // Removing event listener upon unmounting
    return () => window.removeEventListener("scroll", computeProgress);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        zIndex: 99,
        width: "50%",
        transform: "rotate(90deg) translate(300px,0px)",
        top: "35%",
        right: "-20%",
      }}
    >
      {show && (
        <ProgressBar
          stepPositions={array}
          percent={progress}
          width={400}
          height={1}
          unfilledBackground={progress >= 0 ? "transparent" : "grey"}
          // hasStepZero={false}
          filledBackground={"#AFD7F2"}
        >
          {stepsData.map((step) => {
            const { url, id } = step;
            return (
              <Step transition="scale" key={id}>
                {({ accomplished }) => (
                  <a href={url}>
                    {accomplished ? (
                      <ActiveStateIcon
                        style={{
                          height: "20px",
                          width: "20px",
                          transform: "rotate(-90deg) translateX(-0.8px)",
                        }}
                      />
                    ) : (
                      <InactiveStateIcon
                        style={{
                          height: "20px",
                          width: "20px",
                          transform: "rotate(-90deg) translateX(-0.8px)",
                        }}
                      />
                    )}
                  </a>
                )}
              </Step>
            );
          })}
        </ProgressBar>
      )}
    </div>
  );
};

export default MultiStepProgressBar;
