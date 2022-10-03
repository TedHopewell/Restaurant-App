import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView, Image } from 'react-native';
import image1 from "./assets/dombolo1.jpg";


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topView}>
          <Image source={image1} style={{width:20, height:20}}/>
      </View>
      <Text></Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topView:{
    height:50,
    width:50,
  },
});
