import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { request } from "../constants/api";
import BannerComponent from "../components/manually/BannerComponent";
import { ArrowLeft, CallCalling, SmsSearch } from "iconsax-reactjs";
import ReadMoreComponent from "../components/manually/ReadMoreComponent";
const MemeberDetailComponent = () => {
  const { id } = useParams();
  const [specificLawyerMember, setSpecificLawyerMember] = useState({});
  // create this state to hold the file name for avoid undefined issue into preview endpoint before mounting
  const [fileName, setFileName] = useState("");
  const { pathname } = useLocation();

  function readMoreText() {}
  useEffect(() => {
    async function fetchLawyers() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth", // for a smooth scrolling animation
      });

      try {
        const { payload } = await request(`/lawyers/${id}`, "GET");

        setSpecificLawyerMember(payload);
        setFileName(payload?.image);
      } catch (error) {
        console.error("Error fetching lawyers:", error);
      }
    }
    fetchLawyers();
  }, []);

  return (
    <section>
      <BannerComponent
        pathname={pathname}
        pageName={`Lawyer ${specificLawyerMember?.fullName}`}
      />
      <Link
        to={"/our-team"}
        className="mx-auto mt-6 inline-flex max-w-6xl items-center gap-x-2 rounded-4xl px-4 py-3 text-[#001a3b] transition-all duration-200 hover:bg-[#001a3b] hover:text-white sm:px-6 sm:py-4"
      >
        <ArrowLeft className=" size-6 text-center  bounce" />
        <span className="text-lg ">Back to members</span>
      </Link>
      {specificLawyerMember ? (
        <article className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[320px_1fr] lg:px-8">
          <div className="flex justify-center">
            <img
              className="h-auto w-full max-w-xs rounded-xl object-cover shadow-sm sm:max-w-sm"
              src={`https://deploy-backend-production-f9c1.up.railway.app/api/v1/files/preview-file?fileName=${fileName}`}
              alt=""
            />
          </div>
          <div className="min-w-0">
            <h1 className="text-2xl font-bold font-poppins text-[#D4AF37] sm:text-3xl">
              Lawyer {specificLawyerMember?.fullName}
            </h1>
            <h3 className="text-lg my-10">{specificLawyerMember?.title}</h3>
            <div className="h-1 w-20 bg-[#D4AF37]"></div>
            <p className="flex items-center gap-x-4 py-4 text-base text-[#001a3b] sm:text-lg">
              <CallCalling className="size-8 sm:size-10" variant="Bold" />
              {specificLawyerMember?.phoneNumber}
            </p>
            <p className="flex items-center gap-x-4 py-4 text-base text-[#001a3b] sm:text-lg">
              <SmsSearch className="size-8 sm:size-10" variant="Bold" />
              <Link to={`mailto:${specificLawyerMember?.email}`}>
                <span>{specificLawyerMember?.email}</span>
              </Link>
            </p>
            <ReadMoreComponent
              text={specificLawyerMember.description}
              key={specificLawyerMember.email}
              maxLength={1000}
            />
          </div>
        </article>
      ) : (
        <h1>Sorry our member Not Found</h1>
      )}
    </section>
  );
};

export default MemeberDetailComponent;
