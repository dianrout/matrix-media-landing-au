import { useTranslation } from "next-i18next"
import ServiceImage from "@public/img/service.png"
import ServiceImage2 from "@public/img/service2.png"
import Image01 from "@public/img/01.png"
import Image02 from "@public/img/02.png"

const Service = () => {
  const { t } = useTranslation()

  return (
    <div className="w-full">
      <div className="max-w-[1520px] m-auto">
        <h2 className="text-center mb-[32px] text-primary text-[48px] pc:text-[52px] xl:text-[62px] Mulish-800 uppercase leading-[60px] sm:leading-[90px] w-fit m-auto">
          Service
        </h2>
        <div className="flex justify-between items-center px-[20px] mb-[50px] flex-col-reverse md:flex-row ">
          <div className="w-full">
            <div className="relative w-full mb-[20px]">
              <img src={Image01.src} className="lg:translate-x-4" />
              <p className="text-[32px] Mulish-800 text-[#EC5656] absolute bottom-[8px] w-full">
                {t("common.service_desc")}
              </p>
            </div>
            <ul>
              <li className="text-color-label text-[20px] Mulish-500 leading-[30px] pb-[6px] flex gap-2 items-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="_Facebook">
                    <rect width="24" height="24" rx="6" fill="#1877F2" />
                    <path
                      id="Vector"
                      d="M16.6711 15.4688L17.2031 12H13.875V9.75C13.875 8.80078 14.3391 7.875 15.8297 7.875H17.3438V4.92188C17.3438 4.92188 15.9703 4.6875 14.6578 4.6875C11.9156 4.6875 10.125 6.34922 10.125 9.35625V12H7.07812V15.4688H10.125V23.8547C10.7367 23.9508 11.3625 24 12 24C12.6375 24 13.2633 23.9508 13.875 23.8547V15.4688H16.6711Z"
                      fill="white"
                    />
                  </g>
                </svg>
                {t("common.facebook")}
              </li>
              <h3 className="text-text-main 2xl:text-[18px] text-[16px] leading-[27px] pb-[24px]">
                {t("common.fb_desc")}
              </h3>

              <li className="text-color-label text-[20px] Mulish-500 leading-[30px] pb-[6px] flex gap-2 items-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="TikTok - Original">
                    <path
                      id="Vector"
                      d="M17.1765 8.66347C18.7198 9.77064 20.6105 10.4221 22.6525 10.4221V6.47861C22.2661 6.47869 21.8806 6.43825 21.5025 6.35786V9.46193C19.4606 9.46193 17.5702 8.81049 16.0265 7.7034V15.7509C16.0265 19.7766 12.7745 23.0399 8.76333 23.0399C7.26666 23.0399 5.87556 22.5858 4.71997 21.807C6.03888 23.1604 7.87821 24 9.91309 24C13.9245 24 17.1766 20.7367 17.1766 16.7108V8.66347H17.1765ZM18.5951 4.68499C17.8064 3.82023 17.2885 2.70267 17.1765 1.46717V0.959961H16.0867C16.361 2.53028 17.2966 3.87187 18.5951 4.68499ZM7.25706 18.7178C6.81638 18.1379 6.57824 17.4286 6.57931 16.6992C6.57931 14.858 8.06672 13.3651 9.90177 13.3651C10.2438 13.365 10.5837 13.4176 10.9096 13.5214V9.48977C10.5287 9.43739 10.1443 9.41515 9.7601 9.4233V12.5613C9.43394 12.4575 9.09384 12.4048 8.75177 12.4051C6.91671 12.4051 5.42938 13.8979 5.42938 15.7393C5.42938 17.0414 6.17284 18.1687 7.25706 18.7178Z"
                      fill="#FF004F"
                    />
                    <path
                      id="Vector_2"
                      d="M16.0265 7.70332C17.5702 8.81041 19.4607 9.46185 21.5025 9.46185V6.35778C20.3628 6.11414 19.3538 5.5164 18.5951 4.68499C17.2966 3.87179 16.361 2.5302 16.0867 0.959961H13.2241V16.7106C13.2176 18.5468 11.7327 20.0336 9.90162 20.0336C8.82257 20.0336 7.86394 19.5174 7.25682 18.7178C6.17269 18.1687 5.42923 17.0413 5.42923 15.7394C5.42923 13.8981 6.91655 12.4052 8.75161 12.4052C9.1032 12.4052 9.44208 12.4602 9.75995 12.5614V9.42338C5.81921 9.50509 2.6499 12.7365 2.6499 16.7107C2.6499 18.6946 3.43913 20.4931 4.72006 21.8071C5.87565 22.5858 7.26675 23.04 8.76342 23.04C12.7747 23.04 16.0265 19.7765 16.0265 15.7509V7.70332H16.0265Z"
                      fill="black"
                    />
                    <path
                      id="Vector_3"
                      d="M21.5025 6.3578V5.51848C20.4748 5.52005 19.4672 5.23119 18.5952 4.68493C19.3671 5.53306 20.3835 6.11787 21.5025 6.3578ZM16.0867 0.959983C16.0605 0.809911 16.0404 0.658851 16.0265 0.507214V0H12.074V15.7508C12.0677 17.5868 10.5829 19.0736 8.75164 19.0736C8.214 19.0736 7.70638 18.9455 7.25685 18.7179C7.86397 19.5174 8.82259 20.0336 9.90164 20.0336C11.7326 20.0336 13.2177 18.5469 13.2241 16.7107V0.959983H16.0867ZM9.76014 9.42341V8.52989C9.42988 8.48459 9.09691 8.46186 8.76353 8.46202C4.75192 8.46194 1.5 11.7254 1.5 15.7508C1.5 18.2745 2.77806 20.4987 4.72017 21.807C3.43924 20.493 2.65001 18.6944 2.65001 16.7106C2.65001 12.7365 5.81924 9.50511 9.76014 9.42341Z"
                      fill="#00F2EA"
                    />
                  </g>
                </svg>
                {t("common.tiktok")}
              </li>
              <h3 className="text-text-main 2xl:text-[18px] text-[16px] leading-[27px] pb-[24px]">
                {t("common.tiktok_desc")}
              </h3>
            </ul>
          </div>
          <div className="md:max-w-[50%] flex items-center w-full">
            <img src={ServiceImage.src} />
          </div>
        </div>
        <div className="flex justify-between items-center mb-[100px] px-[20px] gap-[20px]  flex-col md:flex-row">
          <div className="md:max-w-[50%] flex items-center justify-center w-full">
            <img
              src={ServiceImage2.src}
              className="max-w-[80%] mb-[50px] md:mb-0 md:max-w-[100%]"
            />
          </div>

          <div className="w-full flex-1">
            <div className="relative w-full mb-[20px] flex justify-end">
              <img src={Image02.src} />
              <p className="text-[32px] Mulish-800 text-[#EC5656] absolute bottom-[8px] w-full right-0 text-right">
                Content Creation & Production
              </p>
            </div>
            <h3 className="text-text-main 2xl:text-[18px] text-[16px] leading-[27px] pb-[24px] text-right">
              We focus on building and coordinating new entertainment trends
              while creating monetization models based on user behavior and
              platform algorithms.
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service
