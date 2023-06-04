import React from 'react';
import Container from "@/components/global/container";
import Logo from "@/components/global/logo";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className='bg-indigo-600 h-16 py-4 sticky top-0 left-0 z-50'>
            <Container>
                <div className='flex items-center justify-between'>
                    <Link href='/'>
                        <Logo/>
                    </Link>

                </div>
            </Container>
        </div>
    );
};

export default Navbar;