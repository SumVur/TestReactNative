import React, { useState } from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-gradient-icon';
import CardCarousel from './Components/CardCarousel';


export const BankCards=()=>{
    const [displayCards, setdisplay] = useState(false);

    return(
        <View style={styles.BankCardsBlock}>
            <TouchableOpacity style={styles.Titlee} onPress={()=>setdisplay(!displayCards)}>
            <Text style={{paddingLeft:5, fontSize:17,fontWeight:'500'}} >Barclays bank</Text>
                <Icon
                        name='chevron-small-up'
                        type='entypo'
                        color='#8C93A1'
                        size={30}
                        style={{display:displayCards?'flex':'none'}}
                />
                <Icon
                        name='chevron-small-down'
                        type='entypo'
                        color='#8C93A1'
                        size={30}
                        style={{display:displayCards?'none':'flex'}}

                />
            </TouchableOpacity>
            <CardCarousel display={displayCards}></CardCarousel>
        </View>
    )
}
const styles = StyleSheet.create({
    BankCardsBlock: {
        alignSelf:'center',
        alignItems:'center',
        marginTop:10
    },
    Titlee:{
        width:360,
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10,
        alignItems:'center'
    }
});