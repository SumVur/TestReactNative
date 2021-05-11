import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { BankCards } from './Components/BankCards/BankCards';
import Discounts from './Components/Discounts/Discounts';
import { Spendings } from './Components/Spendings/Spendings';

export const Body=()=>{

    return (
        <ScrollView style={styles.Body}
        ref={ref => {this.scrollView = ref}}
        onContentSizeChange={() => this.scrollView.scrollToEnd({animated: true})}>
            <Discounts></Discounts>
            <Spendings></Spendings>
            <BankCards></BankCards>
            <BankCards></BankCards>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    Body: {
        flex:1,
    }
});