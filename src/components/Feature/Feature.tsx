import React from 'react'

import style from '../../styles/Feature.module.css'
import { Box, Text, Button, Flex, HStack, Image, SimpleGrid, Container, chakra, Icon } from '@chakra-ui/react'

const Feature = () => {
  return (
    <Box as="section" py="10">
      <Container maxW="container.xl">
        <Text
          fontSize={{ base: '30px', md: '35px', lg: '40px' }}
          className={style.featureTitle}
        >
          3 Sugestões para que seu perfil seja  mais atrativo para as empresas
          <br />
        </Text>   
        <Text 
          className={style.featureSubtitle}
          fontSize={{ base: '20px', md: '20px', lg: '24px' }}
        >
          e <b>aumentar</b> suas possibilidades de <b>contratação</b>
        </Text>     
  
        <SimpleGrid mt={20} columns={[1, null, 3]} spacing="14">
          <Box w={[300, 400, 500]} justifyContent={'center'} alignContent="center">
            <Image src="https://i.imgur.com/xfZbcok.png" alt="feature-1" />
            <Flex mt="6" >
              <Text className={style.boxFirst} display='inline'>
                1º
              </Text>
              <Box ml={17} height="auto" className={style.boxOne}>
                <Box>
                  <Text className={style.boxTextDescription1} >
                    Tenha seus documentos em mãos e cadastre-se com calma, preenchendo todos os campos solicitados. 
                  </Text>
                </Box>
              </Box>
            </Flex>
          </Box>

          <Box w={[300, 400, 500]} justifyContent={'center'} alignContent="center">
            <Image src="https://i.imgur.com/xfZbcok.png" alt="feature-1" />
            <Flex mt="6" align="center">
              <Text className={style.boxFirst}>
                2º
              </Text>
              <Box ml={17} height="auto" width='auto' className={style.boxOne}>
                <Box>
                  <Text className={style.boxTextDescription1} >
                    Invista tempo para descrever as atividades que reflita as habilidades aprendidas até ali 
                  </Text>
                </Box>
              </Box>
            </Flex>
          </Box>

          <Box w={[300, 400, 500]} justifyContent={'center'} alignContent="center">
            <Image src="https://i.imgur.com/xfZbcok.png" alt="feature-1" />
            <Flex mt="6" align="center">
              <Text className={style.boxFirst}>
                3º
              </Text>
              <Box ml={17} height="auto" className={style.boxOne}>
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


