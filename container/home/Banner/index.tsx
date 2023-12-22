import BannerImage from "@public/images/banner.png"
import BannerImage1 from "@public/img/banner1.png"
import BannerImage2 from "@public/img/banner2.png"
import BannerImage3 from "@public/img/banner3.png"
import IconFacebook from "@public/images/icons/IconFacebook"
import IconTiktok from "@public/images/icons/IconTiktok"
import IconYoutube from "@public/images/icons/IconYoutube"
import { useTranslation } from "next-i18next"
import { Link } from "react-scroll"

const Banner = () => {
  const { t } = useTranslation()
  return (
    <div
      className="w-full"
      style={{
        background:
          "linear-gradient(180deg, rgba(216, 254, 239, 0.30) 0%, rgba(219, 248, 237, 0.00) 94.42%)"
      }}
    >
      <div
        className="relative max-w-[1600px] m-auto flex items-center justify-betweem px-[20px] sd:px-[40px] 2xl:px-0 gap-[40px] flex-col sd:flex-row pt-[80px] sd:pt-0"
        style={{
          minHeight: "max(calc(100vh - 90px), 880px)"
        }}
      >
        <img
          src={BannerImage2.src}
          alt="banner2"
          className="hidden md:block absolute bottom-[-100px] left-[-100px]"
        />
        <div className="flex-1 relative">
          <div className="text-[38px] sm:text-[42px] pc:text-[55px] 2xl:text-[64px] Mulish-800 xs:leading-[40px] leading-[70px] 2xl:leading-[90px] pb-[16px] 2xl:pb-[24px] text-[#2A323C]">
            Welcome to the world of{" "}
            <span className="text-primary inline-flex text-nowrap">
              CREATION{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="58"
                height="59"
                viewBox="0 0 58 59"
                fill="none"
                className="m-auto ml-[20px] xs:hidden"
              >
                <rect
                  y="0.902344"
                  width="58"
                  height="58"
                  rx="12.2105"
                  fill="#FBEDCA"
                />
                <path
                  d="M28.9992 18.0039C23.2779 18.0039 18.623 22.6584 18.623 28.38C18.623 32.1867 20.7368 35.698 24.0633 37.5128V39.6568C24.0633 40.2538 24.5472 40.7377 25.1441 40.7377H32.8185C33.4154 40.7377 33.8993 40.2539 33.8993 39.6568V37.5157C37.2478 35.7082 39.3753 32.1954 39.3753 28.3801C39.3753 22.6584 34.7204 18.0039 28.9992 18.0039ZM32.3703 35.863C31.9848 36.0385 31.7373 36.4229 31.7373 36.8466V38.576H26.225V36.8466C26.225 36.4247 25.9793 36.041 25.5963 35.8648C22.6734 34.5185 20.7847 31.5804 20.7847 28.38C20.7847 23.8505 24.4697 20.1656 28.9992 20.1656C33.5286 20.1656 37.2136 23.8505 37.2136 28.38C37.2136 31.5854 35.3124 34.5228 32.3703 35.863Z"
                  fill="#EEAF0F"
                />
                <path
                  d="M35.9995 21.9023L28.4995 18.9023L23 20.9023L19.5 26.4023L20 32.4023L24.8799 36.9023L24.9995 39.4023L32.4995 39.9023L32.9995 36.9023L36.9995 33.9023L38.9995 27.9023L35.9995 21.9023Z"
                  fill="#EEAF0F"
                />
                <path
                  d="M31.9892 42.1777H26.0086C25.4116 42.1777 24.9277 42.6616 24.9277 43.2586C24.9277 43.8555 25.4116 44.3394 26.0086 44.3394H31.9892C32.5862 44.3394 33.0701 43.8555 33.0701 43.2586C33.0701 42.6616 32.5862 42.1777 31.9892 42.1777Z"
                  fill="#EEAF0F"
                />
                <path
                  d="M30.261 45.7441H27.739C27.1421 45.7441 26.6582 46.228 26.6582 46.825C26.6582 47.4219 27.1421 47.9058 27.739 47.9058H30.261C30.858 47.9058 31.3419 47.4219 31.3419 46.825C31.3418 46.228 30.858 45.7441 30.261 45.7441Z"
                  fill="#EEAF0F"
                />
                <path
                  d="M15.6707 27.4102div1.7568C11.1641 27.4102 10.6836 27.8907 10.6836 28.4833C10.6836 29.076 11.1641 29.5565 11.7568 29.5565H15.6707C16.2634 29.5565 16.7439 29.076 16.7439 28.4833C16.7439 27.8907 16.2634 27.4102 15.6707 27.4102Z"
                  fill="#EEAF0F"
                />
                <path
                  d="M16.0192 16.4274C15.6 16.0084 14.9205 16.0086 14.5015 16.4279C14.0826 16.8472 14.0828 17.5267 14.5021 17.9456L17.2697 20.7111C17.4793 20.9205 17.7538 21.0252 18.0283 21.0252C18.3031 21.0252 18.5779 20.9203 18.7875 20.7106C19.2064 20.2913 19.2062 19.6119 18.7869 19.1929L16.0192 16.4274Z"
                  fill="#EEAF0F"
                />
                <path
                  d="M29.0009 16.1179C29.5936 16.1179 30.0741 15.6374 30.0741 15.0447V11.1337C30.0741 10.5411 29.5936 10.0605 29.0009 10.0605C28.4082 10.0605 27.9277 10.5411 27.9277 11.1337V15.0447C27.9277 15.6374 28.4082 16.1179 29.0009 16.1179Z"
                  fill="#EEAF0F"
                />
                <path
                  d="M43.2444 16.2717C42.8255 15.8524 42.1459 15.8521 41.7267 16.2711L38.9591 19.0366C38.5399 19.4555 38.5397 20.1351 38.9586 20.5543C39.1681 20.764 39.4429 20.8688 39.7177 20.8688C39.9922 20.8688 40.2667 20.7642 40.4763 20.5548L43.2438 17.7893C43.6631 17.3705 43.6634 16.6909 43.2444 16.2717Z"
                  fill="#EEAF0F"
                />
                <path
                  d="M46.241 27.1191H42.3271C41.7344 27.1191 41.2539 27.5996 41.2539 28.1923C41.2539 28.785 41.7344 29.2655 42.3271 29.2655H46.241C46.8337 29.2655 47.3142 28.785 47.3142 28.1923C47.3142 27.5996 46.8337 27.1191 46.241 27.1191Z"
                  fill="#EEAF0F"
                />
              </svg>
            </span>
          </div>
          <h2 className="xs:text-[16px] text-[18px] pc:text-[18px] 2xl:text-[22px] text-[#5F656D] leading-[30px] pb-[16px] pr-[30px] Mulish-500">
            {t("common.banner_desc")}
          </h2>
          <div className="flex gap-2">
            <p className="xs:text-[16px] text-[18px] pc:text-[18px] 2xl:text-[22px] text-[#5F656D] leading-[30px] pb-[20px] sm:pb-[40px] 2xl:pb-[44px]">
              Support channels:
            </p>
            <div
              className="ml-4 w-[32px] h-[32px] cursor-pointer rounded-[32px] flex items-center justify-center"
              style={{
                background: "rgba(24, 119, 242, 0.20)"
              }}
            >
              <IconFacebook />
            </div>
            <div className="w-[32px] h-[32px] cursor-pointer rounded-[32px] flex items-center justify-center bg-primary/20">
              <IconYoutube />
            </div>
            <div
              className="w-[32px] h-[32px] cursor-pointer rounded-[32px] flex items-center justify-center"
              style={{
                background: "rgba(0, 0, 0, 0.15)"
              }}
            >
              <IconTiktok />
            </div>
          </div>
          <Link
            activeClass="active"
            to="contactUs"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={-100}
            duration={1000}
            isDynamic={true}
            ignoreCancelEvents={false}
          >
            <div
              className="w-[180px] h-[60px] md:w-[270px] md:h-[72px] rounded-[64px] text-center items-center flex justify-center bg-primary text-white text-[20px] mdtext-[24px] Mulish-500 leading-[30px] cursor-pointer relative mb-[30px]"
              style={{
                boxShadow: "3px 7px 15px 0px rgba(211, 17, 17, 0.25)"
              }}
            >
              Contact us
            </div>
          </Link>
          <img
            src={BannerImage3.src}
            alt="banner3"
            className="hidden md:block absolute bottom-[0px] right-[0px]"
          />

          {/* <h2 className="text-[16px] pc:text-[20px] 2xl:text-[24px] text-[#EDEDED] Mulish-500 leading-[24px] uppercase pb-4">
            {t("common.our_partner")}
          </h2> */}
          {/* <div>
            <div className="card cursor-pointer">
              <img src={Partner1.src} alt="Card Back" />
              <img
                src={Partner1Hover.src}
                className="img-top"
                alt="Card Front"
              />
            </div>
            <div className="card cursor-pointer">
              <img src={Partner2.src} alt="Card Back" />
              <img
                src={Partner2Hover.src}
                className="img-top"
                alt="Card Front"
              />
            </div>
          </div> */}
        </div>
        <div className="sm:max-w-[50%] pc:max-w-[100%] relative">
          <img src={BannerImage.src} alt="banner" className="z-2" />
          <img
            src={BannerImage1.src}
            alt="banner1"
            className="absolute top-[30%] left-[-100px]"
          />
        </div>
      </div>
    </div>
  )
}

export default Banner
