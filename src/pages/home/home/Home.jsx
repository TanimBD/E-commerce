import React, { useContext } from 'react'
import Layout from '../../../components/layout/Layout'
import myContext from '../../../context/data/myContext'

function Home() {
    const context = useContext(myContext);

    const { } = context;
    return (
        <Layout>
            <h1>Name: { }</h1>
            <h1>roll: { }</h1>
            <h3>Game: { }</h3>
        </Layout>
    )
}

export default Home
