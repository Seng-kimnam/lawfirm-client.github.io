import React from "react";
import KeyValueComponent from "../KeyValueComponent";
import keyValueImage1 from "../../../assets/images/KeyValue1.png";
import keyValueImage2 from "../../../assets/images/KeyValue2.png";
import keyValueImage3 from "../../../assets/images/KeyValue3.png";

const ourValueList = [
  {
    src: keyValueImage1,
    title: "Integrity & Ethics",
    description:
      "We uphold the highest standards of honesty, confidentiality, and professional conduct. Every action we take puts clients’ trust and justice first.",
  },
  {
    src: keyValueImage2,
    title: "Commitment to Clients",
    description:
      "We provide dedicated, personalized legal solutions. Our clients’ goals become our mission, and we stand by them from consultation to resolution.",
  },
  {
    src: keyValueImage3,
    title: "Excellence in Legal Expertise",
    description:
      "We deliver high-quality legal representation through deep knowledge, strategic thinking, and continuous learning to ensure the best possible outcomes.",
  },
];
const OurValueComponent = () => {
  return (
    <article className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="mb-6 text-center text-2xl font-bold text-[#D4AF37] underline">
        What are our Key Values ?
      </h1>
      <p className="mx-auto max-w-prose text-center text-sm leading-relaxed text-[#001a3b]/90 sm:text-base">
        Our law firm is built on a foundation of integrity, client-focused
        service, and professional excellence. We uphold the highest ethical
        standards, ensuring honesty and transparency in every action we take.
        Our clients’ needs guide our decisions, and we are committed to
        providing clear communication, personalized attention, and dependable
        legal support. Through deep legal expertise and a dedication to quality,
        we strive to deliver solutions that protect our clients’ rights and
        achieve the best possible outcomes.
      </p>
      <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {ourValueList.map((value, index) => (
          <KeyValueComponent
            key={index}
            src={value.src}
            title={value.title}
            description={value.description}
          />
        ))}
      </div>
    </article>
  );
};

export default OurValueComponent;
