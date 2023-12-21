import React, { useState } from "react"
import ContactUsBanner from "@public/images/contact-us-banner.png"
import { useTranslation } from "next-i18next"
import ButtonComponent from "@components/Button"
import { addDoc, collection } from "firebase/firestore"
import { db } from "@services/firebase"
import { Element } from "react-scroll"

interface DataProps {
  companyName?: string
  labelName?: string
  email: string
  phone: string
  message: string
}

const ContactUs = () => {
  const { t } = useTranslation()
  const initialState = {
    companyName: "",
    labelName: "",
    email: "",
    phone: "",
    message: ""
  }
  const [data, setData] = useState<DataProps>(initialState)
  const contactsCollection = collection(db, "contact")

  const handleChange = (field: string) => (e: any) =>
    setData({ ...data, [field]: e.target.value })

  const handleSubmit = async () => {
    try {
      if (data.email) {
        await addDoc(contactsCollection, {
          companyName: data.companyName,
          labelName: data.labelName,
          phone: data.phone,
          email: data.email,
          message: data.message
        })
        setData(initialState)
        console.log("dataSuccess")
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Element name="contactUs">
      <div className="pc:mx-[40px] xs:px-[16px] 2xl:mx-0 mb-[100px] 2xl:mb-[178px]">
        <div className="max-w-[1520px] contact-us py-[40px] 2xl:py-[80px] px-[40px] xs:px-[16px] md:px-[60px] 2xl:px-[130px] pc:rounded-[16px] xs:rounded-[8px] m-auto flex flex-col sm:flex-row justify-between gap-4">
          <div className="flex-1 sm:max-w-[548px] xl:max-w-[745px] w-full">
            <h1 className="text-text-title text-[28px] xs:text-[26px] 2xl:text-[32px] Mulish-700 leading-[38px] uppercase pb-[8px] 2xl:pb-[16px]">
              {t("common.contact_us")}
            </h1>
            <h2 className="text-text-desc xs:text-[16px] 2xl:text-[20px] text-[18px] leading-[30px] pb-[30px]">
              {t("common.contact_us_desc")}
            </h2>
            <div className="flex gap-[24px] mb-[20px] xs:flex-row flex-col md:flex-row">
              <div className="w-full">
                <label className="text-[16px] Mulish-500 leading-[24px] text-color-label mb-[8px]">
                  {t("common.company_name")}
                </label>
                <input
                  placeholder={t("common.company_name")}
                  value={data.companyName}
                  onChange={handleChange("companyName")}
                  className="text-[16px] px-[16px] h-[44px] py-[12px] outline-0 border border-color-border rounded-[8px] w-full mt-1"
                ></input>
              </div>
              <div className="w-full">
                <label className="text-[16px] Mulish-500 leading-[24px] text-color-label mb-[8px]">
                  {t("common.your_name")}
                </label>
                <input
                  placeholder={t("common.your_name")}
                  value={data.labelName}
                  onChange={handleChange("labelName")}
                  className="text-[16px] px-[16px] h-[44px] py-[12px] outline-0 border border-color-border rounded-[8px] w-full mt-1"
                ></input>
              </div>
            </div>
            <div className="flex gap-[24px] mb-[20px] xs:flex-row flex-col md:flex-row">
              <div className="w-full">
                <label className="text-[16px] Mulish-500 leading-[24px] text-color-label mb-[8px]">
                  {t("common.email")}
                  <span className="text-[#FF0060] ml-1">*</span>
                </label>
                <input
                  placeholder={t("common.email")}
                  value={data.email}
                  onChange={handleChange("email")}
                  className="text-[16px] px-[16px] h-[44px] py-[12px] outline-0 border  border-color-border rounded-[8px] w-full mt-1"
                ></input>
              </div>
              <div className="w-full">
                <label className="text-[16px] Mulish-500 leading-[24px] text-color-label mb-[8px]">
                  {t("common.phone_number")}
                </label>
                <input
                  placeholder={t("common.phone_number")}
                  value={data.phone}
                  onChange={handleChange("phone")}
                  className="text-[16px] px-[16px] h-[44px] py-[12px] outline-0 border  border-color-border rounded-[8px] w-full mt-1"
                ></input>
              </div>
            </div>
            <div className="mb-[32px]">
              <label className="text-[16px] Mulish-500 leading-[24px] text-color-label mb-[8px]">
                {t("common.message")}
              </label>
              <textarea
                maxLength={2000}
                rows={5}
                value={data.message}
                onChange={handleChange("message")}
                placeholder={t("common.message")}
                className="text-[16px] px-[16px] py-[12px] outline-0 border border-color-border rounded-[8px] w-full mt-1"
              ></textarea>
            </div>
            <ButtonComponent
              className="uppercase w-[240px]"
              onSubmit={handleSubmit}
            >
              {t("common.send_message")}
            </ButtonComponent>
          </div>
          <div className="my-auto pc:max-w-[100%] max-w-[300px] xs:mt-[30px] xs:mx-auto">
            <img src={ContactUsBanner.src} alt="contact us" />
          </div>
        </div>
      </div>
    </Element>
  )
}

export default ContactUs
