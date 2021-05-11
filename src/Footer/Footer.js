import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-gradient-icon';
import { MaterialCommunityIcons } from '@expo/vector-icons';





export const Footer=()=>{
    const FourSquare=[]
    for (let index = 0; index < 4; index++) {
        FourSquare.push(
            <Icon
            key={index}
            name='crop-square'
            type='material'
            color='#C9CED7'
            size={15}
        />
        )
        
    }
    return(
        <View style={styles.Footer}>
            <View style={styles.FourSquare}>
                {FourSquare}
            </View>
            <View style={styles.Wallet}>
                <View>
                    <Icon
                        name='ios-wallet-outline'
                        type='ionicon'
                        colors={[
                            {color:'#A384F3',offset:"0",opacity:"1"},
                            {color:'#94DDF4',offset:"1",opacity:"1"},
                        ]}
                    />
                </View>
                <Text>Accounts</Text>
            </View>
            <MaterialCommunityIcons style={styles.Account}  name="account" size={24} color="#8C93A1" />

        </View>
    )
}

const styles = StyleSheet.create({
    Footer: {
        flexDirection:'row',
        height:64,
        backgroundColor:'#F8F8F8',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    Wallet:{
        flexDirection:'column',
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center'
    },
    FourSquare:{
        height:40,
        flexWrap:'wrap',
        marginLeft:20
    },
    Account:{
        marginRight:20
    }
});