import React from 'react'
import { Box, Text, Button, Flex, HStack, Image, SimpleGrid, Container } from '@chakra-ui/react'

import SimpleThreeColumns from '../../components/section2/Section2'
import SplitScreen from '../../components/section1/section1'
import SplitWithImage from '../../components/faq/Faq'
import SmallWithLogoLeft from '../../components/footer/footer'

const home = () => {

  return (
    <>
    <SplitScreen />
    {/*Suggestions */ }
    <SimpleThreeColumns />
    {/* Faq */}
    <SplitWithImage />
    {/* Footer */}
    <SmallWithLogoLeft />
    </>
  )
}

export default home