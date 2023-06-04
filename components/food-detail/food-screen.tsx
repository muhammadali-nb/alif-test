'use client'
import React, {useEffect, useState} from 'react';

import Container from "@/components/global/container";
import ImageCard from "@/components/global/image-card";
import Button from "@/components/global/button";
import FoodEditRecipeModal from "@/components/food-detail/modal/food-edit-recipe-modal";
import Dialog from "@/components/global/dialog";

import {useAppDispatch, useAppSelector} from "@/store/types";
import {deleteRecept, getOneRecipe} from "@/store/food";

import FoodScreenSkeleton from "@/components/food-detail/skeleton/food-sceen-skeleton";
import {useRouter} from "next/navigation";

const FoodScreen = ({params}: { params: string }) => {
    const [modalActive, setModalActive] = useState(false)
    const [dialogActive, setDialogActive] = useState(false)
    const dispatch = useAppDispatch()
    const {status, recipe} = useAppSelector(state => state.food)
    const router = useRouter()

    useEffect(() => {
        dispatch(getOneRecipe(params))
    }, [])

    const deletePost = () => {
        dispatch(deleteRecept(params))
        router.push('/')
    }

    useEffect(() => {
        console.log(recipe)
    }, [recipe])


    return (
        <>
            <Dialog active={dialogActive} setActive={setDialogActive} title='Delete this post?'
                    setConfirm={deletePost}
            />
            {status === 'success' && <FoodEditRecipeModal active={modalActive} setActive={setModalActive}/>}
            <div className='pt-8 md:pt-16 pb-10'>
                <Container>
                    {status === 'loading' ? <FoodScreenSkeleton/> : (
                        <div>
                            <div className='block md:flex  items-center '>
                                <div className=' w-full  md:w-1/2'>
                                    <div className='w-full relative pt-[68%] bg-white rounded-xl overflow-hidden'>
                                        <ImageCard
                                            src={recipe.image}
                                            alt='plov'
                                            className='w-full h-full object-center object-cover'
                                            width={600}
                                            height={450}
                                        />
                                    </div>
                                </div>
                                <div
                                    className='w-full md:w-1/2 md:ml-2 mt-2 md:mt-0 min-h-[382px] bg-white rounded-xl px-6 md:px-8 py-3 md:py-6'>
                                    <h1 className='font-bold text-3xl text-indigo-600'>{recipe.title}</h1>
                                    <div className='pt-3'>
                                        <h4>Ingredients:</h4>
                                        <ul className='pb-2'>
                                            {recipe.ingredients && recipe.ingredients.map((item: string, index: number) =>
                                                <li key={index}> - {item}</li>
                                            )}
                                        </ul>
                                        <div>
                                            <h4>
                                                Description:
                                            </h4>
                                            <p className='w-full'>
                                                {recipe.description}
                                            </p>
                                        </div>
                                        <div className='mt-8 flex'>
                                            <Button onClick={() => setModalActive(true)}
                                                    className='!bg-yellow-400 text-white px-5'>
                                                Edit
                                            </Button>
                                            <Button className='!bg-red-400 text-white px-5 ml-2'
                                                    onClick={() => setDialogActive(true)}
                                            >
                                                Delete
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </Container>
            </div>
        </>
    );
};

export default FoodScreen;