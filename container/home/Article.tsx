import { useRouter } from "next/router"
import React from "react"
import Article1 from "public/img/article/article-1.png"
import Article2 from "public/img/article/article-2.png"
import Article3 from "public/img/article/article-3.png"
import Animation from "@public/images/animation.jpg"
import IconArrowLeft from "@public/images/icons/IconArrowLeft"
import IconArrowRight from "@public/images/icons/IconArrowRight"
import Restore from "@public/images/restore.jpg"
import Survival from "@public/images/survival.jpg"
import { useTranslation } from "next-i18next"
import { useRef } from "react"
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper"
import "swiper/css"
import "swiper/css/pagination"
import { Swiper, SwiperSlide } from "swiper/react"
import { useWindowSize } from "utils"

SwiperCore.use([Pagination, Navigation])

const Article = () => {
  const router = useRouter()
  const [width] = useWindowSize()
  const isMobile = width < 576
  const isTablet = width < 1024
  const navigationPrevRef = useRef<HTMLButtonElement>(null)
  const navigationNextRef = useRef<HTMLButtonElement>(null)

  const listArticle = [
    {
      image: Article1,
      title: "Detailed insights for your social media",
      created: "December 05, 2021",
      time: 3,
      category: ["Analyze", "Marketing"],
      desc: "Gain profound understanding of your social media performance, with detailed analytics on interactions, audience demographics, and emerging trends to optimize your online strategy."
    },
    {
      image: Article2,
      title: "New Device Invention for Digital Platform",
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
    <div className="max-w-[1520px] m-auto">
      <div className="flex justify-between items-center mt-[40px] mb-[43px] flex-col sd:flex-row px-[20px]">
        <div>
          <h1 className="text-[50px] Mulish-800 md:leading-[55px] pb-[20px]">
            Latest News and Articles
          </h1>
          <p className="text-[20px] text-[#808080]">
            We always want to bring the most useful content
          </p>
        </div>

        <div
          onClick={() => router.push("/blogs")}
          className="text-[20px] cursor-pointer Mulish-600 border border-[#DCDCDC] px-[50px] py-[20px] rounded-[50px] mt-[30px] sd:mt-0"
        >
          See More News
        </div>
      </div>
      {isTablet ? (
        <div className="relative mx-[40px] xs:mx-[16px]">
          <div className="xs:mb-[30px] m-auto flex gap-8 justify-center">
            <button
              className="sm:absolute sm:left-[-20px] sm:top-[100px] xs: cursor-pointer bg-text-red rounded-[10px] p-[10px]"
              ref={navigationPrevRef}
              style={{ zIndex: 5 }}
            >
              <IconArrowLeft />
            </button>
            <button
              className="sm:absolute sm:right-[-20px] sm:top-[100px] cursor-pointer bg-text-red rounded-[10px] p-[10px]"
              ref={navigationNextRef}
              style={{ zIndex: 5 }}
            >
              <IconArrowRight />
            </button>
          </div>

          <Swiper
            // modules={[Autoplay, Pagination]}
            loop
            navigation={{
              prevEl: navigationPrevRef.current && navigationPrevRef.current,
              nextEl: navigationNextRef.current && navigationNextRef.current
            }}
            onInit={(swiper: any) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current
              swiper.params.navigation.nextEl = navigationNextRef.current
              swiper.navigation.update()
            }}
            slidesPerGroup={1}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true
            }}
            spaceBetween={47}
            className="flex gap-2"
          >
            {listArticle.map((article: any, index: number) => {
              return (
                <SwiperSlide key={index} className="w-full">
                  <div className="w-full flex flex-col">
                    <div className="relative">
                      <img
                        src={article.image.src}
                        alt="project"
                        className="rounded-[20px] w-full h-[370px] object-cover"
                      />
                      <div className="flex gap-4 absolute left-[20px] bottom-[20px]">
                        {article.category.map((item: any, index: number) => {
                          return (
                            <p
                              key={index}
                              className="bg-[#F6F6F6] px-[30px] py-[13px] rounded-[30px] text-[18px] Mulish-600"
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
                    <p className="text-[20px] Mulish-600 mt-auto mb-0 cursor-pointer">
                      View More
                    </p>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-[47px] px-[20px]">
          {listArticle.map((article, id) => {
            return (
              <div key={id} className="w-full flex flex-col">
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
                          className="bg-[#F6F6F6] px-[30px] py-[13px] rounded-[30px] text-[18px] Mulish-600"
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
                <p className="text-[20px] Mulish-600 mt-auto mb-0 cursor-pointer">
                  View More
                </p>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Article
