import * as React from 'react';
import {View, Text, HStack, Box} from "native-base";
import {Link} from "@react-navigation/native";
import {StyleSheet, Dimensions} from 'react-native'
import {AntDesign} from '@expo/vector-icons';


export default function LeftRightElementCard({name, action, actionText}) {

    return (
        <View>
            <HStack style={style.container}>
                <Text style={style.textName}> {name}</Text>
                <Link style={style.cardLink} to={{screen: 'Profile', params: {id: 'jane'}}}>
                    {actionText === ' Add Card' ? <AntDesign name="plussquareo" size={16} color="black"/> : ''}

                    <Text style={style.cardIcon}>
                        {actionText}</Text>
                </Link>
            </HStack>
        </View>
    )
}

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const style = StyleSheet.create({
    container: {
        padding: 10,
        // backgroundColor: 'red',
        flexDirection: 'row'

    },
    textName: {
        fontSize: 20,
        fontWeight: '500'
    },
    cardLink: {
        marginLeft: 'auto'
    },
    cardIcon: {
        fontSize: 12
    }
})
