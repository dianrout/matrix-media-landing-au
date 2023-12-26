import React, { useState } from "react"
import ContactUsImage from "@public/img/ImageContact.png"
import { useTranslation } from "next-i18next"
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
      <div className="mt-[100px]">
        <div className="px-[20px] max-w-[1520px] contact-us h-[550px] m-auto rounded-[20px] relative flex flex-col justify-center pl-[50px]">
          <h1 className="lg:text-[50px] Mulish-800 lg:leading-[55px] text-[40px] pb-1 text-white">
            Start with us now!
          </h1>
          <p className="text-[20px] text-white pb-[30px]">
            We can help bring your dream to life with ease.
          </p>
          <div className="p-[6px] w-[500px] flex pl-[30px] bg-white rounded-[60px]">
            <input
              placeholder="Enter your email"
              className="text-[18px] outline-0 border-0 flex-1 rounded-[20px]"
            ></input>
            <div
              className="w-[100px] h-[60px] md:w-[138px] md:h-[68px] rounded-[64px] text-center items-center flex justify-center bg-[#2F2F2F] text-white text-[20px] Mulish-600 leading-[30px] cursor-pointer relative"
              onClick={handleSubmit}
            >
              Start
            </div>
          </div>
          <img
            src={ContactUsImage.src}
            className="absolute right-[10px] top-[-100px]"
          />
        </div>
      </div>
    </Element>
  )
}

export default ContactUs
