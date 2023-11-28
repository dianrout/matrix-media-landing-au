interface IButtonCategory {
  loading?: boolean
  disabled?: boolean
  className?: string
  children?: any
  onFocus?: () => void
  onBlur?: () => void
  onMouseOver?: () => void
  onMouseOut?: () => void
  onSubmit?: (params?: any) => void
}

const ButtonComponent = ({
  loading,
  disabled,
  className,
  children,
  onFocus,
  onBlur,
  onMouseOver,
  onMouseOut,
  onSubmit
}: IButtonCategory) => {
  return (
    <button
      disabled={disabled || loading}
      className={`flex items-center justify-center gap-4 Roboto-500 px-[24px] py-[8px] rounded-[8px] h-[48px] bg-[#FF6100] text-white text-[16px] leading-[150%] ${className} ${
        (loading || disabled) && "opacity-70"
      }`}
      onFocus={onFocus}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      onBlur={onBlur}
      onClick={onSubmit}
    >
      {children}
    </button>
  )
}

export default ButtonComponent
