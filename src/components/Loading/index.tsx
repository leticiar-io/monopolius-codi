import { useRef, useEffect } from "react";
import "./Loading.css";
import gsap from "gsap";

export function Loading () {
   let timeline = gsap.timeline();

  let loaderTextWrapper = useRef(null);
  let revealer = useRef(null);
  let loader = useRef(null);
  let loaderWrapper = useRef(null);
  let preLoader = useRef(null);

  useEffect(() => {
    timeline.from([loaderWrapper], 1, {
      scale: 0.8,
      ease: Power1.easeInOut,
    });

    timeline.from(loader, 2, {
      top: "100%",
      ease: Power3.easeInOut,
    });

    timeline.to([loaderWrapper, preLoader], 1, {
      scale: 1.5,
      opacity: 0,
      display: "none",
      ease: Power3.easeInOut,
      delay: 2,
    }, "-=1");

    timeline.from(revealer, 1, {
      width: "0",
      ease: Power3.easeInOut,
      duration: 4,
    });

    timeline.to(revealer, 1, {
      left: "-100%",
      ease: Power4.easeOut,
      duration: 5,
    });

    timeline.to(loaderTextWrapper, 0.2, {
      opacity: 0,
      display: "none",
      ease: Power3.easeInOut,
      duration: 2,
      speed: 1800,
    });
  }, []);

   return (
      <div>
         <div className="block">
        <div className="loaderTextWrapper" 
        ref={(el: any) => (loaderTextWrapper = el)}>
          <h1
            className="loaderText"
          >
            monopolius sa
          </h1>
        </div>
      </div>

      <div
        className="revealer"
        ref={(el: any) => (revealer = el)}
      ></div>
      <div className="block">
        <div className="preLoader" ref={(el: any) => (preLoader = el)}>
          <div className="loaderWrapper" ref={(el: any) => (loaderWrapper = el)}>
            <div className="loader" ref={(el: any) => (loader = el)}></div>
          </div>
        </div>
      </div>
      </div>
   )
}