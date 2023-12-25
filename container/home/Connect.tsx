import React from "react"
import BgConnect1 from "public/img/bg-connect-1.png"
import ImageConnect from "public/img/ImageConnect.png"
import { useRouter } from "next/router"

const Connect = () => {
  const router = useRouter()

  return (
    <div>
      <div className="w-full h-[580px] bg-connect ">
        <div className="max-w-[1520px] px-[20px] flex-col lg:flex-row text-white flex m-auto lg:items-center lg:justify-between h-full">
          <div className="max-w-[545px] lg:mb-[100px] pt-[60px] xs:pt-[30px] pb-4 lg:pb-0 lg:pt-0">
            <h1 className="md:text-[60px] sm:text-[50px] text-[35px] Mulish-800 pb-1 md:leading-[66px]">
              Doing Everything Yourself is Difficult
            </h1>
            <p className="text-[20px] Mulish-600">
              Let us help you profit from your digital content in social media
              platforms!
            </p>
          </div>
          <div
            className="mb-[100px] w-[180px] h-[60px] md:w-[200px] md:h-[70px] rounded-[64px] text-center items-center flex justify-center bg-white text-secondary text-[20px] Mulish-600 leading-[30px] cursor-pointer relative"
            onClick={() => router.push("/contact-us")}
          >
            Contact us
          </div>
        </div>
      </div>
      <div className="max-w-[1520px] m-auto translate-y-[-200px] xs:translate-y-[-150px]">
        <div className="relative h-[590px]">
          <img
            src={BgConnect1.src}
            alt="connect01"
            className="w-full object-cover h-full rounded-[20px]"
          />
          <div
            className="absolute bottom-[30px] left-[30px] bg-white px-[15px] py-[10px] rounded-[100px] flex items-center gap-4 cursor-pointer xs:right-[16px] xs:left-[16px] bottom-[16px]"
            onClick={() => router.push("/about-us")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="99"
              height="99"
              viewBox="0 0 99 99"
              fill="none"
            >
              <circle cx="49.5" cy="49.5" r="49.5" fill="#F6F6F6" />
              <path
                d="M44.3163 66.3753L62.0872 51.4448C62.3735 51.2041 62.6033 50.9056 62.7609 50.5696C62.9184 50.2337 63 49.8683 63 49.4986C63 49.1288 62.9184 48.7635 62.7609 48.4276C62.6033 48.0916 62.3735 47.7931 62.0872 47.5524L44.3163 32.6219C42.6201 31.197 40 32.3783 40 34.568V64.4334C40 66.6231 42.6201 67.8045 44.3163 66.3753Z"
                fill="#D31111"
              />
            </svg>
            <div className="pr-[20px]">
              <p className="text-[20px] xs:text-[16px] leading-[30px] capitalize">
                Super diverse content
              </p>
              <p className="text-[20px] xs:text-[12px] md:leading-[30px] Mulish-500 md:font-extrabold text-primary">
                See your content trending across platforms
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1520px] m-auto flex flex-col pc:flex-row px-[20px] md:px-0">
        <div className="flex-1 md:pl-[20px]">
          <h1 className="xs:text-[40px] text-[50px] text-[#2F2F2F] Mulish-800 pb-[16px] md:pb-[30px]">
            Connect all the social networks with your content
          </h1>
          <p className="text-[20px] xs:text-[18px] text-[#808080] pb-[30px]">
            We currently support Facebook, Youtube, Tiktok and Twitter. More to
            come. HNTD Network will bring more interaction and many other
            benefits with the content you create. Cooperate for success!
          </p>
          <div
            className="w-[180px] h-[60px] md:w-[200px] md:h-[70px] rounded-[64px] text-center items-center flex justify-center bg-[#2F2F2F] text-white text-[20px] Mulish-600 leading-[30px] cursor-pointer relative"
            onClick={() => router.push("/contact-us")}
          >
            Get Started
          </div>
        </div>
        <img
          src={ImageConnect.src}
          alt="connect02"
          className="h-fit w-fit m-auto"
        />
      </div>
    </div>
  )
}

export default Connect
