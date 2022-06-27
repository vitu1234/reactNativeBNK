import 'react-native-gesture-handler';

import React from "react";
import {
    Text,
    Link,
    HStack,
    Center,
    Heading,
    Switch,
    useColorMode,
    NativeBaseProvider,
    extendTheme,
    VStack,
    Icon,
    Box, View,
} from "native-base";
import NativeBaseIcon from "./components/NativeBaseIcon";
import {Platform} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {
    createDrawerNavigator,
    DrawerContentScrollView,
} from "@react-navigation/drawer";
import {MaterialCommunityIcons} from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

// Define the config
const config = {
    useSystemColorMode: false,
    initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({config});

export default function App() {
    return (
        <NativeBaseProvider>
            <View
                _dark={{bg: "blueGray.900"}}
                _light={{bg: "blueGray.50"}}
                px={4}
                flex={1}
            >

                <ToggleDarkMode/>

            </View>
        </NativeBaseProvider>
    );
}

// Color Switch Component
function ToggleDarkMode() {
    const {colorMode, toggleColorMode} = useColorMode();
    return (
        <HStack space={2} alignItems="center">
            <Text>Dark</Text>
            <Switch
                isChecked={colorMode === "light"}
                onToggle={toggleColorMode}
                aria-label={
                    colorMode === "light" ? "switch to dark mode" : "switch to light mode"
                }
            />
            <Text>Light</Text>
        </HStack>
    );
}
