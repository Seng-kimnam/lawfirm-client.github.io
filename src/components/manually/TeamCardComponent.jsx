import { ArrowRight, Facebook, Send2 } from "iconsax-reactjs";
import { Link, useNavigate } from "react-router";

const TeamCardComponent = ({
  appUserId,
  src,
  userName,
  title,
  facebookLink,
  telegramLink,
}) => {
  const goDetail = useNavigate();

  function handleCheckMemberDetail(pathParam) {
    goDetail(pathParam);
  }

  return (
    // the card container
    <div
      className="
  flex w-full max-w-sm flex-col items-center justify-center gap-y-6 text-center
  p-4 
  border-3 border-[#D4AF3780]
  transition-all duration-300
  hover:scale-105
  hover:border-transparent
  hover:shadow-[0_0_18px_2px_#D4AF3780]
"
    >
      <img
        className="h-64 w-full rounded-md object-contain sm:h-72"
        src={`http://localhost:8080/api/v1/files/preview-file?fileName=${src}`}
        alt={src}
        title={userName}
      />
      <h2 className="text-2xl font-poppins font-bold text-[#001a3b]">
        {userName}
      </h2>
      <p>{title}</p>
      <div>
        <ul className="flex list-none flex-wrap items-center justify-center gap-6">
          <li>
            <Link title="Facebook" to={facebookLink}>
              <Facebook size="32" color="#D4AF37" variant="Bold" />
            </Link>
          </li>
          <li>
            <Link title="Telegram" to={telegramLink}>
              <Send2 size="32" color="#D4AF37" variant="Bold" />
            </Link>
          </li>

          <li>
            <button
              onClick={() => handleCheckMemberDetail(`/our-team/${appUserId}`)}
              className="flex justify-center text-[#001a3b] items-center gap-x-2 hover:underline cursor-pointer "
            >
              <span className="text-lg pl-3">Show more</span>
              <ArrowRight className=" size-6 text-center  bounce" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TeamCardComponent;
