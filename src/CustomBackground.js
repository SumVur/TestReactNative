import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-gradient-icon';


export const CustomBackground=(props)=>{
const ElipseDate=[
    {
        name:'1',
        height:346.37,
        width:262,
        position:'absolute',
        backgroundColor:'rgba(164, 130, 238, 2)',
        left:198,
        top:'4%',
        borderRadius:200
    },
    {
        name:'2',
        height:322.57,
        width:244,
        position:'absolute',
        backgroundColor:'rgba(130, 160, 238, 2)',
        left:198,
        top:'40%',
        borderRadius:200
    },
    {
        name:'3',
        height:388.67,
        width:294,
        position:'absolute',
        backgroundColor:'rgba(130, 160, 238, 2)',
        left:198,
        top:'60%',
        borderRadius:150
    }
]
const ElipseElement=[]
for(let ED of ElipseDate) {
    ElipseElement.push(
        <View
        key={ED.name}
        style={{
            height:ED.height,
            width:ED.width,
            position:'absolute',
            backgroundColor:ED.backgroundColor,
            left:ED.left,
            top:ED.top,
            borderRadius: ED.borderRadius,
            
        }}></View>
    );
}

return(
    <View style={styles.CustomBackground}>
        {/* {ElipseElement} */}
        {props.children}
    </View>

)
}
const styles = StyleSheet.create({
    CustomBackground: {
    flex:1,
    backgroundColor:'rgba(229,229,229, 0.8)',
    }
});