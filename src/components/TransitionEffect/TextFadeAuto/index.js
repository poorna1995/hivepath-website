import React from "react";
import { useEffect } from "react";
import gsap from "gsap";
import { Typography } from "@material-ui/core";

const TextFadeAuto = () => {
  useEffect(() => {
    // create a reusable effect that swaps text
    gsap.registerEffect({
      name: "swapText",
      effect: (targets, config) => {
        let tl = gsap.timeline({ delay: config.delay });
        tl.to(targets, { opacity: 0, duration: config.duration / 2 });
        tl.add(() => (targets[0].innerText = config.text));
        tl.to(targets, { opacity: 1, duration: config.duration });
        return tl;
      },
      defaults: { duration: 2 },
      extendTimeline: true,
    });

    var tl = gsap.timeline({ repeat: -1 });
    tl.swapText(".subtext", {
      text: "Simplify each stage of your networking journey with Hivepath",
      delay: 1,
    })
      .swapText(".subtext", {
        text: "Get your questions answered in hours rather than days",
        delay: 2,
      })
      .swapText(".subtext", {
        text: "Platform dedicated for creating meaningful and long lasting connections ",
        delay: 2,
      }); // back to the start
  }, []);

  return (
    <div id="swap-text">
      <Typography variant="h6" component="p" className="subtext"></Typography>
    </div>
  );
};

export default TextFadeAuto;
