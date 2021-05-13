import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SpendingsInfo } from './Components/SpendingsInfo';
import SpendingsMonth from './Components/SpendingsMonth';

export const Spendings=()=>{
    const [selectindex, setCount] = useState(0);
    const mounth=[
        {
            title:"January",
            amount:137000
        },
        {
            title:"February",
            amount:800
        }
    ]
    return(
        <View style={{alignSelf:'center',marginTop:20}}>
            <SpendingsInfo count={mounth[selectindex].amount}></SpendingsInfo>
            <SpendingsMonth setCount={(index) => setCount(index)} mounth={mounth.map((item)=>item.title)}></SpendingsMonth>
        </View>
    )
}