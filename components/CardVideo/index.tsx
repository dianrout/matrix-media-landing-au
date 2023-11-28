import { useRouter } from "next/router"
import React, { FC, useMemo } from "react"
import { renderLink } from "utils"

interface ICardVideoProps {
  item: any
}
const link = "https://drive.google.com/file/d/1CydMC5wIuAkLHUrDIxxOao4cfBKk6av1"

const CardVideo: FC<ICardVideoProps> = ({ item }) => {
  const router = useRouter()
  const renderCard = useMemo(() => {
    return (
      <>
        <div
          className="w-full cursor-pointer flex flex-col h-full"
          onClick={() => {
            router.push(`/shop/item/${item.sku}`)
          }}
        >
          <div className="w-full min-h-[90px] border-[#ddd] bg-white p-[1px] border">
            <img
              src={renderLink(item?.thumb)}
              // src={link}
              alt="thumb"
              className="w-full object-contain h-[220px] bg-black"
            />
          </div>

          <h3
            className="text-[#777777] hover:text-main-color text-center pt-4 px-4 text-ellipsis"
            title={item?.title}
          >
            {item?.title}
          </h3>
          <h2 className="text-[#444] font-semibold text-[20px] text-center pt-1">
            ${item?.price}
          </h2>
          <button className="bg-transparent px-2 py-1 border border-[#ccc] text-[#333] mt-2 w-fit m-auto mb-0 hover:text-white hover:border-main-color hover:bg-main-color">
            Shop to Support
          </button>
        </div>
      </>
    )
  }, [item])
  return renderCard
}

export default CardVideo
