import 'react-native-gesture-handler';

import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from "./pages/HomeScreen";
import NotificationsScreen from "./pages/NotificationsScreen";
import {NativeBaseProvider} from "native-base";
import { EvilIcons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <NativeBaseProvider>

            <NavigationContainer>
                <Drawer.Navigator initialRouteName="Home">
                    <Drawer.Screen name="Home" component={HomeScreen}/>
                    <Drawer.Screen name="Notifications" component={NotificationsScreen}/>
                </Drawer.Navigator>
            </NavigationContainer>
        </NativeBaseProvider>
    );
}
