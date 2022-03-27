import React, { useState, useEffect } from 'react';
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import copy from "copy-to-clipboard"
import Bearz from '../assets/images/Bearz.jpg';


export default () => {

    useEffect(() => {
        if (textCopy !== null) {
            console.log(`Text in clipboard ${textCopy}`,);
            copy(textCopy);
            setTimeout(() => updateCopyText(null), 1000);
        }
    });

    let languages = [
        ['https://static.skillshare.com/uploads/video/thumbnails/d1fd473c000b291bda0bb5c509a36e94/original', 'Python'],
        ['https://th.bing.com/th/id/R.cb5d9888c8ac0cc1b05cecf5ede1f358?rik=TFnNMgPwVa7Oag&pid=ImgRaw&r=0', 'Golang'],
        ['https://th.bing.com/th/id/OIP.39mOMBjUfsK-HL9jUbv1MwHaE7?pid=ImgDet&rs=1', 'Javascript'],
        ['https://th.bing.com/th/id/OIP.kTH4G9nPxCAQsUv47tQ8ggHaEK?pid=ImgDet&rs=1', 'Dart'],
        ['https://th.bing.com/th/id/OIP.wakmn-NeIS77tDE0bFTYLQHaEK?pid=ImgDet&rs=1', 'Solidity'],
    ]

    let [ textCopy, updateCopyText  ] = useState(null);

    return (
        <div className=''>
            <NavBar />
            <div className='container max-w-7xl mx-auto' id='application'>
                <div className='grid grid-cols-1'>
                    <div className='mt-2 m-4'>
                        <h1 className='text-2xl font-bold text-white text-center'>
                            Hey there, welcome to my personal portfolio, i'd like to be called by my username
                            <span className='text-blue-700'> Bearz </span>
                            for the science
                        </h1>
                        <h1 className='text-2xl font-bold text-blue-700 text-center'>
                            Developing custom web products, mobile-desktop applications, database management, sites, backend systems.
                        </h1>
                        <h1 className='mt-2 text-lg font-bold text-white text-center'>
                            Feel free to contact me im open mind to:
                        </h1>
                    </div>
                    <div className='flex justify-center align-items-center'>
                        <div className='mt-4 w-56 h-56 rounded-full border-4 border-blue-700'>
                            <img className='rounded-full w-full h-full object-cover' src={Bearz} />
                        </div>
                    </div>
                    <div className='my-2 mx-4 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-2 rounded p-2'>
                        <h1 className='bg-[#131313] rounded hover:bg-blue-700 px-1 text-lg font-bold text-white text-center'>
                            To develop a personal product
                        </h1>
                        <h1 className='bg-[#131313] rounded hover:bg-blue-700 px-1 text-lg font-bold text-white text-center'>
                            Collaborate with a team in any kind of project
                        </h1>
                        <h1 className='bg-[#131313] rounded hover:bg-blue-700 px-1 text-lg font-bold text-white text-center'>
                            Manage certain aspect of your business
                        </h1>
                        <h1 className='bg-[#131313] rounded hover:bg-blue-700 px-1 text-lg font-bold text-white text-center'>
                            Building custom microservices
                        </h1>
                    </div>
                    <h1 className='mt-2 text-lg font-bold text-white text-center'>
                        Some of the tools i like to use
                    </h1>
                    <div className='group mx-auto grid grid-cols-1 w-1/2 bg-[#131313] rounded'>
                        {languages.map(element => {
                            return (
                                <div className='bg-[#101010] flex justify-center items-center m-4 rounded-t' key={element[1]} >
                                    <p className='text-white text-center font-bold mx-4'>{element[1]}</p>
                                    <div className='mt-4 w-16 h-16 rounded-full border-4 border-blue-700 my-4'>
                                        <img className='rounded-full w-full h-full object-cover' src={element[0]} />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className='flex flex-wrap justify-center mb-2'>
                    <div className='p-2 group'>
                        <p className='bg-blue-900 rounded opacity-0 group-hover:opacity-100 relative text-center text-white font-bold'>Bearz#0220</p>
                        <button onClick={ () => updateCopyText("Bearz#0220") }>
                            <i class="fa-brands fa-discord group text-white px-3 py-3 m-2 text-2xl bg-gray-800 rounded-full shadow-md shadow-gray-800"></i>
                        </button>
                    </div>
                    {textCopy !== null ? <p className='text-white text-2xl shadow-md font-bold absolute z-50 bg-blue-700 rounded px-1'>Copied to clipboard</p> : null}
                    <div className='p-2 group'>
                        <p className='bg-red-800 rounded opacity-0 group-hover:opacity-100 relative text-center text-white font-bold'>Youtube</p>
                        <a href='https://www.youtube.com/c/BearzMitosisTheGame/' target="_blank" rel="noopener">
                            <i class="fa-brands fa-youtube text-white px-3 py-3 m-2 text-2xl bg-red-600 rounded-full shadow-md shadow-red-600"></i>
                        </a>
                    </div>
                    <div className='p-2 group'>
                        <p className='bg-green-900 rounded opacity-0 group-hover:opacity-100 relative text-center text-white font-bold'>Github</p>
                        <a href='https://github.com/AlonsoCrag' target="_blank" rel="noopener">
                            <i class="fa-brands fa-github text-white px-3 py-3 m-2 text-2xl bg-green-600 rounded-full shadow-md shadow-green-600"></i>
                        </a>
                    </div>
                </div>
            </div>
            <Footer pos="relative" />
        </div>
    );
}
