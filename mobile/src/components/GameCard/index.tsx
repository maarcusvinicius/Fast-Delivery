import { TouchableOpacity, TouchableOpacityProps, ImageBackground } from 'react-native';

import { styles } from './styles';

export interface GameCardProps {
    id: string
    title: string
    _count: {
        ads: number
    }
    bannerUrl: string
}

interface Props extends TouchableOpacityProps {
    data: GameCardProps,
}

export function GameCard({data, ...rest }: Props) {
  return (
    <TouchableOpacity style={[styles.container]} {...rest}>
        <ImageBackground
            style={styles.cover}
            source={{uri: data.bannerUrl}}
        >
        </ImageBackground>
    </TouchableOpacity>
  );
}