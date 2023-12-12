import React from 'react'
import MyContext from './myContext';

function MyState(props) {
    const state = {
        name: "sabbir",
        roll: 15
    }
    return (
        <MyContext.Provider value={state}>
            {props.children}
        </MyContext.Provider>
    )
}

export default MyState