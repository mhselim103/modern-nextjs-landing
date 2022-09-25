import React from "react";
import avatar1 from "../assets/testimonial/avatar1.png";
import avatar2 from "../assets/testimonial/avatar2.png";
import avatar3 from "../assets/testimonial/avatar3.png";
import avatar4 from "../assets/testimonial/avatar4.png";
import Rating from "../components/Rating";
import SatisfactionCard from "../components/SatisfactionCard";

import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const ClientSatisfaction = () => {
  return (
    <div className="px-20 my-12">
      <div className="flex flex-col items-center justify-center gap-3 mb-12">
        <h1 className="text-lg font-medium uppercase text-custom">
          Testimonial
        </h1>
        <h1 className="text-4xl font-bold text-heading">
          Meet Client Satisfaction
        </h1>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        // navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="flex gap-5 "
      >
        {data.map((item, index) => (
          <SwiperSlide className="max-w-md p-8 bg-white shadow-md" key={index}>
            <div className="mb-3">
              <Rating rating={item.review} />
            </div>
            <SatisfactionCard data={item}></SatisfactionCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ClientSatisfaction;

const data = [
  {
    id: 1,
    title: "Modern look & trending design",
    description:
      "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
    avatar: avatar1,
    name: "Denny Hilguston",
    designation: "@denny.hil",
    review: 4,
  },
  {
    id: 2,
    title: "Design Quality & performance",
    description:
      "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
    avatar: avatar2,
    name: "Denny Hilguston",
    designation: "@denny.hil",
    review: 5,
  },
  {
    id: 3,
    title: "Layout and organized layers",
    description:
      "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
    avatar: avatar3,
    name: "Denny Hilguston",
    designation: "@denny.hil",
    review: 5,
  },
  {
    id: 4,
    title: "Modern look & trending design",
    description:
      "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
    avatar: avatar4,
    name: "Denny Hilguston",
    designation: "@denny.hil",
    review: 4,
  },
];
