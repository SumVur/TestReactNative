import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const SpendingsInfo=(props)=>{
    return(
        <View style={styles.Spendings}>
            <Text style={{color:'#5685FD',fontSize:15}}>Spendings</Text>

            <Text style={{fontSize:20}} >$ {props.count}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    Spendings: {
        height:50,
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10,
        alignItems:'center',
        backgroundColor:'#FFFFFF',
        borderTopLeftRadius:8,
        borderTopRightRadius:8,
        shadowOffset:{  width: 0,  height: 5,  },
        shadowColor: 'rgba(0, 0, 0, 0.15)',
        shadowOpacity: 1,
        shadowRadius:10,
        zIndex:1
    }
});