import { useTranslation } from "next-i18next"
import React from "react"
import Partner1 from "public/images/Partner1.png"
import Partner1Hover from "public/images/Partner1Hover.png"
import Partner2 from "public/images/Partner2.png"
import Partner2Hover from "public/images/Partner2Hover.png"

const Partner = () => {
  const { t } = useTranslation()

  return (
    <div>
      <h2 className="text-center sm:mb-[16px] text-[#EEAF0F] text-[48px] pc:text-[52px] xl:text-[62px] Mulish-800 uppercase leading-[60px] sm:leading-[90px] w-fit m-auto">
        {t("common.our_partner")}
      </h2>
      <div className="flex justify-center m-auto sm:gap-[74px] gap-[20px]">
        <div className="card cursor-pointer">
          <img
            src={Partner1Hover.src}
            alt="Card Back"
            className="sm:w-[255px] w-[150px]"
          />
        </div>
        <div className="card cursor-pointer">
          <img
            src={Partner2Hover.src}
            alt="Card Back"
            className="sm:w-[255px] w-[150px]"
          />
        </div>
      </div>
    </div>
  )
}

export default Partner
