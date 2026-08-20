"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { reviewsData } from "../../data/reviewsData";
import {
  MdKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { ReviewSwiperCard } from "./ReviewSwiperCard";

export default function Reviews() {
  const swiperRef = useRef(null);

  return (
    <section className="relative w-full text-white py-6 md:py-12 z-10 overflow-hidden">
      <div className="pl-6 lg:pl-20">
        <div className="md:flex items-end justify-between gap-6 mb-10 md:mb-14">
          <h2 className="font-clash text-2xl md:text-5xl font-semibold z-10 text-white flex flex-col gap-0 md:gap-2 !text-left md:hidden">
            <span>Why So Many Students Say, I Should’ve Joined Earlier</span>
          </h2>

          <h2 className="font-clash text-2xl md:text-5xl font-semibold z-10 text-white flex-col gap-0 md:gap-2 !text-left !hidden md:!flex">
            <span>Why So Many Students Say,</span>
            <span>I Should’ve Joined Earlier</span>
          </h2>

          <div className="flex items-center gap-3 pr-6 md:pr-20 flex-shrink-0">
            <button
              className="review-prev w-10 h-10 rounded-full border border-white/30 text-white hover:border-white hover:bg-white/5 active:scale-95 flex items-center justify-center transition-all duration-200 cursor-pointer mt-5 md:mt-0"
              aria-label="Scroll left"
            >
              <MdKeyboardArrowLeft size={25} />
            </button>

            <button
              className="review-next w-10 h-10 rounded-full border border-white/30 text-white hover:border-white hover:bg-white/5 active:scale-95 flex items-center justify-center transition-all duration-200 cursor-pointer mt-5 md:mt-0"
              aria-label="Scroll right"
            >
              <MdOutlineKeyboardArrowRight size={25} />
            </button>
          </div>
        </div>
      </div>

      <div className="pl-6 lg:pl-20 pr-6 lg:pr-20">
        <Swiper
          modules={[Navigation]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          navigation={{
            prevEl: ".review-prev",
            nextEl: ".review-next",
          }}
          spaceBetween={20}
          slidesPerView="auto"
          grabCursor
          className="reviews-swiper !overflow-visible"
        >
          {reviewsData.map((review) => (
            <SwiperSlide
              key={review.id}
              className="!w-[85vw] sm:!w-[480px] md:!w-[900px]"
            >
               <ReviewSwiperCard review={review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
