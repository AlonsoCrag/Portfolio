import React, { useEffect, useState } from 'react';
import NavBar from '../components/navbar';
import Footer from '../components/footer';


export default () => {

    let [ repos, updateRepos ] = useState(null);

    // let state = 'WAIT';
    let state = 'READY';

    useEffect(() => {
        if (repos === null && state != 'WAIT') {
            request();
        }
    })

    const request = async () => {
        console.log("Access token", process.env.TOKEN)
        let accessToken = 'token ' + process.env.TOKEN;
        let url = 'https://api.github.com/user/repos'
        let resp = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': accessToken
            }
        });
        let response = await resp.json();
        // console.log("response status code", resp.status);
        updateRepos(response);
        // console.log(response);
    }
    

    return (
        <div className=''>
            <NavBar />
            <div className='container max-w-7xl mx-auto'>
                <div className='mt-2 m-4'>
                    <h1 className='text-2xl font-bold text-white text-center'>
                        Some of my projects are listed down below and you can also find them in my
                        <span className='text-blue-700'>
                            < a href='https://github.com/AlonsoCrag' target="_blank" rel="noopener" className='mx-1'>
                            GitHub
                            </a>
                        </span>
                        account!
                    </h1>
                    <h1 className='text-lg font-bold text-blue-700 text-center'>
                        Developing custom web products, mobile-desktop applications, database management, sites, backend systems.
                    </h1>
                </div>
                <div className='group mx-auto my-4 grid grid-cols-1 w-1/2 bg-[#131313] rounded'>
                    <div className=''>
                        <p className='text-white text-3xl text-center font-bold mx-4'>Projects</p>
                    </div>
                    {
                        repos !== null ? repos.map(element => (
                            <div key={element.name} className='py-1 group hover:bg-cyan-500 bg-[#101010] flex justify-center items-center m-4 rounded-t' >
                                <p className='text-white text-center font-bold mx-4'>{element.name}</p>
                                <p className='text-blue-700 text-center font-bold mx-4'>{element.language}</p>
                                <button onClick={() => window.open(element.clone_url)} className='bg-white text-black font-bold p-2 rounded'>
                                    Go
                                </button>
                            </div>
                        )) : null
                    }
                </div>
                {
                    state == 'WAIT' ?  (
                        <div className='my-2'>
                            <p className='text-blue-700 text-3xl text-center font-bold mx-4'>
                                Comming soon ...
                            </p>
                            <p className='text-white text-1xl text-center font-bold mx-4'>
                                <span className='text-3xl'>
                                    😀
                                </span>
                                For the moment you can watch those pizza dancers
                                <span className='text-3xl'>
                                    😀
                                </span>
                            </p>
                            <div className='flex flex-wrap justify-center align-items-center'>
                                <div className='mt-4 mx-2 w-64 h-64 rounded-full border-4 border-blue-700'>
                                    <img className='rounded-full w-full h-full object-cover' src="https://media4.giphy.com/media/3osxYoufeOGOA7xiX6/giphy.gif?cid=ecf05e4762e485lvwji6q9yalrwnf3nvytlwoelcq9knrwvz&rid=giphy.gif&ct=g" />
                                </div>
                                <div className='mt-4 mx-2 w-64 h-64 rounded-full border-4 border-blue-700'>
                                    <img className='rounded-full w-full h-full object-cover' src="https://media4.giphy.com/media/3osxYoufeOGOA7xiX6/giphy.gif?cid=ecf05e4762e485lvwji6q9yalrwnf3nvytlwoelcq9knrwvz&rid=giphy.gif&ct=g" />
                                </div>
                                <div className='mt-4 mx-2 w-64 h-64 rounded-full border-4 border-blue-700'>
                                    <img className='rounded-full w-full h-full object-cover' src="https://media4.giphy.com/media/3osxYoufeOGOA7xiX6/giphy.gif?cid=ecf05e4762e485lvwji6q9yalrwnf3nvytlwoelcq9knrwvz&rid=giphy.gif&ct=g" />
                                </div>
                            </div>
                        </div>
                    ) : null
                }
            </div>
            <div className='flex'>
                <Footer pos="relative" />
            </div>
        </div>
    );
}
