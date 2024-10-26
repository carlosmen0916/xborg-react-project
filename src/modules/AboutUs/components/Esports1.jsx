import React from "react";
import { MouseParallaxContainer } from "react-parallax-mouse";
// import { Parallax } from "react-scroll-parallax";
// import { Fade } from "react-awesome-reveal";
import { Images } from "../../../assets/imgs/Images";
import { Container, SectionHead } from "../../../components";
export const Esports = ({ isMobile }) => {
  // const { tournamentsOrganized, prizesPaid, participants } = useSelector(
  //   (state: GlobalState) => state.aboutUs,
  // );
  return (
    <MouseParallaxContainer
      globalFactorX={0.1}
      globalFactorY={0.1}
      containerStyle={{
        // Reset overflow hidden added by module
        overflow: "initial",
      }}
    >
      <Container className="flex flex-col justify-between items-center flex-1 md:flex-row md:h-screen">
        {/* <div className='flex flex-col flex-1 max-w-[528px] pr-5'>
          <SectionHead
            title='How it works'
            imgSrc=""
          />
          <Parallax speed={4} opacity={[0, 3]}>
            <div className='flex justify-between w-full flex-wrap'>
              <Fade
                cascade
                damping={0.9}
                duration={500}
                className='flex flex-col flex-wrap mt-4 w-full md:mt-4'
              >
                <div>
                <ol start={1} className='md:text-base text-light100 list-[decimal] pl-14'>
                  <li className='text-2xl text-light100 mt-2 md:mt-1 tracking-wider leading-[24px] md:leading-[28px]'>
                  <p>Over 20000 tickets to be claimed by<br/></p>
                  <p className="mt-3">players</p>
                  </li>
                  <li className='text-2xl text-light100 mt-2 md:mt-1 tracking-wider leading-[24px] md:leading-[28px]'>
                  <p className="mt-3">Every 24hrs half of the tickets are<br/></p>
                  <p className="mt-3">randomly eliminated</p>
                  </li>
                  <li className='text-2xl text-light100 mt-2 md:mt-1 tracking-wider leading-[24px] md:leading-[28px]'>
                  <p className="mt-3">Players can eliminate rival tickets at<br/></p>
                  <p className="mt-3">random with 2 USDC</p>
                  </li>
                  <li className='text-2xl text-light100 mt-2 md:mt-1 tracking-wider leading-[24px] md:leading-[28px]'>
                  <p className="mt-3">Survive to the end, win prizes and<br/></p>
                  <p className="mt-3">become a Champion!</p>
                  </li>
                </ol>
                </div>
              </Fade>
            </div>
          </Parallax>
        </div>
        <div className='md:flex-1 relative w-full md:max-w-[620px] h-[80%] mt-6 md:mt-0 pt-8 md:pl-0 pl-[10%]'>
          <div className="absolute -z-10 pl-4 h-full">
            <img src={Images.lines02} className="h-full" alt="" />
          </div>
          <div className="h-full flex flex-col justify-center items-start z-20 pt-8 font-JosefinSans">
            <div className="mt-2 w-3/4 flex flex-row justify-start items-center text-white bg-[#2C2C2C] py-7 px-5">
              <div className="flex justify-center items-center w-1/3">
                <div className="bg-white w-[80px] h-[80px] relative">
                  <img src={Images.trophy01} className="absolute top-[50%] left-[50%] scale-[170%] -translate-x-1/2 -translate-y-1/2" alt="" />
                </div>
              </div>
              <div className="ml-5 text-left w-3/4">
                <p className="text-2xl pb-2">Top prize</p>
                <p className="text-[32px] leading-none text-primary200 font-['Josefin Sans']">$5K + Scrim with your fav team</p>
              </div>
            </div>
            <div className="mt-2 ml-12 w-3/4 flex flex-row justify-start items-center text-white bg-[#2C2C2C] py-10 px-5">
              <div className="flex justify-center items-center w-1/3">
                <div className="bg-white w-[80px] h-[80px] relative">
                  <img src={Images.trophy02} className="absolute top-[50%] left-[50%] scale-[170%] -translate-x-1/2 -translate-y-1/2" alt="" />
                </div>
              </div>
              <div className="ml-5 text-left w-3/4">
                <p className="text-2xl">2nd prize</p>
                <p className="text-[32px] text-primary200 font-['Josefin Sans']">$2K + NFT prize</p>
              </div>
            </div>
            <div className="mt-2 w-3/4 flex flex-row justify-start items-center text-white bg-[#2C2C2C] py-7 px-5">
              <div className="flex justify-center items-center w-1/3">
                <div className="bg-white w-[55px] relative">
                  <img src={Images.coin01} className="absolute top-[50%] left-[50%] scale-[170%] -translate-x-1/2 -translate-y-1/2" alt="" />
                </div>
              </div>
              <div className="ml-5 text-left w-3/4">
                <p className="text-2xl pb-2">$3k prize pool</p>
                <p className="text-[32px] leading-none text-primary200">$USDC airdrops daily after day 10</p>
              </div>
            </div>
          </div>
        </div> */}
        <div className="flex flex-col w-full">
          <div className="w-full flex flex-row">
            <div className="w-full flex flex-col self-start mt-20 mr-2 p-[2px] bg-gradient-to-b from-primary100">
              <div className="bg-[#151d1b]">
                <div className="flex flex-row justify-between p-3 font-JosefinSans">
                  <p className="text-white text-left text-xl">Second prize</p>
                  <p className="text-primary100 right-0">3K Airdropped</p>
                </div>
                <div className="flex items-center justify-center p-10">
                  <img src={Images.trophy04} alt="" />
                </div>
                <div className="flex flex-row justify-between p-3 font-JosefinSans">
                  <div className="text-primary100 text-left text-2xl">
                    NFT Prize
                  </div>
                  <div>
                    <p className="text-white right-0 ">$2000</p>
                    <p className="text-white text-[10px]">In Total</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col self-start m-2 p-[2px] bg-gradient-to-b from-primary200 to-[#1a312b]">
              <div className="bg-[#151d1b]">
                <div className="flex flex-row justify-between p-3 font-JosefinSans">
                  <p className="text-white text-left">Second prize</p>
                  <p className="text-primary100 right-0">3K Airdropped</p>
                </div>
                <div className="flex items-center justify-center p-10">
                  <img src={Images.trophy03} alt="" />
                </div>
                <div className="flex flex-row justify-between p-3 font-JosefinSans">
                  <p className="text-primary100 text-left text-2xl leading-none">
                    Scrim with your
                    <br /> fav team
                  </p>
                  <div>
                    <p className="text-white right-0 ">$5000</p>
                    <p className="text-white text-[10px]">Grand Prize</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col self-start mt-10 m-2 p-[2px] bg-gradient-to-b from-primary100">
              <div className="bg-[#151d1b]">
                <div className="flex flex-row justify-between p-3 font-JosefinSans">
                  <p className="text-white text-left">Second prize</p>
                  <p className="text-primary100 right-0">3K Airdropped</p>
                </div>
                <div className="flex items-center justify-center p-10">
                  <img
                    src={Images.coin03}
                    className="w-[200px] h-[180px]"
                    alt=""
                  />
                </div>
                <div className="flex flex-row justify-between p-3 font-JosefinSans">
                  <p className="text-primary100 text-left text-2xl leading-none">
                    $USDC airdrops
                    <br /> everyday after
                    <br /> day 10
                  </p>
                  <div>
                    <p className="text-white right-0 ">$3000</p>
                    <p className="text-white text-[10px]">Total prize pool</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Format - 1 - */}
            {/* <div className="flex w-[33%] mx-1  border-2 border-primary100">
          <div className="flex flex-row justify-between p-3 font-JosefinSans">
            <p className="text-white text-left text-xl">Second prize</p>
            <p className="text-primary100 right-0">3K Airdropped</p>
          </div>
          <div className="flex items-center justify-center p-10">
            <img src={Images.trophy04} alt="" />
          </div>
          <div className="flex flex-row justify-between p-3 font-JosefinSans">
            <p className="text-primary100 text-left text-2xl">NFT Prize</p>
            <p className="text-white right-0 ">$2000</p>
          </div>
        </div>
        <div className="flex w-[33%] mr-1">
          <div className="m-1 border-2 border-primary100">
            <div className="flex flex-row justify-between p-3 font-JosefinSans">
              <p className="text-white text-left">Second prize</p>
              <p className="text-primary100 right-0">3K Airdropped</p>
            </div>
            <div className="flex items-center justify-center p-10">
              <img src={Images.trophy03} alt="" />
            </div>
            <div className="flex flex-row justify-between p-3 font-JosefinSans">
              <p className="text-primary100 text-left text-2xl">NFT Prize</p>
              <p className="text-white right-0 ">$2000</p>
            </div>
          </div>
        </div>
        <div className="flex w-[33%]">
          <div className="m-1 border-2 border-primary100">
            <div className="flex flex-row justify-between p-3 font-JosefinSans">
              <p className="text-white text-left">Second prize</p>
              <p className="text-primary100 right-0">3K Airdropped</p>
            </div>
            <div className="flex items-center justify-center p-10">
              <img src={Images.coin03} className="w-[200px] h-[200px]" alt="" />
            </div>
            <div className="flex flex-row justify-between p-3 font-JosefinSans">
              <p className="text-primary100 text-left text-2xl">NFT Prize</p>
              <p className="text-white right-0 ">$2000</p>
            </div>
          </div>
        </div> */}
            {/* <div className="basis-1/3 m-1 border-2 border-gradient-br-blue-green-gray-900 border-transparent">
          <div className="flex flex-row justify-between p-3 font-JosefinSans">
            <p className="text-white text-left text-xl">Second prize</p>
            <p className="text-primary100 right-0">3K Airdropped</p>
          </div>
          <div className="flex items-center justify-center p-10">
            <img src={Images.trophy04} alt="" />
          </div>
          <div className="flex flex-row justify-between p-3 font-JosefinSans">
            <p className="text-primary100 text-left text-2xl">NFT Prize</p>
            <p className="text-white right-0 ">$2000</p>
          </div>
        </div>
        <div className="basis-1/3 m-1 border-2 border-primary100">
          <div className="flex flex-row justify-between p-3 font-JosefinSans">
            <p className="text-white text-left">Second prize</p>
            <p className="text-primary100 right-0">3K Airdropped</p>
          </div>
          <div className="flex items-center justify-center p-10">
            <img src={Images.trophy03} alt="" />
          </div>
          <div className="flex flex-row justify-between p-3 font-JosefinSans">
            <p className="text-primary100 text-left text-2xl">NFT Prize</p>
            <p className="text-white right-0 ">$2000</p>
          </div>
        </div>
        <div className="basis-1/3 m-1 border-2 border-primary100">
          <div className="flex flex-row justify-between p-3 font-JosefinSans">
            <p className="text-white text-left">Second prize</p>
            <p className="text-primary100 right-0">3K Airdropped</p>
          </div>
          <div className="flex items-center justify-center p-10">
            <img src={Images.coin03} className="w-[200px] h-[200px]" alt="" />
          </div>
          <div className="flex flex-row justify-between p-3 font-JosefinSans">
            <p className="text-primary100 text-left text-2xl">NFT Prize</p>
            <p className="text-white right-0 ">$2000</p>
          </div>
        </div> */}
          </div>

          {/* Format - 2 - */}
          <div className="flex sm:flex-row flex-col mt-10">
            <div className="basis-1/3">
              <SectionHead title="How it works" imgSrc="" />
            </div>
            <div className="basis-2/3 sm:px-0 px-20">
              <ol
                start={1}
                className="md:text-base text-light100 list-[decimal]"
              >
                <li className="sm:text-xl text-md text-light100 mt-2 md:mt-1 tracking-wider leading-[24px] md:leading-[28px]">
                  <p>Over 20000 tickets to be claimed by players</p>
                </li>
                <li className="sm:text-xl text-md text-light100 mt-2 md:mt-1 tracking-wider leading-[24px] md:leading-[28px]">
                  <p className="mt-3">
                    Every 24hrs half of the tickets are randomly eliminated
                  </p>
                </li>
                <li className="sm:text-xl text-md text-light100 mt-2 md:mt-1 tracking-wider leading-[24px] md:leading-[28px]">
                  <p className="mt-3">
                    Players can eliminate rival tickets at random with 2 USDC
                  </p>
                </li>
                <li className="sm:text-xl text-md text-light100 mt-2 md:mt-1 tracking-wider leading-[24px] md:leading-[28px]">
                  <p className="mt-3">
                    Survive to the end, win prizes and become a Champion!
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </Container>
    </MouseParallaxContainer>
  );
};
