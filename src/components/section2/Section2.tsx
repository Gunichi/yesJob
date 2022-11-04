import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';

import style from '../../styles/Section2.module.css';

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
};

export default function SimpleThreeColumns() {
  return (
    <Box p={4}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} justifyContent='center'>
        <Stack spacing={8} direction='row'>
          <Text className={style.boxNumber}> 1 </Text>
          <Box className={style.box}>
            <Text className={style.boxTextDescription1}>Tenha seus documentos em mãos e cadastre-se com calma, preenchendo todos os campos solicitados. </Text>
          </Box>
        </Stack>

        <Stack spacing={8} direction='row'>
          <Text className={style.boxNumber}> 2 </Text>
          <Box className={style.box}>
            <Text className={style.boxTextDescription2}>Invista tempo para descrever as atividades que reflita as habilidades aprendidas até ali </Text>
          </Box>
        </Stack>

        <Stack spacing={8} direction='row'>
          <Text className={style.boxNumber}> 3 </Text>
          <Box className={style.box3}>
            <Text className={style.boxTextDescription3}>Quando for selecionado, apresente quem você é pra que seja encaminhado para vaga que mais se encaixa com seu perfil e propósito.</Text>
          </Box>
        </Stack>


      
      </SimpleGrid>
    </Box>
  );
}