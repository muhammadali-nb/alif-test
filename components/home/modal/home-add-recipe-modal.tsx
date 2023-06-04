'use client'
import React, {useState} from 'react';
import Modal from "@/components/global/modal";
import Input from "@/components/global/input";
import TextArea from "@/components/global/text-area";
import {ICustomModal} from "@/components/types/modal";
import InputFile from "@/components/global/input-file";
import Button from "@/components/global/button";
import {useAppDispatch} from "@/store/types";
import {createRecipe, getAll} from "@/store/food";


const HomeAddRecipeModal = (props: ICustomModal) => {
    const {active, setActive} = props
    const [ingredients, setIngredients] = useState<Array<string>>([])
    const [ingredient, setIngredient] = useState('')
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [description, setDescription] = useState('')
    const dispatch = useAppDispatch()

    const create = () => {
        dispatch(createRecipe({
            title: name,
            image,
            ingredients,
            description
        })).then(() => dispatch(getAll()))
        setActive(false)
    }

    const addIngredient = () => {
        if (ingredient.length < 3) {
            return
        }
        setIngredients([...ingredients, ingredient])
        setIngredient('')
    }

    const deleteIngredient = (element: string) => {
        setIngredients(ingredients.filter(item => item !== element))
    }

    return (
        <Modal title='Add new food !' active={active} setActive={setActive}>
            <InputFile/>
            <Input placeholder='Name' value={name} onChange={e => setName(e.target.value)} className='mt-2'/>
            <ul className='flex flex-wrap mb-2'>
                {ingredients.length > 0 && ingredients.map((item, index) => (
                    <li
                        className='bg-indigo-400 text-white py-1 px-3 rounded-md mr-1 mt-1 hover:bg-red-400 transition duration-200'
                        key={item}
                        onClick={() => deleteIngredient(item)}
                    >
                        {item}
                    </li>
                ))}
            </ul>

            <div className='relative'>
                <Input placeholder='ingredient' value={ingredient} onChange={e => setIngredient(e.target.value)}/>
                <button onClick={addIngredient}
                        className='absolute top-1.5 right-3 bg-emerald-500 text-white text-sm px-4 py-1 rounded'>
                    Add
                </button>
            </div>

            <TextArea placeholder='Recipe' value={description} onChange={e => setDescription(e.target.value)}
                      className='mt-2'/>
            <Button onClick={create} className='m-auto mt-1 !bg-emerald-500 text-white px-6 h-12 rounded-xl'>
                Create recipe
            </Button>
        </Modal>
    );
};

export default HomeAddRecipeModal;