"use client";

import { useState } from "react";
import { faqData } from "../data/faqData";
import { FaMinus, FaPlus } from "react-icons/fa";

const FAQ = () => {
  const [activeFaq, setActiveFaq] = useState(0);

  const handleFaqClick = (id) => {
    setActiveFaq((current) => (current === id ? null : id));
  };

  return (
    <section className="relative w-full bg-black text-white py-20">
      <div className="px-6 md:px-20 flex flex-col items-start w-full mx-auto">
        <h2 className="font-clash text-2xl md:text-5xl font-semibold z-10 text-white text-center flex flex-col gap-0 md:gap-2 !text-left w-full">
          <span>Frequently Asked Questions</span>
        </h2>
        <div className="w-full mt-12 flex flex-col gap-4">
          {faqData.map((faq) => {
            const isOpen = activeFaq === faq.id;
            return (
              <div
                key={faq.id}
                onClick={() => handleFaqClick(faq.id)}
                className="w-full bg-[#121212] border border-white/5 rounded-2xl px-6 md:px-8 py-6 cursor-pointer select-none transition-colors duration-200 hover:bg-[#161616]"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-helvetica text-base md:text-xl font-[400] text-white">
                    {faq.question}
                  </span>

                  <div className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/60 flex-shrink-0">
                    {isOpen ? <FaMinus /> : <FaPlus />}
                  </div>
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                    transition:
                      "grid-template-rows 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  <div style={{ overflow: "hidden" }}>
                    <p className="pt-4 pb-1 font-helvetica text-white/70 text-[1rem] font-[300] max-w-[100%]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default FAQ;
