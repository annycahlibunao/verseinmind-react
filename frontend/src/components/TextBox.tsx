interface TextBoxProps {
    type: string;
    value: string;
    placeholder?: string;
    customClassName: string;
    onError: string;
    onChange: (value: string) => void;
}

function TextBox({
    type,
    value, 
    placeholder, 
    customClassName,
    onError,
    onChange,
}: TextBoxProps) {

  return (
    <>
        <input
            type={type}
            value={value}
            placeholder={placeholder}
            className={`p-3 rounded-2xl border-2 text-md ${customClassName} 
            ${onError ? `border-red-600` : `border-(--color-border)`}`}
            onChange={(e) => onChange(e.target.value)}
        />
    </>
  )
}

export default TextBox

