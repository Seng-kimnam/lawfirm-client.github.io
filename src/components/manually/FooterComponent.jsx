import {
  CallCalling,
  Facebook,
  Location,
  Musicnote,
  Send2,
  SmsSearch,
} from "iconsax-reactjs";
import logo from "../../assets/images/gclawfirm.jpg";
import { Link } from "react-router";
const FooterComponent = () => {
  return (
    <footer className="bg-[#001a3b] text-[#dedede]">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <article className="grid gap-10 lg:grid-cols-2">
          <div>
          <img
            src={logo}
            alt="gclaw's logo"
            className="h-24 w-24 rounded-full object-cover"
          />
          <p className="mt-6 max-w-prose text-sm leading-relaxed text-[#dedede]/90 sm:text-base">
            Our office provides trusted legal counsel in business, property,
            and
            dispute matters with practical solutions and client-focused service.
          </p>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold sm:text-3xl">Location</h1>
            <p className="flex items-start gap-x-3 text-sm leading-relaxed text-[#dedede]/90 sm:text-base">
              <Location className="mt-0.5 size-5 shrink-0 sm:size-6" color="#dedede" variant="Bold" />
              <span>
                #73, St. M-12, Borey Penh Hout The Star Mera Garden, Sangkat Cheung Aek, Khan Dangkor, Phnom Penh, Cambodia.
              </span>
            </p>
            <p className="flex items-center gap-x-3 text-sm text-[#dedede]/90 sm:text-base">
              <CallCalling className="size-5 shrink-0 sm:size-6" color="#dedede" variant="Bold" />
              <Link className="hover:underline" to="https://t.me/+85577296768">
                <span>(+855) 77 29 67 68</span>
              </Link>
            </p>
            <p className="flex items-center gap-x-3 text-sm text-[#dedede]/90 sm:text-base">
              <SmsSearch className="size-5 shrink-0 sm:size-6" color="#dedede" variant="Bold" />
              <Link className="hover:underline" to="mailto:gclawgroup168@gmail.com">
                <span>gclawgroup168@gmail.com</span>
              </Link>
            </p>
          </div>
        </article>
      </div>

      <div className="border-t border-[#dedede]/30">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:text-base lg:px-8">
          <p>&copy; 2025 GCLaw GROUP. All Rights Reserved.</p>
          <ul className="list-none flex flex-wrap items-center gap-x-4 gap-y-2">
            <li className="text-[#dedede]/90">Follow us on:</li>
            <li>
              <Link
                title="Facebook"
                to="https://web.facebook.com/profile.php?id=100057263006025"
              >
                <Facebook size="28" color="#d9e3f0" variant="Bold" />
              </Link>
            </li>
            <li>
              <Link title="Telegram" to="https://t.me/pisallaw">
                <Send2 size="28" color="#d9e3f0" variant="Bold" />
              </Link>
            </li>
            <li>
              <Link title="Tik Tok" to={"https://www.tiktok.com/@attyhongpisal"}>
                <Musicnote size="28" color="#d9e3f0" variant="Bold" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
