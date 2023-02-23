import React, { useState } from 'react';
import { publicRequest } from '../publicRequest';

// Logo Image 
import IncidenceImage from '../assets/incidence.png';

// Components
import HeaderComp from '../components/HeaderComp';
import FormComp from '../components/FormComp';
import FooterComp from '../components/FooterComp';

// Axios
import axios from 'axios';

// Toast Notification
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {useNavigate} from 'react-router-dom';


function AddIncidence() {
  const [city, setCity] = useState("")
  const [country, setCountry] = useState("")
  const [desc, setDesc] = useState("")
  const navigate = useNavigate();


  // Get  Inputs from Form Component
  const cityValue = (city) => {
    setCity(city);
  }
  const countryValue = (country) => {
    setCountry(country);
    
  }
  const descValue = (desc) => {
    setDesc(desc);
  }

  // Reset Inputs
  const resetInputs = () => {
    setCity("");
    setCountry("");
    setDesc("");
  }
  


  // Fetch weather api and submit values to database
  const handleSubmit = async () => {
    try {
      if ( city && country && desc !== "") {
        const weatherData = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${process.env.REACT_APP_LATITUDE}&lon=${process.env.REACT_APP_LONGITUDE}&appid=${process.env.REACT_APP_WEATHER_APIKEY}`);
        await publicRequest.post('/add', {city:city, country:country, desc:desc, weatherData:weatherData.data.main });
        resetInputs();
        toast.success('Report Submitted');

        // Redirect to home page after submiting report
        setTimeout(() => {
          navigate('/home')
        }, 2000)
        
      }
      else {
        toast.error('Please fill forms properly');
      }
      
    } catch (error) {
      console.log(error)
    }
    
  }

  return (
    <>
      <ToastContainer autoClose={1000} />
      <div className='flex flex-row justify-center mt-20'>
          <div className='border w-[90%] sm:w-[80%] md:w-[45%] h-auto bg-white shadow-lg'>
            <HeaderComp 
              logo={IncidenceImage} 
              title="Submit a Report" 
            />
            <FormComp 
              city={city}
              country={country}
              desc={desc}
              cityValue={cityValue} 
              countryValue={countryValue} 
              descValue={descValue} 
            />
            <FooterComp name='Submit Incidence' handleClick={handleSubmit} />
          </div>
      </div>
    </>
  )
}

export default AddIncidence