import { View, Text, TouchableOpacity } from 'react-native';
import { Package } from 'phosphor-react-native'
import { DuoInfo } from '../DuoInfo';

import { styles } from './styles';
import { THEME } from '../../theme';

export interface DuoCardProps {
  id: string,
  name: string,
  local: string,

  useVoiceChannel: boolean,
}

interface Props {
  data: DuoCardProps;
  onConnect: () => void;
}

export function DuoCard({ data, onConnect }: Props) {
  return (
    <View style={styles.container}>
      <DuoInfo
        label='Nome'
        value={data.name}
      />
      <DuoInfo
        label='Local'
        value={data.local}
      />
      <DuoInfo
        label='Chamada de áudio'
        value={data.useVoiceChannel ? "Sim" : "Não"}
        colorValue={data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={onConnect}
      >

        <Package
        color={THEME.COLORS.SHAPE}
        size={20}
        />

        <Text style={styles.buttonTitle}>
          Enviar Pedido
        </Text>

      </TouchableOpacity>
    </View>
  );
}