"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { instructorsData } from "../../data/instructorsData";
import { InstructorSwiperCard } from "./InstructorSwiperCard";

export const Instructors = () => {
  const swiperRef = useRef(null);

  return (
    <section className="relative mt-2 mb-12 flex w-full flex-col items-center md:mt-13 md:mb-10 lg:mt-8">
      <div className="m-6 flex flex-col items-center justify-center">
        <h2 className="font-clash text-center text-2xl font-semibold text-white md:text-5xl">
          Learn From People Who’ve Actually Done the Work
        </h2>
      </div>

      <div className="w-[95%] overflow-hidden px-4 sm:w-[90%] md:px-8">
        <Swiper
          modules={[EffectCoverflow, Navigation]}
          effect="coverflow"
          centeredSlides
          slidesPerView="auto"
          grabCursor
          watchSlidesProgress
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 50,
            modifier: 1,
            slideShadows: false,
          }}
          navigation={false}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="!w-full !overflow-visible !pb-6 xl:!py-8 2xl:!py-12"
        >
          {instructorsData.map((instructor) => (
            <SwiperSlide
              key={instructor.id}
              className="instructor-slide !w-[185px]"
            >
              {({ isActive }) => (
                <InstructorSwiperCard
                  instructor={instructor}
                  isActive={isActive}
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="mt-2 flex justify-center gap-3">
        <button
          type="button"
          onClick={() => swiperRef.current?.slidePrev()}
          aria-label="Previous"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-300 text-gray-500 hover:border-white hover:bg-white/5 transition-all duration-200 active:scale-95"
        >
          <MdKeyboardArrowLeft size={22} color="white" />
        </button>

        <button
          type="button"
          onClick={() => swiperRef.current?.slideNext()}
          aria-label="Next"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-300 text-gray-500  hover:bg-white/5 transition-all duration-200 hover:bg-gray-200 active:scale-95"
        >
          <MdKeyboardArrowRight size={22} color="white" />
        </button>
      </div>
      <div className="absolute top-100 left-[-32%]">
        <div
          className="absolute pointer-events-none select-none "
          style={{
            width: "700px",
            height: "700px",
            background:
              "radial-gradient(rgb(101, 44, 171) 0%, rgba(89, 38, 153, 0) 70%)",
            borderRadius: "50%",
            filter: "blur(8px)",
          }}
        />
      </div>
      <div className="absolute top-0 right-80">
        <div
          className="absolute pointer-events-none select-none "
          style={{
            width: "700px",
            height: "700px",
            background:
              "radial-gradient(rgb(101, 44, 171) 0%, rgba(89, 38, 153, 0) 70%)",
            borderRadius: "50%",
            filter: "blur(8px)",
          }}
        />
      </div>
    </section>
  );
};
