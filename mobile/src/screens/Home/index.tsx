import { useEffect, useState } from 'react';
import { Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native'

import { styles } from './styles';

import { Heading } from '../../components/Heading';
import { Background } from '../../components/Background';
import { AdsCard, AdsCardProps } from '../../components/AdsCard';

import logoImg from '../../assets/logoImg.png';

export function Home() {
  const [pedidos, setPedidos] = useState<AdsCardProps[]>();
  const navigation = useNavigation();

  useEffect(() => {
    fetch('http://192.168.0.12:3333/pedidos')
      .then(response => response.json())
      .then(data => setPedidos(data))
  }, [])

  function handleOpenPedido({ id, title, bannerUrl }: AdsCardProps) {
    navigation.navigate('pedido', { id, title, bannerUrl })
  }

  return (

    <Background>
      <SafeAreaView style={styles.container}>
        <Image
          source={logoImg}
          style={styles.logo}
        />

        <Heading
          title='Seu prato está aqui!'
          subtitle='Selecione qual deseja analisar!'
        />

        <FlatList
          data={pedidos}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <AdsCard
              data={item}
              onPress={() => handleOpenPedido(item)}
            />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentList}
        />
      </SafeAreaView>
    </Background>
  );
}