import React from "react";
import { Parallax } from "react-scroll-parallax";
import { MouseParallaxChild } from "react-parallax-mouse";
export const ResponsiveParallaxLayer = ({
  image,
  // factorX,
  // factorY,
  speed,
  imageClassName = "",
  scale = 1,
  zIndex = "",
}) => {
  return (
    <div className={"absolute w-full h-full".concat(" " + zIndex)}>
      <Parallax speed={speed} className="h-full">
        <MouseParallaxChild factorX={0.1} factorY={0.1} className="h-full">
          <div
            className="h-full"
            style={{
              transform: "scale(" + scale + ")",
            }}
          >
            <img
              src={image}
              alt=""
              className={`absolute max-w-full md:max-h-full left-1/2 top-1/2 translate-y-[-50%] translate-x-[-50%] ${imageClassName}`}
            />
          </div>
        </MouseParallaxChild>
      </Parallax>
    </div>
  );
};
