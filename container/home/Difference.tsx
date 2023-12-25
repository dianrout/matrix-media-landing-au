import { useTranslation } from "next-i18next"
import { useRouter } from "next/router"
import BgDifferent from "public/img/bg-different.png"

const Differences = () => {
  const { t } = useTranslation()
  const router = useRouter()

  const listDf = [
    {
      order: "01",
      name: t("common.df_title_1"),
      desc: t("common.df_desc_1")
    },
    {
      order: "02",
      name: t("common.df_title_2"),
      desc: t("common.df_desc_2")
    },
    {
      order: "03",
      name: t("common.df_title_3"),
      desc: t("common.df_desc_3")
    },
    {
      order: "04",
      name: "multi-platform",
      desc: "We create on many different platforms."
    }
  ]

  return (
    <div className="max-w-[1520px] m-auto flex gap-[50px] px-[20px]">
      <div className="bg-different max-w-[550px] h-[609px] w-full rounded-[20px] flex flex-col justify-center m-auto px-[40px]">
        <h1 className="lg:text-[50px] text-[35px] text-white Mulish-800 lg:leading-[55px] pb-[20px]">
          Discover the Unique Side of Social Network
        </h1>
        <p className="text-[20px] md:leading-[30px] xs:text-[18px] pb-[30px] text-white">
          HNTD Network always tries to bring the best quality content
        </p>
        <div
          className="w-[180px] h-[60px] md:w-[200px] md:h-[70px] rounded-[64px] text-center items-center flex justify-center bg-white text-[#2F2F2F] text-[20px] Mulish-600 leading-[30px] cursor-pointer relative"
          onClick={() => router.push("/contact-us")}
        >
          Get Started
        </div>
      </div>
      <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-x-[30px]">
        {listDf.map((item, id) => {
          return (
            <div key={id} className="">
              <p className="text-[50px] Mulish-800 pb-[24px] pt-2 text-primary">
                {item.order}
              </p>
              <h1 className="text-[30px] Mulish-700 leading-[33px] pb-[10px] ">
                {item.name}
              </h1>
              <h2 className="text-[20px] text-[#808080]">{item.desc}</h2>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Differences
