import React, { useState } from 'react'
import Heading from '../common/Heading';
import { FREQUENTLY_ASK_QUESTIONS_LIST } from '../utils/helper'

const FrequentlyAskQuestions = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };
  return (
    <div className="bg-z-black xl:pb-[178px] lg:pb-32 py-6 xl:pt-[105px] lg:pt-16 sm:py-16 -mt-[2px]" id='faq'>
      <div className="container">
        <Heading text="FAQs" />
        <div className="xl:pt-[60px] pt-10">
          {
            FREQUENTLY_ASK_QUESTIONS_LIST.map((item, index) => (
              <div key={index} className="max-w-[1022px] mx-auto">
                <div className={`border border-white border-opacity-10 mb-6 rounded-xl ${openAccordion === index
                  ? "faq-gradient-border"
                  : "border-white border-opacity-10"
                  }`}>
                  <button
                    onClick={() => toggleAccordion(index)}
                    className={`font-medium sm:text-xl text-base sm:leading-7 text-white flex justify-between items-center text-start max-sm:!p-4 sm:px-6 pt-6 w-full ${openAccordion === index ? "pb-4" : "pb-6"}`}
                  >
                    {item.question}
                    <img
                      src="/assets/images/svg/faq-arrow.svg"
                      alt={openAccordion === index ? "Collapse" : "Expand"}
                      className={`sm:w-6 w-4 h-4 sm:h-6 ml-3 size-5 transition-transform duration-500 transform ${openAccordion === index ? "rotate-180" : "rotate-0"
                        }`}/>
                  </button>
                  <div
                    className={`transition-all duration-700 ease-in-out overflow-auto ${openAccordion === index
                      ? "max-sm:h-[150px] opacity-100"
                      : "max-h-0 opacity-0"
                      }`}>
                    <div className="transition-all duration-700 ease-in-out">
                      {item.answer && <p className="text-white font-normal sm:text-base text-sm sm:leading-7 sm:pl-6 pl-4 pb-6 max-sm:!pr-4 max-lg:!pr-6 lg:max-w-[950px]">{item.answer}</p>}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
   </div>
  )
}

export default FrequentlyAskQuestions