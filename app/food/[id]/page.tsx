import React from 'react';
import FoodScreen from "@/components/food-detail/food-screen";

type Props = {
    params: {
        id: string
    }
}

const Page = ({params: {id}}: Props) => {

    return <FoodScreen params={id}/>

};

export default Page;