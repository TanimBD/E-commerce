import React from 'react'

function () {
  return (
    <div>
import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext'

function Home() {
  const context = useContext(myContext)
  console.log(context) // {name: 'C223080', class: '3BM'}
  
  const {name} = context
  console.log(name) 
  return (
    <Layout>
      <h1>Name : {name}</h1>
    </Layout>
  )
}

export default Home

    </div>
  )
}

export default 