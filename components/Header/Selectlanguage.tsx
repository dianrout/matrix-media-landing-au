import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import IconEnglish from "@public/images/icon-eng.png"
import IconVietnam from "@public/images/icon-vi.png"
import OutsideAlerter from "hooks/useOutSideDetect"

export const LANGUAGE_OPTION = {
  VIETNAMESE: "vi",
  ENGLISH: "en"
}

const SelectLanguage = () => {
  const router = useRouter()
  const [lang, setLang] = useState("")

  useEffect(() => {
    if (typeof localStorage !== undefined) {
      setLang(localStorage.getItem("lang") || LANGUAGE_OPTION.VIETNAMESE)
    }
  }, [])
  const [showUserMenu, setshowUserMenu] = useState<boolean>(false)

  const handleChangeLang = (value: string) => {
    setLang(value)
    localStorage.setItem("lang", value ?? LANGUAGE_OPTION.VIETNAMESE)
    router.push("", "", { locale: value })
  }

  return (
    <div
      className="relative cursor-pointer w-[54px]"
      onClick={() => setshowUserMenu(!showUserMenu)}
    >
      <OutsideAlerter setModal={setshowUserMenu}>
        <div className="flex gap-2 text-[#EDEDED] text-base text-menu">
          {lang === LANGUAGE_OPTION.VIETNAMESE ? (
            <>
              <img src={IconVietnam.src} alt="vi" /> VI
            </>
          ) : (
            <>
              <img src={IconEnglish.src} alt="en" /> EN
            </>
          )}
        </div>
        {showUserMenu && (
          <div
            className="absolute top-[50px] right-[0px] rounded-[8px] dark:border border-input-border text-[14px] bg-white dark:bg-dropdown-bg w-[150px]"
            style={{
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.18)"
            }}
          >
            <div className="">
              <div className="cursor-pointer hover:bg-hover-color-light p-[15px] rounded-[8px] pb-4 flex flex-col items-center justify-start gap-3">
                <div
                  className="flex w-full gap-2 items-center text-[16px]"
                  onClick={() => handleChangeLang("vi")}
                >
                  <img className="w-[24px]" src={IconVietnam.src} alt="vi" />{" "}
                  Tiếng Việt
                </div>
                <div
                  className="flex w-full gap-2 items-center text-[16px]"
                  onClick={() => handleChangeLang("en")}
                >
                  <img className="w-[24px]" src={IconEnglish.src} alt="en" />{" "}
                  English
                </div>
              </div>
            </div>
          </div>
        )}
      </OutsideAlerter>
    </div>
  )
}

export default SelectLanguage
