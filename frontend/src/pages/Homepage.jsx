import React from 'react';
import ContentComp from '../components/ContentComp';
import FooterComp from '../components/FooterComp';
import HeaderComp from '../components/HeaderComp';
import IncidenceImage from '../assets/incidence.png'
import { useNavigate } from 'react-router-dom'


function Homepage() {
  const navigate = useNavigate();

    // Redirects to Add Incidence Page
    const handleRedirect = () => {
        navigate('/upload')
    }
  return (
    <div className='flex flex-row justify-center mt-20'>
        <div className='border w-[90%] sm:w-[80%] lg:w-[45%] h-auto bg-white shadow-lg'>
            <HeaderComp 
              logo={IncidenceImage} 
              title="Incidence Reports" 
            />
            <ContentComp />
            <FooterComp name='Report Incidence' handleClick={handleRedirect} />
        </div>
    </div>
  )
}

export default Homepage