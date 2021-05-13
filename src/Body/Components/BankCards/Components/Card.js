import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Icon } from 'react-native-gradient-icon';


export const Card=(props)=>{
    function GetCard(Type) {
            switch (Type) {
            case 'Visa':
                return(
                <Image source={require('./img/Visa.png')} style={{resizeMode:'contain',width:50}}></Image>
                )
                break;
            case 'MasterCard':
                return(
                    <Image source={require('./img/MasterCard.png')} style={{resizeMode:'contain',width:50}}></Image>
                    )
                break;
            default:
                break;
        }  
    }
    const card=GetCard(props.card.type);
    return (
        <View style={{ 
            shadowOffset:{  width: 0,  height: 0,  },
            shadowColor: 'rgba(164, 130, 238,  0.5)',
            shadowOpacity: 1,
            shadowRadius:5,
            zIndex:1}} >
            <LinearGradient
            colors={[props.card.colors[0], props.card.colors[1]]}
            start={{x: 0, y: 0}} end={{x: 1, y: 0}}
            style={styles.Card}>
                <View style={styles.CardNumber}>
                    <View style={{flexDirection:'row',justifyContent:'center',height:19,width:82,alignItems:'center'}}>
                    {card}
                    <Icon
                        name='dots-two-horizontal'
                        type='entypo'
                        color='rgba(255, 255, 255, 0.5)'
                        size={18}
                    />
                    <Text style={{color:'rgba(255, 255, 255, 0.5)',fontSize:12}}>{props.card.lastFourNumbe}</Text>
                    </View>
                </View>
                <View style={styles.CardBalance}>
                    <Text style={{color:'#FFFFFF',fontSize:20}}>
                        ${ Math.trunc(props.card.amount).toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')}.{props.card.amount.toString().split('.')[1] ?? 0}</Text>
                    <Text style={{color:'rgba(255, 255, 255, 0.5)',fontSize:12}}>{props.card.BankName}</Text>

                </View>
                <TouchableOpacity style={{flex:1,justifyContent:'flex-end',margin:20}}>
                    <Icon
                            name='trash-2'
                            type='feather'
                            color='#FFFFFF'
                            size={24}
                            style={styles.Trash}
                    />
                </TouchableOpacity>
            </LinearGradient>
        </View>
    )
}
const styles = StyleSheet.create({
    Card: {
        height:278,
        width:195,
        borderRadius:10,
        margin:10,
        
    },
    CardNumber:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-end',
        padding:20,
    },
    CardBalance:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'center'
    },
    Trash:{
        flexDirection:'row',
        width:44,
        height:44,
        borderRadius:100,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'rgba(255, 255, 255, 0.2)'
    }
});