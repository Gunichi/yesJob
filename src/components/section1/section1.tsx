import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';

import style from '../../styles/Section.module.css';

export default function SplitScreen() {
  return (
    <Stack minH={'76vh'} direction={{ base: 'column', md: 'row' }} className={style.background}>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://i.imgur.com/jxjebAR.png'
          }
        />
      </Flex>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              className={style.headerText}
              as={'span'}
            >
              Seu emprego à um clique
            </Text>
            <br />{' '}
            <Text className={style.descriptionText}>
              Vagas disponíveis pra você! 
            </Text>{' '}
          </Heading>
          <Box bg={'white'} borderRadius={13} height={'190px'}>
            <Text className={style.textBox} mt='21px' ml={'32px'}>   
              Eai, qual o próximo passo da sua carreira profissional?
            </Text>
            <Stack 
              spacing={8}                 
              ml={'32px'}
              mt={'30px'}
              direction='row'
              mr={'32px'}
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
          
        </Stack>
      </Flex>
    </Stack>
  );
}