const IconClose = ({ fill }: any) => {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.9706 1.41421L15.5563 0L8.48532 7.07103L1.41431 1.57356e-05L9.42945e-05 1.41423L7.07111 8.48524L0 15.5563L1.41421 16.9706L8.48532 9.89946L15.5564 16.9706L16.9707 15.5564L9.89953 8.48524L16.9706 1.41421Z"
        fill={fill ? fill : "black"}
      />
    </svg>
  )
}

export default IconClose
