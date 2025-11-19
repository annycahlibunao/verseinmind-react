interface TextBoxProps {
    type: string;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    customClassName: string;
}

function TextBox({
    type,
    value, 
    onChange,
    placeholder, 
    customClassName,
}: TextBoxProps) {

  return (
    <>
        <input
            type={type}
            value={value}
            placeholder={placeholder}
            className={`p-3 rounded-2xl border-2 border-[var(--color-border)] text-md ${customClassName}`}
            onChange={(e) => onChange(e.target.value)}
        />
    </>
  )
}

export default TextBox

