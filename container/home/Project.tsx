import Animation from "@public/images/animation.jpg"
import IconArrowLeft from "@public/images/icons/IconArrowLeft"
import IconArrowRight from "@public/images/icons/IconArrowRight"
import Restore from "@public/images/restore.jpg"
import Survival from "@public/images/survival.jpg"
import { useTranslation } from "next-i18next"
import { useRouter } from "next/router"
import { useRef } from "react"
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper"
import "swiper/css"
import "swiper/css/pagination"
import { Swiper, SwiperSlide } from "swiper/react"
import { useWindowSize } from "utils"

SwiperCore.use([Pagination, Navigation])

const Project = () => {
  const { t } = useTranslation()
  const router = useRouter()
  const [width] = useWindowSize()
  const isMobile = width < 576
  const isTablet = width < 1024
  const navigationPrevRef = useRef<HTMLButtonElement>(null)
  const navigationNextRef = useRef<HTMLButtonElement>(null)

  const listProject = [
    {
      image: Restore,
      title: t("common.project_1_title"),
      desc: t("common.project_1_desc"),
      name: "Restore"
    },
    {
      image: Animation,
      title: t("common.project_2_title"),
      desc: t("common.project_2_desc"),
      name: "Animation"
    },
    {
      image: Survival,
      title: t("common.project_3_title"),
      desc: t("common.project_3_desc"),
      name: "Survival"
    }
  ]

  return (
    <div className="w-full flex justify-center">
      <div className="max-w-[1520px] m-auto flex flex-col xs:mx-[16px] mx-[40px] 2xl:mx-0 xs:my-[32px] my-[50px] 2xl:my-[90px] py-[48px] xs:py-[32px] w-full">
        <h2
          className="text-center px-[16px] py-[8px] rounded-[4px] text-text-orange text-[16px] Roboto-500 uppercase leading-[24px] w-fit m-auto"
          style={{
            background: "rgba(255, 97, 0, 0.05)"
          }}
        >
          Project
        </h2>
        <h1 className="text-text-orange text-[26px] pc:text-[32px] Roboto-700 leading-38px uppercase py-[24px] xs:pb-[16px] text-center">
          What we did
        </h1>
        <h3 className="text-center mb-[54px] xs:mb-[44px] xs:px-[16px] text-color-label text-[16px] pc:text-[20px] md:leading-[30px]">
          {t("common.project_home_desc")}
        </h3>
        {isTablet ? (
          <div className="relative mx-[40px] xs:mx-[16px]">
            <div className="xs:mb-[30px] m-auto flex gap-8 justify-center">
              <button
                className="sm:absolute sm:left-[-20px] sm:top-[100px] xs: cursor-pointer bg-text-orange rounded-[10px] p-[10px]"
                ref={navigationPrevRef}
                style={{ zIndex: 5 }}
              >
                <IconArrowLeft />
              </button>
              <button
                className="sm:absolute sm:right-[-20px] sm:top-[100px] cursor-pointer bg-text-orange rounded-[10px] p-[10px]"
                ref={navigationNextRef}
                style={{ zIndex: 5 }}
              >
                <IconArrowRight />
              </button>
            </div>

            <Swiper
              // modules={[Autoplay, Pagination]}
              // loop
              navigation={{
                prevEl: navigationPrevRef.current && navigationPrevRef.current,
                nextEl: navigationNextRef.current && navigationNextRef.current
              }}
              onInit={(swiper: any) => {
                swiper.params.navigation.prevEl = navigationPrevRef.current
                swiper.params.navigation.nextEl = navigationNextRef.current
                swiper.navigation.update()
              }}
              slidesPerGroup={2}
              slidesPerView={isMobile ? 1 : 2}
              // autoplay={{
              //   delay: 3000,
              //   disableOnInteraction: true
              // }}
              spaceBetween={24}
              className="flex gap-2"
            >
              {listProject.map((project: any, index: number) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="w-full">
                      <img
                        src={project.image.src}
                        alt="project"
                        className="rounded-[12px] mb-[32px]"
                      />
                      <h3 className="text-text-main pb-[12px] text-[16px] Roboto-500 leading-[24px] uppercase">
                        {project.name}
                      </h3>
                      <h1 className="text-[#0A0A0A] text-[24px] leading-[36px] Roboto-600">
                        {project.title}
                      </h1>
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-[24px]">
            {listProject.map((project, id) => {
              return (
                <div key={id} className="w-full">
                  <img
                    src={project.image.src}
                    alt="project"
                    className="rounded-[12px] mb-[32px]"
                  />
                  <h3 className="text-text-main pb-[12px] text-[16px] Roboto-500 leading-[24px] uppercase">
                    {project.name}
                  </h3>
                  <h1 className="text-[#0A0A0A] text-[24px] leading-[36px] Roboto-600">
                    {project.title}
                  </h1>
                </div>
              )
            })}
          </div>
        )}

        <div
          className="text-text-orange m-auto mt-[56px] flex gap-4 uppercase text-[16px] Roboto-500 leading-[24px] items-center cursor-pointer w-fit"
          onClick={() => router.push("/project")}
        >
          {t("common.view_all_project")}{" "}
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="icon / arrow-right-short">
              <path
                id="Vector"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.5 12C6.5 11.8011 6.57902 11.6103 6.71967 11.4696C6.86032 11.329 7.05109 11.25 7.25 11.25H15.9395L12.719 8.03097C12.5782 7.89014 12.4991 7.69913 12.4991 7.49997C12.4991 7.30081 12.5782 7.1098 12.719 6.96897C12.8598 6.82814 13.0508 6.74902 13.25 6.74902C13.4492 6.74902 13.6402 6.82814 13.781 6.96897L18.281 11.469C18.3508 11.5386 18.4063 11.6214 18.4441 11.7125C18.4819 11.8036 18.5013 11.9013 18.5013 12C18.5013 12.0986 18.4819 12.1963 18.4441 12.2874C18.4063 12.3785 18.3508 12.4613 18.281 12.531L13.781 17.031C13.6402 17.1718 13.4492 17.2509 13.25 17.2509C13.0508 17.2509 12.8598 17.1718 12.719 17.031C12.5782 16.8901 12.4991 16.6991 12.4991 16.5C12.4991 16.3008 12.5782 16.1098 12.719 15.969L15.9395 12.75H7.25C7.05109 12.75 6.86032 12.671 6.71967 12.5303C6.57902 12.3896 6.5 12.1989 6.5 12Z"
                fill="#FF6100"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Project
