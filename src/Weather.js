

import React,{useState,useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,Alert,ActivityIndicator
} from 'react-native';
import constants from 'constants'
import WeatherInfo from './WeatherInfo';


// const API_KEY = 'b8e887bf5e8d60d24b90a0ec39a580b0'
const APPID = '6883b7a9eb1704894997d6dec61271e9'
const Weather = () => {
  const[weatherData,setWeatherData] = useState(null)
const [loaded,setLoaded] = useState(false)
const fetchWeatherData =  async (cityName) =>{
  try{
    setLoaded(false)
    const response = await fetch( `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${APPID}`)
    if(response.status === 200){
        const data = await response.json()
        setWeatherData(data)
    }else{
        Alert.alert("give a valid input")
        setWeatherData(null)
    }
    setLoaded(true)
  }catch(error){
    Alert.alert("error",error.message)
  }
}
useEffect(()=> {
  fetchWeatherData('kerala')
},[])
if(!loaded) {
  return(
    <View style={styles.containerloading}>
      <ActivityIndicator size={30} color={'#66bced'}/>
    </View>
  )
}
  return (
    <View style={styles.mainContainer}>
        <View style={styles.header}>
            <Text style={styles.headerTitle}>Weather App</Text>
        </View>
        <WeatherInfo weatherData={weatherData} fetchWeatherData={fetchWeatherData}/>
        
    </View>
  )
}

const styles = StyleSheet.create({
    mainContainer:{
        backgroundColor:'#e0e0da',
        height:'100%',
    width:'100%'    
},
    containerloading:{
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    },
    header:{
      alignItems:'center',
      backgroundColor:'#c5d2ef',
      height:70,
      justifyContent:'center'
    },
    headerTitle:{
      fontSize:29,
      fontWeight:'bold'
    }
});

export default Weather;
