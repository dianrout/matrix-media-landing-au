import "swiper/css"
import "swiper/css/pagination"
import ContactUs from "./ContactUs"
import AboutUs from "./AboutUs"
import Differences from "./Difference"
import Project from "./Project"
import Service from "./Service"
// import abc from "public/assets/js/jquery.min.js"
// import abc1 from "public/assets/js/bootstrap.bundle.min.js"
// import abc2 from "public/assets/js/wow.min.js"
// import abc3 from "public/assets/js/owl.carousel.min.js"
// import abc4 from "public/assets/js/jquery.magnific-popup.min.js"
// import abc5 from "public/assets/js/meanmenu.js"
// import abc6 from "public/assets/js/jquery.ajaxchimp.min.js"
// import abc7 from "public/assets/js/form-validator.min.js"
// import abc8 from "public/assets/js/custom.js"
{
  /* <script src="assets/js/jquery.min.js"></script>

<script src="assets/js/bootstrap.bundle.min.js"></script>

<script src="assets/js/wow.min.js"></script>

<script src="assets/js/owl.carousel.min.js"></script>

<script src="assets/js/jquery.magnific-popup.min.js"></script>

<script src="assets/js/meanmenu.js"></script>

<script src="assets/js/jquery.ajaxchimp.min.js"></script>

<script src="assets/js/form-validator.min.js"></script>

<script src="assets/js/contact-form-script.js"></script>

<script src="assets/js/custom.js"></script> */
}

