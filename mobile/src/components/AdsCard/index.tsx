import { TouchableOpacity, TouchableOpacityProps, ImageBackground } from 'react-native';

import { styles } from './styles';

export interface AdsCardProps {
    id: string
    title: string,
    _count: {
        ads: number
    }
    bannerUrl: string
}

interface Props extends TouchableOpacityProps {
    data: AdsCardProps,
}

export function AdsCard({data, ...rest}: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
        <ImageBackground
            style={styles.cover}
            source={{uri: data.bannerUrl}}
        >
        </ImageBackground>
    </TouchableOpacity>
  );
}