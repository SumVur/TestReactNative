import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Body } from './src/Body/Body';
import { CustomBackground } from './src/CustomBackground';
import { Footer } from './src/Footer/Footer';
import { Navbar } from './src/Navbar/Navbar';
export default function App() {
  return (
    <View style={styles.page} >
      <CustomBackground>
        <Navbar></Navbar>
        <Body></Body>
        <Footer></Footer>
      </CustomBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  page: {
    position:'relative',
    flex:1
  },
});