const HomeContent = () => {

  return (
    <div className="">
      <div className="preloader">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="spinner"></div>
          </div>
        </div>
      </div>

      <div className="navbar-area">
        <div className="mobile-nav">
          <a href="index.html" className="logo">
            <img
              src="assets/img/logo/logo1.png"
              className="logo-one"
              alt="Logo"
            />
            <img
              src="assets/img/logo/logo2.png"
              className="logo-two"
              alt="Logo"
            />
          </a>
        </div>

        <div className="main-nav">
          <div className="container-fluid">
            <nav className="container-max-2 navbar navbar-expand-md navbar-light">
              <a className="navbar-brand" href="index.html">
                <img
                  src="assets/img/logo/logo1.png"
                  className="logo-one"
                  alt="Logo"
                />
                <img
                  src="assets/img/logo/logo2.png"
                  className="logo-two"
                  alt="Logo"
                />
              </a>
              <div
                className="collapse navbar-collapse mean-menu"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav m-auto">
                  <li className="nav-item">
                    <a href="#" className="nav-link active">
                      Home
                      <i className="bx bx-plus"></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="index.html" className="nav-link active">
                          SEO Agency
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="index-2.html" className="nav-link">
                          {" "}
                          AI Startup{" "}
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="index-3.html" className="nav-link">
                          Machine Learning
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="about.html" className="nav-link">
                      {" "}
                      About{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Pages
                      <i className="bx bx-plus"></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="team.html" className="nav-link">
                          {" "}
                          Team{" "}
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pricing.html" className="nav-link">
                          Pricing Table
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="faq.html" className="nav-link">
                          {" "}
                          FAQ{" "}
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          Courses
                          <i className="bx bx-plus"></i>
                        </a>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <a href="courses.html" className="nav-link">
                              {" "}
                              Courses{" "}
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="course-details.html" className="nav-link">
                              Course Details
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a href="testimonials.html" className="nav-link">
                          Testimonials
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          Case study
                          <i className="bx bx-plus"></i>
                        </a>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <a href="case-study.html" className="nav-link">
                              Case study
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="case-details.html" className="nav-link">
                              Case study Details
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a href="404.html" className="nav-link">
                          {" "}
                          404 page{" "}
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="sign-in.html" className="nav-link">
                          {" "}
                          Sign In{" "}
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="sign-up.html" className="nav-link">
                          {" "}
                          Sign Up{" "}
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="terms-condition.html" className="nav-link">
                          Terms & Conditions
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="privacy-policy.html" className="nav-link">
                          Privacy Policy
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="coming-soon.html" className="nav-link">
                          Coming Soon
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Services
                      <i className="bx bx-plus"></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="services.html" className="nav-link">
                          {" "}
                          Services{" "}
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="service-details.html" className="nav-link">
                          Service Details
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Blog
                      <i className="bx bx-plus"></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="blog.html" className="nav-link">
                          {" "}
                          Blog{" "}
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="blog-details.html" className="nav-link">
                          Blog Details
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="contact.html" className="nav-link">
                      {" "}
                      Contact{" "}
                    </a>
                  </li>
                </ul>
                <div className="side-nav d-in-line align-items-center">
                  <div className="side-item">
                    <div className="search-box">
                      <i className="flaticon-loupe"></i>
                    </div>
                  </div>
                  <div className="side-item">
                    <div className="user-btn">
                      <a href="#">
                        <i className="flaticon-contact"></i>
                      </a>
                    </div>
                  </div>
                  <div className="side-item">
                    <div className="nav-add-btn">
                      <a href="#" className="nav-menu-btn">
                        Contact us
                        <i className="bx bx-plus"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div className="side-nav-responsive">
          <div className="container">
            <div className="dot-menu">
              <div className="circle-inner">
                <div className="circle circle-one"></div>
                <div className="circle circle-two"></div>
                <div className="circle circle-three"></div>
              </div>
            </div>
            <div className="container">
              <div className="side-nav-inner">
                <div className="side-nav justify-content-center align-items-center">
                  <div className="side-item">
                    <div className="search-box">
                      <i className="flaticon-loupe"></i>
                    </div>
                  </div>
                  <div className="side-item">
                    <div className="user-btn">
                      <a href="#">
                        <i className="flaticon-contact"></i>
                      </a>
                    </div>
                  </div>
                  <div className="side-item">
                    <div className="nav-add-btn">
                      <a href="#" className="nav-menu-btn border-radius">
                        Contact us
                        <i className="bx bx-plus"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="search-overlay">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="search-layer"></div>
            <div className="search-layer"></div>
            <div className="search-layer"></div>
            <div className="search-close">
              <span className="search-close-line"></span>
              <span className="search-close-line"></span>
            </div>
            <div className="search-form">
              <form>
                <input
                  type="text"
                  className="input-search"
                  placeholder="Search here..."
                />
                <button type="submit">
                  <i className="flaticon-loupe"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="banner-area">
        <div className="container-fluid">
          <div className="container-max-2">
            <div className="col-lg-7">
              <div className="banner-content">
                <div className="title">
                  <i className="flaticon-idea"></i>
                  <span>The Generator</span>
                </div>
                <h1>
                  Possible to Link <b>Actual Customer</b>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor avida. Risus commodo viverra maecenas
                  accumsan lacus vel facilisis.
                </p>
                <div className="banner-btn">
                  <a href="#" className="get-btn">
                    Get started
                    <i className="bx bx-plus"></i>
                  </a>
                  <a href="tel:+123-098-456-098" className="call-btn">
                    <i className="bx bx-plus"></i>
                    +123-098-456-098
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="banner-shape-right">
          <img src="assets/img/home1/home-one-shape.png" alt="Images" />
        </div>
        <div className="banner-img">
          <img src="assets/img/home1/home1.png" alt="Images" />
        </div>
        <div className="banner-shape">
          <div className="shape1">
            <img src="assets/img/home1/home-one-shape3.png" alt="Images" />
          </div>
          <div className="shape2">
            <img src="assets/img/home1/home-one-shape1.png" alt="Images" />
          </div>
          <div className="shape3">
            <img src="assets/img/home1/home-one-shape2.png" alt="Images" />
          </div>
          <div className="shape4">
            <img src="assets/img/home1/home-one-shape4.png" alt="Images" />
          </div>
          <div className="shape5">
            <img src="assets/img/home1/home-one-shape5.png" alt="Images" />
          </div>
        </div>
      </div>

      <div className="brand-area">
        <div className="container-fluid">
          <div className="brand-max">
            <div className="brand-title">
              <h3>
                Over <a href="#">150.000</a> supporter all ovet the world
              </h3>
            </div>
            <div className="brand-slider owl-carousel owl-theme">
              <div className="brand-item">
                <a href="#">
                  <img src="assets/img/brand/brand1.png" alt="Images" />
                </a>
              </div>
              <div className="brand-item">
                <a href="#">
                  <img src="assets/img/brand/brand2.png" alt="Images" />
                </a>
              </div>
              <div className="brand-item">
                <a href="#">
                  <img src="assets/img/brand/brand3.png" alt="Images" />
                </a>
              </div>
              <div className="brand-item">
                <a href="#">
                  <img src="assets/img/brand/brand4.png" alt="Images" />
                </a>
              </div>
              <div className="brand-item">
                <a href="#">
                  <img src="assets/img/brand/brand5.png" alt="Images" />
                </a>
              </div>
              <div className="brand-item">
                <a href="#">
                  <img src="assets/img/brand/brand6.png" alt="Images" />
                </a>
              </div>
              <div className="brand-item">
                <a href="#">
                  <img src="assets/img/brand/brand2.png" alt="Images" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-area pt-100 pb-70">
        <div className="container-fluid">
          <div className="container-max">
            <div className="row">
              <div className="col-lg-6">
                <div className="about-img">
                  <img src="assets/img/about/about-img1.png" alt="Images" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content">
                  <div className="section-title">
                    <span className="sp-after">About us</span>
                    <h2 className="h2-color">
                      Grow Your Business <b>With Our Agency</b>
                    </h2>
                  </div>
                  <h3>
                    We have 30 yearsOur strategy includes consistently evolving,
                    to ensure we’re producing exceptional SEO for business.
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas vitae tempor nisl. Etiam magna augue, tempus eget
                    suscipit et, maximus hendrerit nunc. Nunc elementum non
                    ipsum vitae molestie. Donec vestibulum lobortis congue.
                    Mauris sed tincidunt leo Suspendisse accumsan .
                  </p>
                  <div className="about-btn">
                    <a href="#" className="default-btn">
                      Learn more
                      <i className="bx bx-plus"></i>
                    </a>
                    <a
                      href="https://www.youtube.com/watch?v=07d2dXHYb94"
                      className="play-btn popup-btn"
                    >
                      <i className="flaticon-play-button"></i>
                      <span>
                        {" "}
                        Watch 1min <br />
                        Play demo
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-shape">
          <div className="shape-1">
            <img src="assets/img/about/about-shape1.png" alt="Images" />
          </div>
          <div className="shape-2">
            <img src="assets/img/shape/shape1.png" alt="Images" />
          </div>
          <div className="shape-3">
            <img src="assets/img/shape/shape2.png" alt="Images" />
          </div>
          <div className="shape-4">
            <img src="assets/img/shape/shape3.png" alt="Images" />
          </div>
          <div className="shape-5">
            <img src="assets/img/shape/shape4.png" alt="Images" />
          </div>
        </div>
      </div>

      <div className="counter-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="single-counter">
                <i className="flaticon-confetti"></i>
                <div className="content">
                  <h3>10 +</h3>
                  <p>GLORIOUS YEARS</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-counter">
                <i className="flaticon-project"></i>
                <div className="content">
                  <h3>670 +</h3>
                  <p>PROJECTS DONE</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-counter">
                <i className="flaticon-customers"></i>
                <div className="content">
                  <h3>560 +</h3>
                  <p>ACTIVE CLIENTS</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-counter">
                <i className="flaticon-financial-advisor"></i>
                <div className="content">
                  <h3>56 +</h3>
                  <p>TEAM ADVISORS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="progress-area pt-100 pb-70">
        <div className="container">
          <div className="section-title text-center">
            <span className="sp-after">Real Progress</span>
            <h2 className="h2-color">
              Super Great Things From <b>Your Desire Wishes</b>
            </h2>
          </div>
          <div className="row pt-45">
            <div className="col-lg-4 col-sm-6">
              <div className="progress-card pr-bg-color-1">
                <img
                  src="assets/img/progress-icon/progress-icon1.png"
                  alt="Images"
                />
                <h3>28,998</h3>
                <p>RANKING KEYWORDS</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="progress-card pr-bg-color-2">
                <img
                  src="assets/img/progress-icon/progress-icon2.png"
                  alt="Images"
                />
                <h3>600%</h3>
                <p>ANNUAL ORGANIC TRAFFIC</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
              <div className="progress-card pr-bg-color-3">
                <img
                  src="assets/img/progress-icon/progress-icon3.png"
                  alt="Images"
                />
                <h3>50,234</h3>
                <p>RANKING KEYWORDS</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="seo-area">
        <div className="container-fluid">
          <div className="seo-width">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <div className="seo-form">
                  <h2>What is My SEO Score?</h2>
                  <div className="seo-form-area">
                    <form className="seo-form-option">
                      <div className="row">
                        <div className="col-lg-4 col-sm-6 col-md-4">
                          <div className="form-group">
                            <i className="flaticon-place"></i>
                            <input
                              className="form-control form-border"
                              type="text"
                              placeholder="Your Website URL"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-md-4">
                          <div className="form-group">
                            <i className="flaticon-vision"></i>
                            <input
                              className="form-control"
                              type="email"
                              placeholder="Enter Your Email"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-md-4 offset-sm-3 offset-md-0 offset-lg-0">
                          <button type="submit" className="default-btn">
                            Get started
                            <i className="bx bx-plus"></i>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="seo-img">
                  <img src="assets/img/seo-rank.png" alt="Images" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="service-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sp-after">Services</span>
            <h2 className="h2-color">
              We’re Flexible to <b>Provide You Best</b>
            </h2>
          </div>
          <div className="row pt-45">
            <div className="col-lg-4">
              <div className="service-card-into">
                <div className="service-card">
                  <a href="service-details.html">
                    <img
                      src="assets/img/service/service-icon1.png"
                      alt="Images"
                    />
                  </a>
                  <h3>
                    <a href="service-details.html">App Development</a>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, aut odiut perspiciatis unde
                    omnis iste natus odit aut fugitsed quia consequuntur alquam
                    quaerat voluptatem
                  </p>
                  <div className="service-card-shape">
                    <img
                      src="assets/img/service/service-shape.png"
                      alt="Images"
                    />
                  </div>
                </div>
                <div className="service-dots">
                  <img src="assets/img/service/dots.png" alt="Images" />
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="service-card">
                <a href="service-details.html">
                  <img
                    src="assets/img/service/service-icon2.png"
                    alt="Images"
                  />
                </a>
                <h3>
                  <a href="service-details.html">Social Media Marketing</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, aut odiut perspiciatis unde omnis
                  iste natus odit aut fugitsed quia consequuntur alquam quaerat
                  voluptatem
                </p>
                <div className="service-card-shape">
                  <img
                    src="assets/img/service/service-shape.png"
                    alt="Images"
                  />
                </div>
              </div>
              <div className="service-card">
                <a href="service-details.html">
                  <img
                    src="assets/img/service/service-icon3.png"
                    alt="Images"
                  />
                </a>
                <h3>
                  <a href="service-details.html">Content Marketing</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, aut odiut perspiciatis unde omnis
                  iste natus odit aut fugitsed quia consequuntur alquam quaerat
                  voluptatem
                </p>
                <div className="service-card-shape">
                  <img
                    src="assets/img/service/service-shape.png"
                    alt="Images"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="service-card">
                <a href="service-details.html">
                  <img
                    src="assets/img/service/service-icon4.png"
                    alt="Images"
                  />
                </a>
                <h3>
                  <a href="service-details.html">SEO Optimization</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, aut odiut perspiciatis unde omnis
                  iste natus odit aut fugitsed quia consequuntur alquam quaerat
                  voluptatem
                </p>
                <div className="service-card-shape">
                  <img
                    src="assets/img/service/service-shape.png"
                    alt="Images"
                  />
                </div>
              </div>
              <div className="service-card">
                <a href="service-details.html">
                  <img
                    src="assets/img/service/service-icon5.png"
                    alt="Images"
                  />
                </a>
                <h3>
                  <a href="service-details.html">Web Development</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, aut odiut perspiciatis unde omnis
                  iste natus odit aut fugitsed quia consequuntur alquam quaerat
                  voluptatem
                </p>
                <div className="service-card-shape">
                  <img
                    src="assets/img/service/service-shape.png"
                    alt="Images"
                  />
                </div>
              </div>
              <div className="service-card">
                <a href="service-details.html">
                  <img
                    src="assets/img/service/service-icon6.png"
                    alt="Images"
                  />
                </a>
                <h3>
                  <a href="service-details.html">PPC Advertising</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, aut odiut perspiciatis unde omnis
                  iste natus odit aut fugitsed quia consequuntur alquam quaerat
                  voluptatem
                </p>
                <div className="service-card-shape">
                  <img
                    src="assets/img/service/service-shape.png"
                    alt="Images"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="service-shape">
          <div className="service-bg">
            <img src="assets/img/service/service-bg.png" alt="Images" />
          </div>
          <div className="shape1">
            <img src="assets/img/shape/shape4.png" alt="Images" />
          </div>
          <div className="shape2">
            <img src="assets/img/shape/shape2.png" alt="Images" />
          </div>
        </div>
      </div>

      <div className="work-area pt-100 pb-70">
        <div className="container">
          <div className="section-title text-center">
            <span className="sp-after">Working Process</span>
            <h2 className="h2-color">
              Simple & Clean <b>Work Process</b>
            </h2>
          </div>
          <div className="row pt-45">
            <div className="col-lg-4 col-sm-6">
              <div className="work-card">
                <h2>01</h2>
                <h3>Onsite Optimization</h3>
                <p>
                  Lorem ipsum dolor sit amet, aut odiut perspiciatis unde omnis
                  iste natus odit afugitsed quia consequuntur
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="work-card active">
                <h2>02</h2>
                <h3>Keyword Research</h3>
                <p>
                  Lorem ipsum dolor sit amet, aut odiut perspiciatis unde omnis
                  iste natus odit afugitsed quia consequuntur
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
              <div className="work-card">
                <h2>03</h2>
                <h3>Link Building</h3>
                <p>
                  Lorem ipsum dolor sit amet, aut odiut perspiciatis unde omnis
                  iste natus odit afugitsed quia consequuntur
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="work-shape">
          <img src="assets/img/shape/work-shape.png" alt="Images" />
        </div>
      </div>

      <div className="pricing-area ptb-100">
        <div className="container-fluid">
          <div className="section-title text-center">
            <span className="sp-after">Pricing Plan</span>
            <h2 className="h2-color">
              Price & Plans <b>Packages</b>
            </h2>
          </div>
          <div className="price-width">
            <div className="row">
              <div className="col-lg-4 col-sm-6">
                <div className="pricing-card">
                  <div className="pricing-card-into color-bg1">
                    <i className="flaticon-banner pricing-icon color-1"></i>
                    <h3 className="color-1">STANDARD</h3>
                    <div className="price-rate">
                      <h2 className="color-1">$ 69.99</h2>
                      <span className="color-1">Monthly Package</span>
                    </div>
                    <ul>
                      <li>
                        <i className="bx bx-check"></i> Social Media Marketing
                      </li>
                      <li>
                        <i className="bx bx-check"></i> 2.100 Keywords
                      </li>
                      <li>
                        <i className="bx bx-check"></i> One Way Link Building
                      </li>
                      <li>
                        <del>5 Free Optimization</del>
                      </li>
                      <li>
                        <del>3 Press Releases</del>
                      </li>
                    </ul>
                    <a href="#" className="purchase-btn button-bg1">
                      {" "}
                      PURCHASE NOW{" "}
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="pricing-card">
                  <div className="pricing-card-into color-bg2">
                    <i className="flaticon-mortgage-loan pricing-icon color-2"></i>
                    <h3 className="color-2">ECONOMY</h3>
                    <div className="price-rate">
                      <h2 className="color-2">$ 79.99</h2>
                      <span className="color-2">Monthly Package</span>
                    </div>
                    <ul>
                      <li>
                        <i className="bx bx-check"></i> Social Media Marketing
                      </li>
                      <li>
                        <i className="bx bx-check"></i> 2.100 Keywords
                      </li>
                      <li>
                        <i className="bx bx-check"></i> One Way Link Building
                      </li>
                      <li>
                        <i className="bx bx-check"></i> 5 Free Optimization
                      </li>
                      <li>
                        <del>3 Press Releases</del>
                      </li>
                    </ul>
                    <a href="#" className="purchase-btn button-bg2">
                      {" "}
                      PURCHASE NOW{" "}
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
                <div className="pricing-card">
                  <div className="pricing-card-into color-bg3">
                    <i className="flaticon-processing pricing-icon color-3"></i>
                    <h3 className="color-3">EXECUTIVE</h3>
                    <div className="price-rate">
                      <h2 className="color-3">$ 89.99</h2>
                      <span className="color-3">Monthly Package</span>
                    </div>
                    <ul>
                      <li>
                        <i className="bx bx-check"></i> Social Media Marketing
                      </li>
                      <li>
                        <i className="bx bx-check"></i> 2.100 Keywords
                      </li>
                      <li>
                        <i className="bx bx-check"></i> One Way Link Building
                      </li>
                      <li>
                        <i className="bx bx-check"></i> 5 Free Optimization
                      </li>
                      <li>
                        <i className="bx bx-check"></i> 3 Press Releases
                      </li>
                    </ul>
                    <a href="#" className="purchase-btn button-bg3">
                      {" "}
                      PURCHASE NOW{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pricing-shape">
          <div className="shape1">
            <img src="assets/img/shape/shape7.png" alt="Images" />
          </div>
          <div className="shape2">
            <img src="assets/img/shape/shape4.png" alt="Images" />
          </div>
          <div className="shape3">
            <img src="assets/img/shape/shape5.png" alt="Images" />
          </div>
          <div className="shape4">
            <img src="assets/img/shape/shape6.png" alt="Images" />
          </div>
          <div className="shape5">
            <img src="assets/img/shape/shape4.png" alt="Images" />
          </div>
          <div className="shape6">
            <img src="assets/img/shape/shape8.png" alt="Images" />
          </div>
        </div>
      </div>

      <div className="team-area pt-100 pb-70">
        <div className="container-fluid p-0 m-0">
          <div className="section-title text-center">
            <span className="sp-after">Our Specialists</span>
            <h2 className="h2-color">
              Meet Our <b>Leadership Team</b>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud
            </p>
          </div>
          <div className="team-slider owl-carousel owl-theme pt-45">
            <div className="team-item">
              <a href="team.html" className="team-img team-bg-before">
                <img src="assets/img/team/team-img1.jpg" alt="Images" />
              </a>
              <div className="team-content">
                <h3>
                  <a href="team.html">Hobler Jeain</a>
                </h3>
                <span>General Manager</span>
                <ul className="social-link">
                  <li>
                    <a href="#" target="_blank">
                      <i className="bx bxl-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="bx bxl-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="bx bxl-pinterest-alt"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="bx bxl-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="team-item">
              <a href="team.html" className="team-img team-bg-before-2">
                <img src="assets/img/team/team-img2.jpg" alt="Images" />
              </a>
              <div className="team-content">
                <h3>
                  <a href="team.html">Jermin Jekson</a>
                </h3>
                <span>Marketing Manager</span>
                <ul className="social-link">
                  <li>
                    <a href="#" target="_blank">
                      <i className="bx bxl-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="bx bxl-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="bx bxl-pinterest-alt"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="bx bxl-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="team-item">
              <a href="team.html" className="team-img team-bg-before-3">
                <img src="assets/img/team/team-img3.jpg" alt="Images" />
              </a>
              <div className="team-content">
                <h3>
                  <a href="team.html">Cristiono Kopper</a>
                </h3>
                <span>Web Developer</span>
                <ul className="social-link">
                  <li>
                    <a href="#" target="_blank">
                      <i className="bx bxl-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="bx bxl-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="bx bxl-pinterest-alt"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="bx bxl-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="team-item">
              <a href="team.html" className="team-img team-bg-before">
                <img src="assets/img/team/team-img4.jpg" alt="Images" />
              </a>
              <div className="team-content">
                <h3>
                  <a href="team.html">Julfiker Jeain</a>
                </h3>
                <span>CEO At Ostino</span>
                <ul className="social-link">
                  <li>
                    <a href="#" target="_blank">
                      <i className="bx bxl-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="bx bxl-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="bx bxl-pinterest-alt"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="bx bxl-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="team-item">
              <a href="team.html" className="team-img team-bg-before-2">
                <img src="assets/img/team/team-img5.jpg" alt="Images" />
              </a>
              <div className="team-content">
                <h3>
                  <a href="team.html">Rickey poltin</a>
                </h3>
                <span>Area Manager</span>
                <ul className="social-link">
                  <li>
                    <a href="#" target="_blank">
                      <i className="bx bxl-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="bx bxl-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="bx bxl-pinterest-alt"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="bx bxl-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="team-item">
              <a href="team.html" className="team-img team-bg-before-3">
                <img src="assets/img/team/team-img6.jpg" alt="Images" />
              </a>
              <div className="team-content">
                <h3>
                  <a href="team.html">Jeck Keplin</a>
                </h3>
                <span>Web Developer</span>
                <ul className="social-link">
                  <li>
                    <a href="#" target="_blank">
                      <i className="bx bxl-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="bx bxl-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="bx bxl-pinterest-alt"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="bx bxl-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="team-shape">
          <div className="team-shape1">
            <img src="assets/img/shape/team-shape.png" alt="Images" />
          </div>
          <div className="team-shape2">
            <img src="assets/img/shape/shape7.png" alt="Images" />
          </div>
          <div className="team-shape3">
            <img src="assets/img/shape/shape6.png" alt="Images" />
          </div>
          <div className="team-shape4">
            <img src="assets/img/shape/shape2.png" alt="Images" />
          </div>
        </div>
      </div>

      <div className="blog-area blog-bg pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-title">
                <div className="section-title">
                  <span className="sp-after">Our Blogs</span>
                  <h2 className="h2-color">
                    Latest Valuable <b>Insights</b>
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua enim ad minim
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog-btn">
                <a href="blog.html" className="default-btn">
                  See all news
                  <i className="bx bx-plus"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog-card">
                <a href="blog-details.html">
                  <img src="assets/img/blog/blog1.png" alt="Images" />
                </a>
                <div className="content">
                  <ul>
                    <li>
                      <i className="bx bx-time-five"></i>
                      09 April 2020
                    </li>
                    <li>
                      <i className="bx bx-purchase-tag-alt"></i>
                      <a href="#">Marketing</a>
                    </li>
                  </ul>
                  <h3>
                    <a href="blog-details.html">
                      The Home of Technology is in Front of You
                    </a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog-card">
                <a href="blog-details.html">
                  <img src="assets/img/blog/blog2.png" alt="Images" />
                </a>
                <div className="content">
                  <ul>
                    <li>
                      <i className="bx bx-time-five"></i>
                      10 July 2020
                    </li>
                    <li>
                      <i className="bx bx-purchase-tag-alt"></i>
                      <a href="#">SEO</a>
                    </li>
                  </ul>
                  <h3>
                    <a href="blog-details.html">
                      SEO Best Practices Mobile Friendliness
                    </a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
              <div className="blog-card">
                <a href="blog-details.html">
                  <img src="assets/img/blog/blog3.png" alt="Images" />
                </a>
                <div className="content">
                  <ul>
                    <li>
                      <i className="bx bx-time-five"></i>
                      19 June 2020
                    </li>
                    <li>
                      <i className="bx bx-purchase-tag-alt"></i>
                      <a href="#">SEO & Marketing</a>
                    </li>
                  </ul>
                  <h3>
                    <a href="blog-details.html">
                      15 SEO Practices Website Architecture
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="blog-shape">
          <div className="shape1">
            <img src="assets/img/shape/shape1.png" alt="Images" />
          </div>
          <div className="shape2">
            <img src="assets/img/shape/shape5.png" alt="Images" />
          </div>
          <div className="shape3">
            <img src="assets/img/shape/shape4.png" alt="Images" />
          </div>
          <div className="shape4">
            <img src="assets/img/shape/shape6.png" alt="Images" />
          </div>
        </div>
      </div>

      <footer className="footer-area footer-bg pt-100 pb-70">
        <div className="container">
          <div className="footer-top">
            <div className="row align-items-center">
              <div className="col-lg-6 col-sm-6">
                <div className="footer-img">
                  <img
                    src="assets/img/logo/logo1.png"
                    className="footer-img1"
                    alt="Images"
                  />
                  <img
                    src="assets/img/logo/logo2.png"
                    className="footer-img2"
                    alt="Images"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-sm-6">
                <div className="footer-social-icon">
                  <ul className="social-link">
                    <li>
                      <a href="#" target="_blank">
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <i className="bx bxl-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <i className="bx bxl-pinterest-alt"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <i className="bx bxl-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-midal pt-45 pb-70">
            <div className="row">
              <div className="col-lg-3 col-sm-5">
                <div className="footer-widget">
                  <h3>Services</h3>
                  <ul className="footer-list">
                    <li>
                      <a href="#">International SEO</a>
                    </li>
                    <li>
                      <a href="#">Enterprise SEO</a>
                    </li>
                    <li>
                      <a href="#">SEO for Small Business</a>
                    </li>
                    <li>
                      <a href="#">SEO for Local Services</a>
                    </li>
                    <li>
                      <a href="#">National SEO</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-sm-7">
                <div className="footer-widget">
                  <h3>Company</h3>
                  <ul className="footer-list">
                    <li>
                      <a href="#">About the Company</a>
                    </li>
                    <li>
                      <a href="#">For Customers</a>
                    </li>
                    <li>
                      <a href="#">SEO Blog & News</a>
                    </li>
                    <li>
                      <a href="#">Careers & Reviews</a>
                    </li>
                    <li>
                      <a href="#">Sitemap</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-5">
                <div className="footer-widget ps-5">
                  <h3>Learning</h3>
                  <ul className="footer-list">
                    <li>
                      <a href="#">About the Company</a>
                    </li>
                    <li>
                      <a href="#">International SEO</a>
                    </li>
                    <li>
                      <a href="#">National SEO</a>
                    </li>
                    <li>
                      <a href="#">Careers & Reviews</a>
                    </li>
                    <li>
                      <a href="#">Sitemap</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-sm-7">
                <div className="footer-widget">
                  <h3>Newsletter</h3>
                  <p>To get the latest news and latest up- dates from us</p>
                  <div className="newsletter-area">
                    <form
                      className="newsletter-form"
                      data-toggle="validator"
                      method="POST"
                    >
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your Email*"
                        name="EMAIL"
                        required
                        autoComplete="off"
                      />
                      <button className="default-btn" type="submit">
                        Subscribe
                      </button>
                      <div
                        id="validator-newsletter"
                        className="form-result"
                      ></div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copy-right-area">
            <div className="copy-right-text text-center">
              <p>
                Copyright @
                <script>document.write(new Date().getFullYear());</script>
                Zinka. All Rights Reserved by
                <a href="https://hibootstrap.com/" target="_blank">
                  HiBootstrap
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomeContent
