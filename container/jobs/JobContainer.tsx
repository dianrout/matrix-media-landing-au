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
  const listJob = [
    {
      category: "Marketing",
      listJobs: [
        {
          name: "Copywriter (Intermediate)",
          address: "Geelong, Vic",
          type: "Partime",
          description:
            "Shape the company's message and image confidently with the Copywriter (Intermediate) position. Responsibilities include crafting sharp, compelling content that captivates and optimizes the brand's voice. The candidate will be responsible for writing advertising copy, website content, and other marketing materials. A creative and passionate team awaits dynamic, seasoned writers to join and contribute to the company's growth."
        }
      ]
    },
    {
      category: "Product",
      listJobs: [
        {
          name: "Content Creator",
          address: "Geelong, Vic",
          type: "Full-Time",
          description:
            "Ignite creativity as a Content Creator! Dive into the world of crafting engaging content that resonates with our audience. From social media posts to captivating blogs, bring our brand to life through your innovative storytelling. Collaborate with a dynamic team, shaping narratives that leave a lasting impact. If you're a passionate and imaginative content enthusiast, we invite you to be the driving force behind our brand's compelling story. Join us on this exciting journey!"
        },
        {
          name: "Video Editor",
          address: "Geelong, Vic",
          type: "Full-Time",
          description:
            "Shape captivating stories as a Video Editor! From social media snippets to polished promos, use your creativity to bring our brand to life visually. Collaborate with a dynamic team to craft compelling narratives that leave a lasting impression. If you're a skilled video editing enthusiast, join us in enhancing our brand's visual appeal. Let's create impactful videos together!"
        }
      ]
    }
  ]
  return (
    <div className="w-full mb-[200px]">
      <div className="max-w-[1520px] m-auto xs:px-[20px] px-[40px] 2xl:px-0">
        <div className="text-center Mulish-800 text-[40px] sd:text-[40px] py-[130px] max-w-[700px] m-auto">
          Become a part of our big family to inspire and get inspired by
          <p className="text-primary">professional experts.</p>
        </div>
        {listJob.map((job, index) => {
          return (
            <div key={index} className="w-full mb-[100px] md:mb-[140px]">
              <h1 className="text-[40px] Mulish-700 xs:pb-[40px] pb-[60px] md:pb-[80px]">
                {job.category}
              </h1>
              <div>
                {job.listJobs.map((jobItem, key) => {
                  return (
                    <div
                      key={key}
                      className="flex gap-[60px] xs:ml-0 ml-[20px] pc:ml-[120px] xs: py-[50px] py-[90px] first:pt-0 border-b-[1px] border-b-[#DCDCDC] items-center xs:flex-col"
                    >
                      <div className="flex-1">
                        <h2 className="text-[30px] Mulish-700 pb-1">
                          {jobItem.name}
                        </h2>
                        <div className="flex gap-2 text-[20px] text-[#242331] items-center pb-[20px]">
                          <p>{jobItem.address}</p> |{" "}
                          <p className="text-primary">{jobItem.type}</p>
                        </div>
                        <p className="text-[20px] text-[#808080]">
                          {jobItem.description}
                        </p>
                      </div>
                      <div
                        className="w-[180px] h-[60px] md:w-[200px] md:h-[70px] rounded-[64px] text-center items-center flex justify-center hover:bg-[#2F2F2F] hover:text-white border border-[#DCDCDC] text-[20px] Mulish-600 leading-[30px] cursor-pointer relative"
                        onClick={() => router.push("/contact-us")}
                      >
                        Apply Now
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
      <div className="text-center">
        <h1 className="text-[30px] Mulish-700 pb-2">
          Can't find the perfect position?
        </h1>
        <p className="text-[#808080] text-[20px] pb-[30px] max-w-[700px] m-auto">
          Stuck in the job search? Look no further! Explore exciting
          opportunities with us and discover your perfect position today.
        </p>
        <div
          className="w-[180px] h-[60px] md:w-[200px] md:h-[72px] rounded-[64px] text-center items-center flex justify-center bg-primary text-white text-[20px] mdtext-[24px] Mulish-500 leading-[30px] cursor-pointer relative mb-[30px] m-auto"
          style={{
            boxShadow: "3px 7px 15px 0px rgba(211, 17, 17, 0.25)"
          }}
        >
          Contact
        </div>
      </div>
    </div>
  )
}

export default JobsContainer
