import { Button } from "@/components/ui/button";
import { Carousel } from "antd";

import {
  ArrowCircleLeft2,
  ArrowCircleRight2,
} from "iconsax-reactjs";
import { ArrowRight } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const NewsComponent = () => {
  return (
    <section className="my-16 px-4 sm:my-24 sm:px-6 lg:px-8">
      <h3 className="my-4 text-center text-2xl font-bold text-[#d4af37]">
        Our News
      </h3>
      <h1 className="py-4 text-center text-3xl font-light text-[#001a3b] sm:text-4xl">
        Our News and Last Update
      </h1>
      <Carousel
        autoplay
        autoplaySpeed={3000}
        prevArrow={
          <button>
            <ArrowCircleLeft2
              className="-ml-2 sm:-ml-6"
              size="60"
              color="#000000"
              variant="Bold"
            />
          </button>
        }
        nextArrow={
          <button>
            <ArrowCircleRight2
              className="-mr-2 sm:-mr-6"
              size="60"
              color="#000000"
              variant="Bold"
            />
          </button>
        }
        className="mx-auto w-full max-w-5xl"
        arrows
        infinite={true}
      >
        {[1, 2].map((item) => (
          <article key={item} className="my-8 rounded-4xl bg-[#dedede]">
            <div className="grid grid-cols-1 items-stretch justify-center rounded-4xl md:grid-cols-2">
              <div className="rounded-t-3xl bg-[#001a3b] md:rounded-l-3xl md:rounded-tr-none">
                <img
                  className="h-64 w-full rounded-t-3xl object-cover p-4 md:h-full md:rounded-l-3xl md:rounded-tr-none"
                  src="https://img.freepik.com/premium-vector/law-firm-logo-template_231093-187.jpg"
                  alt="image news"
                />
              </div>
              <div className="flex flex-col justify-center p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-[#001a3b]">
                  Welcome to our home page
                </h2>
                <p className="py-6 text-sm leading-relaxed text-[#001a3b]/90 sm:text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam minima nam vero ratione exercitationem vitae,
                  consequuntur debitis veniam. Voluptate velit quos molestias?
                  Delenitinostrum excepturi. Aliquid porro atque blanditiis
                  soluta? Lorem ipsum dolor sit amet consectetur adipisicing
                  elit.
                </p>
                <span>
                  <Link className="flex items-center gap-x-2 hover:underline" to={"/about-us"}>
                    <span className="hover:underline-offset-2 text-lg pl-3 text-[#001a3b] font-poppins font-semibold">
                      Read more
                    </span>
                    <ArrowRight className="hover:text-[#001a3b] text-[#001a3b] size-6 text-center animate-caret-blink duration-200 delay-200 transition-all" />
                  </Link>
                </span>
              </div>
            </div>
          </article>
        ))}
      </Carousel>
      <div className="mt-12 flex items-center justify-center sm:mt-16">
        <Link to={"/documents"}>
          <Button
            className="bg-[#001a3b] text-white text-sm mt-8
         items-center gap-2 py-6 rounded-full cursor-pointer border-2
          hover:bg-white  hover:text-[#001a3b] border-white  hover:border-2 
    hover:border-[#001a3b] transition-all duration-200"
          >
            <span className="text-lg pl-3">View all news</span>
            <ArrowRight className="hover:text-[#001a3b] size-4 text-center animate-ping duration-200 delay-200 transition-all" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default NewsComponent;
