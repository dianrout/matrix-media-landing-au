import "swiper/css"
import "swiper/css/pagination"
import ContactUs from "./ContactUs"
import AboutUs from "./AboutUs"
import Differences from "./Difference"
import Project from "./Project"
import Service from "./Service"
import Partner from "./Partner"
import Connect from "./Connect"

const HomeContent = () => {
  return (
    <div className="mb-[40px]">
      <AboutUs />
      <Service />
      <Connect />
      <Differences />
      <ContactUs />
      <Project />
      <Partner />
    </div>
  )
}

export default HomeContent
