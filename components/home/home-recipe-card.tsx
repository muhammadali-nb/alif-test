import React from 'react';
import ImageCard from "@/components/global/image-card";

export interface IHomeRecipeCard {
    image: string
    name: string
}

const HomeRecipeCard = (props: IHomeRecipeCard) => {
    const {image, name} = props
    return (
        <div
            className='w-full p-2.5 bg-indigo-500  relative rounded-lg hover:bg-indigo-600 hover:-translate-y-1 transition-all duration-300 '>
            <div className='w-full relative pt-[56%]  overflow-hidden rounded-lg'>
                <ImageCard src={image} alt={name} width={500} height={300}/>
            </div>
            <h4 className='text-2xl mt-3  text-white '>{name}</h4>
        </div>
    );
};

export default HomeRecipeCard;