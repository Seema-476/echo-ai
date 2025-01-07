import React, { useState } from 'react'
import Heading from '../common/Heading';
import { FREQUENTLY_ASK_QUESTIONS_LIST } from '../utils/helper'

const FrequentlyAskQuestions = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };
  return (
    <div className="bg-z-black pb-[178px] pt-[105px] -mt-[2px]" id='faq'>
      <div className="container">
        <Heading text="FAQs" />
        <div className="pt-[60px]">
          {
            FREQUENTLY_ASK_QUESTIONS_LIST.map((item, index) => (
              <div key={index} className="max-w-[1022px] mx-auto">
                <div className={`border border-white border-opacity-10 mb-6 rounded-xl ${openAccordion === index
                  ? "faq-gradient-border"
                  : "border-white border-opacity-10"
                  }`}>
                  <button
                    onClick={() => toggleAccordion(index)}
                    className={`font-medium text-xl leading-7 text-white flex justify-between items-center text-start pl-6 py-6 max-w-[974px] w-full ${openAccordion === index ? "pb-4" : "pb-6"}`}
                  >
                    {item.question}
                    <img
                      src="/assets/images/svg/faq-arrow.svg"
                      alt={openAccordion === index ? "Collapse" : "Expand"}
                      className={`w-6 h-6 ml-3 size-5 transition-transform duration-500 transform ${openAccordion === index ? "rotate-180" : "rotate-0"
                        }`}/>
                  </button>
                  <div
                    className={`transition-all duration-700 ease-in-out overflow-hidden ${openAccordion === index
                      ? "opacity-100"
                      : "max-h-0 opacity-0"
                      }`}>
                    <div className="transition-all duration-700 ease-in-out">
                      {item.answer && <p className="text-white font-normal text-base leading-7 pl-6 pb-6 max-w-[950px]">{item.answer}</p>}
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