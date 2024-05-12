import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {Userid} = useParams()

    return (
       <div className='text-center p-3 bg-gray-800 rounded-lg text-white'>User: {Userid}</div> 
    )
}

export default User
