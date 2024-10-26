import React from "react";
import { MouseParallaxContainer } from "react-parallax-mouse";
import { Images } from "../../../assets/imgs/Images";
import { Container, SectionHead } from "../../../components";
import { OurPlayersSwiper } from "./OurPlayersSwiper";

export const EmpowerFans = ({ isMobile }) => {
  return (
    <MouseParallaxContainer
      globalFactorX={0.1}
      globalFactorY={0.1}
      containerStyle={{
        overflow: "initial",
      }}
    >
      <Container className="flex items-center justify-between flex-col md:flex-row lg:mt-0 md:mt-16">
        <div className="md:hidden flex flex-1 md:justify-end xl:justify-center xl:items-center mt-5">
          <OurPlayersSwiper />
        </div>
        <div className="flex-1">
          <SectionHead
            title="DWG KIA"
            description="We believe that fans should be able to invest in esports teams, vote on key decisions, and earn from their contributions."
          />
        </div>

        <div className="md:w-1/2 w-full md:flex hidden">
          <div className="w-full md:pl-20 pl-10 md:pr-0 pr-10 relative">
            <div className="w-full z-20">
              <div className="w-full flex flex-row justify-center items-center">
                <div className="w-[150px] mx-1">
                  <img
                    src={Images.characters.dam01}
                    alt=""
                    className="border-2 border-primary200 shadow-md shadow-primary100"
                  />
                </div>
                <div className="w-[150px] mx-1">
                  <div className="w-full relative">
                    <img
                      src={Images.coin02}
                      className="absolute left-[105%] bottom-4 -translate-x-1/2"
                      alt=""
                    />
                    <img
                      src={Images.characters.dam02}
                      alt=""
                      className="w-full h-full border-2 border-primary200 shadow-md shadow-primary100"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-center items-center mt-4">
                <div className="w-[150px] mx-1">
                  <div className="relative">
                    <img
                      src={Images.vector}
                      className="absolute left-3 -top-2 -translate-x-1/2 -translate-y-1/2 scale-[90%]"
                      alt=""
                    />
                    <img
                      src={Images.characters.gun01}
                      className="absolute left-5 -bottom-5 -translate-x-1/2 scale-[130%]"
                      alt=""
                    />
                    <img
                      src={Images.characters.dam03}
                      alt=""
                      className="border-2 border-primary200 shadow-md shadow-primary100"
                    />
                  </div>
                </div>
                <div className="w-[150px] mx-1">
                  <img
                    src={Images.characters.dam04}
                    alt=""
                    className="border-2 border-primary200 shadow-md shadow-primary100"
                  />
                </div>
                <div className="w-[150px] mx-1">
                  <div className="relative">
                    <img
                      src={Images.characters.karambit01}
                      className="absolute -right-7 -bottom-3"
                      alt=""
                    />
                    <img
                      src={Images.characters.dam05}
                      alt=""
                      className="border-2 border-primary200 shadow-md shadow-primary100"
                    />
                  </div>
                </div>
                <div className="absolute bottom-4 -z-10 w-full scale-x-[85%]">
                  <div className="p-1 bg-primary200 w-full"></div>
                  <div className="p-3 mt-2 bg-primary200 w-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </MouseParallaxContainer>
  );
};
