import React from 'react'

function () {
  return (
    <div>
import React from 'react'
import Footer from '../footer/Footer'
import Navbar from '../navbar/TopNvbar'

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="content">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout

    </div>
  )
}

export default 