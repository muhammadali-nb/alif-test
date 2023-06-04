import React from 'react';
import cn from "classnames";

export interface IInput {
    placeholder?: string
    className?: string
    type?: string
    value?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = (props: IInput) => {
    const {
        placeholder,
        className,
        value,
        onChange
    } = props

    return (
        <input placeholder={placeholder}
               className={cn('w-full bg-indigo-400 h-10 rounded-md px-3 placeholder:text-white  text-white  font-medium border-2 border-transparent hover:border-indigo-600 focus:outline-none focus:bg-white focus:border-indigo-600 focus:text-indigo-600 hover:text-indigo-600 hover:bg-white hover:placeholder:text-indigo-600 transition-all duration-200', className)}
               value={value} onChange={onChange}/>
    );
};

export default Input;