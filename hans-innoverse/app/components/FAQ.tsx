import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqData = [
  {
    question: "What is the date and duration of the hackathon?",
    answer:
      "The hackathon will be held on 22nd February and will run for 12 hours.",
  },
  {
    question: "Where will the hackathon take place?",
    answer: "The venue for the event is Hansraj College.",
  },
  {
    question: "What are the prize amounts?",
    answer:
      "The prize money will be distributed as follows: <ul><li>1st Prize: ₹5,000</li><li>2nd Prize: ₹3,000</li><li>3rd Prize: ₹2,000</li></ul>",
  },
  {
    question: "Who can participate in the hackathon?",
    answer:
      "The hackathon is open to students, professionals, and coding enthusiasts. Please check the registration guidelines for eligibility details.",
  },
  {
    question: "How can I register for the hackathon?",
    answer:
      "You can register through Unstop. Registration closes on 31st January 2025.",
  },
  {
    question: "What do I need to bring?",
    answer:
      "Bring your own laptop, chargers, extension cord and other necessary equipment. Wi-Fi and power outlets will be provided.",
  },
  {
    question: "Will food and refreshments be provided?",
    answer: "Yes, snacks and lunch will be provided during the hackathon.",
  },
  {
    question: "Can I participate remotely?",
    answer:
      "No, this is an on-site event, and participants must be present at Hansraj College for final round.",
  },
  {
    question: "Will there be support during the event?",
    answer:
      "Yes, volunteers will be available to guide you and answer questions during the hackathon.",
  },
  {
    question: "When will the winners be announced?",
    answer:
      "Winners will be announced immediately after the project presentations at the end of the Hackathon.",
  },
  {
    question: "Whom can I contact for more information?",
    answer:
      "For queries, reach out to us at [contact email] or call [contact number].",
  },
  {
    question: "Will accomodations be provided to the participants?",
    answer: "No, accomodations won't be provided to the participants.",
  },
  {
    question: "Can we bring a mentor along with the team?",
    answer: "No, only the participants would be allowed to enter the campus",
  },
];

export default function FaqComponent() {
  return (
    <section
      id="faq"
      className="min-h-screen py-12 sm:py-10 relative z-50 bg-custom-image bg-contain font-mont"
      // className="min-h-screen py-12 sm:py-20 relative z-50 bg-custom-image bg-cover"
    >
      <div className="text-gray-200 relative z-10 font-extrabold font-mont text-5xl animate-in slide-in-from-bottom-4 fade-in-5 duration-700 px-7">
        FAQs
      </div>
      <div className="px-6 mt-6 mb-6">
        {faqData.map((faq, index) => (
          <Accordion
            key={index}
            // className="bg-transparent border border-white/30 mb-2 rounded-lg overflow-hidden"
            className="bg-transparent border-b border-gray-600 mb-2 rounded-lg overflow-hidden"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="text-white" />}
              className="font-semibold text-gray-200 hover:bg-white/5 transition-colors"
            >
              {faq.question}
            </AccordionSummary>
            <AccordionDetails className="border-t border-white/30">
              <div
                dangerouslySetInnerHTML={{ __html: faq.answer }}
                className="text-white/90"
              />
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </section>
  );
}
