import React from 'react'
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const navigate = useNavigate();
    return (
        <div className='w-full h-full flex justify-center items-center'>
            <h1 className='text-4xl cursor-pointer' onClick={()=> navigate('/feed')}>Start the Application - Click here!</h1>
        </div>
    )
}

export default Home