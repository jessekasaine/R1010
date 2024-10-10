import React, { useEffect, useState } from 'react'

function List({ personArray }) {
    const [listType, setListType] = useState(false);

    //onPageLoad effect
    useEffect(() => {
        setListType(!listType)
    }, [])
    
    const handleClick = () => {
        console.log("render");
        setListType(!listType)
    }

    const nameList = personArray.map((person, index) => {
        return <li key={index}>{person.name}</li>
    })
    const ageList = personArray.map((person, index) => {
        return <li key={index}>{person.age}</li>
    })
  return (
      <div className='flex flex-col items-center'>
          <button onClick={handleClick} className='bg-white text-black py-1 px-2 rounded-full mb-2'>Toggle</button>
          {listType? <ul>{ nameList}</ul> : <ul>{ ageList}</ul>}
    </div>
  )
}

export default List
