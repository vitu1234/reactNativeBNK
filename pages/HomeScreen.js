import * as React from 'react';
import CreditCard from "../components/CreditCard";
import {Card, Center, Divider, HStack, ScrollView, VStack} from "native-base";
import {View, StyleSheet} from "react-native";
import center from "native-base/src/theme/components/center";
import LeftRightElementCard from "../components/LeftRightElementCard";
import TransfersCard from "../components/TransfersCard";
import PaymentsCard from "../components/PaymentsCard";
import TopUpCard from "../components/TopUpCard";
import {Dimensions} from 'react-native';
import MySavingsCard from "../components/MySavingsCard";
import TransactionCards from "../components/TransactionCards";
import TopUpScreen from "../pages/TopUpScreen";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const {width} = Dimensions.get('window');


export default function HomeScreen({navigation}) {
    return (
        <View style={s.container}>
            {/*<Button*/}
            {/*    onPress={() => navigation.navigate('Notifications')}*/}
            {/*    title="Go to notifications"*/}
            {/*/>*/}


            <ScrollView showsVerticalScrollIndicator={false} h={windowHeight - 80} _contentContainerStyle={{}}>
                <Center>
                    <VStack m={1}>
                        <LeftRightElementCard style={s.greetings} name={'Hello Vitu'} action={'f'}
                                              actionText={' Add Card'}/>
                        <CreditCard style={s.creditCard} name={'Vitumbiko Mafeni'} date={'20/25'} suffix={'2355'}/>

                    </VStack>
                    <HStack style={s.stackCards} p={1} marginTop={1}>
                        <TransfersCard/>
                        <PaymentsCard/>
                        <TopUpCard onPress={() =>
                            navigation.navigate('TopUpScreen')
                        }/>
                    </HStack>
                    <Divider my="2"/>
                    <VStack style={{width: '100%'}} m={2}>
                        <LeftRightElementCard style={s.greetings} name={'My Savings'} action={'d'}
                                              actionText={'See All'}/>

                        <ScrollView
                            ref={(scrollView) => {
                                scrollView = scrollView;
                            }}
                            // style={s.container}
                            //pagingEnabled={true}
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            decelerationRate={0}
                            snapToInterval={width - 60}
                            snapToAlignment={"center"}
                            contentInset={{
                                top: 0,
                                left: 30,
                                bottom: 0,
                                right: 30,
                            }}>
                            <MySavingsCard data={{item: 'Laptop', amount_saved: '2000', target_amount: '3000'}}/>
                            <MySavingsCard data={{item: 'Car', amount_saved: '1500000', target_amount: '5000000'}}/>
                            <MySavingsCard data={{item: 'Phone', amount_saved: '50000', target_amount: '200000'}}/>
                            <MySavingsCard data={{item: 'Groceries', amount_saved: '2000', target_amount: '23000'}}/>


                        </ScrollView>

                        <LeftRightElementCard mt={3} style={s.greetings} name={'Recent Transactions'} action={'d'}
                                              actionText={'See All'}/>
                        <ScrollView
                            ref={(scrollView) => {
                                scrollView = scrollView;
                            }}
                            // style={s.container}
                            //pagingEnabled={true}
                            showsHorizontalScrollIndicator={false}
                            horizontal={false}
                            decelerationRate={0}
                            snapToInterval={width - 60}
                            snapToAlignment={"center"}
                            contentInset={{
                                top: 0,
                                left: 30,
                                bottom: 0,
                                right: 30,
                            }}>
                            <TransactionCards data={{name: 'Bridget Uledi', type: 'Transfer', amount: '30000'}}/>
                            <TransactionCards
                                data={{
                                    name: 'Airtime Purchase by 0996670686dkjfkfjkjf fkfjjkfdjhkf',
                                    type: 'TopUp',
                                    amount: '2000'
                                }}/>
                            <TransactionCards data={{name: 'Cash Deposit', type: 'Deposit', amount: '300000'}}/>
                            <TransactionCards data={{name: 'Cash Withdrawal', type: 'Transfer', amount: '12000'}}/>

                        </ScrollView>

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
        // margin: 10,
        // width: '100%'

    }, view: {
        // marginTop: 100,
        backgroundColor: 'blue',
        width: width - 80,
        margin: 10,
        height: 70,
        borderRadius: 10,
        //paddingHorizontal : 30
    },
    view2: {
        // marginTop: 100,
        backgroundColor: 'red',
        width: width - 80,
        margin: 10,
        height: 70,
        borderRadius: 10,
        //paddingHorizontal : 30
    }
});
