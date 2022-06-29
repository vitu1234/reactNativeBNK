import * as React from 'react';
import {Card, Text, Box, VStack, Center, HStack, Progress} from "native-base";
import {Feather} from '@expo/vector-icons';
import {View, StyleSheet, Dimensions, TouchableOpacity} from "react-native";
import numbro from "numbro"


const {width} = Dimensions.get('window');


const TransactionCards = (props) => {
    const data = props.data;
    const name = data.name;
    const type = data.type;
    const amount = "K" + numbro(data.amount).format({thousandSeparated: true, mantissa: 2});
    ;
    return (
        <View style={{width: width - 50}}>

            <TouchableOpacity>
                <Box style={style.view}>
                    <VStack style={{height: '100%'}}>
                        <HStack space={2} style={{width: '100%'}}>
                            <Card style={style.card2}>
                                <Feather style={{margin: 10}} name="dollar-sign" size={17} color="black"/>
                            </Card>

                            <Center mt={2}>
                                <Text numberOfLines={1}
                                      style={{marginEnd: 2, fontSize: 15, fontWeight: "bold", textAlign: "center"}}>
                                    {name}
                                </Text>
                                <Text numberOfLines={1} style={{fontSize: 12, color: 'grey', marginRight: 'auto'}}>
                                    {type}
                                </Text>


                            </Center>
                            <Box style={{marginLeft: 'auto'}} mt={4}>
                                <Center mt={2}>
                                    <Text mt={4} numberOfLines={1}
                                          style={{
                                              fontSize: 10,
                                              fontStyle: 'italic',
                                              fontWeight: "bold",
                                              textAlign: "right"
                                          }}>
                                        {amount}
                                    </Text>
                                </Center>
                            </Box>

                        </HStack>

                    </VStack>

                </Box>
            </TouchableOpacity>
        </View>
    );
};

const style = StyleSheet.create({
    view: {
        // marginTop: 100,
        // flexDirection:'column',
        backgroundColor: '#fff',
        width: '100%',
        margin: 2,
        height: 80,
        borderRadius: 10,
        //paddingHorizontal : 30
        shadowColor: 'rgba(0,0,0,0.30)',
        shadowOffset: {width: 0, height: 1}
    }, card2: {
        // marginTop: 100,
        // flexDirection:'column',
        backgroundColor: '#fff',
        // width: '100%',
        // margin: 2,
        // height: 80,
        borderRadius: 10,
        //paddingHorizontal : 30
        shadowColor: 'rgba(0,0,0,0.30)',
        shadowOffset: {width: 0, height: 1}
    }
})


export default TransactionCards;

