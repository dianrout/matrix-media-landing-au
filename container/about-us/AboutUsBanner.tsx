import { useTranslation } from "next-i18next"
import ImageAbout1 from "public/img/about/about1.jpg"
import ImageAbout2 from "public/img/about/about2.jpg"

const AboutUsBanner = () => {
  const { t } = useTranslation()
  return (
    <>
      <div className="block-banner py-[128px]">
        <h1 className="text-center text-[50px] Mulish-800 uppercase leading-[57px] text-white pb-[24px]">
          About Us
        </h1>
        <h3 className="text-center text-white text-[20px] leading-[30px] max-w-[700px] m-auto">
          {t("common.about_us_3")}
        </h3>
      </div>
      <div className="max-w-[1520px] m-auto mt-[80px] px-[20px] 1xl:px-0">
        <div className="flex gap-[60px] flex-col lg:flex-row">
          <div className="flex flex-col gap-[27px] lg:w-[50%]">
            <img
              src={ImageAbout1.src}
              className="h-[500px] rounded-[20px] object-cover"
            />
            <div className="gap-[27px] flex">
              <div className="w-full xs:h-[180px] h-[220px] rounded-[20px] bg-[#d31111] flex flex-col items-center justify-center text-white">
                <p className="xl:text-[70px] lg:text-[60px] text-[40px] Mulish-800 xl:leading-[77px]">
                  600M
                </p>
                <p className="lg:text-[20px] text-[16px] Mulish-700">
                  Views Per Month
                </p>
              </div>
              <img
                src={ImageAbout2.src}
                className="h-[220px] sm:w-[50%] xl:w-[60%] rounded-[20px] object-cover flex-1 w-full hidden sm:block"
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <h1 className="text-[40px] md:text-[50px] Mulish-800 pb-[30px] md:leading-[55px]">
              We're on a mission to bring ideas to life.
            </h1>
            <p className="text-[20px] text-[#808080] pb-[40px] border-b-[1px] border-[#DCDCDC]">
              Creating a massive online community with millions of followers is
              a challenging task, but also a promising journey. We specialize in
              building social media sites with massive engagement and influence,
              connecting people through creative content and unique engagement
              strategies. Join us in creating rich online spaces where community
              truly feels like home.
            </p>
            <div className="flex gap-[20px] items-center mt-[30px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="110"
                height="114"
                viewBox="0 0 110 114"
                fill="none"
              >
                <rect y="0.5" width="110" height="113" rx="20" fill="#F6F6F6" />
                <path
                  d="M62.7345 67.829L67.6927 39.2699C67.8268 38.4977 67.0607 37.8784 66.3337 38.1713L34.9811 50.8035C34.1945 51.1204 34.1346 52.2109 34.8817 52.6121L43.7101 57.3525C43.9649 57.4893 44.148 57.7296 44.2121 58.0116L45.976 65.7607C46.1406 66.4837 47.007 66.7824 47.5822 66.3145L52.3726 62.4172C52.7385 62.1195 53.2627 62.118 53.6303 62.4135L61.1227 68.4373C61.7163 68.9146 62.6043 68.5795 62.7345 67.829Z"
                  stroke="#5956E9"
                  stroke-width="2"
                />
                <path
                  d="M59.3208 44.5254L42.3178 55.5187C42.1298 55.6402 42.0455 55.8719 42.1115 56.0858L45.212 66.1472C45.2767 66.3569 45.4705 66.5 45.6899 66.5H46.0884C46.3557 66.5 46.5757 66.2899 46.5879 66.0229L46.9718 57.6513C46.9778 57.5211 47.0343 57.3984 47.1294 57.3093L59.9342 45.3101C60.3789 44.8933 59.8326 44.1944 59.3208 44.5254Z"
                  fill="#5956E9"
                />
              </svg>
              <div>
                <h2 className="text-[30px] Mulish-700 leading-[33px] pb-1">
                  How our business started
                </h2>
                <p className="text-[20px] text-[#808080]">
                  We have a system of social networking sites with millions of
                  followers
                </p>
              </div>
            </div>
            <div className="flex gap-[20px] items-center mt-[30px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="110"
                height="114"
                viewBox="0 0 110 114"
                fill="none"
              >
                <rect y="0.5" width="110" height="113" rx="20" fill="#F6F6F6" />
                <path
                  d="M48.1046 40.9966C50.0636 42.5816 52.9989 41.7951 53.9029 39.443C54.4651 37.9801 56.5349 37.9801 57.0971 39.443C58.0011 41.7951 60.9364 42.5816 62.8954 40.9966C64.1137 40.0108 65.9062 41.0457 65.6617 42.5937C65.2685 45.0827 67.4173 47.2315 69.9063 46.8383C71.4543 46.5938 72.4892 48.3863 71.5034 49.6046C69.9184 51.5636 70.7049 54.4989 73.057 55.4029C74.5199 55.9651 74.5199 58.0349 73.057 58.5971C70.7049 59.5011 69.9184 62.4364 71.5034 64.3954C72.4892 65.6137 71.4543 67.4062 69.9063 67.1617C67.4173 66.7685 65.2685 68.9173 65.6617 71.4063C65.9062 72.9543 64.1137 73.9892 62.8954 73.0034C60.9364 71.4184 58.0011 72.2049 57.0971 74.557C56.5349 76.0199 54.4651 76.0199 53.9029 74.557C52.9989 72.2049 50.0636 71.4184 48.1046 73.0034C46.8863 73.9892 45.0938 72.9543 45.3383 71.4063C45.7315 68.9173 43.5827 66.7685 41.0937 67.1617C39.5457 67.4062 38.5108 65.6137 39.4966 64.3954C41.0816 62.4364 40.2951 59.5011 37.943 58.5971C36.4801 58.0349 36.4801 55.9651 37.943 55.4029C40.2951 54.4989 41.0816 51.5636 39.4966 49.6046C38.5108 48.3863 39.5457 46.5938 41.0937 46.8383C43.5827 47.2315 45.7315 45.0827 45.3383 42.5937C45.0938 41.0457 46.8863 40.0108 48.1046 40.9966Z"
                  stroke="#5956E9"
                  stroke-width="2"
                />
                <circle
                  cx="55.5"
                  cy="57"
                  r="11.5"
                  stroke="#5956E9"
                  stroke-width="2"
                />
              </svg>
              <div>
                <h2 className="text-[30px] Mulish-700 leading-[33px] pb-1">
                  Endless Possibilities
                </h2>
                <p className="text-[20px] text-[#808080]">
                  Bring content to many viewers without spending too much time
                  building the page
                </p>
              </div>
            </div>
            <div
              className="w-[180px] mt-[40px] h-[60px] md:w-[270px] md:h-[72px] rounded-[64px] text-center items-center flex justify-center bg-primary text-white text-[20px] mdtext-[24px] Mulish-500 leading-[30px] cursor-pointer relative mb-[30px]"
              style={{
                boxShadow: "3px 7px 15px 0px rgba(211, 17, 17, 0.25)"
              }}
            >
              Join our Team
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUsBanner
