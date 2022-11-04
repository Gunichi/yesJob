import React from 'react'

import { Box, Text, Button, Flex, HStack, Image, SimpleGrid, Container, chakra, Icon } from '@chakra-ui/react'

const Features = () => {
    return (
      <Flex
        bg="#FFF"
        p={20}
        w="auto"
        justifyContent="center"
        alignItems="center"
      >
        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 3,
          }}
          spacing={20}
          px={{
            base: 4,
            lg: 16,
            xl: 24,
          }}
          py={20}
          mx="auto"
          bg="white"
        >
        

      </SimpleGrid>
    </Flex>
  );
};


export default Features


