import 'react-native-gesture-handler';

import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from "./pages/HomeScreen";
import NotificationsScreen from "./pages/NotificationsScreen";
import {NativeBaseProvider} from "native-base";
import {EvilIcons} from '@expo/vector-icons';
import TopUpScreen from "./pages/TopUpScreen";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();


export default function App() {
    return (
        <NativeBaseProvider>

            <NavigationContainer>
                <Drawer.Navigator initialRouteName="Home">
                    <Drawer.Screen name="Home" component={HomeScreen}/>
                    <Drawer.Screen name="Notifications" component={NotificationsScreen}/>
                    <Drawer.Screen name="Top Up" component={TopUpScreen}/>
                </Drawer.Navigator>
            </NavigationContainer>
            {/*<NavigationContainer >*/}
            {/*    <Stack.Navigator>*/}
            {/*        <Stack.Screen name="TopUpScreen" component={TopUpScreen}/>*/}

            {/*    </Stack.Navigator>*/}
            {/*</NavigationContainer>*/}
        </NativeBaseProvider>
    );
}
