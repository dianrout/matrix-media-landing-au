import { Pagination } from "@components/Pagination"
import React, { useState } from "react"
import BlogImage from "@public/images/blog-ex.png"
import { useTranslation } from "next-i18next"
import { useRouter } from "next/router"
import Image from "next/image"
import ImgEmpty from "@public/images/img-data-empty.png"

const JobsContainer = () => {
  const { t } = useTranslation()
  const router = useRouter()
  const [page, setPage] = useState("1")
  const [activeTag, setActiveTag] = useState("All departments")
  const listTag = ["All departments", "marketing", "Design", "OTher"]
  const listJob: any = [
    // {
    //   name: "Content Creator",
    //   category: "Design",
    //   job: "Full-Time",
    //   add: "Hà Nội",
    //   duration: "30/9/2023",
    //   id: "content-creator"
    // },
    // {
    //   name: "Video Editor",
    //   category: "Design",
    //   job: "Full-Time",
    //   add: "Hà Nội",
    //   duration: "30/9/2023",
    //   id: "video-editor"
    // }
  ]
  return (
    <div className="w-full">
      <div className="max-w-[1520px] m-auto xs:px-[20px] px-[40px] 2xl:px-0 pt-[40px] lg:pt-[102px] pb-[76px] relative">
        <div className="w-full lg:w-[650px] lg:bg-white rounded-[12px] py-[32px] m-auto lg:absolute absolute-left mb-[20px] lg:mb-0">
          <ul className="flex m-auto gap-1 sm:justify-center xs:whitespace-nowrap xs:overflow-x-scroll xs:overflow-y-hidden xs:w-max xs:max-w-[100%]">
            {listTag.map((tag, index) => {
              return (
                <li
                  key={index}
                  onClick={() => setActiveTag(tag)}
                  className={`py-[8px] px-[24px] rounded-[8px] cursor-pointer ${
                    tag === activeTag && "text-color-label bg-[#EDEDED]"
                  } text-text-main text-[16px] Mulish-500 uppercase leading-[24px] hover:text-color-label hover:bg-[#EDEDED]`}
                >
                  {tag}
                </li>
              )
            })}
          </ul>
        </div>
        <div className="flex flex-col gap-[24px] mb-8">
          {listJob?.map((item: any, index: number) => {
            return (
              <div
                key={index}
                className="bg-white p-[32px] rounded-[20px] flex items-center xs:flex-col"
              >
                <div className="flex-1 pc:flex pc:items-center">
                  <div className="flex flex-col pc:w-[50%] mb-[16px] pc:mb-0">
                    <h1 className="text-[36px] 2xl:text-[40px] Mulish-500 text-text-red leading-[60px]">
                      {item?.name}
                    </h1>
                    <h2 className="text-text-main text-[16px] uppercase Mulish-500 leading-[24px] ">
                      {item?.category}
                    </h2>
                  </div>

                  <div className="flex gap-6 pc:w-[50%] xs:flex-wrap">
                    <div className="flex items-center xs:w-[50%]">
                      <svg
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="icon / jam-icons / outline &#38; logos / clock">
                          <path
                            id="Vector"
                            d="M13.7578 11H17.7578C18.023 11 18.2774 11.1054 18.4649 11.2929C18.6525 11.4804 18.7578 11.7348 18.7578 12C18.7578 12.2652 18.6525 12.5196 18.4649 12.7071C18.2774 12.8946 18.023 13 17.7578 13H12.7578C12.4926 13 12.2382 12.8946 12.0507 12.7071C11.8632 12.5196 11.7578 12.2652 11.7578 12V6C11.7578 5.73478 11.8632 5.48043 12.0507 5.29289C12.2382 5.10536 12.4926 5 12.7578 5C13.023 5 13.2774 5.10536 13.4649 5.29289C13.6525 5.48043 13.7578 5.73478 13.7578 6V11ZM12.7578 22C7.23481 22 2.75781 17.523 2.75781 12C2.75781 6.477 7.23481 2 12.7578 2C18.2808 2 22.7578 6.477 22.7578 12C22.7578 17.523 18.2808 22 12.7578 22ZM12.7578 20C14.8795 20 16.9144 19.1571 18.4147 17.6569C19.915 16.1566 20.7578 14.1217 20.7578 12C20.7578 9.87827 19.915 7.84344 18.4147 6.34315C16.9144 4.84285 14.8795 4 12.7578 4C10.6361 4 8.60125 4.84285 7.10096 6.34315C5.60067 7.84344 4.75781 9.87827 4.75781 12C4.75781 14.1217 5.60067 16.1566 7.10096 17.6569C8.60125 19.1571 10.6361 20 12.7578 20Z"
                            fill="#424242"
                          />
                        </g>
                      </svg>
                      <h3 className="text-color-label ml-2 text-[16px] leading-[24px]">
                        {" "}
                        {item?.job}
                      </h3>
                    </div>
                    <div className="flex items-center">
                      <svg
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="icon / jam-icons / outline &#38; logos / map-marker">
                          <path
                            id="Vector"
                            d="M17.7578 9C17.7578 7.67392 17.231 6.40215 16.2933 5.46447C15.3557 4.52678 14.0839 4 12.7578 4C11.4317 4 10.16 4.52678 9.22228 5.46447C8.2846 6.40215 7.75781 7.67392 7.75781 9C7.75781 10.726 9.41781 14.031 12.7578 18.653C16.0978 14.031 17.7578 10.726 17.7578 9ZM12.7578 22C8.09081 15.91 5.75781 11.577 5.75781 9C5.75781 7.14348 6.49531 5.36301 7.80806 4.05025C9.12082 2.7375 10.9013 2 12.7578 2C14.6143 2 16.3948 2.7375 17.7076 4.05025C19.0203 5.36301 19.7578 7.14348 19.7578 9C19.7578 11.577 17.4248 15.91 12.7578 22ZM12.7578 13C11.6969 13 10.6795 12.5786 9.92939 11.8284C9.17924 11.0783 8.75781 10.0609 8.75781 9C8.75781 7.93913 9.17924 6.92172 9.92939 6.17157C10.6795 5.42143 11.6969 5 12.7578 5C13.8187 5 14.8361 5.42143 15.5862 6.17157C16.3364 6.92172 16.7578 7.93913 16.7578 9C16.7578 10.0609 16.3364 11.0783 15.5862 11.8284C14.8361 12.5786 13.8187 13 12.7578 13ZM12.7578 11C13.2882 11 13.797 10.7893 14.172 10.4142C14.5471 10.0391 14.7578 9.53043 14.7578 9C14.7578 8.46957 14.5471 7.96086 14.172 7.58579C13.797 7.21071 13.2882 7 12.7578 7C12.2274 7 11.7187 7.21071 11.3436 7.58579C10.9685 7.96086 10.7578 8.46957 10.7578 9C10.7578 9.53043 10.9685 10.0391 11.3436 10.4142C11.7187 10.7893 12.2274 11 12.7578 11Z"
                            fill="#424242"
                          />
                        </g>
                      </svg>

                      <h3 className="text-color-label ml-2 text-[16px] leading-[24px]">
                        {" "}
                        {item?.add}
                      </h3>
                    </div>
                    <div className="flex items-center">
                      <svg
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="icon / jam-icons / outline &#38; logos / chronometer">
                          <path
                            id="Vector"
                            d="M13.7583 13H15.7583C16.0235 13 16.2779 13.1054 16.4654 13.2929C16.653 13.4804 16.7583 13.7348 16.7583 14C16.7583 14.2652 16.653 14.5196 16.4654 14.7071C16.2779 14.8946 16.0235 15 15.7583 15H12.7583C12.6269 15.0004 12.4967 14.9748 12.3752 14.9247C12.2537 14.8746 12.1433 14.8009 12.0503 14.708C11.9574 14.6151 11.8837 14.5047 11.8336 14.3832C11.7835 14.2616 11.7579 14.1314 11.7583 14V10C11.7583 9.73478 11.8637 9.48043 12.0512 9.29289C12.2387 9.10536 12.4931 9 12.7583 9C13.0235 9 13.2779 9.10536 13.4654 9.29289C13.653 9.48043 13.7583 9.73478 13.7583 10V13ZM6.62732 8.861C6.39883 8.75503 6.2007 8.59324 6.05121 8.39053C5.90172 8.18783 5.80568 7.95075 5.77194 7.70115C5.7382 7.45156 5.76785 7.19749 5.85817 6.96237C5.94848 6.72725 6.09654 6.51866 6.28869 6.35584C6.48085 6.19301 6.71091 6.08119 6.95766 6.03069C7.20441 5.98019 7.4599 5.99263 7.70058 6.06687C7.94125 6.14112 8.15935 6.27477 8.33478 6.4555C8.5102 6.63623 8.63728 6.85822 8.70432 7.101C9.06469 6.88907 9.44119 6.70584 9.83032 6.553C9.39298 6.2491 9.06411 5.81348 8.89165 5.30962C8.71918 4.80576 8.71212 4.25999 8.87149 3.75184C9.03087 3.24368 9.34836 2.7997 9.77769 2.48459C10.207 2.16948 10.7258 1.9997 11.2583 2H14.2583C14.7909 1.9997 15.3096 2.16948 15.7389 2.48459C16.1683 2.7997 16.4858 3.24368 16.6451 3.75184C16.8045 4.25999 16.7975 4.80576 16.625 5.30962C16.4525 5.81348 16.1237 6.2491 15.6863 6.553C16.0763 6.707 16.4533 6.89 16.8123 7.101C16.8794 6.85822 17.0064 6.63623 17.1819 6.4555C17.3573 6.27477 17.5754 6.14112 17.8161 6.06687C18.0567 5.99263 18.3122 5.98019 18.559 6.03069C18.8057 6.08119 19.0358 6.19301 19.2279 6.35584C19.4201 6.51866 19.5682 6.72725 19.6585 6.96237C19.7488 7.19749 19.7784 7.45156 19.7447 7.70115C19.711 7.95075 19.6149 8.18783 19.4654 8.39053C19.3159 8.59324 19.1178 8.75503 18.8893 8.861C19.8672 10.0278 20.4918 11.4495 20.6899 12.959C20.8879 14.4685 20.6511 16.0031 20.0072 17.3827C19.3634 18.7623 18.3393 19.9295 17.0552 20.7473C15.7711 21.5651 14.2802 21.9996 12.7578 21.9996C11.2354 21.9996 9.74458 21.5651 8.46045 20.7473C7.17633 19.9295 6.15222 18.7623 5.50839 17.3827C4.86456 16.0031 4.62776 14.4685 4.82578 12.959C5.0238 11.4495 5.64844 10.0278 6.62632 8.861H6.62732ZM12.7583 20C14.3496 20 15.8757 19.3679 17.001 18.2426C18.1262 17.1174 18.7583 15.5913 18.7583 14C18.7583 12.4087 18.1262 10.8826 17.001 9.75736C15.8757 8.63214 14.3496 8 12.7583 8C11.167 8 9.64089 8.63214 8.51568 9.75736C7.39046 10.8826 6.75832 12.4087 6.75832 14C6.75832 15.5913 7.39046 17.1174 8.51568 18.2426C9.64089 19.3679 11.167 20 12.7583 20ZM11.2583 4C11.1257 4 10.9985 4.05268 10.9048 4.14645C10.811 4.24022 10.7583 4.36739 10.7583 4.5C10.7583 4.63261 10.811 4.75979 10.9048 4.85355C10.9985 4.94732 11.1257 5 11.2583 5H14.2583C14.3909 5 14.5181 4.94732 14.6119 4.85355C14.7056 4.75979 14.7583 4.63261 14.7583 4.5C14.7583 4.36739 14.7056 4.24022 14.6119 4.14645C14.5181 4.05268 14.3909 4 14.2583 4H11.2583Z"
                            fill="#424242"
                          />
                        </g>
                      </svg>

                      <h3 className="text-color-label ml-2 text-[16px] leading-[24px]">
                        {" "}
                        {item?.duration}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="h-full w-[110px] xs:w-full">
                  <button
                    className="uppercase text-white Mulish-500 leading-[21px] py-[8px] px-[24px] rounded-[8px] bg-text-red w-full xs:mt-8"
                    onClick={() => router.push(`jobs/${item.id}`)}
                  >
                    {t("common.apply")}
                  </button>
                </div>
              </div>
            )
          })}
          <div className="data-empty my-8 text-center px-6 col-span-3 m-auto">
            <Image src={ImgEmpty} alt={""} className={`sm:max-w-[450px]`} />
            <h4 className="my-4 NunitoSans-600 text-[20px]">No Data</h4>
          </div>
        </div>
        <div className="flex justify-center">
          <Pagination total={2} pageIndex={1} setPageIndex={setPage} />
        </div>
      </div>
    </div>
  )
}

export default JobsContainer
