import { useTranslation } from "next-i18next"

const BannenBlog = () => {
  const { t } = useTranslation()
  return (
    <div className="py-[80px] sd:py-[128px] xs:px-[20px]">
      <h1 className="text-center text-[48px] Mulish-800 uppercase leading-[57px] pb-[24px]">
        Latest News & Articles
      </h1>
      <p className="text-[20px] text-[#808080] text-center">
        We always want to bring the most useful content
      </p>
    </div>
  )
}

export default BannenBlog
