import React, { useState } from 'react'

const UserState = () => {
    const [count,setCount]=useState(0)
  return (
    <div className='bg-white w-60 h-65 shadow justify-center items-center flex flex-col mt-0 rounded-2xl'> 
    <div className='border-2 border-blue-400 w-55 h-45 rounded-2xl font-bold'>
      {count}
    </div>

      <button className='bg-blue-500 w-50 h-10 rounded-2xl text-white font-bold mt-5'  onClick={()=>setCount(count+1)}>Increase Value</button>
    
    </div>
  )
}

export default UserState
