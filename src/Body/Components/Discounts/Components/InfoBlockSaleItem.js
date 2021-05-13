import React from 'react';
import { StyleSheet, Image, View,Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export const InfoBlockSaleItem=(props)=>{
    return(
        <View  style={styles.InfoBlock}>
            <View style={{ flexDirection:'row', justifyContent:'space-between',paddingLeft:25,paddingRight:25}}>
                <View>
                    <Text style={{fontSize:24}}>{props.item.title}</Text>
                </View>
                <LinearGradient
                colors={['#A384F3', '#94DDF4']}
                start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                style={styles.Percent}>
                    <Text style={{color:'#FFFFFF',alignSelf:'center',fontSize:14}}>{props.item.Percent}%</Text>
                </LinearGradient>
            </View>
            <View style={{paddingLeft:25}}>
            <Text style={{color:'#A8ADB7',fontSize:15}}>{props.item.text}</Text>
            </View>
    </View>
    )
}
const styles = StyleSheet.create({
    InfoBlock:{
    flexDirection:'column',
    },
    Percent:{
        overflow:'hidden',
        width:45,
        height:25,
        borderRadius:12,
        justifyContent:'center',
    },
});