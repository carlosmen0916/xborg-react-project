import React from "react";
import { Fade } from "react-awesome-reveal";
import Scramble from "react-scramble";
import { useRef } from "react";
import { useIsvisible } from "../../hooks";
export const SectionHead = ({
  title,
  description,
  imgSrc,
  pLeft,
  descFontSize,
}) => {
  const myRef = useRef(null);
  const isVisible = useIsvisible(myRef);
  return (
    <div
      className="flex flex-col relative mt-16 md:mt-0 md:mx-0 mx-4"
      ref={myRef}
    >
      <div className="flex relative">
        <div className="w-1 bg-primary100" />
        <div className="flex flex-col pl-3.5 md:pl-[1.375rem]">
          {imgSrc ? (
            <img src={imgSrc} className="md:flex hidden" alt={title} />
          ) : imgSrc === "" ? (
            ""
          ) : (
            <span className="text-primary200">&#x2715;</span>
          )}
          <p
            className={"leading-[77px] text-primary200 font-JosefinSans font-bold tracking-normal md:text-[48px] text-[30px] lg:leading-[50px]".concat(
              " " + pLeft
            )}
          >
            {isVisible && (
              <Scramble
                autoStart
                text={title}
                speed="medium"
                steps={[
                  {
                    roll: 10,
                    action: "+",
                    type: "random",
                  },
                  {
                    action: "-",
                    type: "all",
                  },
                ]}
              />
            )}
          </p>
          {description && (
            <Fade cascade damping={0.9} duration={500}>
              <h2
                className={"text-light100 leading-[26px] font-normal md:text-[20px] text-[15px] tracking-[0.06em] mt-4 md:leading-7"
                  .concat(" " + pLeft)
                  .concat(
                    descFontSize
                      ? " lg:text-[30px] text-[24px]"
                      : " md:text-[24px]"
                  )}
              >
                {description}
              </h2>
            </Fade>
          )}
        </div>
      </div>
    </div>
  );
};
