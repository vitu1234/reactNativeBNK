import * as React from 'react';
import {Card, Text, Box, VStack, Center} from "native-base";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {View, StyleSheet} from "react-native";


const TransfersCard = () => {
    return (
        <Center>
            <Card style={styles.cardStyle}>
                <VStack space={1} justifyContent="center" p='2'>
                    <MaterialCommunityIcons name="transition-masked" size={24} color="black"/>
                    <Text>Transfers</Text>
                </VStack>
            </Card>

        </Center>
    );
};

const styles = StyleSheet.create({
    cardStyle: {
        shadowColor: 'rgba(0,0,0,0.34)',
        shadowOffset: {width: 0, height: 1}

    }
})

export default TransfersCard;

