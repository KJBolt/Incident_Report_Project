import React, {useState, useEffect} from 'react';
import { publicRequest } from '../publicRequest';
import moment from 'moment';

function ContentComp() {
    const [reports, setReports] = useState([])

    // Fetch Reports on load
    useEffect(() => {
        const fetchReports = async() => {
            try {
                const res = await publicRequest.get('/incidents');
                setReports(res.data) 


            } catch (error) {
               console.log(error) 
            } 
        }
        fetchReports();
    }, [])

    return (
    <div className='h-[325px] overflow-auto'>
        {reports.map((report) => (
            <div className='border-b-2 h-auto py-2 px-10' key={report.client_id}>
                <div className='flex flex-row items-center justify-between'>
                    <div className='border-l-4 border-green-600 py-2 pl-4'>
                        <p className='text-md mb-1'>{report.incident_desc}</p>

                        <div className='flex flex-row items-center'>
                            <p className='text-gray-400 text-xs mr-5'>{moment(report.date).fromNow()}</p>
                            <p className='text-gray-400 text-xs mr-5'>{report.city}</p>
                        </div>
                    </div>
                    <div className='border rounded-xl py-1 px-2 bg-green-600'>
                        <p className='text-white text-xs'>Submitted</p>
                    </div>
                </div>
            </div>
        ))}
    </div>
    )
}

export default ContentComp