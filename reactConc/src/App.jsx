import React from 'react'
import CountBtn from './components/CountBtn'
import List from './components/List'
import Userstt from './components/users/Userstt'

const personArray = [
        {
            name: 'John',
            age:67,
            role:'Manager'
        },
        {
            name: 'Ross',
            age:26,
            role:'Emp'
        },
        {
            name: 'Paul',
            age:37,
            role:'Emp'
        }
    ]
function App() {
  return (
    <div>
      <Userstt/>
      {/* <CountBtn action={'click'}/> */}
      {/* <List personArray={ personArray} /> */}
    </div>
  )
}

export default App
