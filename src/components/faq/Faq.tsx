import * as React from 'react';

import { Box, Text, Button, Flex, HStack, Image, SimpleGrid, Container, chakra, InputGroup, InputLeftElement, InputRightElement, Input } from '@chakra-ui/react';

import style from '../../styles/Faq.module.css';
import { FaSearch } from 'react-icons/fa';
import { ArrowForwardIcon } from '@chakra-ui/icons';

const FaqScreen = () => {
  return (
    <Flex
      bg=""
      p={20}
      w="full"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        bg="white"
        px={8}
        py={20}
        mx="auto"
      >
        <SimpleGrid
          alignItems="start"
          columns={{
            base: 1,
            md: 2,
          }}
          mb={24}
          spacingY={{
            base: 10,
            md: 32,
          }}
          spacingX={{
            base: 10,
            md: 24,
          }}
        >
          <Box>
            <chakra.h1
              className={style.faqTitle}
            >
              FAQ
            </chakra.h1>
            <chakra.p
              mb={5}
              textAlign={{
                base: "center",
                sm: "left",
              }}
              color="gray.600"
              _dark={{
                color: "gray.400",
              }}
              fontSize={{
                md: "lg",
              }}
            >
              Dúvidas frequentes sobre o yesJob 
            </chakra.p>
            <InputGroup>
              <InputLeftElement
                pointerEvents='none'
                color='#FFF'
                fontSize='1.2em'
                children={<FaSearch />}
              />
              <Input 
                textAlign='center'
                color='#403C55'
                placeholder='Como recuperar meu acesso?' 
                borderRadius={19}
                backgroundColor={'#D7D5D5'}

              />
              <InputRightElement children={<ArrowForwardIcon color='#670A8E' />} />
            </InputGroup>
            <Box bg='#EEEDED' borderRadius={16} > 
            <Flex mt="6" align="center">
              <FaSearch />
              <Text ml='10'> Como cadastrar meu currículo gratuitamente?</Text> <ArrowForwardIcon ml='10' color='#670A8E' />
            </Flex>


            </Box>
          </Box>
          
            <Image
              src="https://i.imgur.com/hVq7YgI.png"
              alt="Faq"
              w={{ base: "full", md: "lg" }}
            />
        </SimpleGrid>
      </Box>
    </Flex>
  );
};

export default FaqScreen;