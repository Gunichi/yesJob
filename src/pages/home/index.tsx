import { Box } from '@chakra-ui/react'
import React from 'react'

import FaqScreen from '../../components/faq/Faq'

import Features from '../../components/Feature/Feature'

import SmallWithLogoLeft from '../../components/footer/footer'

import Header from '../../components/Header/Header'

import WithSubnavigation from '../../components/Navbar/Navbar'

import style from '../../styles/Index.module.css'

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
      <FaqScreen />

      {/* Footer */ }
      <SmallWithLogoLeft />
    </>
  )
}

export default home