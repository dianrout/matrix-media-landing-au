import React, { useEffect, useMemo, useState } from "react"

interface IProps {
  total: number
  setPageIndex: React.Dispatch<React.SetStateAction<string>>
  pageIndex: number
}

export const Pagination = ({ total, setPageIndex, pageIndex }: IProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(pageIndex)
  const pageNumber = Math.ceil(total / 10)

  useEffect(() => {
    setActiveIndex(pageIndex)
  }, [pageIndex])

  const renderButton = (index: number) => {
    return (
      <button
        key={index}
        className={`${
          activeIndex === index
            ? "pagination__number--active"
            : "pagination__number"
        }`}
        onClick={() => setActiveIndex(index)}
      >
        {index}
      </button>
    )
  }

  const convertList = (list: any) => {
    const uniqueNumbers = []
    const seenNumbers = new Set()

    for (let number of list) {
      if (!seenNumbers.has(number) && number > 0 && number <= pageNumber) {
        uniqueNumbers.push(number)
        seenNumbers.add(number)
      }
    }
    return uniqueNumbers
  }

  const renderPagination = useMemo(() => {
    if (pageNumber < 10) {
      return Array.from({ length: pageNumber }, (_, index) => index + 1).map(
        (item: number, index) => {
          return renderButton(item)
        }
      )
    }

    const _listPage = [
      1,
      2,
      activeIndex - 1,
      activeIndex,
      activeIndex + 1,
      pageNumber - 1,
      pageNumber
    ]

    const _filterList = convertList(_listPage)

    return _filterList.map((item: number, index: number) => {
      return (
        <>
          {renderButton(item)}
          {index + 1 < _filterList.length &&
            item + 1 < _filterList[index + 1] &&
            "..."}
        </>
      )
    })
  }, [pageNumber, activeIndex])

  const handleDiscount = () => {
    if (activeIndex === 1) return
    setActiveIndex(activeIndex - 1)
  }
  const handleIncrease = () => {
    if (activeIndex === pageNumber) return
    setActiveIndex(activeIndex + 1)
  }
  useEffect(() => {
    setPageIndex(activeIndex.toString())
  }, [activeIndex])

  return (
    <>
      {pageNumber ? (
        <div className="pagination bg-transparent">
          <span className="pagination__number-indicator"></span>
          <button className="pagination__arrow" onClick={handleDiscount}>
            <span className="pagination__arrow-half"></span>
            <span className="pagination__arrow-half"></span>
          </button>
          {renderPagination}
          <button
            className="pagination__arrow pagination__arrow--right"
            onClick={handleIncrease}
          >
            <span className="pagination__arrow-half"></span>
            <span className="pagination__arrow-half"></span>
          </button>
        </div>
      ) : null}
    </>
  )
}
