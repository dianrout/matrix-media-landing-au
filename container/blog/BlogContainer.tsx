import { Pagination } from "@components/Pagination"
import React, { useState } from "react"
import BlogImage from "@public/images/blog-ex.png"
import Article1 from "public/img/article/article-1.png"
import Article2 from "public/img/article/article-2.png"
import Article3 from "public/img/article/article-3.png"
import ImgEmpty from "@public/images/img-data-empty.png"
import Image from "next/image"

const BlogContainer = () => {
  const [page, setPage] = useState("1")
  const listArticle = [
    {
      image: Article1,
      title: "Detailed Insights For Your Social Media",
      created: "December 05, 2021",
      time: 3,
      category: ["Analyze", "Marketing"],
      desc: "Gain profound understanding of your social media performance, with detailed analytics on interactions, audience demographics, and emerging trends to optimize your online strategy."
    },
    {
      image: Article2,
      title: "New Device Invention For Digital Platform",
      created: "December 05, 2021",
      category: ["Analyze"],
      time: 3,
      desc: "Introducing an innovative device for the digital platform, revolutionizing user experience with cutting-edge technology and enhanced functionalities."
    },
    {
      image: Article3,
      title: "Business Strategy Make His Goal Acheive",
      created: "December 05, 2021",
      category: ["Analyze", "Marketing"],
      time: 3,
      desc: "Crafting a potent business strategy to actualize goals, ensuring effective execution and success in achieving the envisioned objectives."
    }
  ]
  return (
    <div className="w-full">
      <div className="max-w-[1520px] m-auto px-[20px] sd:px-[40px] 2xl:px-0 pt-[24px] pb-[76px]">
        <div className="grid sd:grid-cols-2 gap-[47px]">
          {listArticle.map((article, id) => {
            return (
              <div
                key={id}
                className="w-full flex flex-col p-[20px] sd:p-[40px] rounded-[20px] sd:rounded-[50px] bg-[#F9F9F9]"
              >
                <div className="relative">
                  <img
                    src={article.image.src}
                    alt="project"
                    className="rounded-[20px] w-full h-[370px] object-cover"
                  />
                  <div className="flex gap-4 absolute left-[20px] bottom-[20px]">
                    {article.category.map((item, index) => {
                      return (
                        <p
                          key={index}
                          className="bg-[#fff] px-[30px] py-[13px] rounded-[30px] text-[18px] Mulish-600"
                        >
                          {item}
                        </p>
                      )
                    })}
                  </div>
                </div>
                <div className="flex justify-between py-[25px] text-[20px] text-[#808080] border-b-[1px] border-[#DCDCDC]">
                  <p>{article.created}</p>
                  <p>{article.time} min read</p>
                </div>
                <h1 className="text-[30px] Mulish-700 py-[20px]">
                  {article.title}
                </h1>
                <p className="text-[20px] text-[#808080] pb-[10px]">
                  {article.desc}
                </p>
                <p className="text-primary underline text-[20px] Mulish-600 mt-auto mb-0 cursor-pointer pt-[20px]">
                  View More
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default BlogContainer
