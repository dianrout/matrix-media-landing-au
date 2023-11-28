import { useTranslation } from "next-i18next"

const BannenBlog = () => {
  const { t } = useTranslation()
  return (
    <div className="block-banner py-[128px] xs:px-[20px]">
      <h1 className="text-center text-[48px] Roboto-700 uppercase leading-[57px] text-white pb-[24px]">
        {t("common.blog")}
      </h1>
      <h3 className="text-center text-text-banner-desc text-[20px] leading-[30px] max-w-[700px] m-auto">
        {/* {t("common.blog_desc")} */}
      </h3>
    </div>
  )
}

export default BannenBlog
