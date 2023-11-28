import { Pagination } from "@components/Pagination"
import React, { useRef, useState } from "react"
import BlogImage from "@public/images/blog-ex.png"
import { useTranslation } from "next-i18next"
import { useRouter } from "next/router"
import ButtonComponent from "@components/Button"

const JobsDetailContainer = () => {
  const { t } = useTranslation()
  const router = useRouter()
  const [page, setPage] = useState("1")
  const [activeTag, setActiveTag] = useState("All departments")
  const id = router.query.id
  const fileInput = useRef<HTMLInputElement>(null)

  const listJob = [
    {
      name: "Content Creator",
      category: "Design",
      job: "Full-Time",
      add: "Hà Nội",
      duration: "30/9/2023",
      id: "content-creator",
      request: [
        "Trình độ tiếng Trung ở mức khá ( tương đương HSK 5)",
        "Ứng viên có tối thiểu 6 tháng kinh nghiệm ở vị trí tương đương",
        "Có kiến thức, kinh nghiệm trong mảng sáng tạo nội dung (text & visual), xây dựng chiến lược phát triển nội dung.",
        "Có tư duy nội dung và khả năng sáng tạo nội dung hiện đại",
        "Hỗ trợ các công việc khác được giao"
      ],
      benefit: [
        "Mức lương khởi điểm: Lương cứng (8.000.000 VNĐ) + Phụ cấp (1.000.000 VNĐ) + Thưởng % doanh thu + Thưởng tháng",
        "Thử việc 2 tháng nhận 85% lương",
        "Hưởng các quyền lợi theo quy định của Nhà nước sau thử việc (đóng BHYT, BHXH, BHTN)",
        "Nghỉ phép 12 ngày/ năm, lễ, Tết theo quy định Nhà nước",
        "Được tham gia các hoạt động Company Trip mỗi năm",
        "Được thỏa sức sáng tạo với các ý tưởng của riêng mình",
        "Môi trường trẻ trung, năng động, chuyên nghiệp trong công việc, có nhiều cơ hội phát triển"
      ],
      other: [
        "Từ thứ 2 đến thứ 7 hằng tuần",
        "Thời gian: 8h30 đến 18h (nghỉ trưa 1 tiếng rưỡi)",
        "Địa điểm: Số 1, Đường Lê Quang Đạo, Mễ Trì, Nam Từ Liêm, Hà Nội"
      ]
    },
    {
      name: "Video Editor",
      category: "Design",
      job: "Full-Time",
      add: "Hà Nội",
      duration: "30/9/2023",
      id: "video-editor",
      request: [
        "Ứng viên có tối thiểu 6 tháng kinh nghiệm ở vị trí tương đương",
        "Độ tuổi phù hợp: 1998 - 2001",
        "Thành thạo các phần mềm như Adobe Premiere, Camtasia...",
        "Có niềm say mê sáng tạo ý tưởng và nội dung"
      ],
      benefit: [
        "Mức lương khởi điểm: Lương cứng (8.000.000 VNĐ) + Phụ cấp (1.000.000 VNĐ) + Thưởng % doanh thu + Thưởng tháng",
        "Hưởng các quyền lợi theo quy định của Nhà nước sau thử việc (đóng BHYT, BHXH, BHTN)",
        "Nghỉ phép 12 ngày/ năm, lễ, Tết theo quy định Nhà nước",
        "Được tham gia các hoạt động Company Trip mỗi năm",
        "Hỗ trợ máy tính làm việc",
        "Thử việc 2 tháng nhận 85% lương",
        "Môi trường trẻ trung, năng động, chuyên nghiệp trong công việc, có nhiều cơ hội phát triển"
      ],
      other: [
        "Từ thứ 2 đến thứ 7 hằng tuần",
        "Thời gian: 8h30 đến 18h (nghỉ trưa 1 tiếng rưỡi)",
        "Địa điểm: Số 1, Đường Lê Quang Đạo, Mễ Trì, Nam Từ Liêm, Hà Nội"
      ]
    }
  ]

  const jobDetail = listJob.find((item) => item.id === id)
  return (
    <div className="w-full">
      <div className="max-w-[1520px] m-auto px-[20px] md:px-[40px] 2xl:px-0 pt-[40px] 2xl:pt-[60px] pb-[76px] relative flex justify-between flex-col pc:flex-row">
        <div className="pc:max-w-[874px]">
          <h3 className="text-text-main text-[16px] Roboto-500 uppercase leading-[24px] pb-[16px]">
            {jobDetail?.category}
          </h3>
          <h1 className="text-text-orange text-[40px] Roboto-500 leading-[60px] pb-[24px]">
            {jobDetail?.name}
          </h1>
          <div className="flex gap-8 pb-[32px] xs:flex-wrap">
            <div className="flex gap-2 text-color-label text-[16px] xs:w-[50%]">
              <h3 className="Roboto-600">{t("common.job_type")}</h3>
              {jobDetail?.job}
            </div>
            <div className="flex gap-2 text-color-label text-[16px]">
              <h3 className="Roboto-600">{t("common.add")}</h3>
              {jobDetail?.add}
            </div>
            <div className="flex gap-2 text-color-label text-[16px]">
              <h3 className="Roboto-600">{t("common.duration")}</h3>
              {jobDetail?.duration}
            </div>
          </div>

          <div className="mb-[32px] job-menu">
            <h1 className="text-[#0A0A0A] text-[20px] Roboto-500 leading-[30px] mb-4">
              {t("common.request")}
            </h1>
            <ul>
              {jobDetail?.request.map((item, id) => {
                return (
                  <li
                    key={id}
                    className="text-text-main text-[20px] leading-[30px] pb-1"
                  >
                    {item}
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="mb-[32px] job-menu">
            <h1 className="text-[#0A0A0A] text-[20px] Roboto-500 leading-[30px] mb-4">
              {t("common.benifit")}
            </h1>
            <ul>
              {jobDetail?.benefit.map((item, id) => {
                return (
                  <li
                    key={id}
                    className="text-text-main text-[20px] leading-[30px] pb-1"
                  >
                    {item}
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="mb-[32px] job-menu">
            <h1 className="text-[#0A0A0A] text-[20px] Roboto-500 leading-[30px] mb-4">
              {t("common.time_and_place")}
            </h1>
            <ul>
              {jobDetail?.other.map((item, id) => {
                return (
                  <li
                    key={id}
                    className="text-text-main text-[20px] leading-[30px] pb-1"
                  >
                    {item}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        <div className="pc:sticky p-[32px] xs:py-[24px] xs:px-[16px] bg-white rounded-[20px] h-fit pc:max-w-[423px] pc:top-[100px] pc:right-0">
          <h1 className="text-[#0A0A0A] text-[24px] Roboto-600 leading-[36px] pb-2">
            {t("common.job_application")}
          </h1>
          <h2 className="text-color-label text-[20px] leading-[30px] pb-[32px]">
            {t("common.fill_the_form")}
          </h2>
          <label className="text-color-label text-[16px] Roboto-500 leading-[24px] mb-4">
            {t("common.label_name")}
          </label>
          <input
            placeholder={t("common.label_name")}
            className="text-[16px] px-[16px] py-[12px] outline-0 border rounded-[8px] w-full mt-2 mb-5"
          ></input>
          <label className="text-color-label text-[16px] Roboto-500 leading-[24px] mb-4">
            {t("common.email")}
          </label>
          <input
            placeholder={t("common.email")}
            className="text-[16px] px-[16px] py-[12px] outline-0 border rounded-[8px] w-full mt-2 mb-5"
          ></input>
          <label className="text-color-label text-[16px] Roboto-500 leading-[24px] mb-4">
            {t("common.upload_cv")}
          </label>
          <div
            className="py-[32px] rounded-[8px] w-full border-dashed border border-color-border mt-2 cursor-pointer relative"
            onClick={() => fileInput?.current && fileInput?.current?.click()}
          >
            <input
              ref={fileInput}
              type="file"
              // onChange={onChangeFile}
              onClick={(event: any) => {
                event.target.value = ""
              }}
              className="hidden absolute w-full h-full top-0 left-0 right-0"
            />
            <h2 className="text-center text-text-main">
              {t("common.upload_cv_desc")}
            </h2>
          </div>
          <ButtonComponent className="w-full uppercase text-[16px] mt-4">
            {t("common.apply_now")}
          </ButtonComponent>
        </div>
      </div>
    </div>
  )
}

export default JobsDetailContainer
