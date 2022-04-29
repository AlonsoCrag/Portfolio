import NavBar from '../components/navbar';
import Footer from '../components/footer';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default () => {

    let [ fileStatus, updateFileStatus ] = useState(null);
    let [ success, updateSuccess ] = useState(null);
    let [ _file, updateFile ] = useState(null)
    let [ warning, warningFile ] = useState(null);

    const fileHandler = () => {
        updateFile(true);
        updateSuccess(null);
        warningFile(null);
    }

    const request = async () => {

        if (!_file) {
            updateFile(false);
            return;
        }

        let fileField = document.getElementById('file').files[0];
        

        if (fileField.size >= 5000000) return warningFile("Sorry, the file is too big") ;

        updateFileStatus(true);
        warningFile(null);

        // console.log("Sending the file", fileField);

        let regex = /([a-z]|[0-9])+./;
        let regexExt = /\.([a-z]|[0-9])+/
        let fileName = regex.exec(fileField.name)[0];
        // let fileExtension = regexExt.exec(fileField.name)[0].fileExtension.replace('.', '');
        
        const formData = new FormData();
        formData.append("image", fileField, fileField.name);
        formData.append("name", fileName);
        formData.append("fileExtension", fileField.name);
    
        let resp = await axios.post("https://decrag.xyz/", formData, {
            responseType: 'arraybuffer',
            headers: {
                'content-type': 'multipart/form-data'
            }
        });

        if (resp.status == 200) {
            updateFileStatus(null);
            updateSuccess(true);

            const url = window.URL.createObjectURL(new Blob([resp.data]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute(
                "download",
                `${fileName}.gif`
            );
            document.body.appendChild(link);
            link.click();

            // Clean up and remove the link
            link.parentNode.removeChild(link);
            return;
        }
        // console.log("Error while trying to convert...")
    }
    

    useEffect(() => {
        // console.log("Files", document.getElementById('file').files);
    })

    return (
        <div className=''>
            <NavBar route="gif/" />
            <div className='container max-w-6xl mx-auto' id='application'>
                <div className='grid grid-cols-1'>
                    <div className='mt-2 m-4'>
                        <h1 className='text-2xl font-bold text-white text-center'>
                            Do you use
                            <span className='text-blue-700'> Discord Nitro </span>
                            ?
                        </h1>
                        <h1 className='text-xl font-bold text-blue-700 text-center'>
                            You can try out our 
                            <span className='text-white'> Video To Gif </span>
                            converter and use your favorite clips
                            as a profile picture
                        </h1>
                    </div>
                </div>
                <div className='container max-w-md mx-auto'>
                    <div className="w-full bg-blue-800 rounded-lg shadow-md" >
                            <div className="w-full flex-col justify-center mb-6">
                                <div className="mb-2 mx-2 py-1">
                                    <label className="text-center md:text-left block text-white font-bold lg:text-left mb-1 md:mb-0">
                                        The file size must be below 5MB
                                    </label>
                                </div>
                                { fileStatus !== null ? 
                                    <div className="mb-2 mx-2 flex">
                                        <p className='text-xs font-bold text-white mx-2'>
                                            Converting file, please wait
                                        </p>
                                        <svg role="status" className="mr-2 w-8 h-8 text-sm text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                        </svg>
                                    </div>
                                : null }
                                { success !== null ? 
                                    <div className="mb-2 mx-2 flex">
                                        <p className='text-xs font-bold text-white mx-2'>
                                            Success
                                        </p>
                                        <i className="fa-solid fa-circle-check text-green-600 py-3text-xs"></i>  
                                    </div>
                                : null }
                                { _file == false ? 
                                    <div className="mb-2 mx-2 flex">
                                        <p className='text-xs font-bold text-red-500 mx-2'>
                                            Please choose file ...
                                        </p>
                                        <i className="fa-solid fa-triangle-exclamation text-red-500 py-3text-xs"></i>  
                                    </div>
                                : null }
                                { warning !== null ? 
                                    <div className="mb-2 mx-2 flex">
                                        <p className='text-xs font-bold text-red-500 mx-2'>
                                            { warning }
                                        </p>
                                        <i className="fa-solid fa-triangle-exclamation text-red-500 py-3text-xs"></i>  
                                    </div>
                                : null }
                                <div className="">
                                    <button className='w-full bg-blue-700 p-2 text-white font-bold'>
                                        <input type="file" onChange={fileHandler} className=' bg-[#232a75] file:bg-blue-700 rounded-lg' id='file'/>
                                    </button>
                                    <button onClick={request} className='duration-500 ease-in-out w-full rounded-b-lg hover:bg-blue-900 hover:py-3 bg-blue-800 p-2 text-white font-bold'>
                                        Convert
                                    </button>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            <Footer pos="absolute" />
        </div>
    );
}