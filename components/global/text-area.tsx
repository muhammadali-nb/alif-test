import React from 'react';
import cn from "classnames";

interface ITextArea {
    placeholder?: string
    className?: string
    type?: string
    value?: string
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const TextArea = (props: ITextArea) => {
    const {onChange, value, placeholder, className} = props
    return (
        <textarea placeholder={placeholder} onChange={onChange} value={value}
                  className={cn('w-full bg-indigo-400 h-32 py-2 resize-none rounded-md px-3 placeholder:text-white  text-white  font-medium border-2 border-transparent hover:border-indigo-600 focus:outline-none focus:bg-white focus:border-indigo-600 focus:text-indigo-600 hover:text-indigo-600 hover:bg-white hover:placeholder:text-indigo-600 transition-all duration-200', className)}></textarea>
    );
};

export default TextArea;