import React, { useState, useEffect } from 'react';
import { View, Text, Image, ImageBackground, StyleSheet } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import RNPickerSelect from 'react-native-picker-select';
import axios from 'axios';

interface IBGEUFResponse {
  sigla: string
}

interface IBGECityResponse {
  nome: string
}

interface Items {
  label: string,
  value: string
}

const Home = () => {
  const [ufs, setUfs] = useState<Items[]>([]);
  const [cities, setCities] = useState<Items[]>([]);

  const [selectedUf, setSelectedUf] = useState('0');
  const [selectedCity, setSelectedCity] = useState('0');

  const navigation = useNavigation();

  const placheholderUf = {
    label: 'Seu Estado...',
    value: null
  }
  const placeholderCity = {
    label: 'Sua Cidade...',
    value: null
  }

  useEffect(() => {
    axios.get<IBGEUFResponse[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then(res => {
      setUfs(res.data.map(uf => ({
        label: uf.sigla,
        value: uf.sigla
      })));
    })
  },[])

  useEffect(() => {
    axios.get<IBGECityResponse[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`).then(res => {
      setCities(res.data.map(city => ({
        label: city.nome,
        value: city.nome
      })));
    })
  }, [selectedUf]);

  function handleNavigationToPoints(uf: string, city: string) {
    navigation.navigate('Points', {uf: selectedUf, city: selectedCity});
  }

  return (
    <ImageBackground
      source={require('../../assets/home-background.png')}
      style={styles.container}
      imageStyle={{width: 274, height: 368}}
    >
      <View style={styles.main}>
        <Image source={require('../../assets/logo.png')} />
        <Text style={styles.title}>Seu Marketplace de coleta de resíduos</Text>
        <Text style={styles.description}>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente</Text>
      </View>

      <View style={styles.footer}>
        <RNPickerSelect
          placeholder={placheholderUf}
          onValueChange={value => setSelectedUf(value)}
          value={selectedUf}
          style={{
            viewContainer: {
              height: 60,
              backgroundColor: '#fff',

              justifyContent: 'center',
              borderRadius: 20,
              paddingHorizontal: 20,
              marginVertical: 8,
            },
          }}
          items={ufs}
          />

        <RNPickerSelect
          placeholder={placeholderCity}
          onValueChange={value => setSelectedCity(value)}
          value={selectedCity}
          style={{
            viewContainer: {
              height: 60,
              backgroundColor: '#fff',

              justifyContent: 'center',
              borderRadius: 20,
              paddingHorizontal: 20,
              marginVertical: 8
            }
          }}
          items={cities}
        />

        <RectButton style={styles.button} onPress={() => handleNavigationToPoints(selectedUf, selectedCity)}>
          <View style={styles.buttonIcon}>
            <Icon name="arrow-right" size={24} color="#fff" />
          </View>
          <Text style={styles.buttonText}>Entrar</Text>
        </RectButton>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
  },

  main: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    color: '#322153',
    fontSize: 32,
    fontFamily: 'Ubuntu_700Bold',
    maxWidth: 260,
    marginTop: 64,
  },

  description: {
    color: '#6C6C80',
    fontSize: 16,
    marginTop: 16,
    fontFamily: 'Roboto_400Regular',
    maxWidth: 260,
    lineHeight: 24,
  },

  footer: {},

  button: {
    backgroundColor: '#34CB79',
    height: 60,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 16,
  },

  buttonIcon: {
    height: 60,
    width: 60,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
  }
});

export default Home;
