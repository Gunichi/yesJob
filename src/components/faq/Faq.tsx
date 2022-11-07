import * as React from 'react';

import { Box, Text, Button, Flex, HStack, Image, SimpleGrid, Container, chakra, InputGroup, InputLeftElement, InputRightElement, Input, Accordion, AccordionItem, AccordionPanel, AccordionButton, AccordionIcon } from '@chakra-ui/react';

import style from '../../styles/Faq.module.css';
import { FaSearch } from 'react-icons/fa';
import { ArrowForwardIcon } from '@chakra-ui/icons';

const FaqScreen = () => {
  return (
    <Flex
      bg=""
      p={20}
      w="full"
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
              color='#FFF'
              placeholder='Como recuperar meu acesso?' 
              borderRadius={19}
              backgroundColor={'#D7D5D5'}
            />
            <InputRightElement children={<ArrowForwardIcon color='#670A8E' />} />
          </InputGroup>
          <Box bg='#EEEDED' borderRadius={8} mt={10} > 
            <Accordion allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <FaSearch color='#757382' />
                    <Box ml={7} flex='1' textAlign='left'>
                      Como cadastrar meu currículo gratuitamente?
                    </Box>
                    <AccordionIcon color={'#670A8E'} />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <FaSearch color='#757382' />
                    <Box ml={7} flex='1' textAlign='left'>
                      Como criar alerta das vagas que procura?
                    </Box>
                    <AccordionIcon color={'#670A8E'} />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <FaSearch color='#757382' />
                    <Box ml={7} flex='1' textAlign='left'>
                      Dicas para deixar meu currículo mais atrativo?
                    </Box>
                    <AccordionIcon color={'#670A8E'} />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <FaSearch color='#757382' />
                    <Box ml={7} flex='1' textAlign='left'>
                      Como completar meu currículo totalmente?
                    </Box>
                    <AccordionIcon color={'#670A8E'} />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <FaSearch color='#757382' />
                    <Box ml={7} flex='1' textAlign='left'>
                      Como atualizar meu currículo?                    
                    </Box>
                    <AccordionIcon color={'#670A8E'} />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                </AccordionPanel>
              </AccordionItem>
              

            </Accordion>

            </Box>
          </Box>
          <Box 
            borderRadius={8}

          >
            <Image
              src="https://i.imgur.com/hVq7YgI.png"
              alt="Faq"
              w={{ base: "full", md: "lg" }}
            />
        </Box>
      </SimpleGrid>
    </Flex>
  );
};

export default FaqScreen;