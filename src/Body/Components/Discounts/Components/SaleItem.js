import React from 'react';
import { StyleSheet, ImageBackground , View,TouchableOpacity } from 'react-native';
import { InfoBlockSaleItem } from './InfoBlockSaleItem';
import { Icon } from 'react-native-gradient-icon';



export const SaleItem=(props)=>{
    return(
        <View style={styles.SaleItem}>
            <ImageBackground source={props.item.img} style={styles.img}>
                <View  style={{flex:0.4, flexDirection:'row', justifyContent:'space-between'}}>
                <TouchableOpacity style={{margin:20}}>
                    <Icon
                            name='heart'
                            type='feather'
                            color='#FFFFFF'
                            size={20}
                            style={styles.Like}

                    />
                </TouchableOpacity>
                <TouchableOpacity style={{margin:20}}>
                    <Icon
                            name='cross'
                            type='entypo'
                            color='#FFFFFF'
                            style={styles.Del}
                    />
                </TouchableOpacity>
                </View>
            </ImageBackground>
            <InfoBlockSaleItem item={props.item}></InfoBlockSaleItem>
        </View>
    )
}

const styles = StyleSheet.create({
    SaleItem: {
        backgroundColor:'floralwhite',
        borderRadius: 8,
        width:280,
        height: 220,
        marginLeft: 25,
        marginRight: 25,
    },
    img:{
        margin:10,
        height:140,
        width:260,
        backgroundColor:"rgba(106, 137, 253, 1)",
        borderRadius:10,
        shadowOffset:{  width: 0,  height: 10,  },
        shadowColor: 'rgba(0, 0, 0, 0.15)',
        shadowOpacity: 1,
        shadowRadius:10,
    },
    Like:{
        flexDirection:'row',
        width:30,
        height:30,
        borderRadius:100,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'rgba(255, 255, 255, 0.2)'
    },
    Del:{
        flexDirection:'row',
        width:30,
        height:30,
        borderRadius:100,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'rgba(255, 255, 255, 0.2)'
    }
});