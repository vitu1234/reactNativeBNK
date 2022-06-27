import * as React from 'react';
import {Card, Text, Box, VStack, Center} from "native-base";
import {MaterialIcons} from '@expo/vector-icons';
import {View, StyleSheet} from "react-native";


const PaymentsCard = () => {
    return (
        <Center>
            <Card style={styles.roundedStyle}>
                <VStack space={1} justifyContent="center" p='2'>
                    <MaterialIcons name="payment" size={24} color="black"/>
                    <Text>Payments</Text>
                </VStack>
            </Card>

        </Center>
    );
};

const styles = StyleSheet.create({
    roundedStyle: {
        shadowColor: 'rgba(0,0,0,0.34)',
        shadowOffset: {width: 0, height: 1}
    }
})

export default PaymentsCard;

