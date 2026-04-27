"use client";
import React from "react";
import {FAQs } from "@/constants/data";
import { ChevronDown } from "lucide-react";

import { useState } from "react";


export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
   setOpenIndex(openIndex === index ? null : index);
  };
    

  return (
     <section className="border-t-2 bg-muted/30 px-4">
      
        
    <div className=" md:mx-20 py-8 text-center">
     <h2 className="font-bold text-3xl  md:text-5xl  ">Frequently Asked Questions</h2>
     
        <p className="text-gray-500 py-2 w-full ">Find answers to common questions about our platform</p>

      {FAQs.map((faq, index) => (

        
        <div
          key={index}
          className="border-b p-8 my-2 rounded-lg bg-amber-50 py-4 cursor-pointer"
          onClick={() => toggleFAQ(index)}
        >
          <div className="flex justify-between items-center text-left">
            <h3 className="font-medium">{faq.question}</h3>
           <ChevronDown
                className={`transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
          </div>

          {openIndex === index && (
            <p className="mt-3 text-gray-600 text-left">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
   
    </section>
  );
}






// export default function FAQ(){
//   return(
//     <section>
//        <MaxWidthContainer className="py-20 space-y-5 border-2 text-center">
//           <h2 className="font-bold text-5xl ">Frequently Asked Questions</h2>
//           <p className="text-gray-500 ">Find answers to common questions about our platform</p>
         


//        </MaxWidthContainer>
     
//     </section>
//   )
// }


