import React, { useState, useEffect } from "react";
import { MouseParallaxContainer } from "react-parallax-mouse";
// import { useSelector } from "react-redux";
import { Parallax } from "react-scroll-parallax";
import { Images } from "../../../assets/imgs/Images";
import {
  ButtonPrimary,
  Container,
  ResponsiveParallaxLayer,
  SectionHead,
} from "../../../components";
import { useAppContext } from "../../../context/contractContext";
import { Link } from "react-router-dom";

export const EmpowerPlayers = ({ isMobile }) => {
  const context = useAppContext();

  const [message, setMessage] = useState(null);

  useEffect(() => {
    setMessage(null);
  }, [context.account]);

  const onClickMint = async () => {
    if (context.account === null) {
      let tempMessage = <p className="text-[red]">Connect your wallet.</p>;
      setMessage(tempMessage);
      return;
    }
    if (context.user.length < 2) {
      await context.freeNFTContract.methods
        .mintPerWallet()
        .send({ from: context.account });
      const tokenIds = await context.freeNFTContract.methods
        .getTokenByOwner(context.account)
        .call();
      context.setUser(tokenIds);
    } else {
      console.log("Can't mint");
      let tempMessage = (
        <>
          <p className="text-[red]">You can't mint anymore.</p>
          <p className="text-white">
            Your tokenId is $
            {context.user.map((item, index) => {
              return `ticketId #${item}${
                index === context.user.length - 1 ? "." : ", "
              }`;
            })}
          </p>
        </>
      );
      setMessage(tempMessage);
    }
  };

  return (
    <MouseParallaxContainer
      globalFactorX={0.1}
      globalFactorY={0.1}
      containerStyle={{
        overflow: "initial",
      }}
    >
      <Container className="flex flex-col items-center justify-between flex-1 pt-[57px] md:flex-row lg:pt-[111px] lg:pb-[80px] md:h-screen">
        <div>
          <img
            src={Images.logo05}
            className="md:hidden flex w-[250px] md:mt-0 mt-20 md:mb-0 -mb-10"
            alt="banner"
          />
          <Parallax speed={isMobile ? 4 : 1}>
            <SectionHead
              title="$10k in Prizes"
              description="Scrim with your favorite team."
              imgSrc={Images.logo05}
              pLeft="xl:pl-40 pl-4"
              descFontSize="text-32px"
            />
          </Parallax>
          <div className="mt-5 mx-5 flex flex-col justify-center items-center">
            {/* <ButtonPrimary
              label="Mint"
              className="relative text-white"
              onClick={() => {
                onClickMint();
              }}
            /> */}
            <Link
              onClick={() => {
                onClickMint();
              }}
              className={`relative text-white w-full max-w-[400px] bg-primary100 flex justify-center items-center ease-in duration-200 transition 
      py-3 px-6 md:text-white text-xs whitespace-nowrap bg-gradient-to-l from-[#3CB597] hover:from-[#58F7D5]  to-[#58F7D5] hover:to-[#3CB597]
      hover:bg-primary200 font-bold`}
            >
              <p className="text-white text-[20px]">Mint</p>
            </Link>
            <div className="h-[50px]">{message}</div>
          </div>
        </div>

        <div className="relative w-full md:max-w-[500px] h-[400px] mt-5 md:mt-0 md:max-h-full md:h-full">
          <img
            src={Images.ellipse01}
            className="absolute top-[-110px] right-[-100px] md:flex hidden"
            alt=""
          />
          <ResponsiveParallaxLayer
            image={Images.dashboard.hero2}
            factorX={-0.2}
            factorY={-0.2}
            speed={isMobile ? 2 : 5}
            scale={isMobile ? 1 : 1.3}
            imageClassName="w-[200px] h-[300px]"
            zIndex="z-30 -top-[0] left-[20%]"
          />
          <ResponsiveParallaxLayer
            image={Images.dashboard.hero3}
            factorX={-0.2}
            factorY={-0.2}
            speed={isMobile ? 2 : 5}
            scale={isMobile ? 1 : 1.3}
            imageClassName="w-[200px] h-[300px]"
            zIndex="z-20 top-[-15%] right-[2%]"
          />
          <ResponsiveParallaxLayer
            image={Images.dashboard.hero1}
            factorX={-0.2}
            factorY={-0.2}
            speed={isMobile ? 2 : 5}
            scale={isMobile ? 1 : 1.3}
            imageClassName="w-[200px] h-[300px]"
            zIndex="z-40 -bottom-[15%] right-[15%]"
          />
        </div>
        <div className="triangle" />
      </Container>
    </MouseParallaxContainer>
  );
};
