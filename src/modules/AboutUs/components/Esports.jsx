import React, { useState, useEffect } from "react";
import axios from "axios";
import { MouseParallaxContainer } from "react-parallax-mouse";
import { Parallax } from "react-scroll-parallax";
import { Fade } from "react-awesome-reveal";
import { Images } from "../../../assets/imgs/Images";
import { ButtonPrimary, Container, SectionHead } from "../../../components";
import { useAppContext } from "../../../context/contractContext";
import { backend_url } from "../../../constants/backend";
import { BigNumber } from "ethers";
import { Link } from "react-router-dom";
export const Esports = ({ isMobile }) => {
  // const { tournamentsOrganized, prizesPaid, participants } = useSelector(
  //   (state: GlobalState) => state.aboutUs,
  // );
  const context = useAppContext();

  const [message, setMessage] = useState(null);

  useEffect(() => {
    setMessage(null);
  }, [context.account]);

  const onclickEliminate = async () => {
    setMessage(null);
    if (context.account === null) {
      let tempMessage = <p className="text-[red]">Connect your wallet.</p>;
      setMessage(tempMessage);
      return;
    }

    const isStarted = await context.freeNFTContract.methods
      .getPlayingStatus()
      .call();

    if (isStarted === true) {
      await context.usdtContract.methods
        .approve(
          context.freeNFTContract._address,
          BigNumber.from(Number(2)).mul(BigNumber.from(10).pow(18))
        )
        .send({ from: context.account });
      await context.freeNFTContract.methods
        .manualEliminate(1)
        .send({ from: context.account });
      axios.get(`${backend_url}/account/oneEliminate`).then((_resp) => {
        // console.log(_resp);
        setMessage(<p className="text-white">Eliminated successfully.</p>);
      });
    } else {
      let tempMessage = <p className="text-[red]">Playing is not started.</p>;
      setMessage(tempMessage);
    }
  };

  return (
    <MouseParallaxContainer
      globalFactorX={0.1}
      globalFactorY={0.1}
      containerStyle={{
        // Reset overflow hidden added by module
        overflow: "initial",
      }}
    >
      <Container className="flex flex-col-reverse justify-between items-center flex-1 md:flex-row md:h-screen">
        <div className="flex flex-col flex-1 max-w-[528px] pr-5">
          <SectionHead title="How it works" imgSrc="" />
          <Parallax speed={4} opacity={[0, 3]}>
            <div className="flex justify-between w-full flex-wrap">
              <Fade
                cascade
                damping={0.9}
                duration={500}
                className="flex flex-col flex-wrap mt-4 w-full md:mt-4"
              >
                <div>
                  <ol
                    start={1}
                    className="md:text-base text-light100 list-[decimal] pl-14"
                  >
                    <li className="text-2xl text-light100 mt-2 md:mt-1 tracking-wider leading-[24px] md:leading-[28px]">
                      <p>Over 20000 tickets to be claimed by players</p>
                    </li>
                    <li className="text-2xl text-light100 mt-2 md:mt-1 tracking-wider leading-[24px] md:leading-[28px]">
                      <p className="mt-3">
                        Every 24hrs half of the tickets are randomly eliminated
                      </p>
                    </li>
                    <li className="text-2xl text-light100 mt-2 md:mt-1 tracking-wider leading-[24px] md:leading-[28px]">
                      <p className="mt-3">
                        Players can eliminate rival tickets at random with 2
                        USDC
                      </p>
                    </li>
                    <li className="text-2xl text-light100 mt-2 md:mt-1 tracking-wider leading-[24px] md:leading-[28px]">
                      <p className="mt-3">
                        Survive to the end, win prizes and become a Champion!
                      </p>
                    </li>
                  </ol>
                </div>
              </Fade>
            </div>
          </Parallax>
          <div className="mt-5 mx-5">
            {/* <ButtonPrimary
              label="Eliminate"
              className="relative"
              onClick={() => {
                onclickEliminate();
              }}
            /> */}
            <Link
              onClick={() => {
                onclickEliminate();
              }}
              className={`relative text-white w-full max-w-[400px] bg-primary100 flex justify-center items-center ease-in duration-200 transition 
      py-3 px-6 md:text-white text-xs whitespace-nowrap bg-gradient-to-l from-[#3CB597] hover:from-[#58F7D5]  to-[#58F7D5] hover:to-[#3CB597]
      hover:bg-primary200 font-bold`}
            >
              <p className="text-white text-[20px]">Eliminate</p>
            </Link>
            <div className="h-[50px]">{message}</div>
          </div>
        </div>
        <div className="relative md:flex-1 justify-center items-center w-full md:max-w-[620px] mt-6 md:mt-0 pt-8 md:pl-0 pl-[10%] md:px-0 px-3">
          <img
            src={Images.lines02}
            className="absolute top-[3%] z-0 h-full"
            alt=""
          />
          <div className="relative flex flex-col justify-center items-start z-20 font-JosefinSans my-5">
            <div className="w-[95%] flex flex-row justify-start items-center text-white bg-[#2C2C2C] p-5">
              <div className="flex justify-center items-center w-1/3">
                <div className="bg-white w-[80px] h-[80px] relative">
                  <img
                    src={Images.trophy01}
                    className="absolute top-[50%] left-[50%] scale-[170%] -translate-x-1/2 -translate-y-1/2"
                    alt=""
                  />
                </div>
              </div>
              <div className="ml-5 text-left w-3/4">
                <p className="text-2xl pb-2">Top prize</p>
                <p className="text-[32px] leading-none text-primary200 font-['Josefin Sans']">
                  $5K + Scrim with your fav team
                </p>
              </div>
            </div>
            <div className="mt-2 ml-[5%] w-[95%] flex flex-row justify-start items-center text-white bg-[#2C2C2C] p-5">
              <div className="flex justify-center items-center w-1/3">
                <div className="bg-white w-[80px] h-[80px] relative">
                  <img
                    src={Images.trophy02}
                    className="absolute top-[50%] left-[50%] scale-[170%] -translate-x-1/2 -translate-y-1/2"
                    alt=""
                  />
                </div>
              </div>
              <div className="ml-5 text-left w-3/4">
                <p className="text-2xl">2nd prize</p>
                <p className="text-[32px] text-primary200 font-['Josefin Sans']">
                  $2K + NFT prize
                </p>
              </div>
            </div>
            <div className="mt-2 w-[95%] flex flex-row justify-start items-center text-white bg-[#2C2C2C] p-5">
              <div className="flex justify-center items-center w-1/3">
                <div className="bg-white w-[55px] relative">
                  <img
                    src={Images.coin01}
                    className="absolute top-[50%] left-[50%] scale-[170%] -translate-x-1/2 -translate-y-1/2"
                    alt=""
                  />
                </div>
              </div>
              <div className="ml-5 text-left w-3/4">
                <p className="text-2xl pb-2">$3k prize pool</p>
                <p className="text-[32px] leading-none text-primary200">
                  $USDC airdrops daily after day 10
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </MouseParallaxContainer>
  );
};
