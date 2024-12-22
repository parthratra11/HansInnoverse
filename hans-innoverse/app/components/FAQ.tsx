/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useRef, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function FaqComponent() {
  const [faqData, setFaqData] = useState([]);

  useEffect(() => {
    fetch("/faqs.json")
      .then((response) => response.json())
      .then((data) => setFaqData(data))
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  return (
    <section
      id="faq"
      className="min-h-screen py-12 sm:py-10 relative z-50 bg-custom-image bg-contain font-mont"
    >
      <div className="text-gray-200 relative z-10 font-extrabold font-mont text-5xl animate-in slide-in-from-bottom-4 fade-in-5 duration-700 px-7">
        FAQs
      </div>
      <div className="px-6 mt-6 mb-6">
        {faqData.map((faq, index) => (
          <Accordion
            key={index}
            sx={{
              backgroundColor: "transparent",
              borderBottom: "1px solid rgba(96, 96, 96, 1)",
              borderRadius: "8px",
            }}
            // className="bg-transparent border-b border-gray-600 mb-2 rounded-lg overflow-hidden"
            className="mb-2 overflow-hidden"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="text-white" />}
              sx={{
                fontWeight: "600",
                color: "rgba(255, 255, 255, 0.8)",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                },
              }}
              // className="font-semibold text-gray-200 hover:bg-white/5 transition-colors"
            >
              {faq["question"]}
            </AccordionSummary>
            <AccordionDetails
              // className="border-t border-white/30"
              sx={{
                borderTop: "1px solid rgba(255, 255, 255, 0.3)",
              }}
            >
              <div
                dangerouslySetInnerHTML={{ __html: faq["answer"] }}
                style={{ color: "rgba(255, 255, 255, 0.9)" }}
                // className="text-white/90"
              />
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </section>
  );
}
