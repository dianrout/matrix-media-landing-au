import IconMission from "@public/images/icons/IconMission"
import IconOurTeam from "@public/images/icons/IconOurTeam"
import IconVision from "@public/images/icons/IconVision"
import OurTeamImage from "@public/images/our_team.png"
import AchievementImage from "@public/images/achievement.png"
import { useTranslation } from "next-i18next"
import React from "react"

const AboutUsContent = () => {
  const { t } = useTranslation()

  return (
    <div className="max-w-[1520px] w-full px-[20px] sd:px-[40px] 2xl:px-0 m-auto">
      <div className="py-[24px] w-full">
        <div className="flex justify-between justify-center w-full mb-[144px] gap-[20px] flex-col sd:flex-row">
          <div className="sd:max-w-[50%] lg:max-w-[670px] mb-[30px] sd:mb-[30px]">
            <IconMission className="m-auto mb-[24px]" />
            <h1 className="text-center pb-[16px] 2xl:text-[32px] text-[28px] uppercase Roboto-700">
              {t("common.mission")}
            </h1>
            <h2 className="2xl:text-[24px] text-[20px] leading-[30px] text-text-main text-center">
              {t("common.mission_desc")}
            </h2>
          </div>
          <div className="sd:max-w-[50%] lg:max-w-[670px]">
            <IconVision className="m-auto mb-[24px]" />
            <h1 className="text-center pb-[16px] 2xl:text-[32px] text-[28px] uppercase Roboto-700">
              {t("common.vision")}
            </h1>
            <h2 className="2xl:text-[24px] text-[20px] leading-[30px] text-text-main text-center">
              {t("common.vision_desc")}
            </h2>
          </div>
        </div>
        <div className="flex justify-between items-center w-full flex-col sd:flex-row">
          <div className="sd:max-w-[50%] pc:max-w-[670px]">
            <IconOurTeam className="m-auto mb-[24px]" />
            <h1 className="text-center pb-[16px] 2xl:text-[32px] text-[28px] uppercase Roboto-700">
              {t("common.our_team")}
            </h1>
            <h2 className="2xl:text-[24px] text-[20px] leading-[30px] text-text-main text-center">
              {t("common.our_team_desc")}
            </h2>
          </div>
          <div className="sd:max-w-[50%]">
            <img src={OurTeamImage.src} alt="our-team" />
          </div>
        </div>
        <div className="flex justify-between items-center w-full flex-col-reverse sd:flex-row">
          <div className="">
            <img src={AchievementImage.src} alt="achievement" />
          </div>
          <div className="sd:max-w-[50%] pc:max-w-[690px] text-left items-left w-full list-menu">
            <h1 className="text-text-red 2xl:text-[32px] text-[28px] uppercase leading-[38px] Roboto-700">
              {t("common.achievement")}
            </h1>
            <div className="w-full h-[4px] bg-color-main my-[32px]"></div>
            <ul>
              <li className="text-color-label text-[20px] Roboto-500 leading-[30px] pb-[6px]">
                {t("common.achievement_1")}
              </li>
              <h3 className="text-text-main 2xl:text-[18px] text-[16px] leading-[27px] pb-[24px]">
                {t("common.achievement_1_desc")}
              </h3>

              <li className="text-color-label text-[20px] Roboto-500 leading-[30px] pb-[6px]">
                {t("common.achievement_2")}
              </li>
              <h3 className="text-text-main 2xl:text-[18px] text-[16px] leading-[27px] pb-[24px]">
                {t("common.achievement_2_desc")}
              </h3>

              <li className="text-color-label text-[20px] Roboto-500 leading-[30px] pb-[6px]">
                {t("common.achievement_3")}
              </li>
              <h3 className="text-text-main 2xl:text-[18px] text-[16px] leading-[27px] pb-[24px]">
                {t("common.achievement_3_desc")}
              </h3>
            </ul>
            <div className="w-full h-[1px] bg-color-border"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUsContent
