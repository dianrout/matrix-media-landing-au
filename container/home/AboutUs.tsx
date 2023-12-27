import React from "react"
import ABoutUsImage from "@public/img/Aboutus.png"
import { useTranslation } from "next-i18next"

const AboutUs = () => {
  const { t } = useTranslation()

  return (
    <div className="w-full">
      <div className="max-w-[1520px] m-auto">
        <h2 className="text-center mt-[100px] pb-0 sd:mt-[50px] text-primary text-[48px] pc:text-[52px] xl:text-[62px] Mulish-800 uppercase leading-[60px] sm:leading-[90px] w-fit m-auto">
          Who <span className="text-secondary">we are</span>
        </h2>
        <div className="px-[40px] xs:px-[16px] 2xl:mb-[50px] pt-0 sd:py-[48px] 2xl:px-0 flex justify-between flex flex-col sd:flex-row items-center gap-[40px]">
          <div className="sd:max-w-[50%] w-full">
            <img src={ABoutUsImage.src} alt="about-us" />
          </div>
          <div className="sd:max-w-[50%] 2xl:max-w-[745px]">
            <h2
              className="py-[8px] px-[16px] text-[#2D7A56] uppercase text-[16px] Mulish-500 leading-[24px] w-fit sd:m-0"
              style={{
                background: "rgba(45, 122, 86, 0.05)"
              }}
            >
              About us
            </h2>
            <h2 className="flex-1 text-[16px] pc:text-[20px] text-color-label 2xl:text-[20px] leading-[30px] text-justify pt-[50px]">
              {/* {t("common.about_us_1")} */}
              Founded in October 2021, HNTD Network is a dynamic Multi-Platform
              Media and Entertainment Company. Our core expertise lies in
              Production, Content Creation, and the Promotion of Entertainment
              Products across various digital platforms.
            </h2>
            <h2 className="flex-1 text-[16px] pc:text-[20px] text-color-label 2xl:text-[20px] leading-[30px] py-[24px] text-justify">
              {/* {t("common.about_us_2")} */}
              With a dedicated team of talent and enthusiasm, we strive towards
              our vision of providing captivating and refreshing entertainment
              experiences. At HNTD Network, our commitment extends to global
              viewers, ensuring our creative content leaves a lasting impact.
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
