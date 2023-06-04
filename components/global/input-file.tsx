'use client'
import React, {useRef, useState} from 'react';
import {IInput} from "@/components/global/input";
import cn from "classnames";


const InputFile = (props: IInput) => {
    const {className} = props
    const filePicker = useRef<any>()
    const [file, setFile] = useState<any>(null)

    const handlePick = () => {
        if (!filePicker) {
            return
        }
        filePicker.current.click()
    }

    const handleChange = (e: any) =>
    {
        console.log(e.target.files[0])
        setFile(e.target.files[0])
    }

    return (
        <div className={cn('flex items-center ', className)}>
            <button onClick={handlePick} className='bg-indigo-400 mr-3 text-white py-2 px-3 rounded-md'>Chose file
            </button>
            <p className='text-indigo-600'>{file && file.name}</p>
            <input type="file" className='hidden' ref={filePicker} onChange={handleChange}
                   accept='image/*'/>
        </div>
    );
};

export default InputFile;