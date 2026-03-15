import { Button } from "@/components/ui/button";
import { ArrowRight2 } from "iconsax-reactjs";
import React from "react";
import { Link } from "react-router";

const WelcomeComponent = () => {
  return (
    <section className="mx-auto max-w-4xl px-4 py-10 text-center sm:px-6 lg:px-8">
      <h3 className="text-[#d4af37] text-xl font-bold sm:text-2xl">Welcome to</h3>
      <h1 className="my-6 text-3xl font-extrabold text-[#2c3e50] sm:text-4xl">
        GC Law Group
      </h1>
      <article>
        <p className="mx-auto max-w-prose text-sm leading-relaxed text-[#001a3b]/90 sm:text-base">
          At GC Law group, we are committed to delivering trusted, effective,
          and professional legal services. Our mission is to protect your
          rights, guide you through complex legal matters, and provide clear
          solutions with integrity and expertise. Whether you are facing a legal
          challenge, seeking professional advice, or need representation you can
          depend on, our team is here to help. We take pride in offering
          personalized attention, transparent communication, and strong advocacy
          for every client. Thank you for choosing GC Law group. Your legal
          matters are our priority — and your justice is our commitment.
        </p>
      </article>
      <Link to={"/about-us"}>
        <Button
          className="bg-[#001a3b] text-white text-sm mt-8
         items-center gap-2 py-6 rounded-full cursor-pointer border-2
          hover:bg-white  hover:text-[#001a3b] border-white  hover:border-2 
          hover:border-[#001a3b] transition-all duration-200"
        >
          <span className="text-lg pl-3">Show more</span>
          <ArrowRight2 className="hover:text-[#001a3b] size-4 text-center animate-ping duration-200 delay-200 transition-all" />
        </Button>
      </Link>
    </section>
  );
};

export default WelcomeComponent;
