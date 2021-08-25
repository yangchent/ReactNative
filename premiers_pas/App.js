import React,{ useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, ActivityIndicator, Alert, Pressable } from 'react-native';
import img from './assets/konexio-logo_1.png'

export default function App() {
  const [showLoading, setShowLoading]= useState(true);

  const onPressFunction = ()=> {
    console.log("pressed")
    setShowLoading(current => !current)
    console.log(showLoading)
    Alert.alert("you have pressed the button");

  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text1}>Hello</Text>
        <Text style={styles.text2}>World</Text>
        <Text style={styles.text3}>React native</Text>
        </View>
      <Image source={img} style={styles.image}/>
      <Image source={{uri:'https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png'}} style={styles.image} />
     
      <Pressable onPress={onPressFunction} style={styles.button}>
        <Text style={styles.buttonText}> Pressable!</Text>
      </Pressable>
      <ActivityIndicator size= 'large'/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0000ff',
    
  },
  textContainer: {
    backgroundColor: '#ffffff',
    textAlign: 'center',
    marginTop: 80,
    marginBottom: 80,
  },
  text1: {
    fontSize: 30,
   },
   text2: {
     textAlign: 'center',
   },
   text3:{
    fontWeight: 'bold',
   },
   image: {
    width: 220,
    height: 70,
    margin: 'auto'
  },
  button: {
    width: 100,
    padding: 15,
		backgroundColor: "purple",
		borderRadius: 5,
  },
  buttonText: {
    fontSize: 14,
    color: 'white',
  }
});
