"use client";

import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

const Logo = () => {
  const logoRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const logo = logoRef.current;
    const paths = logo.querySelectorAll(".st0");
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    gsap.set(paths, { drawSVG: "0%", opacity: 0 });
    gsap.to(paths, { drawSVG: "100%", opacity: 1, duration: 1, stagger: 0.1 });

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        display: loading ? "flex" : "none",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        width: "100%",
        height: "100%",
        zIndex: 1550,
      }}
    >
      <svg
        version="1.1"
        ref={logoRef}
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        height={128}
        viewBox="0 0 1024 554.56"
      >
        <g>
          <g>
            <path
              fill="#ce0e2d"
              className="st0"
              d="M963.24,115.34V269.8c0,125.8-102,227.78-227.78,227.78h-76.48l74.3-75.74h0.29
			c39.17,0,74.91-14.62,102.09-38.68l12.31-12.2c24.64-27.31,39.67-63.5,39.67-103.19l-0.65-76.19L963.24,115.34z"
            />
            <path
              fill="#ce0e2d"
              className="st0"
              d="M1024,94.65v172.34c0,76.79-29.92,149.03-84.23,203.34c-54.31,54.31-126.52,84.23-203.32,84.23H0v-19.2
			h736.45c147.97,0,268.36-120.39,268.36-268.36V113.83H732.95v192.63c10.83,0,20.6-4.38,27.67-11.46
			c7.08-7.08,11.48-16.87,11.48-27.67l-0.38-75.74l76.26-76.26v152.42c0,63.72-51.68,115.4-115.4,115.4h-75.83V76.26L732.95,0v94.65
			H1024z"
            />
            <path
              fill="#ce0e2d"
              className="st0"
              d="M517.25,422.22l-74.91,75.37h-186.7c0,0,52.55-17.4,101.18-75.37H517.25z"
            />
            <polygon
              fill="#ce0e2d"
              className="st0"
              points="705.32,422.22 656.74,471.1 630.41,497.58 469.46,497.58 544.37,422.22"
            />
          </g>
          <path
            fill="#ce0e2d"
            className="st0"
            d="M542.41,75.9v18.76H331.48l-73.94,72.12l0.63,83.47v0.38c1.44,30.19-9.25,58.85-30.12,80.7
		c-20.84,21.88-48.97,33.92-79.18,33.92h-17.5L0,497.67h117.25v-0.09h41.55c84.41,0,158.08-45.91,197.43-114.12l9.77-16.89
		c16.26,10.8,27.6,15.05,59.79,16.6h192.83V0L542.41,75.9z M542.41,306.77c-10.83,0-20.6-4.38-27.69-11.46
		c-7.08-7.08-11.46-16.87-11.46-27.67v-32.7l0.36-119.61l-76.23,76.39v76.35c0,13.59,2.36,26.59,6.67,38.7H426
		c-21.79,0-39.42-17.65-39.42-39.42V115.34l-76.23,76.26l0.63,76.19c0,85.08-68.98,154.06-154.06,154.06h-0.29l-55.57,56.65H46.07
		l93.3-94.07h9.5c35.49,0,68.57-14.15,93.08-39.85c24.46-25.65,37.02-59.27,35.4-94.67l-0.56-75.09l62.51-60.98h203.12V306.77z"
          />
        </g>
      </svg>
    </div>
  );
};

export default Logo;
