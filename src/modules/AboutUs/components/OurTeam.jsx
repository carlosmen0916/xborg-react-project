import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SectionHead } from "../../../components";
import { AboutUsActions } from "../../../redux/aboutUs/actions";
import { Fade } from "react-awesome-reveal";
import SimpleBar from "simplebar-react";
import { OurTeamMember } from "./OurTeamMember";
export const OurTeam = () => {
    const dispatch = useDispatch();
    const team = useSelector((state) => state.aboutUs.team);
    useEffect(() => {
        dispatch(AboutUsActions.getTeam());
    }, []);
    return (<div className='team flex flex-col mx-auto w-full max-w-container px-[40px] h_lg:h-auto lg:pt-[111px] lg:pb-[80px] lg:px-[100px] xl:h-screen'>
      <SectionHead title='Meet Our Team' imgSrc=""/>

      <SimpleBar className='h-full'>
        <div className='flex flex-wrap mt-8 mx-[-16px]'>
          <Fade cascade damping={0.1} duration={600} className='flex-50 md:w-auto sm:flex-33.333 md:flex-25 lg:flex-20'>
            {team.map((member, index) => (<OurTeamMember key={index} {...member}/>))}
          </Fade>
        </div>
      </SimpleBar>
    </div>);
};
