import { useTranslation } from "next-i18next"
import ProjectBanner from "@public/images/project_banner.png"

const BannerProject = () => {
  const { t } = useTranslation()
  return (
    <div>
      <h1 className="text-center  text-[32px] lg:text-[48px] Roboto-700 uppercase leading-[57px] pt-[45px] 2xl:pt-[75px] pb-[30px] 2xl:pb-[48px] text-text-orange">
        {t("common.project")}
      </h1>
      <div className="w-full bg-[#289B69] text-white">
        <div className="max-w-[1520px] m-auto py-[24px] xs:py-[40px] px-[40px] 2xl:px-0 flex justify-between items-center gap-[48px] xs:flex-col xs:gap-[24px]">
          <div className="xs:w-full w-[40%]">
            <img
              src={ProjectBanner.src}
              alt="project banner"
              className="m-auto"
            />
          </div>

          <h2 className="flex-1 text-[23px] 2xl:text-[26px] leading-[40px]">
            {t("common.project_desc")}
          </h2>
        </div>
      </div>
    </div>
  )
}

export default BannerProject
