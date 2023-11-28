import "swiper/css"
import "swiper/css/pagination"
import ContactUs from "./ContactUs"
import AboutUs from "./AboutUs"
import Differences from "./Difference"
import Project from "./Project"
import Service from "./Service"

const HomeContent = () => {
  return (
    <div className="mb-[40px]">
      <AboutUs />
      <Service />
      <Differences />
      <Project />
      <ContactUs />
    </div>
  )
}

export default HomeContent
