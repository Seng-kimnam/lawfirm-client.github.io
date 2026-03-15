import singleBanner from "../../assets/images/single-banner.png";
import { Carousel } from "antd";
const contentStyle = {
  margin: 0,
  // height: "320px",
  color: "#fff",
  textAlign: "center",
  background: "#364d79",
};

const BannerComponent = ({ imageBanner, pathname, pageName }) => {
  const bannerHeightClass = "h-[320px] sm:h-[420px] lg:h-[520px]";

  return (
    <>
      {/* banner for show in home page  */}
      {pathname === "/" && (
        <div className={["relative", bannerHeightClass].join(" ")}>
          <Carousel
            arrows
            className={bannerHeightClass}
            dotPlacement="start"
            infinite={true}
            autoplaySpeed={2000}
            autoplay
          >
            {imageBanner.map((img, index) => (
              <div key={index}>
                <div className="relative" style={contentStyle}>
                  <img
                    src={`http://localhost:8080/api/v1/files/preview-file?fileName=${img}`}
                    alt={img}
                    className={["w-full object-cover brightness-60", bannerHeightClass].join(" ")}
                  />
                </div>
              </div>
            ))}
          </Carousel>

          <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-6">
            <p className="max-w-4xl rounded-2xl bg-gray-700/65 p-6 text-center text-base leading-relaxed text-gray-100 md:text-2xl">
              Our office provides trusted legal counsel in business, property,
              and dispute matters with practical solutions and client-focused
              service.
            </p>
          </div>
        </div>
      )}
      {/* banner for show in about us page  */}
      {pathname !== "/" && (
        <>
          <div>
            <div
              className={["relative flex items-center justify-center bg-red-600", bannerHeightClass].join(" ")}
              style={contentStyle}
            >
              <img
                src={singleBanner}
                alt="Page banner"
                className={["w-full brightness-50 object-cover", bannerHeightClass].join(" ")}
              />
              <h1 className="absolute rounded-4xl bg-black/70 px-6 py-4 text-center text-3xl font-bold text-white sm:text-5xl lg:text-6xl">
                {pageName}
              </h1>
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default BannerComponent;
