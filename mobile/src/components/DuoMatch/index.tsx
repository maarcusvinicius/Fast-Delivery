import { useState } from 'react';
import { View, Modal, ModalProps, Text, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
import { CheckCircle } from 'phosphor-react-native'
import * as Clipboard from 'expo-clipboard'

import { Heading } from '../Heading';

import { styles } from './styles';
import { THEME } from '../../theme';

interface Props extends ModalProps {
    usern: string,
    onClose: () => void;
}

export function DuoMatch({ usern, onClose, ...rest }: Props) {

    const [isCopping, setIsCopping] = useState(false)

    async function handleCopyUsernToClipboard() {
        setIsCopping(true);
        await Clipboard.setStringAsync(usern)

        Alert.alert('Pedido enviado!', 'Usuário será notificado agora mesmo!')
        setIsCopping(false)
    }

    return (
        <Modal
            animationType='fade'
            transparent
            statusBarTranslucent
            {...rest}
        >
            <View style={styles.container}>
                <View style={styles.content}>
                    <TouchableOpacity
                        style={styles.closeIcon}
                        onPress={onClose}
                    >
                        <MaterialIcons
                            name="close"
                            size={20}
                            color={THEME.COLORS.PRIMARY}
                        />
                    </TouchableOpacity>

                    <CheckCircle
                        size={64}
                        color={THEME.COLORS.SUCCESS}
                        weight='bold'
                    />

                    <Heading
                        title="Let's go!"
                        subtitle='Agora só avisar ao cliente!'
                        style={{ alignItems: 'center', marginTop: 24 }}
                    />

                    <Text style={styles.label}>
                        Pedido saiu para entrega?
                    </Text>

                    <TouchableOpacity
                        style={styles.discordButton}
                        onPress={handleCopyUsernToClipboard}
                        disabled={isCopping}
                    >

                        <Text style={styles.discord}>
                            {isCopping ? <ActivityIndicator color={THEME.COLORS.PRIMARY} /> : usern}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}