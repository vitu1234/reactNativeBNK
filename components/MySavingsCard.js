import React from 'react';
import {Card, HStack, Progress, Text, VStack, Center} from "native-base";
import {View, StyleSheet, Dimensions, TouchableOpacity} from "react-native";
import {MaterialIcons} from '@expo/vector-icons';
import numbro from "numbro"

const {width} = Dimensions.get('window');

function MySavingsCard(props) {

    const item = props.data.item;
    const amount_saved = "K" + numbro(props.data.amount_saved).format({thousandSeparated: true, mantissa: 2});
    const target_amount = "K" + numbro(parseInt(props.data.target_amount)).format({
        thousandSeparated: true,
        mantissa: 2
    });
    const percentage = (parseInt(props.data.amount_saved) / parseInt(props.data.target_amount)) * 100;
    let colorSchemeProgress = '';
    if (percentage >= 50) {
        colorSchemeProgress = 'primary';
    } else {
        colorSchemeProgress = 'warning';
    }

    function onTouchs() {
        console.log("sksks")
    }

    return (
        <View>
            <TouchableOpacity onPress={onTouchs}>
            <Card pointerEvents={'none'} style={style.view}>
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
            </TouchableOpacity>
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
