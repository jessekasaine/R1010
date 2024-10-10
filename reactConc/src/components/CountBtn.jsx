import React, { useEffect, useState } from 'react'

function CountBtn({action}) {

    const [count, setCount] = useState(0);
    const [btnStyle, setBtnStyle] = useState(true);

    //useEffect is used when a condition is needed to cause effect when action changes
    //if you need something to happen when state condition is met
    useEffect(() => {
        count > 9 ? setBtnStyle(false): setBtnStyle(true)

    },[count])

    const handleClick = () => {
        setCount(c=>c+1)
    }
  return (
      <>
          <div className='flex flex-col items-center'>
              <p className='text-xl'>{ count}</p>
              {
                  btnStyle ? <button onClick={handleClick} className='bg-white text-black py-1 px-2 rounded-lg'>CLICK</button> :
                                <button onClick={handleClick} className='bg-red-600 text-white py-1 px-2 rounded-lg'>click</button>
              }
        </div>
      </>
  )
}

export default CountBtn
