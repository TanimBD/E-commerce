import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext'

function Order() {
    const context = useContext(myContext);
    const { name, roll } = context;
    return (
        <div>
            <Layout>
                <h1>Name: {name}</h1>
                <h1>Roll: {roll}</h1>
            </Layout>
        </div>
    )
}

export default Order
