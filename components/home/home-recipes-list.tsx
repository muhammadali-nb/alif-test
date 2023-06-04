'use client'
import React, {useEffect, useState} from 'react';
import HomeRecipeCard from "@/components/home/home-recipe-card";
import Container from "@/components/global/container";
import Button from "@/components/global/button";
import HomeAddRecipeModal from "@/components/home/modal/home-add-recipe-modal";
import {getAll} from "@/store/food";
import {useAppDispatch, useAppSelector} from "@/store/types";
import Link from "next/link";
import foodImage from '@/public/food.jpg'
import HomeRecipeSkeleton from "@/components/home/skeleton/home-recipe-skeleton";

const HomeRecipesList = () => {
    const [modalActive, setModalActive] = useState(false)
    const food = useAppSelector(state => state.food)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getAll())
    }, [])


    return (
        <>
            <HomeAddRecipeModal active={modalActive} setActive={setModalActive}/>
            <div className='pb-12 pt-4'>
                <Container>
                    <div
                        className='bg-indigo-500 flex items-center justify-between px-4 py-3 rounded-md mb-3 font-medium text-xl'>
                        <h3 className='text-white'>Food list </h3>
                        <Button onClick={() => setModalActive(true)}>
                            Add recipe
                        </Button>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                        {food.status === 'loading' ? [...new Array(6)].map((_, index: number) => <HomeRecipeSkeleton
                            key={index}/>) : food.data.map((_item: any) => (
                            <Link key={_item._id} href={`/food/${_item._id}`}>
                                <HomeRecipeCard image={!_item.image ? foodImage : _item.image} name={_item.title}/>
                            </Link>
                        ))}
                    </div>
                </Container>
            </div>
        </>
    );
};

export default HomeRecipesList;