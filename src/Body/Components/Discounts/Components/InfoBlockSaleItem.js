import React from 'react';
import { StyleSheet, Image, View,Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export const InfoBlockSaleItem=(props)=>{
    return(
        <View  style={styles.InfoBlock}>
        <View>
            <Text style={{fontSize:28}}>{props.item.title}</Text>
            <Text style={{color:'#A8ADB7',fontSize:15}}>{props.item.text}</Text>
        </View>
            <LinearGradient
            colors={['#A384F3', '#94DDF4']}
            start={{x: 0, y: 0}} end={{x: 1, y: 0}}
            style={styles.Percent}>
                <Text style={{color:'#FFFFFF',alignSelf:'center',fontSize:18}}>{props.item.Percent}%</Text>
            </LinearGradient>
    </View>
    )
}
const styles = StyleSheet.create({
    InfoBlock:{
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center'
    },
    Percent:{
        overflow:'hidden',
        width:45,
        height:25,
        borderRadius:12,
        justifyContent:'center',
    },
});