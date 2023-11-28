import ButtonComponent from "@components/Button"
import BannerImage from "@public/images/banner.png"
import { useTranslation } from "next-i18next"
import Partner1 from "public/images/Partner1.png"
import Partner1Hover from "public/images/Partner1Hover.png"
import Partner2 from "public/images/Partner2.png"
import Partner2Hover from "public/images/Partner2Hover.png"
import { Link } from "react-scroll"

const Banner = () => {
  const { t } = useTranslation()
  return (
    <div className="w-full bg-[#289B69] text-white">
      <div className="min-h-[100vh] max-w-[1520px] m-auto flex items-center justify-betweem px-[20px] sd:px-[40px] 2xl:px-0 gap-[40px] flex-col sd:flex-row pt-[110px] sd:pt-0">
        <div className="flex-1">
          <h1 className="text-[38px] sm:text-[42px] pc:text-[55px] 2xl:text-[64px] Roboto-600 xs:leading-[40px] leading-[60px] 2xl:leading-[80px] pb-[16px] 2xl:pb-[24px]">
            Leading the trend on social networking sites
          </h1>
          <h2 className="xs:text-[14px] text-[16px] pc:text-[18px] 2xl:text-[20px] text-[#EDEDED] leading-[30px] pb-[20px] sm:pb-[40px] 2xl:pb-[44px] pr-[30px]">
            {t("common.banner_desc")}
          </h2>
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
            <ButtonComponent className="uppercase w-fit py-[16px] text-[18px] leading-[27px] mb-[50px] sm:mb-[30px] 2xl:mb-[68px]">
              {t("common.get_consult")}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6 12C6 11.8011 6.07902 11.6103 6.21967 11.4696C6.36032 11.329 6.55109 11.25 6.75 11.25H15.4395L12.219 8.03097C12.0782 7.89014 11.9991 7.69913 11.9991 7.49997C11.9991 7.30081 12.0782 7.1098 12.219 6.96897C12.3598 6.82814 12.5508 6.74902 12.75 6.74902C12.9492 6.74902 13.1402 6.82814 13.281 6.96897L17.781 11.469C17.8508 11.5386 17.9063 11.6214 17.9441 11.7125C17.9819 11.8036 18.0013 11.9013 18.0013 12C18.0013 12.0986 17.9819 12.1963 17.9441 12.2874C17.9063 12.3785 17.8508 12.4613 17.781 12.531L13.281 17.031C13.1402 17.1718 12.9492 17.2509 12.75 17.2509C12.5508 17.2509 12.3598 17.1718 12.219 17.031C12.0782 16.8901 11.9991 16.6991 11.9991 16.5C11.9991 16.3008 12.0782 16.1098 12.219 15.969L15.4395 12.75H6.75C6.55109 12.75 6.36032 12.671 6.21967 12.5303C6.07902 12.3896 6 12.1989 6 12Z"
                  fill="white"
                />
              </svg>
            </ButtonComponent>
          </Link>
          <h2 className="text-[16px] pc:text-[20px] 2xl:text-[24px] text-[#EDEDED] Roboto-500 leading-[24px] uppercase pb-4">
            {t("common.our_partner")}
          </h2>
          <div>
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
          </div>
        </div>
        <div className="sm:max-w-[50%] pc:max-w-[100%]">
          <img src={BannerImage.src} alt="banner" className="z-2" />
        </div>
      </div>
    </div>
  )
}

export default Banner
