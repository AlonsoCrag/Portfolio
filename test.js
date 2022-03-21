<div className='h-full'>
            <NavBar />
            <div className='container mx-auto max-w-7xl'>
                <div className='w-1/2 mx-auto mt-20'>
                    <h1 className='text-5xl font-black text-cyan-500 text-center'>Welcome to my personal folder</h1>
                </div>
                <div className='w-full mx-auto my-5'>
                    <h1 className='text-3xl font-bold text-blue-700 text-center'>
                        Developing custom web products, mobile-desktop applications, database management, sites, backend systems.
                    </h1>
                </div>
                <div className='w-full mx-auto my-5 flex flex-col'>
                    <div className='w-1/2 bg-cyan flex justify-center mx-auto'>
                        <h1 className='text-2xl font-bold text-cyan-500 text-center'>
                            Technologies that i've used in the process
                        </h1>
                    </div>
                    <div className='w-1/2 bg-cyan flex flex-wrap justify-center mx-auto mt-1 bg-zinc-900 py-0.5 rounded-full animate-pulse shadow-xl'>
                        {languages.map(element => {
                            return (
                                <div className='w-28 h-28 mx-2 my-2'>
                                    <img className='rounded-full object-cover w-full h-full border-4 border-cyan-500' src={element} />
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className='w-1/2 bg-cyan mx-auto mt-1'>
                    <h1 className='text-2xl font-bold text-cyan-500 text-center'>
                        Contact me
                    </h1>
                    <svg className="w-12 h-12 mx-auto animate-bounce text-blue-700 text-lg my-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"></path></svg>
                </div>
                <div className='flex flex-wrap justify-center'>
                    {contact_btns.map(element => {
                        return (element);
                    })}
                </div>
            </div>
            <Footer />
        </div>









const users = [
    "Elmer",
    "Alonso",
    "Goliath",
    "Pulgas"
]


let [isActive, updateStateActive] = useState(true)
console.log(isActive)

return (
    <div className='drugs'>
        {users.map(element => {
            return (
                <p key={element} className="odd:bg-green-400 even:bg-green-300">{element}</p>
            );
        })}
        <div className='w-1/2 bg-[#121212] p-4 rounded mx-auto my-2'>
            <form>
                <input
                    disabled={ isActive }
                    type="text"
                    placeholder='Username'
                    className='my-2 border block w-full border-blue-800 rounded-md shadow-sm placeholder-blue-800 disabled:border-black disabled:placeholder-gray-700 disabled:font-bold disabled:bg-gray-800'
                />
            </form>
            <button 
                onClick={() => {console.log("State", isActive); updateStateActive( isActive === true ? false : true )}}
                type='button'
                className='w-full py-2 px-4 roun rounded bg-blue-700 text-white font-bold active:bg-blue-900 hover:bg-blue-500'>
                Change
            </button>
        </div>
        <div className='w-3/6 mx-auto'>
           <a href='#' className='p-2 rounded group bg-white shadow-lg block hover:bg-cyan-500'>
                <div className='flex items-center space-x-3'>
                    <h3 className='text-slate-900 group-hover:text-slate-800'>Projects</h3>
                </div>
                <p className='text-slate-500 group-hover:text-white'>One ofr many projects are listed here</p>   
            </a> 
        </div>
        <div className='md:continer md:my-10 group lg:my-2'>
            <h4 className='md:text-center lg:text-right'>GG</h4>
        </div>
        <div className='columns-md bg-green-900'>
            <p className='text-center'>GG</p>
            <p className='text-center'>GG</p>
            <p className='text-center'>GG</p>
        </div>
        <div className='my-2 flex'>
            <h3 className='bg-cyan-900 basis-1/2 hover:basis-1/4'>one</h3>
            <h3 className='bg-cyan-600 grow'>one</h3>
            <h3 className='bg-cyan-400 grow-[2]'>one</h3>
        </div>
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-5 sm:grid-cols-1'>
            <div className='bg-cyan-500'>1</div>
            <div className='bg-cyan-500'>2</div>
            <div className='bg-cyan-500 col-span-2'>3</div>
            <div className='bg-cyan-500'>4</div>
            <div className='bg-cyan-500'>4</div>
            <div className='bg-cyan-500'>4</div>
            <div className='bg-cyan-500'>4</div>
        </div>
    </div>
);