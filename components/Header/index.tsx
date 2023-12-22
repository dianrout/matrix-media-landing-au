import ButtonComponent from "@components/Button"
import { useTranslation } from "next-i18next"
import { useRouter } from "next/router"
import Logo from "public/images/logo.png"
import LogoLight from "public/images/logo-light.png"
import { useEffect, useState } from "react"
import { Link } from "react-scroll"
import { useWindowSize } from "utils"
import HeaderMobile from "./HeaderMobile"
import SelectLanguage from "./Selectlanguage"

const Header = () => {
  const { t } = useTranslation()
  const router = useRouter()
  const [navbar, setNavbar] = useState(false)
  const [other, setOther] = useState(false)
  const [width] = useWindowSize()
  const [visible, setVisible] = useState(false)
  const isTablet = width <= 1281

  const changeBackground = () => {
    if (router.pathname === "/") {
      if (window.scrollY >= 100) {
        setNavbar(true)
      } else {
        setNavbar(false)
      }
    }
  }

  useEffect(() => {
    changeBackground()
    // adding the event when scroll change Logo
    window.addEventListener("scroll", changeBackground)

    return () => {
      window.removeEventListener("scroll", changeBackground)
    }
  }, [router])

  useEffect(() => {
    var h = document.querySelector(".header")
    if (router.pathname !== "/") {
      setOther(true)
      setNavbar(false)
    } else {
      setOther(false)
    }
  }, [router.pathname])

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
    <header
      className={`header ${navbar ? "scroll" : ""} ${
        other ? "other-page" : ""
      }`}
    >
      {!isTablet ? (
        <div className="m-auto hidden sd:flex justify-between px-[40px] 2xl:px-[80px] items-center">
          <div className="flex items-center gap-[48px]">
            <div
              className="header-center flex-1 flex items-center justify-center cursor-pointer"
              onClick={() => router.push("/")}
            >
              <img
                src={Logo.src}
                alt="logo"
                className="h-[50px] w-auto"
                // width={50}
                height={50}
                style={{
                  objectFit: "cover"
                }}
              />
            </div>
          </div>

          <ul className="flex flex-wrap gap-[2px] items-center">
            {routes.map((item, index) => {
              return (
                <li
                  className="header__item text-[#83878D] w-fit cursor-pointer hover:text-secondary Mulish-600 text-[16px] mx-[25px] uppercase leading-[150%] text-menu"
                  onClick={() => router.push(item.router)}
                  data-activeid={
                    router.pathname === item.router ? "active" : ""
                  }
                  key={index}
                >
                  {item.name}
                  <p className="header__item_border"></p>
                </li>
              )
            })}
          </ul>

          <div className="flex items-center gap-[32px] justify-end">
            <div className="text-menu cursor-pointer bg-[#2d7a56] w-[50px] h-[50px] flex items-center justify-center rounded-[25px]">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.0001 22.0001C15.0507 22.0001 16.091 21.7932 17.0616 21.3911C18.0322 20.9891 18.9141 20.3998 19.657 19.657C20.3998 18.9141 20.9891 18.0322 21.3911 17.0616C21.7932 16.091 22.0001 15.0507 22.0001 14.0001C22.0001 12.9495 21.7932 11.9092 21.3911 10.9386C20.9891 9.96803 20.3998 9.08612 19.657 8.34325C18.9141 7.60038 18.0322 7.0111 17.0616 6.60907C16.091 6.20703 15.0507 6.0001 14.0001 6.0001C11.8784 6.0001 9.84354 6.84296 8.34325 8.34325C6.84296 9.84354 6.0001 11.8784 6.0001 14.0001C6.0001 16.1218 6.84296 18.1567 8.34325 19.657C9.84354 21.1572 11.8784 22.0001 14.0001 22.0001ZM22.4268 20.5414L27.2001 25.3148C27.3274 25.4379 27.4288 25.5851 27.4986 25.7478C27.5683 25.9105 27.605 26.0855 27.6064 26.2625C27.6078 26.4396 27.574 26.6151 27.5068 26.7789C27.4397 26.9427 27.3405 27.0915 27.2153 27.2166C27.09 27.3417 26.9411 27.4406 26.7771 27.5076C26.6132 27.5745 26.4376 27.6081 26.2606 27.6064C26.0836 27.6048 25.9086 27.5679 25.746 27.4979C25.5834 27.4279 25.4363 27.3262 25.3134 27.1988L20.5401 22.4254C18.3967 24.0892 15.6998 24.8737 12.9984 24.619C10.2971 24.3644 7.79424 23.0899 5.9995 21.0548C4.20476 19.0198 3.25301 16.3774 3.338 13.6653C3.42299 10.9533 4.53833 8.3756 6.45696 6.45696C8.3756 4.53833 10.9533 3.42299 13.6653 3.338C16.3774 3.25301 19.0198 4.20476 21.0548 5.9995C23.0899 7.79424 24.3644 10.2971 24.619 12.9984C24.8737 15.6998 24.0892 18.3967 22.4254 20.5401L22.4268 20.5414Z"
                  fill="#fff"
                />
              </svg>
            </div>
            <Link
              activeClass="active"
              to="contactUs"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={-100}
              duration={1000}
              isDynamic={true}
              ignoreCancelEvents={false}
            >
              <div className="px-[24px] py-[12px] rounded-[44px] bg-[#EBF8F3] flex gap-[8px] text-[16px] leading-[24px] text-secondary border-secondary border border-secondary cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M20.9712 8.5C20.9712 8.5 16.95 13.5 12 13.5C7.05 13.5 3.02878 8.5 3.02878 8.5M7.8 19.5H16.2C17.8802 19.5 18.7202 19.5 19.362 19.173C19.9265 18.8854 20.3854 18.4265 20.673 17.862C21 17.2202 21 16.3802 21 14.7V10.3C21 8.61984 21 7.77976 20.673 7.13803C20.3854 6.57354 19.9265 6.1146 19.362 5.82698C18.7202 5.5 17.8802 5.5 16.2 5.5H7.8C6.11984 5.5 5.27976 5.5 4.63803 5.82698C4.07354 6.1146 3.6146 6.57354 3.32698 7.13803C3 7.77976 3 8.61984 3 10.3V14.7C3 16.3802 3 17.2202 3.32698 17.862C3.6146 18.4265 4.07354 18.8854 4.63803 19.173C5.27976 19.5 6.11984 19.5 7.8 19.5Z"
                    stroke="#2D7A56"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p className="text-[16px] uppercase Mulish-500">
                  {t("common.contact_us")}
                </p>
              </div>
            </Link>
          </div>
        </div>
      ) : (
        <HeaderMobile id={""} visible={visible} setVisible={setVisible} />
      )}
    </header>
  )
}

export default Header
