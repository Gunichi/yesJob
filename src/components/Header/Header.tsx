import React from 'react'

import { Box, Text, Button, Flex, HStack, Image, SimpleGrid, Container, chakra, Icon, Stack, Input } from '@chakra-ui/react'

import style from '../../styles/Header.module.css'
import { FaSearch } from 'react-icons/fa'

const Header = () => {
  return (
    <SimpleGrid
      columns={{
        base: 1,
        md: 2,
      }}
      bgGradient="linear(to-r, #040164, #5FCA0C)"
      spacing={0}
    >
      <Flex bg="brand.400">
        <Image
          src="https://i.imgur.com/jxjebAR.png"
          alt="3 women looking at a laptop"
          fit="cover"
          w="full"
          h={{
            base: 64,
            md: "full",
          }}
          loading="lazy"
        />
      </Flex>
      <Flex
        direction="column"
        alignItems="start"
        justifyContent="center"
        px={{
          base: 4,
          md: 8,
          lg: 20,
        }}
        py={24}
        zIndex={3}
      >
        <chakra.span
          className={style.headerText}
        >
          Seu emprego à um click 
        </chakra.span>
        <chakra.p
          className={style.descriptionText}
        >
          Vagas disponíveis pra você! 
        </chakra.p>
        <Box 
        mt={12}
          rounded="md" 
          shadow="md"
          bg="white"
        >
          <Box ml={21} mt={6}>
            <Text> Eai, qual o próximo passo da sua carreira profissional? </Text>
          </Box>

          <Stack
            direction={{ base: 'column', sm: 'row' }}
            spacing={{ base: 4, sm: 6 }}
            ml={'32px'}
            mt={'30px'}
            mr={'32px'}
            mb={6}
          >
            <Input
              className={style.input}
              placeholder="Digite e procure sua vaga"
              size={'lg'}
              borderRadius={'6px'}
              borderColor={'#670A8E'}
              borderWidth={'3px'}
              focusBorderColor={'#670A8E'}
            />
            <Button
              className={style.button}
              bg={'#9400D3'}
              size={'lg'}
              color={'white'}
              leftIcon={<FaSearch />}
            >
              <Text className={style.buttonText}>
                Buscar Vagas
              </Text>
            </Button>
          </Stack>       
        </Box>
      </Flex>
    </SimpleGrid>
  )
}

export default Header
