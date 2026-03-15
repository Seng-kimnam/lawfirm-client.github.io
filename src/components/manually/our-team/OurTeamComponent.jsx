import { useEffect, useState } from "react";
import { request } from "../../../constants/api";
import TeamCardComponent from "../TeamCardComponent";

const OurTeamComponent = () => {
  const [lawyerList, setLawyerList] = useState([]);

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
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="my-10 text-center text-3xl font-bold text-[#D4AF37] underline">
        Our Group Of Member
      </h1>
      <p className="mx-auto max-w-3xl text-center text-base font-bold text-[#001a3b] sm:text-xl">
        Team of GCLaw group is typically a structure with partners, associates,
        and support staff, each with distinct roles in serving clients.
      </p>

      <article className="my-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {lawyerList.length > 0 ? (
          lawyerList.map(
            ({
              appUserId,
              fullName,
              title,
              image,
              facebookLink,
              tiktokLink,
              telegramLink,
            }) => (
              <TeamCardComponent
                key={appUserId}
                appUserId={appUserId}
                src={image}
                title={title}
                userName={fullName}
                tiktokLink={tiktokLink}
                telegramLink={telegramLink}
                facebookLink={facebookLink}
              />
            ),
          )
        ) : (
          <h1 className="text-center text-3xl font-bold text-red-700">
            Sorry member not found
          </h1>
        )}
      </article>
    </section>
  );
};

export default OurTeamComponent;
