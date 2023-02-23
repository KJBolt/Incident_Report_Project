import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import '../loader.css';


function LoadingPage() {
    const navigate = useNavigate();

    // Redirects to home page after 3 seconds
    useEffect(() => {
        setTimeout(() => {
            navigate('/home')
        }, 3000)
    }, [navigate])

    return (
        <div className='flex flex-row justify-center mt-[250px]'>
            <div>
                <span className="loader"></span>
                <p className='text-2xl font-bold text-white mt-14 text-center'>Your Safety <span className='text-orange-400'>Our Priority</span></p>
            </div>
        </div>
    )
}

export default LoadingPage