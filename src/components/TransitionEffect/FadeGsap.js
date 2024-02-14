import gsap from "gsap/gsap-core";
import React, { useRef } from "react";
import { useEffect } from "react";

const FadeGsap = ({
  children,
  wrapperElement = "div",
  direction = null,
  delay = 0,
  ...props
}) => {
  const Component = wrapperElement;
  let compRef = useRef(null);
  const distance = 200;
  let fadeDirection;
  switch (direction) {
    case "left":
      fadeDirection = { x: -distance };

      break;
    case "right":
      fadeDirection = { x: distance };
      break;
    case "up":
      fadeDirection = { y: distance };
      break;
    case "down":
      fadeDirection = { y: -distance };
      break;
    default:
      fadeDirection = { x: 0 };

      break;
  }

  useEffect(() => {
    gsap.from(
      compRef.current,
      {
        ...fadeDirection,
        opacity: 0,
        delay,
      },
      1
    );
  }, [compRef, fadeDirection, delay]);
  return (
    <Component ref={compRef} {...props}>
      {children}
    </Component>
  );
};

export default FadeGsap;
