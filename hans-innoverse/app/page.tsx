/* eslint-disable @typescript-eslint/no-explicit-any */
import Script from "next/script";
import PrizesComponent from "./components/Prizes";
import TimelineComponent from "./components/Timeline";
import OrganizersComponent from "./components/Organizers";
import ThemesComponent from "./components/Themes";
import MentorsComponent from "./components/Mentors";
import FaqComponent from "./components/FAQ";
import BgAnimation from "./components/BgAnimation";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Script id="structured-data" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Event",
            "name": "HansInnoverse Hackathon 2024",
            "description": "Join HansInnoverse Hackathon 2024, where teams combine two innovative themes to create solutions. Teams selected for the Final Offline Round will have 12 hours to build upon their ideas with a Final Round Challenge.",
            "startDate": "2024-12-27T00:00:00+05:30",
            "endDate": "2025-02-22T23:59:59+05:30",
            "eventStatus": "https://schema.org/EventScheduled",
            "eventAttendanceMode": "https://schema.org/MixedEventAttendanceMode",
            "location": {
              "@type": "Place",
              "name": "Hansraj College",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Mahatma Hans Raj Marg",
                "addressLocality": "Malka Ganj",
                "addressRegion": "Delhi",
                "postalCode": "110007",
                "addressCountry": "IN"
              }
            },
            "organizer": {
              "@type": "Organization",
              "name": "Ordinateur, Hansraj College",
              "url": "https://hans-innoverse.vercel.app"
            },
            "offers": {
              "@type": "Offer",
              "url": "https://hans-innoverse.vercel.app/register",
              "price": "0",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock",
              "validFrom": "2024-12-27T00:00:00+05:30",
              "validThrough": "2025-01-31T23:59:59+05:30"
            },
            "performer": {
              "@type": "Organization",
              "name": "Ordinateur - The Computer Science Society"
            },
            "image": [
              "https://hans-innoverse.vercel.app/logo.png"
            ],
            "url": "https://hans-innoverse.vercel.app",
            "audience": {
              "@type": "Audience",
              "audienceType": "College Students"
            },
            "sponsor": {
              "@type": "Organization",
              "name": "Hansraj College"
            },
            "subEvent": [
              {
                "@type": "Event",
                "name": "Round 1: PPT Submission",
                "description": "Teams must upload a detailed PowerPoint presentation on Unstop for evaluation.",
                "endDate": "2025-02-07T23:59:59+05:30"
              },
              {
                "@type": "Event",
                "name": "Round 2: Online Presentation",
                "description": "Teams will present their solutions live to a panel of judges via an online platform with Q&A session.",
                "startDate": "2025-02-14T09:00:00+05:30"
              },
              {
                "@type": "Event",
                "name": "Round 3: Offline Final Round",
                "description": "Selected teams will participate in a 12-hour final round challenge at the college campus.",
                "startDate": "2025-02-22T09:00:00+05:30"
              }
            ],
            "keywords": [
              "Education",
              "Gaming",
              "Transport",
              "Health",
              "Cybersecurity",
              "FinTech",
              "E-commerce",
              "Social Media",
              "IoT"
            ],
            "superEvent": {
              "@type": "Event",
              "name": "HansInnoverse Hackathon 2024-25",
              "description": "A multi-round hackathon featuring PPT submission, online presentations, and an offline final round."
            },
            "additionalProperty": [
              {
                "@type": "PropertyValue",
                "name": "Team Size",
                "value": "2-4 members"
              },
              {
                "@type": "PropertyValue",
                "name": "Evaluation Criteria",
                "value": "Problem Statement, Solution, Feasibility, Viability, Business Opportunity, UI/UX, Social Impact, Tech Awareness"
              }
            ]
          }
        `}
      </Script>

      <BgAnimation />
      <div>
        <Navbar />
        <Hero />
        <About />
        <ThemesComponent />
        <TimelineComponent />
        <PrizesComponent />
        <section
          id="team"
          className="min-h-screen py-12 sm:py-10 relative z-50 bg-gradient-to-r from-[#000000] to-[#05101d]"
        >
          <MentorsComponent />
          <OrganizersComponent />
        </section>
        <FaqComponent />
        <Banner />
        <Footer />
      </div>
    </>
  );
}
