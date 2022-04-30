import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";
import "./Testimonial.css";
import profilePic1 from "./../../img/profile1.jpg";
import profilePic2 from "./../../img/profile5.jpg";
import profilePic3 from "./../../img/profile2.jpg";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum eaque, provident odio quisquam aperiam rem, ipsa laudantium, iure explicabo optio ab recusandae corrupti expedita nam tenetur soluta beatae quos veniam!",
    },
    {
      img: profilePic2,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum eaque, provident odio quisquam aperiam rem, ipsa laudantium, iure explicabo optio ab recusandae corrupti expedita nam tenetur soluta beatae quos veniam!",
    },
    {
      img: profilePic3,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum eaque, provident odio quisquam aperiam rem, ipsa laudantium, iure explicabo optio ab recusandae corrupti expedita nam tenetur soluta beatae quos veniam!",
    },
  ];

  return (
    <div className="t-wrapper" id="Testimonials">
      <div className="head">
        <span className="t-header">client always</span>
        <span className="t-middle">get exceptional works</span>
        <span className="t-last">from me...</span>
        <div
          className="blur t-blur-1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur-2" style={{ background: "skyblue" }}></div>
      </div>
      {/* slider */}
      <Swiper
        modules={[Pagination, keyboard]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        keyboard={{ enabled: true }}
        // effect="slide"
        // onSlideChange={() => console.log("slide changed")}
        // onSwiper={() => console.log("swiper")}
        // spaceBetween={50}
      >
        {clients.map((client, index) => {
          return (
            <React.Fragment>
              <SwiperSlide key={index}>
                <div className="testimonial">
                  <img src={client.img} alt="" />
                  <span>{client.review}</span>
                </div>
              </SwiperSlide>
              {/* <div className="swiper-button-next"></div>
              <div className="swiper-button-prev"></div> */}
            </React.Fragment>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
