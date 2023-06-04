import React from 'react';

const FoodScreenSkeleton = () => {
    return (
        <div className='block md:flex  items-center '>
            <div className=' w-full md:w-1/2 min-h-[382px] rounded-xl bg-gray-100'>

            </div>
            <div
                className='w-full md:w-1/2 md:ml-2 mt-2 md:mt-0 min-h-[382px] bg-gray-100 rounded-xl px-6 md:px-8 py-3 md:py-6'>
            </div>
        </div>
    );
};

export default FoodScreenSkeleton;