import React, {ReactNode} from 'react';

const Container = ({children}: {children: ReactNode}) => {
    return (
        <div className='mx-auto px-4 max-w-6xl'>
            {children}
        </div>
    );
};

export default Container;