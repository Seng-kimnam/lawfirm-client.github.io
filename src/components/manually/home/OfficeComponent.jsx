import { Button } from "@/components/ui/button";
import {
  ArrowRight2,
  CallCalling,
  Location,
  SmsSearch,
} from "iconsax-reactjs";
import React from "react";
import { Link } from "react-router";
import MapComponent from "../MapComponent";

const OfficeComponent = () => {
  return (
    <section className="mx-auto my-16 max-w-6xl px-4 sm:my-24 sm:px-6 lg:px-8">
      <h3 className="my-4 text-center text-3xl font-bold text-[#d4af37] sm:text-4xl">
        Our Office
      </h3>
      <h1 className="mx-auto max-w-4xl py-4 text-center text-lg font-light text-[#001a3b] sm:text-2xl">
        GCL Law Group (“GCL”, “we”, “our”, or “us”) is a results-oriented law
        group offering a wide range of legal services to individuals and
        businesses, ranging from new entrants to well-established businesses in
        Cambodia, with particular expertise in offering complex and tailored
        legal advice and services to foreign investors and corporations.
      </h1>

      <article className="my-10 rounded-3xl bg-[#dedede]">
        <div className="grid grid-cols-1 items-stretch justify-center gap-0 rounded-4xl lg:grid-cols-2">
          <div className="rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none">
            <MapComponent />
          </div>
          <div className="flex flex-col items-start gap-y-6 p-6 font-poppins text-sm font-semibold text-[#555353] sm:p-10 sm:text-base">
            <p className="flex items-start gap-x-4">
              <Location className="mt-0.5 size-10 shrink-0 sm:size-14" color="#787878" variant="Bold" />
              <span>
                Address: #73, St. M-12, Borey Penh Hout The Star Mera Garden, Sangkat Cheung Aek, Khan Dangkor, Phnom Penh, Cambodia.
              </span>
            </p>
            <p className="flex items-center gap-x-4">
              <CallCalling className="size-8 shrink-0 sm:size-10" color="#787878" variant="Bold" />
              <span>Phone: (+855) 77 29 67 68</span>
            </p>
            <p className="flex items-center gap-x-4">
              <SmsSearch className="size-8 shrink-0 sm:size-10" color="#787878" variant="Bold" />
              <Link to="mailto:panhaneang.gcl@gmail.com">
                <span className="text-[#787878]">
                  {" "}
                  Email: panhaneang.gcl@gmail.com
                </span>
              </Link>
            </p>
            <Link to={"/contact-us"}>
              <Button
                className="bg-[#001a3b] text-[#dedede] text-sm mt-4 
                     items-center gap-2 py-6 rounded-full cursor-pointer border-2
                      hover:bg-[#dedede]  hover:text-[#001a3b] border-white  hover:border-2 
                      hover:border-[#001a3b] transition-all duration-200"
              >
                <span className="text-lg pl-3">Contact Us</span>
                <ArrowRight2 className="hover:text-[#001a3b] size-4 text-center animate-ping duration-200 delay-200 transition-all" />
              </Button>
            </Link>
          </div>
        </div>
      </article>
      {/* </Carousel> */}
    </section>
  );
};

export default OfficeComponent;
