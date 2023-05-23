

import React,{useState} from 'react';
import {
  Image,
SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,TextInput
} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons'

const Search = ({fetchWeatherData}) => {
const [cityname,setCityName] = useState('')
  return (
        <View style={styles.searchBar}>
          <TextInput placeholder='Search city...'
          value={cityname}
          onChangeText={(text) => setCityName(text)}/>
          <EvilIcons name='search' size={28} color='#000'
                    onPress={()=> fetchWeatherData(cityname)}/>
        </View>

   
  );
}

const styles = StyleSheet.create({
    searchBar:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:Dimensions.get('screen').width -20,
        borderWidth:1.5,
        paddingVertical:2,
        borderRadius:25,
        marginHorizontal:10,
        paddingHorizontal:10,
        backgroundColor:'#f0f1f2',
        borderColor:'#929394'
    },

});

export default Search;
