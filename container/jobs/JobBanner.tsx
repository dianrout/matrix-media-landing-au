import { useTranslation } from "next-i18next"

const BannerJobs = () => {
  const { t } = useTranslation()
  return (
    <div className="block-banner py-[128px]">
      <h1 className="text-center text-[50px] Mulish-800 uppercase leading-[57px] text-white pb-[24px]">
        {t("common.career")}
      </h1>
      <h3 className="text-center text-white text-[20px] leading-[30px] max-w-[700px] m-auto">
        {t("common.job_desc")}
      </h3>
    </div>
  )
}

export default BannerJobs
