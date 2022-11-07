import React from 'react'

import style from '../../styles/Feature.module.css'
import { Box, Text, Button, Flex, HStack, Image, SimpleGrid, Container, chakra, Icon } from '@chakra-ui/react'

const Feature = () => {
  return (
    <Box as="section" bg="gray.50" py="20">
      <Container maxW="container.xl">
        <Text
          as="h2"
          fontSize="4xl"
          fontWeight="bold"
          textAlign="center"
          color="#9400D3"
          mb="10"
        >
          3 Sugestões para que seu perfil seja  mais atrativo para as empresas
        </Text>       
  
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing="14">
          <Box>
            <Image src="https://i.imgur.com/xfZbcok.png" alt="feature-1" />
            <Flex mt="6" align="center">
              <Text className={style.boxFirst}>
                1º
              </Text>
              <Box ml={17} className={style.boxOne}>
                <Box>
                  <Text className={style.boxTextDescription1} >
                    Tenha seus documentos em mãos e cadastre-se com calma, preenchendo todos os campos solicitados. 
                  </Text>
                </Box>
              </Box>
            </Flex>
          </Box>

          <Box>
            <Image src="https://i.imgur.com/xfZbcok.png" alt="feature-1" />
            <Flex mt="6" align="center">
              <Text className={style.boxFirst}>
                2º
              </Text>
              <Box ml={17} className={style.boxOne}>
                <Box>
                  <Text className={style.boxTextDescription1} >
                    Invista tempo para descrever as atividades que reflita as habilidades aprendidas até ali 
                  </Text>
                </Box>
              </Box>
            </Flex>
          </Box>

          <Box>
            <Image src="https://i.imgur.com/xfZbcok.png" alt="feature-1" />
            <Flex mt="6" align="center">
              <Text className={style.boxFirst}>
                3º
              </Text>
              <Box ml={17} className={style.boxThree}>
                <Box>
                  <Text className={style.boxTextDescriptionThree} >
                    Quando for selecionado, apresente quem você é pra que seja encaminhado para vaga que mais se encaixa com seu perfil e propósito.
                  </Text>
                </Box>
              </Box>
            </Flex>
          </Box>
          
          </SimpleGrid>
      </Container>
    </Box>
    

    



  )
}

export default Feature


