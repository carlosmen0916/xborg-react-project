import axios from "axios";
import { useState, useEffect } from "react";
import { MouseParallaxContainer } from "react-parallax-mouse";
// import { Fade } from "react-awesome-reveal";
import { Images } from "../../../assets/imgs/Images";
import { Container, SectionHead } from "../../../components";
import { PrometheusList } from "./PrometheusList";
import { backend_url } from "../../../constants/backend";
import { Scrollbars } from "react-custom-scrollbars-2";
import { isEmpty } from "lodash";
// import { token_image } from "../../../constants/blockchain";
import moment from "moment";

export const Prometheus = ({ isMobile }) => {
  const [leaderboards, setLeaderboards] = useState({
    status: "",
    order: [],
    eliminatedItems: [],
    start_date: "",
    total_count: "",
    total_token: "",
  });
  const [viewMore, setViewMore] = useState(false);

  useEffect(() => {
    axios
      .get(`${backend_url}/aboutus/leaderboards`)
      .then((_resp) => {
        if (_resp.status === 200) {
          setLeaderboards(_resp.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <MouseParallaxContainer
      globalFactorX={0.1}
      globalFactorY={0.1}
      containerStyle={{
        // Reset overflow hidden added by module
        overflow: "initial",
      }}
    >
      <Container className="w-full flex flex-col-reverse items-start justify-between flex-1 md:flex-row md:h-screen">
        <div className="md:flex-1 md:w-full w-[90%] h-full md:pl-10 pt-[8%] pb-[2%] md:mx-0 mx-[5%]">
          <div className="h-[10%]">
            <SectionHead title="Top The Leaderboards" imgSrc="" />
          </div>
          <div className="h-[30%]">
            <div className="text-light100 font-normal font-mono tracking-widest lg:text-xl text-lg whitespace-nowrap">
              Everyday the number of Dplus Heroes are cut in half in the arena
            </div>
            <div className="flex flex-row justify-between text-white">
              <div className=" text-primary100">Remaining Slot</div>
              <div className=" text-right">Heroes Claimed</div>
            </div>
            <div className="flex flex-row justify-between text-white text-2xl">
              <div className="">Heroes</div>
              {leaderboards.cancel && (
                <p className="text-[red] text-[14px]">Canceled elimination</p>
              )}
              <div className=" text-right">
                <span className="text-primary100">{`${
                  leaderboards.status === "Finished sortition"
                    ? leaderboards.total_token
                      ? leaderboards.total_token
                      : 0
                    : leaderboards.order
                    ? leaderboards.order.length
                    : 0
                }`}</span>
                <span className="text-white">{` /${
                  leaderboards.total_token ? leaderboards.total_token : 0
                }`}</span>
              </div>
            </div>
            <div className="h-5 w-full bg-white">
              <div
                className="h-5 bg-primary100 flex justify-end items-center"
                style={{
                  width: `${
                    100 -
                    ((leaderboards.status === "Finished sortition"
                      ? leaderboards.total_token
                        ? leaderboards.total_token
                        : 0
                      : leaderboards.order
                      ? leaderboards.order.length
                      : 0) /
                      parseInt(
                        leaderboards.total_token ? leaderboards.total_token : 0
                      )) *
                      100
                  }%`,
                }}
              >
                <p
                  className={` ${
                    Math.round(
                      leaderboards.status === "Finished sortition"
                        ? leaderboards.total_token
                          ? leaderboards.total_token
                          : 0
                        : leaderboards.order
                        ? leaderboards.order.length
                        : 0
                    ) /
                      parseInt(
                        leaderboards.total_token ? leaderboards.total_token : 0
                      ) ===
                    1
                      ? "text-[black] -mr-[30px]"
                      : "text-white mr-[5px]"
                  }`}
                >{`${
                  100 -
                  Math.round(
                    ((leaderboards.status === "Finished sortition"
                      ? leaderboards.total_token
                        ? leaderboards.total_token
                        : 0
                      : leaderboards.order
                      ? leaderboards.order.length
                      : 0) /
                      parseInt(
                        leaderboards.total_token ? leaderboards.total_token : 0
                      )) *
                      100
                  )
                }%`}</p>
              </div>
            </div>
            <div className="w-full flex xsm:flex-row flex-col justify-between items-start">
              <div className="flex xsm:flex-col flex-row-reverse xsm:w-auto w-full xsm:justify-start justify-between items-start xsm:px-0 px-[5%]">
                <p className="text-primary100 font-JosefinSans text-[20px]">
                  {`${leaderboards.total_token ? leaderboards.total_token : 0}`}
                </p>
                <p className="text-white">Listed for sale</p>
              </div>
              <div className="flex xsm:flex-col flex-row-reverse xsm:w-auto w-full xsm:justify-start justify-between items-start xsm:px-0 px-[5%]">
                <p className="text-primary100 font-JosefinSans text-[20px]">
                  {`${
                    !isEmpty(leaderboards)
                      ? leaderboards.status === "Finished sortition"
                        ? "Finished"
                        : leaderboards.eliminatedItems.length
                      : ""
                  }`}
                </p>
                <p className="text-white">Eliminated</p>
              </div>
              <div className="flex xsm:flex-col flex-row-reverse xsm:w-auto w-full xsm:justify-start justify-between items-start xsm:px-0 px-[5%]">
                <p className="text-primary100 font-JosefinSans text-[20px]">
                  {`${leaderboards.total_count ? leaderboards.total_count : 0}`}
                </p>
                <p className="text-white">Trade Volume</p>
              </div>
              <div className="flex xsm:flex-col flex-row-reverse xsm:w-auto w-full xsm:justify-start justify-between items-start xsm:px-0 px-[5%]">
                <p className="text-primary100 font-JosefinSans text-[20px]">
                  {`${
                    !isEmpty(leaderboards)
                      ? leaderboards.status === "Finished sortition"
                        ? "Finished"
                        : leaderboards.order
                        ? leaderboards.order.length
                        : 0
                      : ""
                  }`}
                </p>
                <p className="text-white">Alive</p>
              </div>
            </div>
          </div>
          <div
            className={`md:h-[50%] ${
              viewMore ? "h-[60vh]" : "h-[50vh]"
            } border-t-2 text-primary100 pr-2 md:my-0 my-10`}
          >
            <Scrollbars style={{ width: "100%", height: "100%" }}>
              {!isEmpty(leaderboards.order) &&
                leaderboards.order.map((item, index) => {
                  return (
                    <PrometheusList
                      key={index}
                      // avartaSrc={`${token_image}${item}`}
                      avartaSrc={Images.characters.char4}
                      win={
                        leaderboards.status === "Finished sortition"
                          ? index === 0 || index === 1 || index === 2
                            ? true
                            : false
                          : true
                      }
                      name={`Ticket #${item}`}
                      day={moment(leaderboards.start_date).format(
                        "YYYY-MM-DD HH:mm"
                      )}
                      description="is the grand champion of dPlus Champions Ticket #25683 won $12,500."
                    />
                  );
                })}
              {viewMore &&
                !isEmpty(leaderboards.eliminatedItems) &&
                leaderboards.eliminatedItems.map((item, index) => {
                  return (
                    <PrometheusList
                      key={index}
                      // avartaSrc={`${token_image}${item}`}
                      avartaSrc={Images.characters.char4}
                      win={false}
                      name={`Ticket #${item}`}
                      day={moment(leaderboards.start_date).format(
                        "YYYY-MM-DD HH:mm"
                      )}
                      description="is the grand champion of dPlus Champions Ticket #25683 won $12,500."
                    />
                  );
                })}
            </Scrollbars>
          </div>
          <div className="h-[10%] text-white text-[20px] flex md:justify-start justify-center md:items-start items-center md:mt-4 mt-0">
            <button
              className="md:w-auto w-full max-w-[400px] flex justify-center items-center bg-primary100 px-12 py-1 font-JosefinSans"
              onClick={() => setViewMore(!viewMore)}
            >
              {viewMore ? "View Less" : "View More"}
            </button>
          </div>
        </div>
      </Container>
    </MouseParallaxContainer>
  );
};
