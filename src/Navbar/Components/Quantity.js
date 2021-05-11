import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';


export const Quantity=()=>{
    return(
        <View style={styles.Quantity}>
            <Icon
                name='clock'
                type='feather'
            />
            <Text style={{marginLeft:2}}>$1,340.10</Text>
        </View>  
    )
}
const styles = StyleSheet.create({
    Quantity:{
        flexDirection:'row',
        width: 112,
        height: 33,
        backgroundColor:'#FFFFFF',
        borderRadius:30,
        shadowOffset:{  width: 0,  height: 5,  },
        shadowColor: 'rgba(0, 0, 0, 0.08)',
        shadowOpacity: 1,
        shadowRadius:30,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:20
    }
});