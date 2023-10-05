import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  StatusBar,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import COLORS from '../const/colors';


const OnBoardScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <StatusBar translucent backgroundColor='rgba (0,0 0,0)' />
      <ImageBackground
        style={{flex: 1}}
        source={require('../assets/squid.jpg')}>
      </ImageBackground> 
      <View style = {styles.details}>
        <Text style={{color: COLORS.white, fontSize: 35, fontWeight: 'bold'}}>Watch</Text>
        <Text style={{color: COLORS.white, fontSize: 35, fontWeight: 'bold'}}>Latest Movies and Series</Text>
        <Text style={{color: COLORS.white, lineHeight: 25, marginTop: 15}}>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more. </Text>
        <TouchableOpacity 
        onPress={() => navigation.navigate('HomeScreen')}>
          <View style ={styles.btn}>
          <Text style={{fontWeight: 'bold'}}>Get started</Text> 
        </View>
        </TouchableOpacity>
        
      </View> 
  </View>
  );
};

const styles = StyleSheet.create({
  details:{
    height:'50%',
    bottom: 0,
    position: 'absolute',
    paddingHorizontal: 40
  },
  btn:{
    height: 50,
    width: 120,
    backgroundColor: COLORS.white,
    marginTop: 28,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center'

  },
});

export default OnBoardScreen 