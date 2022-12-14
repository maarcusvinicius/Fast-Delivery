import { View, Image } from 'react-native';

import logoImg from '../../../src/assets/logoImg.png'

import { styles } from './styles';

export function Loading() {
  return (
    <View style={styles.container}>
      <Image
        source={logoImg}
        style={styles.logo}
      />
    </View>
  )
}