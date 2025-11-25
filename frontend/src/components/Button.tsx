import { Link } from 'react-router-dom'

interface ButtonProps {
    value: string;
    path: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    customClassName: string;
}

function Button({
    value,
    path,
    onClick,
    customClassName,
}: ButtonProps) {

  return (
    <>
      <Link to={`${path}`}>
        <button
            onClick={onClick}
            className={`p-5 text-sm text-white font-medium bg-(--color-theme-orange) rounded-4xl mt-[3vw] 
                        cursor-pointer transition duration-300 hover:bg-(--color-theme-orange-hover)
                        ${customClassName}`}
        >{value}</button>
      </Link>
    </>
  )
}

export default Button

