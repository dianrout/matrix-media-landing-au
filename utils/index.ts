import { useEffect, useState } from "react"

export const renderLink = (link: string) => {
  const key = process.env.NEXT_PUBLIC_GOOGLE_API_KEY
  const videoId = link?.split("/")?.[5]
  // const _link = `https://www.googleapis.com/drive/v3/files/${videoId}?alt=media&key=${key}`
  const _link = `https://drive.google.com/uc?id=${videoId}`
  return _link
}

export const renderVideoLink = (link: string) => {
  const videoId = link?.split("/")?.[5]
  // const _link = `https://www.googleapis.com/drive/v3/files/${videoId}?alt=media&key=${key}`
  const _link = `https://drive.google.com/file/d/${videoId}/preview`
  return _link
}

export const useWindowSize = () => {
  const [size, setSize] = useState([0, 0])
  useEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight])
    }
    window.addEventListener("resize", updateSize)
    updateSize()
    return () => window.removeEventListener("resize", updateSize)
  }, [])
  return size
}
