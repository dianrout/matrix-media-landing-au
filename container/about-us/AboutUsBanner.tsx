import AboutUsBannerImage from "@public/images/about-us-banner.png"
import { useTranslation } from "next-i18next"
import Partner1 from "public/images/Partner1.png"
import Partner1Hover from "public/images/Partner1Hover.png"
import Partner2 from "public/images/Partner2.png"
import Partner2Hover from "public/images/Partner2Hover.png"

const AboutUsBanner = () => {
  const { t } = useTranslation()
  return (
    <div className="2xl:pb-[120px] pb-[60px]">
      <h1 className="text-center text-[32px] pc:text-[48px] Roboto-700 uppercase leading-[57px] pt-[45px] 2xl:pt-[75px] pb-[30px] 2xl:pb-[48px] text-text-orange">
        {t("common.about_us")}
      </h1>
      <img
        src={AboutUsBannerImage.src}
        alt="about-us"
        className="m-auto mb-[60px] 2xl:mb-[120px] object-cover"
      />
      <div className="w-full bg-[#289B69] text-white">
        <div className="max-w-[1520px] m-auto py-[30px] 2xl:py-[60px] px-[40px] xs:px-[20px] 2xl:px-0 flex flex-col pc:flex-row justify-between lg:gap-[48px]">
          <div className="w-[40%] pc:mx-auto">
            <h1 className="text-[32px] pc:text-[48px] leading-[58px] uppercase Roboto-700 pc:text-center 2xl:text-left">
              Who we are
            </h1>
          </div>
          <div className="pc:flex-1 text-justify">
            <h2 className="flex-1 text-[16px] sm:text-[20px] text-[#EDEDED] 2xl:text-[24px] leading-[36px]">
              {t("common.about_us_1")}
            </h2>
            <h2 className="flex-1  text-[16px] sm:text-[20px] text-[#EDEDED] 2xl:text-[24px] leading-[36px] py-[24px]">
              {t("common.about_us_2")}
            </h2>
            <h2 className="flex-1  text-[16px] sm:text-[20px] text-[#EDEDED] 2xl:text-[24px] leading-[36px] pb-[30px] 2xl:pb-[60px]">
              {t("common.about_us_3")}
            </h2>
            <h2 className="text-[24px] text-white Roboto-500 leading-[24px] uppercase pb-4">
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
        </div>
      </div>
    </div>
  )
}

export default AboutUsBanner
