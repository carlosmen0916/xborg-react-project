import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
// import { Images } from "../../../assets/imgs/Images";
// import { MouseParallaxContainer } from "react-parallax-mouse";
// import { Images } from "../../../assets/imgs/Images";
import {
  // ButtonSecondary,
  Container,
  SectionHead,
} from "../../../components";
import { useDispatch } from "react-redux";
import { AboutUsActions } from "../../../redux/aboutUs/actions";
import { BsDiscord, BsTwitter, BsTwitch } from "react-icons/bs";

export function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform text-primary100`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}
export const BecomeXplorer = () => {
  const [open, setOpen] = useState(1);
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(AboutUsActions.getTeam());
  }, []);
  return (
    <div>
      <Container>
        <div className="flex md:flex-row flex-col">
          <div className="basis-1/4">
            <SectionHead title="FAQ" />
          </div>
          <div className="basis-3/4 md:mx-0 mx-5 md:mb-0 mb-12">
            <div className="border-b-2 border-primary100 py-4">
              <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                <AccordionHeader onClick={(e) => handleOpen(1)}>
                  <p className="text-primary100 font-JosefinSans">
                    What is Dplus Champions?
                  </p>
                </AccordionHeader>
                <AccordionBody>
                  <p className="text-[#D1D3D4] mt-[-20px]">
                    Dplus Champions is a special promotional event to celebrate
                    the launch of the DPlus Arena platform, which has partnered
                    with prominent esports team DWG in order to launch the
                    future of esports and blockchain gaming.
                  </p>
                </AccordionBody>
              </Accordion>
            </div>
            <div className="border-b-2 border-primary100 py-4">
              <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                <AccordionHeader onClick={(e) => handleOpen(2)}>
                  <p className="text-primary100 font-JosefinSans">
                    How are the prizes distributed?
                  </p>
                </AccordionHeader>
                <AccordionBody>
                  <p className="text-[#D1D3D4] mt-[-20px]">
                    There will be 2 top prizes for the last 2 remaining players
                    who will be determined as the last NFTs standing. But as the
                    competition goes longer, there's also 3000 USDC of prizes
                    that will be airdropped out to remaining contestants at
                    random.
                  </p>
                </AccordionBody>
              </Accordion>
            </div>
            <div className="border-b-2 border-primary100 py-4">
              <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                <AccordionHeader onClick={(e) => handleOpen(3)}>
                  <p className="text-primary100 font-JosefinSans">
                    Are tickets tradable?
                  </p>
                </AccordionHeader>
                <AccordionBody>
                  <p className="text-[#D1D3D4] mt-[-20px]">
                    All tickets are Solana based NFTs, and will be fully
                    tradable on Magic Eden.
                  </p>
                </AccordionBody>
              </Accordion>
            </div>
            <div className="border-b-2 border-primary100 py-4">
              <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
                <AccordionHeader onClick={(e) => handleOpen(4)}>
                  <p className="text-primary100 font-JosefinSans">
                    When will the winners be announced?
                  </p>
                </AccordionHeader>
                <AccordionBody>
                  <p className="text-[#D1D3D4] mt-[-20px]">
                    Once the competition is over, and there are only 2 remaining
                    NFTs, then the winners will be announced shortly after
                  </p>
                </AccordionBody>
              </Accordion>
            </div>
          </div>
          <div className="md:hidden flex flex-row justify-center items-center my-5">
            <div className="w-[40px] h-[40px]">
              <BsTwitter className="w-full h-full text-[#464545]" />
            </div>
            <div className="w-[40px] h-[40px] mx-10">
              <BsDiscord className="w-full h-full text-[#464545]" />
            </div>
            <div className="w-[40px] h-[40px]">
              <BsTwitch className="w-full h-full text-[#464545]" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
