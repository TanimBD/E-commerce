import React, { createContext } from 'react'

function etu() {
  return (
    <div>
import React from 'react'
import MyContext from './myContext';

function MyState(props) {
    const state = {
        name: "C223080",
        class: "3BM"
    }
  return (
    <MyContext.Provider value={state}>
       {props.children}
    </MyContext.Provider>
  )
}

export default MyState
    </div>
  )
}

export default etu