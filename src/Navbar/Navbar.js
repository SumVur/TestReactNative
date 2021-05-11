import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BlockAddBank } from './Components/BlockAddBank';
import { Quantity } from './Components/Quantity';

export const Navbar=(props)=>{
    return(
        <View >
            <View style={styles.Navbar}>
                <View style={{height:50}}>
                    <Quantity ></Quantity>
                </View>
                <View style={{flexDirection:'row', alignItems: 'center',marginRight:20}}>
                    <BlockAddBank></BlockAddBank>
                    <View style={styles.BankCoun}>
                        <Text style={{color:'#8C93A1'}}>2</Text>
                    </View>
                </View>
            </View>
            <Text style={{margin:10,fontSize:28}}>My accounts</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Navbar: {
        flexDirection:'row',
        height:100,
        alignItems: 'flex-end',
        justifyContent:'space-between'
    },
    BankCoun:{
        borderColor:'#8C93A1',
        borderWidth:2,
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        backgroundColor:'#E5E5E5'
    }
});