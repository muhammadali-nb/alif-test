'use client'
import React, {useEffect} from 'react';
import cn from "classnames";
import Button from "@/components/global/button";
import {IDialog} from "@/components/types/dialog";

const Dialog = (props: IDialog) => {
    const {active, setActive, title, description , setConfirm} = props

    useEffect(() => {
        if (active) document.body.style.overflow = 'hidden'
        else document.body.style.overflow = 'unset'
    }, [active])

    return (
        <div
            onClick={() => setActive(false)}
            className={cn(
                'w-screen h-screen fixed top-0 left-0  bg-opacity-30 z-50 bg-black flex items-center justify-center  overflow-x-hidden  px-6 transition-all duration-300 ',
                {'opacity-100 pointer-events-auto': active},
                {'opacity-0 pointer-events-none': !active}
            )}>

            <div
                className='bg-white rounded-xl max-w-[356px] w-full min-h-[124px] max-h-[512px] px-6 py-4 flex justify-center'
                onClick={(e) => e.stopPropagation()}>
                <div>
                    <h1 className='text-center font-semibold text-2xl text-indigo-600 '>{title}</h1>
                    <p className='text-center  text-sm mt-2 '>{description}</p>

                    <div className='mt-4 flex'>
                        <Button

                            onClick={() => setActive(false)}
                            className=' !bg-red-400 hover:bg-red-400 w-28 text-white h-11 '>
                            Cancel
                        </Button>
                        <Button className=' !bg-emerald-500 hover:bg-emerald-500 ml-2  w-28 text-white h-11 '
                              onClick={() => setConfirm()}
                                >
                            Confirm
                        </Button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Dialog;