'use client'
import React, {useEffect} from 'react';
import cn from "classnames";
import Image from "next/image";
import close from '@/public/icon/close.svg'
import {IModal} from "@/components/types/modal";

const Modal = (props: IModal) => {
    const {children, active, setActive, title, status} = props

    useEffect(() => {
        if (active) document.body.style.overflow = 'hidden'
        else document.body.style.overflow = 'unset'
    }, [active])

    return (
        <div
            onClick={() => setActive(false)}
            className={cn(
                'w-screen h-screen fixed top-0 left-0  bg-opacity-30 z-50 border-red-600 border-0 bg-black flex items-center justify-center  overflow-x-hidden  px-6 transition-all duration-300 ',
                {'opacity-100 pointer-events-auto': active},
                {'opacity-0 pointer-events-none': !active}, {'border-2': status === 'error'}
            )}>

            <div
                className='bg-white rounded-xl max-w-[512px] w-full min-h-[124px] max-h-[512px] px-6 py-4 scroll-auto'
                onClick={(e) => e.stopPropagation()}>
                <div>
                    < div className='flex items-center justify-between'>
                        <h1 className='text-2xl font-semibold text-indigo-700'>{title}</h1>
                        <Image
                            src={close}
                            alt='close modal'
                            className='hover:cursor-pointer'
                            width={32}
                            height={32}
                            onClick={() => setActive(false)}/>
                    </div>
                    <div className='mt-4'>
                        {children}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Modal;