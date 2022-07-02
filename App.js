import 'react-native-gesture-handler';

import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from "./pages/HomeScreen";
import NotificationsScreen from "./pages/NotificationsScreen";
import {NativeBaseProvider} from "native-base";
import {EvilIcons} from '@expo/vector-icons';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function Root() {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeScreen}/>
            <Drawer.Screen name="Notifications" component={NotificationsScreen}/>
        </Drawer.Navigator>
    );
}


export default function App() {
    return (
        <NativeBaseProvider>

            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Root"
                        component={Root}
                        options={{headerShown: false}}
                    />
                    {/*<Stack.Screen name="Feed" component={Settings}/>*/}
                </Stack.Navigator>
            </NavigationContainer>
        </NativeBaseProvider>
    );
}
