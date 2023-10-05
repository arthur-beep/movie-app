import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import COLORS from '../const/colors';

const SplashScreen = ({navigation}) => {
    return(
      <View style={{flex: 1}}>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0)"/>
        <ImageBackground
        style={{flex: 1}}
        source={require('../assets/squid.jpg')}>

       
          <Image 
            source={require('../assets/image1.png')}
            style={styles.logo}
            resizeMode='contain'> 
          </Image>

     

          <View style={styles.details}>
              <Text style={{color: COLORS.white, fontSize: 35, fontWeight: 'bold'}}>Watch Latest</Text>
              <Text style={{color: COLORS.white, fontSize: 35, fontWeight: 'bold'}}>Movies and Series</Text>
              <Text style={{color: COLORS.white, fontSize: 15, fontWeight: 'bold', marginTop: 15}}>
                Netflix is a streaming service that offers a wide 
                variety of award-winning TV shows, movies, anime, documentaries, and sports
              </Text>

              <TouchableOpacity
                activeOpacity={0.8} 
                onPress={() => navigation.navigate('Register')}>

              <View style={styles.btn}>
                <Text style={{fontWeight: 'bold', color: COLORS.white}} >Get started</Text>
              </View>
           
          </TouchableOpacity>
          </View>
    </ImageBackground>    
  
 </View>
 
    );
};   

const styles = StyleSheet.create({
  details: {
      height: '50%',
      bottom: 0,
      position: 'absolute',
      paddingHorizontal: 40,
    },

 logo:{
      width: 100,
      height: 100,
      marginTop: 50,
      borderRadius: 50,
      alignSelf: "center"
    },

   btn: {
     height: 50,
     width:120,
     backgroundColor: COLORS.primary,
     marginTop: 20,
     borderRadius: 7,
     justifyContent: 'center',
     alignItems: 'center'
   },

   
});


export default SplashScreen;







