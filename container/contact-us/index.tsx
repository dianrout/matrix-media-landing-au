import { useTranslation } from "next-i18next"

const ContactUsContainer = () => {
  const { t } = useTranslation()

  const renderInput = (label: string, placeholder: string) => {
    return (
      <div className="w-full flex flex-col">
        <label className="text-[18px] sm:text-[20px] Mulish-700 capitalize pb-[17px]">
          {label}
        </label>
        <input
          placeholder={placeholder}
          className="h-[60px] sm:h-[80px] outline-0 text-[16px] sm:text-[20px] p-[20px] sm:p-[30px] border border-[#DCDCDC] rounded-[20px]"
        />
      </div>
    )
  }

  return (
    <div className="">
      <div className="block-contact-us h-[734px] pt-[150px] flex flex-col">
        <h1 className="text-center text-[50px] Mulish-800 uppercase leading-[57px] text-white pb-[24px]">
          Get in Touch
        </h1>
        <div className="flex gap-[10px] sm:gap-[100px] mx-auto flex-col sm:flex-row w-fit">
          <div className="flex gap-2 items-center text-white text-[20px] Mulish-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="28"
              viewBox="0 0 34 28"
              fill="none"
            >
              <path
                d="M0 9.57812L16.5789 15.9302L33.1579 9.57812V17.9992C33.1579 23.522 28.6807 27.9992 23.1579 27.9992H10C4.47715 27.9992 0 23.522 0 17.9992V9.57812Z"
                fill="white"
              />
              <path
                d="M0 7.63636C0 3.41892 3.41892 0 7.63636 0H25.5215C29.739 0 33.1579 3.41892 33.1579 7.63636V7.63636L16.5789 14L0 7.63636V7.63636Z"
                fill="white"
              />
            </svg>
            support@hntdnetwork.com.au
          </div>
          <div className="flex gap-2 items-center text-white text-[20px] Mulish-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="29"
              height="28"
              viewBox="0 0 29 28"
              fill="none"
            >
              <path
                d="M0.64096 6.8978C0.650817 6.95312 0.658797 7.00843 0.662082 7.06421C0.703857 7.78008 1.24505 13.4919 8.04912 20.4464C8.04912 20.4464 13.9266 26.4361 20.1126 27.6955C20.1393 27.701 20.1656 27.707 20.1923 27.7144C20.5669 27.8163 23.7512 28.6211 25.3926 26.975L27.731 24.6785C27.7521 24.6577 27.7742 24.6375 27.7967 24.6181C28.03 24.4176 29.654 22.9171 28.0295 21.3218C26.3853 19.707 24.3125 17.7382 24.0778 17.5151C24.0666 17.5045 24.0558 17.4939 24.045 17.4829C23.9178 17.3529 22.7096 16.1839 21.2944 17.2519C21.2536 17.2828 21.2151 17.3174 21.1785 17.3533L18.8889 19.6079C18.3759 20.0942 17.561 20.0878 17.0555 19.5936L9.23336 11.9412C8.70812 11.4272 8.72174 10.5878 9.2634 10.0904L11.094 8.41068C11.094 8.41068 13.0996 6.58711 10.9456 4.61742L7.74825 1.47735C7.72854 1.45799 7.70976 1.43817 7.69099 1.41743C7.48446 1.18879 5.95195 -0.376636 4.15377 1.3658C4.09885 1.41881 4.03924 1.46675 3.97588 1.50916C3.36569 1.92034 0.158911 4.21777 0.64096 6.8978Z"
                fill="white"
              />
            </svg>
            0327639182
          </div>
        </div>
      </div>
      <div className="max-w-[1520px] m-auto -translate-y-[400px]">
        <div
          className="p-[30px] sm:px-[76px] sm:py-[118px] bg-white rounded-[20px] mx-[20px]"
          style={{
            filter: "drop-shadow(0px 69px 42px rgba(200, 200, 200, 0.25))"
          }}
        >
          <div className="flex gap-[26px] sm:gap-[48px] mb-[26px] sm:mb-[50px] flex-col sd:flex-row">
            {renderInput("Full name *", "Enter full name")}
            {renderInput("Your email *", "Enter your email")}
          </div>
          <div className="flex gap-[26px] sm:gap-[48px] mb-[26px] sm:mb-[50px] flex-col sd:flex-row">
            {renderInput("Company *", "Your company name here")}
            {renderInput("Subject *", "How can we Help")}
          </div>
          <div className="w-full flex flex-col">
            <label className="text-[18px] sm:text-[20px] Mulish-700 capitalize pb-[17px]">
              Message *
            </label>
            <textarea
              placeholder="Hello there,I would like to talk about how to..."
              className="h-[300px] outline-0 text-[16px] sm:text-[20px] p-[20px] sm:p-[30px] border border-[#DCDCDC] rounded-[20px]"
            />
          </div>

          <div
            className="w-[180px] mt-[46px] h-[60px] md:w-[200px] md:h-[70px] rounded-[64px] text-center items-center flex justify-center bg-[#2F2F2F] text-white text-[20px] Mulish-600 leading-[30px] cursor-pointer relative"
            onClick={() => {}}
          >
            Send Message
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUsContainer
