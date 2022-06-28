import React from 'react';
import {Card, HStack, Progress, Text, VStack, Center} from "native-base";
import {View, StyleSheet, Dimensions} from "react-native";
import {MaterialIcons} from '@expo/vector-icons';
import {parse} from "react-native-svg";

const {width} = Dimensions.get('window');

function MySavingsCard(props) {

    const item = props.data.item;
    const amount_saved = "K" + parseInt(props.data.amount_saved).toLocaleString();
    const target_amount = "K" + (parseInt(props.data.target_amount)).toLocaleString();
    const percentage = (parseInt(props.data.amount_saved) / parseInt(props.data.target_amount)) * 100;
    let colorSchemeProgress = '';
    if (percentage >= 50) {
        colorSchemeProgress = 'primary';
    } else {
        colorSchemeProgress = 'warning';
    }
    return (
        <View>
            <Card style={style.view}>
                <VStack>
                    <HStack space={2} style={{width: '100%'}}>

                        <MaterialIcons mt={3} name="donut-large" size={24} color="black"/>
                        <View style={{flexDirection: 'column'}}>
                            <Text numberOfLines={1} style={{fontSize: 18, fontWeight: "bold", textAlign: "center"}}>
                                {item}
                            </Text>
                            <View style={{flexDirection: 'row'}}>
                                <Text numberOfLines={1} style={{fontSize: 10, color: 'grey'}}>
                                    {amount_saved}/
                                </Text>

                                <Text colorScheme='primary' numberOfLines={1}
                                      style={{fontSize: 10, fontWeight: 'bold'}}>
                                    {target_amount}
                                </Text>
                            </View>

                        </View>

                    </HStack>
                    <Progress mt={2} size={"xs"} rounded="0" colorScheme={colorSchemeProgress} value={percentage}/>

                </VStack>

            </Card>
        </View>
    );
}

const style = StyleSheet.create({
    view: {
        // marginTop: 100,
        backgroundColor: '#fff',
        width: width - 90,
        margin: 10,
        height: 80,
        borderRadius: 10,
        //paddingHorizontal : 30
        shadowColor: 'rgba(0,0,0,34)',
        shadowOffset: {width: 0, height: 1}
    }
})

export default MySavingsCard;
