import React from 'react'
import { Box, Text, Button, Flex, HStack, Image, SimpleGrid, Container } from '@chakra-ui/react'

import SmallWithLogoLeft from '../../components/Footer/Footer'

import Faq from '../../components/Faq/Faq'
import Features from '../../components/Feature/Feature'
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
      <Faq />

      {/* Footer */ }
      <SmallWithLogoLeft />

    </>
  )
}

export default home