import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Fade = ({
  children,
  direction,
  duration,
  delay,
  offset,
  anchor,
  easing,
}) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <div
        data-aos={direction}
        data-aos-duration={duration}
        data-aos-anchor-placement={anchor}
        data-aos-easing={easing}
        data-aos-delay={delay}
        data-aos-offset={offset}
      >
        {children}
      </div>
    </div>
  );
};

export default Fade;
