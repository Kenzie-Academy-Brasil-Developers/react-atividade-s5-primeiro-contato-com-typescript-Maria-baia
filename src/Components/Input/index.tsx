import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label ?: string;
    placeholder: string;
}

export const Input = ({ label, placeholder, ...rest } : InputProps) => {
    return (
        <div className="input">
            {label && <label>{label}</label>}
            <input placeholder={placeholder} {...rest}/>
        </div>
    )
}