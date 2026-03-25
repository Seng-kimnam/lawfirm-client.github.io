import { Carousel } from "antd";
import { Button } from "@/components/ui/button";
import {
  ArrowCircleLeft2,
  ArrowCircleRight2,
  ArrowRight,
} from "iconsax-reactjs";
import { Link } from "react-router";
import { request } from "../../../constants/api";
import { useEffect, useState } from "react";

const TeamComponent = () => {
  const [lawyerList, setLawyerList] = useState([]);

  console.log("lawyer list", lawyerList);
  useEffect(() => {
    async function fetchLawyers() {
      try {
        const { payload } = await request(
          "/lawyers",
          "GET",
          "application/json",
        );
        setLawyerList(payload);
      } catch (error) {
        console.error("Error fetching lawyers:", error);
      }
    }

    fetchLawyers(); // initial load

    const intervalId = setInterval(fetchLawyers, 5000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <article className="mx-auto mt-16 max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-10 rounded-4xl bg-[#f5f5f5] p-6 sm:p-10 lg:grid-cols-2">
        <div>
          <span className="text-xl font-bold text-[rgb(212,175,55)]">
            Our Team
          </span>
          <p className="mt-6 text-lg leading-relaxed text-[#001a3b] sm:text-xl lg:text-2xl lg:leading-10">
            At GCL, our skilled professionals are our most valuable asset. We
            take pride in our team of highly experienced, zeal, and dedicated
            attorneys, associates, complemented by exceptional supporting staff.
            Together, we are committed to delivering outstanding and tailored
            legal services to our clients
          </p>
          <Link to={"/our-team"}>
            <Button className="mt-8 items-center gap-2 rounded-full border-2 border-white bg-[#001a3b] py-6 text-sm text-white transition-all duration-200 hover:border-[#001a3b] hover:bg-white hover:text-[#001a3b]">
              <span className="text-lg pl-3">Show more</span>
              <ArrowRight className="size-4 text-center transition-all duration-200 delay-200 hover:text-[#001a3b] animate-ping" />
            </Button>
          </Link>
        </div>

        <div className="flex items-center justify-center">
          <Carousel
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
            className="w-full max-w-md"
            arrows
            infinite={true}
          >
            {lawyerList.map(({ image, title, appUserId, fullName }) => (
              <div
                className="flex bg-[#d9dee5]   rounded-3xl flex-col  gap-x-4 border-2 border-[#001A3B] items-center h-auto justify-center"
                key={appUserId}
              >
                {/* this image will be fetching via api */}
                <img
                  className="mx-auto mt-4 h-72 w-full rounded-3xl object-contain sm:h-80"
                  alt={`https://deploy-backend-production-f9c1.up.railway.app/api/v1/files/preview-file?fileName=${image}`}
                  src={`https://deploy-backend-production-f9c1.up.railway.app/api/v1/files/preview-file?fileName=${image}`}
                />
                <h3 className="text-gray-800 p-4 font-poppins text-center text-2xl">
                  Full Name: {fullName}
                </h3>
                <h3 className="text-gray-800 p-10 font-poppins text-center text-2xl">
                  Title: {title}
                </h3>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </article>
  );
};

export default TeamComponent;
