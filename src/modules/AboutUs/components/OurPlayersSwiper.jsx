import React from "react";
import { Images } from "../../../assets/imgs/Images";
import { useSelector } from "react-redux";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
export const OurPlayersSwiper = () => {
    const { players } = useSelector((state) => state.aboutUs);
    return (<div className='w-[320px] xl:w-[420px] relative xl:px-[50px]'>
      <a href='#' className='swiper-prev absolute left-[10px] z-[2] md:left-[0px] xl:left-[-7px] top-[190px]'>
        <img src={Images.chevron_left}/>
      </a>
      <a href='#' className='swiper-next absolute right-[10px] z-[2] 
        md:right-[0px] 
        xl:right-[-7px] top-[190px]'>
        <img src={Images.chevron_right}/>
      </a>
      <Swiper parallax pagination={{
            clickable: true,
            el: ".swiper-pagination",
        }} className='w-full' centeredSlides speed={1500} modules={[Navigation, Pagination]} navigation={{
            prevEl: ".swiper-prev",
            nextEl: ".swiper-next",
        }}>
        {players.map((player, index) => (<SwiperSlide key={index} className='flex flex-col'>
            <img src={player.image} alt={player.name}/>{" "}
            <div className='text-3xl mt-12 text-primary200 font-JosefinSans font-bold tracking-widest'>
              {player.name}
            </div>
            <div className='text-light100 text-sm leading-[26px] font-normal tracking-wider md:leading-7 md:text-base'>
              {player.description}
            </div>
          </SwiperSlide>))}
      </Swiper>
      <div className='swiper-pagination z-[2] bottom-auto top-[412px] left-[50px] right-[50px]'/>
    </div>);
};
