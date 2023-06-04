import React, {ReactNode} from 'react';
import cn from 'classnames'

interface IButton {
    children: ReactNode
    className?: string
    onClick?: () => void
}

const Button = (props: IButton) => {
    const {children, className, onClick} = props
    return (
        <button
            onClick={onClick}
            className={cn('text-sm block font-medium rounded-md min-w-[48px] max-w-[198px] text-indigo-600 px-2 py-2 bg-white  hover:bg-indigo-50 transition duration-200', className)}>
            {children}
        </button>
    );
};

export default Button;