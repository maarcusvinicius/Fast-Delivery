import { useEffect, useState } from 'react';
import { View, Image, TouchableOpacity, FlatList, Text } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo } from '@expo/vector-icons'

import logoImg from '../../assets/logoImg.png';

import { THEME } from '../../theme';
import { styles } from './styles';

import { Heading } from '../../components/Heading';
import { AdsParams } from '../../@types/navigation';
import { Background } from '../../components/Background';
import { DuoCard, DuoCardProps } from '../../components/DuoCard';
import { DuoMatch } from '../../components/DuoMatch';


export function Pedido() {

  const [duos, setDuos] = useState<DuoCardProps[]>([])
  const [usernDuoSelected, setUsernDuoSelected] = useState('')

  const route = useRoute();
  const navigation = useNavigation();
  const pedido = route.params as AdsParams;


  function handleGoBack() {
    navigation.goBack()
  }

  async function getAdsUser(adsId: string) {
    fetch(`http://192.168.0.12:3333/ads/${adsId}/usern`)
      .then(response => response.json())
      .then(data => {
        setUsernDuoSelected(data.usern)
      });
  }

  useEffect(() => {
    fetch(`http://192.168.0.12:3333/pedidos/${pedido.id}/ads`)
      .then(response => response.json())
      .then(data => setDuos(data));
  }, [])

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo
              name='chevron-thin-left'
              color={THEME.COLORS.SHAPE}
              size={20}
            />
          </TouchableOpacity>

          <Image
            source={logoImg}
            style={styles.logo}
          />
          <View style={styles.rigth} />
        </View>

        <Image
          source={{ uri: pedido.bannerUrl }}
          style={styles.cover}
          resizeMode="cover"
        />

        <Heading
          title={pedido.title}
          subtitle='Selecione qual deseja analisar!'
        />

        <FlatList
          data={duos}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <DuoCard
              data={duos[0]}
              onConnect={() => getAdsUser(item.id)}
            />
          )}
          horizontal
          style={styles.containerList}
          contentContainerStyle={[duos.length > 0 ? styles.contentList : styles.emptyListContent]}
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={() => (
            <Text style={styles.emptyListTest}>
              Não há pedidos publicados ainda.
            </Text>
          )}
        />

        <DuoMatch
          visible={usernDuoSelected.length > 0}
          usern={usernDuoSelected}
          onClose={() => setUsernDuoSelected('')}
        />
      </SafeAreaView>
    </Background>
  );
}