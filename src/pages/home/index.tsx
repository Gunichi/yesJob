import React from 'react'

import Features from '../../components/Feature/Feature'
import SmallWithLogoLeft from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import WithSubnavigation from '../../components/Navbar/Navbar'

const home = () => {

  return (
    <>
      {/* Navbar */}
      <WithSubnavigation />
      {/* Header */}
      <Header />

      {/*Feature Section*/}
      <Features />

      {/* FAQ */ }
      

      {/* Footer */ }
      <SmallWithLogoLeft />

    </>
  )
}

export default home