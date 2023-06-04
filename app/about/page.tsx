import React from 'react';
import {Metadata} from "next";

export const metadata:Metadata = {
    title: 'About page'
}

const Page = () => {
    return (
        <div className='bg-gray-600'>
            <p className='text-red-500 hide'>about page</p>
        </div>
    );
};

export default Page;