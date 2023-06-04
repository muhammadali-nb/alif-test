import React from 'react';
import Image from "next/image";
import cn from "classnames";

interface IImageCard {
    src: any
    alt: string
    className?: string
    width: number
    height: number
}

const ImageCard = (props: IImageCard) => {
    const {src, alt, className, width, height} = props

    return (
        <div className={cn('absolute top-0 left-0', className)}>
            <Image src={src} alt={alt} width={width} height={height} className='w-full h-full object-cover object-center'/>
        </div>
    );
};

export default ImageCard;