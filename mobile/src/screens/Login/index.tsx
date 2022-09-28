import * as AuthSession from 'expo-auth-session';

import { Text, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GameController } from 'phosphor-react-native';
import { useNavigation } from '@react-navigation/native'


import { styles } from './styles';
import { THEME } from '../../theme';

import logoImg from '../../assets/logoImg.gif';

import { Heading } from '../../components/Heading';
import { Background } from '../../components/Background';


export function Login() {
    const navigation = useNavigation();

    function handleOpenHome() {
        navigation.navigate('home')
    }

    async function handleDiscordSignIn() {

        const response = await AuthSession.startAsync({
            authUrl: "https://discord.com/api/oauth2/authorize?client_id=1024737409105150103&redirect_uri=https%3A%2F%2Fauth.expo.io%2F%40maarcusvinicius%2Fmobile&response_type=token&scope=identify"
        });

        fetch('https://discord.com/api/users/@me', {
            headers: {
                'authorization': `Bearer ${response.params.access_token}`
            }
        })
            .then(response => response.json())
            .then(data => console.log(data))
            handleOpenHome()

    }

    return (

        <Background>
            <SafeAreaView style={styles.container}>
                <Image
                    source={logoImg}
                    style={styles.logo}
                />

                <Heading
                    title='Encontre seu duo!'
                    subtitle='Selecione o game que deseja jogar...'
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={handleDiscordSignIn}
                >
                    <GameController
                        color={THEME.COLORS.TEXT}
                        size={20}
                    />

                    <Text style={styles.buttonTitle}>
                        Entrar com Discord
                    </Text>
                </TouchableOpacity>
            </SafeAreaView>
        </Background>
    );
}