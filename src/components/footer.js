import React from 'react';

function Footer ({ pos }) {
    return (
        <footer className={"bottom-0 border-gray-200 w-full px-2 sm:px-4 py-2.5 bg-[#131313]" + " " + pos}>
            <div className=" container flex flex-wrap justify-center items-center container mx-auto max-w-7xl">
                <p className='text-white font-bold'>Copyright © 2022 Bearz</p>
            </div>
        </footer>
    );
}

export default Footer;