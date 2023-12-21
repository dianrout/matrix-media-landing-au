import IconClose from "@public/images/IconClose"
import BarIcon from "@public/images/bar"
import Logo from "public/images/logo.png"
import { useState } from "react"
// import component 👇
import Drawer from "react-modern-drawer"

//import styles 👇
import { useAppSelector } from "hooks"
import { useRouter } from "next/router"
import "react-modern-drawer/dist/index.css"
import SelectLanguage from "./Selectlanguage"
import { useTranslation } from "next-i18next"
import { useWindowSize } from "utils"
import ButtonComponent from "@components/Button"

const HeaderMobile = ({ id, visible, setVisible }: any) => {
  const { t } = useTranslation()
  const cart = useAppSelector((state) => state.cart.listCart)
  const router = useRouter()
  const [width] = useWindowSize()
  const isMobile = width < 425

  const onClose = () => {
    setVisible(false)
  }

  const routes = [
    {
      name: t("common.home"),
      router: "/"
    },
    {
      name: t("common.about_us"),
      router: "/about-us"
    },
    {
      name: t("common.our_project"),
      router: "/project"
    },
    {
      name: t("common.blog"),
      router: "/blogs"
    },
    {
      name: t("common.jobs"),
      router: "/jobs"
    }
  ]

  return (
    <>
      <div className="m-auto flex px-[40px] xs:px-[20px] justify-between items-center">
        <div className="header-left flex items-center gap-[48px]">
          <div
            className="header-center flex-1 flex items-center justify-center cursor-pointer"
            onClick={() => {
              router.push("/")
              onClose()
            }}
          >
            <img
              src={Logo.src}
              alt="logo"
              className="h-[50px]"
              // width={50}
              height={50}
              style={{
                objectFit: "cover"
              }}
            />
          </div>
        </div>
        <div className="flex items-center gap-[32px] xs:gap-4">
          <div className="text-menu cursor-pointer">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.0001 22.0001C15.0507 22.0001 16.091 21.7932 17.0616 21.3911C18.0322 20.9891 18.9141 20.3998 19.657 19.657C20.3998 18.9141 20.9891 18.0322 21.3911 17.0616C21.7932 16.091 22.0001 15.0507 22.0001 14.0001C22.0001 12.9495 21.7932 11.9092 21.3911 10.9386C20.9891 9.96803 20.3998 9.08612 19.657 8.34325C18.9141 7.60038 18.0322 7.0111 17.0616 6.60907C16.091 6.20703 15.0507 6.0001 14.0001 6.0001C11.8784 6.0001 9.84354 6.84296 8.34325 8.34325C6.84296 9.84354 6.0001 11.8784 6.0001 14.0001C6.0001 16.1218 6.84296 18.1567 8.34325 19.657C9.84354 21.1572 11.8784 22.0001 14.0001 22.0001ZM22.4268 20.5414L27.2001 25.3148C27.3274 25.4379 27.4288 25.5851 27.4986 25.7478C27.5683 25.9105 27.605 26.0855 27.6064 26.2625C27.6078 26.4396 27.574 26.6151 27.5068 26.7789C27.4397 26.9427 27.3405 27.0915 27.2153 27.2166C27.09 27.3417 26.9411 27.4406 26.7771 27.5076C26.6132 27.5745 26.4376 27.6081 26.2606 27.6064C26.0836 27.6048 25.9086 27.5679 25.746 27.4979C25.5834 27.4279 25.4363 27.3262 25.3134 27.1988L20.5401 22.4254C18.3967 24.0892 15.6998 24.8737 12.9984 24.619C10.2971 24.3644 7.79424 23.0899 5.9995 21.0548C4.20476 19.0198 3.25301 16.3774 3.338 13.6653C3.42299 10.9533 4.53833 8.3756 6.45696 6.45696C8.3756 4.53833 10.9533 3.42299 13.6653 3.338C16.3774 3.25301 19.0198 4.20476 21.0548 5.9995C23.0899 7.79424 24.3644 10.2971 24.619 12.9984C24.8737 15.6998 24.0892 18.3967 22.4254 20.5401L22.4268 20.5414Z"
                fill="#EDEDED"
              />
            </svg>
          </div>
          {/* <SelectLanguage /> */}
          <div className="text-menu" onClick={() => setVisible(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21 8.25H3C2.59 8.25 2.25 7.79667 2.25 7.25C2.25 6.70333 2.59 6.25 3 6.25H21C21.41 6.25 21.75 6.70333 21.75 7.25C21.75 7.79667 21.41 8.25 21 8.25Z"
                fill="#EDEDED"
              />
              <path
                d="M21 13.25H3C2.59 13.25 2.25 12.7967 2.25 12.25C2.25 11.7033 2.59 11.25 3 11.25H21C21.41 11.25 21.75 11.7033 21.75 12.25C21.75 12.7967 21.41 13.25 21 13.25Z"
                fill="#EDEDED"
              />
              <path
                d="M21 18.25H3C2.59 18.25 2.25 17.7967 2.25 17.25C2.25 16.7033 2.59 16.25 3 16.25H21C21.41 16.25 21.75 16.7033 21.75 17.25C21.75 17.7967 21.41 18.25 21 18.25Z"
                fill="#EDEDED"
              />
            </svg>
          </div>
        </div>
      </div>
      <Drawer
        open={visible}
        direction="right"
        size={isMobile ? 320 : 425}
        onClose={onClose}
        overlayOpacity={0.7}
        lockBackgroundScroll
        enableOverlay
      >
        <div className="h-full text-text-main bg-white flex flex-col">
          <div className="flex py-[13px] px-[20px] justify-between items-center border boder-b-[1px]">
            <div
              className="flex items-center justify-center cursor-pointer"
              onClick={() => router.push("/")}
            >
              <img
                src={Logo.src}
                alt="logo"
                className=""
                width={32}
                height={32}
                style={{
                  objectFit: "cover"
                }}
              />
            </div>
            <button className="block text-4xl">
              <span
                className="bg-transparent leading-[20px]  block outline-none focus:outline-none"
                onClick={onClose}
              >
                <IconClose fill="#616161" />
              </span>
            </button>
          </div>

          <div className="pt-[20px] px-[20px] pb-[20px] flex-1 flex flex-col">
            <ul className="flex flex-col justify-start gap-[2px]">
              {routes.map((item, index) => {
                return (
                  <li
                    className="header__item text-text-main w-fit px-[16px] py-[8px] cursor-pointer hover:text-button-red Mulish-500 text-[18px] leading-[150%] mt-1 pl-[8px]"
                    onClick={() => {
                      router.push(item.router)
                      onClose()
                    }}
                    data-activeid={
                      router.pathname === item.router ? "active" : ""
                    }
                    key={index}
                  >
                    {item.name}
                  </li>
                )
              })}
            </ul>
            <ButtonComponent
              className="uppercase w-full mt-auto mb-0"
              onSubmit={() => {
                onClose()
              }}
            >
              {t("common.contact_us")}
            </ButtonComponent>
          </div>
        </div>
      </Drawer>
    </>
  )
}

export default HeaderMobile
