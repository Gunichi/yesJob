import * as React from 'react';

import { Box, Text, Button, Flex, HStack, Image, SimpleGrid, Container, chakra } from '@chakra-ui/react';

import style from '../../styles/Faq.module.css';

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
            <chakra.h2
              className={style.faqTitle}
            >
              FAQ
            </chakra.h2>
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
            <Button
              w={{
                base: "full",
                sm: "auto",
              }}
              size="lg"
              bg="gray.900"
              _dark={{
                bg: "gray.700",
              }}
              _hover={{
                bg: "gray.700",
                _dark: {
                  bg: "gray.600",
                },
              }}
              color="gray.100"
              as="a"
            >
              Learn More
            </Button>
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