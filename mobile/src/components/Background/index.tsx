import { ImageBackground } from 'react-native';

import backgroundImg from '../../assets/backgroundPi.png';

import { styles } from './styles';

interface Props {
    children: React.ReactNode;
}

export function Background({ children }: Props) {
  return (  
    <ImageBackground
        source={backgroundImg}
        defaultSource={backgroundImg}
        style={styles.container}
    >
        {children}
    </ImageBackground>
  );
}