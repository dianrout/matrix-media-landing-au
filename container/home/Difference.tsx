import IconDf1 from "@public/images/icons/IconDf1"
import IconDf2 from "@public/images/icons/IconDf2"
import IconDf3 from "@public/images/icons/IconDf3"
import { useTranslation } from "next-i18next"
import Line from "@public/images/line.png"

const Differences = () => {
  const { t } = useTranslation()

  const listDf = [
    {
      icon: <IconDf1 />,
      name: t("common.df_title_1"),
      desc: t("common.df_desc_1")
    },
    {
      icon: <IconDf2 />,
      name: t("common.df_title_2"),
      desc: t("common.df_desc_2")
    },
    {
      icon: <IconDf3 />,
      name: t("common.df_title_3"),
      desc: t("common.df_desc_3")
    }
  ]

  return (
    <div
      className="w-full flex justify-center"
      style={{
        background: "rgba(255, 221, 163, 0.20)"
      }}
    >
      <div className="max-w-[1520px] m-auto flex-col xs:mx-[16px] mx-[40px] 2xl:mx-0 my-[50px] 2xl:py-[60px] py-[48px] w-full">
        <h2
          className="w-fit text-center m-auto py-[8px] px-[16px] rounded-[4px] text-[#2D7A56] uppercase text-[16px] Roboto-500 leading-[24px] mb-[34px]"
          style={{
            background: "rgba(45, 122, 86, 0.05)"
          }}
        >
          differences
        </h2>
        <h1 className="text-center text-[#2D7A56] text-[32px] Roboto-700 leading-[38px] uppercase 2xl:mb-[80px] mb-[60px]">
          What makes us different
        </h1>
        <div className="flex justify-center sd:justify-around flex-col sd:flex-row gap-[30px] sd:gap-5">
          {" "}
          {listDf.map((item, id) => {
            return (
              <div key={id} className="relative sd:max-w-[350px]">
                <div
                  className="m-auto mb-[32px] rounded-[20px] w-[106px] h-[106px] flex items-center justify-center"
                  style={{
                    background: "rgba(250, 191, 155, 0.14)"
                  }}
                >
                  {item.icon}
                </div>
                <h1 className="text-text-title text-[24px] text-center Roboto-600 leading-[36px] pb-[16px]">
                  {item.name}
                </h1>
                <h2 className="text-text-main text-[18px] leading-[27px] text-center pb-[24px]">
                  {item.desc}
                </h2>
                {id !== 2 && (
                  <div className="absolute lg:block hidden xl:top-[16px] lg:top-[10px] 1xl:top-[8px] xl:right-[-200px] lg:right-[-125px] 1xl:right-[-250px] xl:max-w-[300px] 1xl:max-w-[350px] lg:max-w-[200px]">
                    <img src={Line.src} alt="line" />
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Differences
