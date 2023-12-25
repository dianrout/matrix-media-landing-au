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
      <div className="max-w-[1520px] m-auto flex flex-col xs:mx-[16px] mx-[40px] 2xl:mx-0 xs:my-[32px] my-[50px] 2xl:my-[60px] py-[48px] xs:py-[32px] w-full">
        <h2 className="text-center mb-[32px] text-primary text-[48px] pc:text-[52px] xl:text-[62px] Mulish-800 uppercase leading-[60px] sm:leading-[90px] w-fit m-auto">
          Project
        </h2>
        <h3 className="text-center max-w-[1050px] text-[16px] m-auto mb-[104px] xs:mb-[44px] xs:px-[16px] pc:text-[22px] md:leading-[30px]">
          {t("common.project_home_desc")}
        </h3>
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
              slidesPerView={isMobile ? 1 : 2}
              autoplay={{
                delay: 3000,
                disableOnInteraction: true
              }}
              spaceBetween={24}
              className="flex gap-2"
            >
              {listProject.map((project: any, index: number) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="w-full bg-[#EBF8F3] rounded-[18px]">
                      <img
                        src={project.image.src}
                        alt="project"
                        className="rounded-[18px]"
                      />
                      <div className="px-[30px] py-[20px]">
                        <h3 className="text-[#0EC67F] pb-[12px] text-[22px] Mulish-700 leading-[24px] uppercase">
                          {project.title}
                        </h3>
                        <h1 className="text-[#0FD186] text-[16px] leading-[26px] Mulish-500">
                          {project.desc}
                        </h1>
                      </div>
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
                <div key={id} className="w-full bg-[#EBF8F3] rounded-[36px]">
                  <img
                    src={project.image.src}
                    alt="project"
                    className="rounded-[36px]"
                  />
                  <div className="px-[30px] py-[20px]">
                    <h3 className="text-[#0EC67F] pb-[12px] text-[22px] Mulish-700 leading-[24px] uppercase">
                      {project.title}
                    </h3>
                    <h1 className="text-[#0FD186] text-[18px] leading-[26px] Mulish-500">
                      {project.desc}
                    </h1>
                  </div>
                </div>
              )
            })}
          </div>
        )}

        <div
          className="w-[180px] h-[60px] m-auto mt-[30px] sm:mt-[56px] uppercase md:w-[270px] md:h-[72px] rounded-[64px] text-center items-center flex justify-center bg-[#0EC67F] text-white text-[16px] sm:text-[18px] Mulish-600 leading-[30px] cursor-pointer relative"
          onClick={() => router.push("/project")}
          style={{
            boxShadow: "3px 7px 15px 0px rgba(14, 198, 127, 0.25)"
          }}
        >
          {t("common.view_all_project")}
        </div>
      </div>
    </div>
  )
}

export default Project
