import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setdata] = useState([])
    useEffect(()=>{
        fetch('https://github.com/AqsaNaqvi')
        .then(Response => Response.json())
        .then (data => {
            console.log(data);
        })
    },[])





    return (
       <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
        GitHub followers:
       </div> 
    )
}

export default Github
