import Footer from "@components/Footer"
import Header from "@components/Header"
import { initCart, setCart } from "@store/cart"
import { useAppDispatch } from "hooks"
import React, { useEffect, useState } from "react"
var Scroll = require("react-scroll")
var scroll = Scroll.animateScroll

interface ILayout {
  children: React.ReactNode | undefined
}

const Layouts: React.FC<ILayout> = ({ children }) => {
  const dispatch = useAppDispatch()
  const [scrollbtn, setScrollBtn] = useState(false)

  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      if (localStorage.getItem("cart")) {
        dispatch(initCart(JSON.parse(localStorage.getItem("cart") || "")))
      }
    }
  }, [])

  const changeBackground = () => {
    if (window.scrollY >= 200) {
      setScrollBtn(true)
    } else {
      setScrollBtn(false)
    }
  }

  useEffect(() => {
    changeBackground()
    // adding the event when scroll change Logo
    window.addEventListener("scroll", changeBackground)

    return () => {
      window.removeEventListener("scroll", changeBackground)
    }
  }, [])

  return (
    <div className="page-wrapper">
      <Header />
      <div className="page-content">{children}</div>
      <Footer />

      <div
        className={`block fixed bottom-[100px] right-[80px] w-[50px] h-[50px] rounded-[10px] ml-auto mr-0 border border-[#9E9E9E] bg-white/80 cursor-pointer p-[13px] ${
          scrollbtn ? "" : "hidden"
        }`}
        onClick={() => scroll.scrollToTop()}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="icon/outline &#38; logos/arrow-left">
            <path
              id="Vector"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 22.5001C11.8011 22.5001 11.6103 22.4211 11.4696 22.2805C11.329 22.1398 11.25 21.949 11.25 21.7501L11.25 4.06062L6.53097 8.78112C6.46124 8.85085 6.37846 8.90617 6.28735 8.9439C6.19624 8.98164 6.09859 9.00107 5.99997 9.00107C5.90135 9.00107 5.8037 8.98164 5.7126 8.9439C5.62149 8.90617 5.5387 8.85085 5.46897 8.78112C5.39924 8.71139 5.34392 8.6286 5.30619 8.5375C5.26845 8.44639 5.24902 8.34874 5.24902 8.25012C5.24902 8.1515 5.26845 8.05385 5.30619 7.96274C5.34392 7.87163 5.39924 7.78885 5.46897 7.71912L11.469 1.71912C11.5386 1.64928 11.6214 1.59386 11.7125 1.55605C11.8036 1.51824 11.9013 1.49878 12 1.49878C12.0986 1.49878 12.1963 1.51824 12.2874 1.55605C12.3785 1.59386 12.4613 1.64928 12.531 1.71912L18.531 7.71912C18.6007 7.78885 18.656 7.87164 18.6938 7.96274C18.7315 8.05385 18.7509 8.1515 18.7509 8.25012C18.7509 8.34874 18.7315 8.44639 18.6938 8.5375C18.656 8.6286 18.6007 8.71139 18.531 8.78112C18.4612 8.85085 18.3785 8.90617 18.2873 8.94391C18.1962 8.98164 18.0986 9.00107 18 9.00107C17.9014 9.00107 17.8037 8.98164 17.7126 8.94391C17.6215 8.90617 17.5387 8.85085 17.469 8.78112L12.75 4.06062L12.75 21.7501C12.75 21.949 12.671 22.1398 12.5303 22.2805C12.3896 22.4211 12.1989 22.5001 12 22.5001Z"
              fill="#9E9E9E"
            />
          </g>
        </svg>
      </div>
    </div>
  )
}

export default Layouts
