import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

import PhoneInput from '../../components/PhoneInput';
import Button from '../../components/Button';

import cabImg from '../../assets/cab.png';
import * as S from './styles';
// import { Text } from 'react-native';

const Home: React.FC = () => {
  const navigation = useNavigation();

  return (
    <S.Container>
      <StatusBar style="light" />
      <S.TopArea>
        {/* <Text>FASTMOVE</Text> */}
        {/* <S.CabImg source={cabImg} resizeMode="contain" /> */}
      </S.TopArea>
      <S.BottomArea>
        <S.Title>
          <S.Title>Welcome to </S.Title>
          <S.TitleBold>FastMove</S.TitleBold>
        </S.Title>
        <PhoneInput placeholder="0300 000 000 0 " />
        <Button onPress={() => navigation.navigate('Verification')}>
          Get Started
        </Button>
      </S.BottomArea>
    </S.Container>
  );
};

export default Home;
