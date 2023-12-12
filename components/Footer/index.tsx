import ButtonComponent from "@components/Button"
import IconEmail from "@public/images/icons/IconEmail"
import IconFacebook from "@public/images/icons/IconFacebook"
import IconHome from "@public/images/icons/IconHome"
import Iconphone from "@public/images/icons/IconPhone"
import IconYoutube from "@public/images/icons/IconYoutube"
import { db } from "@services/firebase"
import { addDoc, collection } from "firebase/firestore"
import { useTranslation } from "next-i18next"
import { useRouter } from "next/router"
import Logo from "public/images/logo.png"
import { useState } from "react"

const Footer = () => {
  const router = useRouter()
  const { t } = useTranslation()
  const [data, setData] = useState<string>("")
  const contactsCollection = collection(db, "subcribe")

  const handleChange = (e: any) => setData(e.target.value)

  const handleSubmit = async () => {
    try {
      if (data) {
        await addDoc(contactsCollection, {
          email: data
        })
        setData("")
        console.log("dataSuccess")
      }
    } catch (err) {
      console.log(err)
    }
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
    <footer className="bg-white px-[24px] py-[24px] pc:py-[32px] sm:px-[40px] sm:py-[24px] pc:px-[40px] 2xl:px-[80px]">
      <div className="flex flex-wrap justify-between">
        <div className="max-w-[755px]">
          <div
            className="header-center flex-1 flex items-center cursor-pointer"
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
          <ul className="flex flex-col pc:flex-row gap-[2px] pc:items-center mt-4">
            {routes.map((item, index) => {
              return (
                <li
                  className="header__item text-text-main w-fit pc:px-[16px] py-[8px] cursor-pointer hover:text-[#FF8134] Roboto-500 text-[18px] leading-[150%] mt-1 first:pl-0 last:pr-0"
                  onClick={() => router.push(item.router)}
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
        </div>
        <div className="flex flex-col pc:flex-row xs:w-full">
          <div className="mb-[32px] mt-4 pc:mt-0">
            <h2 className="text-[16px] Roboto-600 leading-[24px] mb-[16px]">
              {t("common.contact_us")}
            </h2>
            <div className="flex gap-2 text-text-desc Roboto-500 text-[16px] leading-[27px] mb-[16px]">
              <Iconphone className="w-[20px]" /> 0327639182
            </div>
            <div className="flex gap-2 text-text-desc Roboto-500 text-[16px] leading-[27px] mb-[16px]">
              <IconEmail className="w-[20px]" />
              <a href="mailto:someone@example.com">
                contact@hntdnetwork.com.au
              </a>
            </div>
            <div className="flex gap-2 text-text-desc Roboto-500 text-[16px] leading-[27px]">
              <IconHome className="w-[20px]" /> 123 Ryrie Street, Geelong, Vic
              3220
            </div>
          </div>
          <div className="flex flex-col pc:hidden xs:w-full">
            <h2 className="text-[16px] Roboto-600 leading-[24px] mb-[16px]">
              {t("common.join_our_letter")}
            </h2>
            <div className="flex gap-4 w-full">
              <input
                placeholder={t("common.enter_your_mail")}
                className="text-[16px] px-[16px] py-[12px] outline-0 border rounded-[8px] xs:flex-1 sm:w-[300px] w-full"
              ></input>
              <ButtonComponent className="uppercase w-fit">
                {t("common.subscribe")}
              </ButtonComponent>
            </div>
          </div>
        </div>
        <div className="hidden pc:flex pc:flex-col">
          <h2 className="text-[16px] Roboto-600 leading-[24px] mb-[16px]">
            {t("common.join_our_letter")}
          </h2>
          <div className="flex gap-4">
            <input
              placeholder={t("common.enter_your_mail")}
              value={data}
              onChange={handleChange}
              className="text-[16px] px-[16px] py-[12px] outline-0 border rounded-[8px] w-[300px] w-full"
            ></input>
            <ButtonComponent
              className="uppercase w-fit"
              onSubmit={handleSubmit}
            >
              {t("common.subscribe")}
            </ButtonComponent>
          </div>
        </div>
      </div>
      <div className="h-[1px] w-full my-[32px] bg-[#C2C2C2]"></div>
      <div className="bg-white text-left text-[#616161] pc:leading-[21px] flex justify-between">
        HNTD Network @ 2023. All rights reserved.
        <div className="flex gap-4">
          <a className="cursor-pointer">
            <IconYoutube />
          </a>
          <a className="cursor-pointer">
            <IconFacebook />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
