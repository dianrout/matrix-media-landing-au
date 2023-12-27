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
      name: "Multi-platform",
      desc: "We create on many different platforms."
    }
  ]

  return (
    <div className="max-w-[1520px] m-auto flex gap-[50px] px-[20px] flex-col lg:flex-row">
      <div className="bg-different lg:max-w-[550px] h-[450px] lg:h-[609px] w-full rounded-[20px] flex flex-col justify-center m-auto px-[40px]">
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
      <div className="flex-1 grid sm:grid-cols-2  sm:grid-rows-2 gap-x-[30px] xs:gap-3">
        {listDf.map((item, id) => {
          return (
            <div key={id} className="">
              <div className="flex xs:flex-row flex-col xs:items-center">
                <p className="text-[40px] lg:text-[50px] Mulish-800 pb-2 lg:pb-[24px] sm:pt-2 text-primary">
                  {item.order}
                </p>
                <h1 className="xs:pl-[20px] text-[26px] lg:text-[30px] Mulish-700 lg:leading-[33px] pb-[10px] ">
                  {item.name}
                </h1>
              </div>

              <h2 className="text-[18px] lg:text-[20px] text-[#808080]">
                {item.desc}
              </h2>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Differences
