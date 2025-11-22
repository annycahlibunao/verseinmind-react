interface ButtonProps {
    value: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    customClassName: string;
}

function Button({
    value,
    onClick,
    customClassName,
}: ButtonProps) {

  return (
    <>
        <button
            onClick={onClick}
            className={`p-5 text-sm text-white font-medium bg-(--color-theme-orange) rounded-4xl mt-[3vw] 
                        cursor-pointer transition duration-300 hover:bg-(--color-theme-orange-hover)
                        ${customClassName}`}
        >{value}</button>
    </>
  )
}

export default Button

