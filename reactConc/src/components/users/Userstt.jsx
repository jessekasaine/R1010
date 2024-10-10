import React, { useEffect, useState } from 'react'

function Userstt() {

    const [userList, setUserList] = useState([]);
    const [fetchingData, setFetchingData] = useState(false);

    // useEffect(() => {
    //     fetchAllUsers()
    // }, [])
    
    async function fetchAllUsers() {
        try {
            setFetchingData(true)

            const apiResponse = await fetch('https://dummyjson.com/users')
            const result = await apiResponse.json();
            
            if (result?.users) {
                setUserList(result?.users)
                setFetchingData(false)
            } else {
                setUserList([])
                setFetchingData(false)
            }
            
        } catch (error) {
            console.log(error);   
        }
    }
console.log(userList);
    const nameList = userList.map((person, index) => {
        return <li key={index}>{ person?.firstName} { person?.lastName}</li>
    })
    
    if (fetchingData)
        return (
            <h1>Fetching...</h1>
    );
  return (
      <div className='flex flex-col items-center'>
          <h1 className='text-3xl'>User List</h1>
          <button onClick={fetchAllUsers} className='bg-white text-black py-1 px-2 rounded-lg'>Fetch Data</button>
          {
              userList > 0 ? <ul className='list-decimal'><p>No Users Present</p></ul> :
                            <ul className='list-decimal'>{nameList}</ul>
          }
          
    </div>
  )
}

export default Userstt
