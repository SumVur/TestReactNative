import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Icon } from 'react-native-elements';
export const BlockAddBank=()=>{
    return(
        <View style={styles.BlockAddBank}>
            <Text>Add Bank</Text> 
            <View style={styles.ButtonbackgroundButtonAddBank} >
            <LinearGradient
                colors={['#A384F3', '#94DDF4']}
                start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
                <Icon
                style={styles.ButtonAddBank} 
                name='plus'
                type='entypo'
                color='#FFFFFF'/>
            </LinearGradient>
            </View>  
    </View>
    )
}
const styles = StyleSheet.create({
    BlockAddBank:{
        flexDirection:'row',
        padding:10,
        alignItems: 'center',
    },
    ButtonbackgroundButtonAddBank:{
        borderRadius:100,
        overflow: 'hidden',
        marginLeft:4
    },
    ButtonAddBank:{
        width: 49.77,
        height: 50,
        justifyContent: 'center',
        borderRadius: 100,
        backgroundColor:'transparent',
    },
});