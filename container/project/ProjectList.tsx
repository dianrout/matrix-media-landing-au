import React from "react"
import Animation from "@public/images/animation.jpg"
import Survival from "@public/images/survival.jpg"
import Restore from "@public/images/restore.jpg"
import { useTranslation } from "next-i18next"

const ProjectList = () => {
  const { t } = useTranslation()

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
    <div className="max-w-[1520px] m-auto py-[24px] px-[40px] xs:px-[20px] 2xl:px-0 mt-[50px] 2xl:mt-[82px] 2xl:mb-[122px] mb-[60px]">
      {listProject.map((project: any, index: number) => {
        return (
          <div
            key={index}
            className="flex gap-[48px] xs:gap-[24px] mb-[52px] last:mb-0 xs:flex-col"
          >
            <div className="w-[40%] xs:w-full">
              <img
                src={project.image.src}
                alt={project.name}
                className="m-auto cover rounded-[12px]"
              />
            </div>
            <div className="flex-1">
              <h1 className="text-[26px] 2xl:text-[32px] Mulish-700 pb-[16px] text-button-red">
                {project.title}
              </h1>
              <h2 className="text-text-main uppercase text-[26px]  2xl:text-[30px] pb-[16px]">
                {project.name}
              </h2>
              <h3 className="text-text-desc 2xl:text-[24px] text-[20px] leading-[36px]">
                {project.desc}
              </h3>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ProjectList
