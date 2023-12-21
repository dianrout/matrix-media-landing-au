import { Pagination } from "@components/Pagination"
import React, { useState } from "react"
import BlogImage from "@public/images/blog-ex.png"

import ImgEmpty from "@public/images/img-data-empty.png"
import Image from "next/image"

const BlogContainer = () => {
  const [page, setPage] = useState("1")
  const [activeTag, setActiveTag] = useState("All content")
  const listTag = [
    "All content",
    "Youtube tag 1",
    "Facebook tag 1",
    "Seo tag 1"
  ]
  return (
    <div className="w-full">
      <div className="max-w-[1520px] m-auto px-[20px] sd:px-[40px] 2xl:px-0 pt-[24px] pb-[76px]">
        <div className="w-full">
          <ul className="flex m-auto gap-1 mb-[32px] sm:justify-center xs:whitespace-nowrap xs:overflow-x-scroll xs:overflow-y-hidden xs:w-max xs:max-w-[100%]">
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
        <div className="grid grid-col-1 sm:grid-cols-2 pc:grid-cols-3 gap-[24px]">
          {[].map((item, index) => {
            return (
              <div key={index}>
                <img
                  src={BlogImage.src}
                  alt="blog"
                  className="max-h-[280px] object-cover rounded-[12px]"
                />
                <h2 className="pt-[32px] text-text-main text-[16px] upperccase Mulish-500 pb-[12px]">
                  20/02/2023 - 15:05
                </h2>
                <h1 className="text-ellipsis-claim mb-[32px] text-[#0A0A0A] text-[24px] Mulish-600 leading-[36px] ">
                  Professor McGonagall wealdy verry long name of project
                  professor McGonagall wealdy verry long name of project
                </h1>
              </div>
            )
          })}
          <div className="data-empty my-8 text-center px-6 col-span-3 m-auto">
            <Image src={ImgEmpty} alt={""} className={`sm:max-w-[450px]`} />
            <h4 className="my-4 NunitoSans-600 text-[20px]">No Data</h4>
          </div>
        </div>
        <div className="flex justify-center">
          <Pagination total={1} pageIndex={1} setPageIndex={setPage} />
        </div>
      </div>
    </div>
  )
}

export default BlogContainer
