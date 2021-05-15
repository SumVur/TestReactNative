import React from 'react';
import { StyleSheet, ImageBackground , View,TouchableOpacity } from 'react-native';
import { InfoBlockSaleItem } from './InfoBlockSaleItem';
import { Icon } from 'react-native-gradient-icon';
import { BlurView } from 'expo-blur';



export const SaleItem=(props)=>{
    return(
        <View style={styles.SaleItem}>
            <ImageBackground source={props.item.img} style={styles.img} imageStyle={{ borderRadius: 6}}>
                <View  style={{flex:0.4, flexDirection:'row', justifyContent:'space-between'}}>
                <TouchableOpacity style={{margin:10}}>
                <BlurView intensity={80} style={{overflow: 'hidden',borderRadius:100}}>   
                    <Icon
                            name='heart'
                            type='feather'
                            color='#FFFFFF'
                            size={20}
                            style={styles.Like}

                    />
                    </BlurView>                
                </TouchableOpacity>
                <TouchableOpacity style={{margin:10}}>
                <BlurView intensity={80} style={{overflow: 'hidden',borderRadius:100}}>   

                    <Icon
                            name='cross'
                            type='entypo'
                            color='#FFFFFF'
                            style={styles.Del}
                    />
                                        </BlurView>                
                </TouchableOpacity>
                </View>
            </ImageBackground>
            <InfoBlockSaleItem item={props.item}></InfoBlockSaleItem>
        </View>
    )
}

const styles = StyleSheet.create({
    SaleItem: {
        backgroundColor:'#FFFFFF',
        borderRadius: 8,
        width:301,
        height:241,
        marginLeft:15
    },
    img:{
        margin:10,
        height:159,
        width:285,
        shadowOffset:{  width: 0,  height: 15,  },
        shadowColor: 'rgba(0, 0, 0, 0.04)',
        shadowOpacity: 1,
        shadowRadius:2,
    },
    Like:{
        flexDirection:'row',
        width:36,
        height:36,
        borderRadius:100,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'rgba(0, 0, 0, 0.4)',
    },
    Del:{
        flexDirection:'row',
        width:34,
        height:34,
        borderRadius:100,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'rgba(0, 0, 0, 0.4)',
    }
});