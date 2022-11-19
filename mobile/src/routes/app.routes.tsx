import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { Login } from '../screens/Login';
import { Home } from '../screens/Home';
import { Pedido } from '../screens/Pedido';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            {/* <Screen
                name="login"
                component={Login}
            /> */}

            <Screen
                name="home"
                component={Home}
            />

            <Screen
                name="pedido"
                component={Pedido}
            />
        </Navigator>
    )
}