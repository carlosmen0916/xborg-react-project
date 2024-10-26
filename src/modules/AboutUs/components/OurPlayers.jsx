import React from "react";
import { Images } from "../../../assets/imgs/Images";
// import { Fade } from "react-awesome-reveal";
// import { Parallax } from "react-scroll-parallax";
import { Container, SectionHead } from "../../../components";
// import { useSelector } from "react-redux";
// import { GlobalState } from "../../../reducer";
import { OurPlayersList } from "./OurPlayersList";
export const OurPlayers = ({ isMobile }) => {
  // const { tournamentsWon, tournamentWinning } = useSelector(
  //   (state: GlobalState) => state.aboutUs,
  // );
  return (
    <Container>
      <div className="flex flex-col">
        <SectionHead title="Battle of Heroes" />
        <div className="text-white text-xl px-8 mt-4">
          Here are the heroes and villains entering in the tournament
        </div>
        <div className="flex justify-center items-center">
          <div className="w-full max-w-[2000px] h-full flex md:flex-row flex-col justify-between items-center">
            <div className="md:w-[30%] w-[60%] my-2">
              <OurPlayersList
                avartaSrc={Images.dashboard.hero_icon1}
                title="DAMIEN"
                description="KNIGHT"
              />
            </div>
            <div className="md:w-[30%] w-[60%] my-2">
              <OurPlayersList
                avartaSrc={Images.dashboard.hero_icon2}
                title="MORTEN"
                description="MAGE"
              />
            </div>
            <div className="md:w-[30%] w-[60%] my-2">
              <OurPlayersList
                avartaSrc={Images.dashboard.hero_icon3}
                title="KASSANDRA"
                description="ARCHER"
              />
            </div>
          </div>
        </div>
      </div>

      {/* <div className='w-full flex flex-row justify-center items-start'>
          <div className="xl:w-[43%] lg:w-[50%] md:w-[70%] sm:w-[80%] flex flex-row justify-center items-center">
            <div className="w-[50%] m-2">
              <SectionHead
                title='Battle of Heroes'
              />
              <div className="text-white text-xl mt-4">
                Here are the heroes and villains entering in the tournament
              </div>
            </div>
            <div className="w-[50%] m-2">
              <OurPlayersList avartaSrc={Images.characters.char7} title="DAMIEN" description="KNIGHT"/>
            </div>
          </div>
        </div>
  
        <div className='w-full flex flex-row justify-center items-start'>
          <div className="xl:w-[43%] lg:w-[50%] md:w-[70%] sm:w-[80%] flex flex-row justify-center items-center">
            <div className="w-[50%] m-2">
              <OurPlayersList avartaSrc={Images.characters.char8} title="MORTEN" description="MAGE"/>
            </div>
            <div className="w-[50%] m-2">
              <OurPlayersList avartaSrc={Images.characters.char9} title="KASSANDRA" description="ARCHER"/>
            </div>
          </div>
        </div>       */}
    </Container>
  );
};
