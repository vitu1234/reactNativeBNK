import * as React from 'react';
import CreditCard from "../components/CreditCard";
import {Center, Divider, HStack, ScrollView, VStack} from "native-base";
import {View, StyleSheet} from "react-native";
import center from "native-base/src/theme/components/center";
import LeftRightElementCard from "../components/LeftRightElementCard";
import TransfersCard from "../components/TransfersCard";
import PaymentsCard from "../components/PaymentsCard";
import TopUpCard from "../components/TopUpCard";
import {Dimensions} from 'react-native';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function HomeScreen({navigation}) {
    return (
        <View style={s.container}>
            {/*<Button*/}
            {/*    onPress={() => navigation.navigate('Notifications')}*/}
            {/*    title="Go to notifications"*/}
            {/*/>*/}


            <ScrollView h={windowHeight} _contentContainerStyle={{}}>
                <Center>
                    <VStack m={2}>
                        <LeftRightElementCard style={s.greetings} name={'Hello Vitu'} action={'f'}
                                              actionText={' Add Card'}/>
                        <CreditCard style={s.creditCard} name={'Vitumbiko Mafeni'} date={'20/25'} suffix={'2355'}/>

                    </VStack>
                    <HStack style={s.stackCards} p={1} marginTop={1}>
                        <TransfersCard/>
                        <PaymentsCard/>
                        <TopUpCard/>
                    </HStack>
                    <Divider my="2"/>
                    <VStack style={{width: '100%'}} m={2}>
                        <LeftRightElementCard style={s.greetings} name={'My Savings'} action={'d'}
                                              actionText={'See All'}/>

                    </VStack>
                </Center>
            </ScrollView>

        </View>

    );
}

const s = StyleSheet.create({
    container: {
        marginTop: 5,
        padding: 16,
        // alignItems: 'center', flex: 1,
        width: windowWidth,
        backgroundColor: '#fff'
    },
    greetings: {
        // backgroundColor: 'blue'

    },
    creditCard: {
        marginHorizontal: 20
    },
    stackCards: {
        // backgroundColor: 'red',
        // paddingStart:20,
        // paddingEnd:20,
        margin: 10,
        width: '100%'

    }
});
