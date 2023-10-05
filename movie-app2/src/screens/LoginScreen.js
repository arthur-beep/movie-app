// components/login.js
import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, Image, ScrollView, Text, View, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
import firebase from '../components/firebase';
import COLORS from '../const/colors';
import Input from '../components/input';

export default class LoginScreen extends Component {
  
  constructor() {
    super();
    this.state = { 
      email: '', 
      password: '',
      isLoading: false
    }
  }
  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }
  userLogin = () => {
    if(this.state.email === '' && this.state.password === '') {
      Alert.alert('Enter details to signin!')
    } else {
      this.setState({
        isLoading: true,
      })
      firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        console.log(res)
        console.log('User logged-in successfully!')
        this.setState({
          isLoading: false,
          email: '', 
          password: ''
        })
        this.props.navigation.navigate('Home')
      })
      .catch(error => this.setState({ errorMessage: error.message }))
    }
  }
  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
    }    
    return (
      <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>  
      
      <ScrollView
        contentContainerStyle={{paddingTop: 50, paddingHorizontal: 20}}>
        <View style={{marginVertical: 20}}>

         <Image 
            source={require('../assets/image1.png')}
            style={styles.logo}
            resizeMode='contain'> 
          </Image>

          <Text style={{color: COLORS.primary, fontSize: 30, alignItems: 'center', fontWeight: 'bold', textAlign: 'center',}}>
          Login
        </Text>
        <Text style={{color: 'black',fontWeight: 'bold', textAlign: 'center',fontSize: 18, marginVertical: 10}}>
          Enter Your Details to Login
        </Text>  
        <Input
          style={styles.inputStyle}
          iconName="email-outline"
          placeholder="Enter your email address"
          label="Email"
          value={this.state.email}
          onChangeText={(val) => this.updateInputVal(val, 'email')}
        />
        <Input
          style={styles.inputStyle}
          label="Password"
          placeholder="Enter your password"
          iconName="lock-outline"
          value={this.state.password}
          onChangeText={(val) => this.updateInputVal(val, 'password')}
          maxLength={15}
          secureTextEntry={true}
        />   
        <Button 
          color="black"
          title="Login"
          onPress={() => this.userLogin()}
        />   
        <Text 
          style={{
                color: COLORS.primary,
                fontWeight: 'bold',
                textAlign: 'center',
                fontSize: 16,
                marginVertical: 20
              }}
              onPress={() => this.props.navigation.navigate('HomeScreen')}>
          Don't have account? Click here to signup
        </Text>                          
      </View>
      </ScrollView>
    </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({

  logo:{
      width: 100,
      height: 100,
      marginVertical: 20,
      borderRadius: 50,
      alignSelf: "center"
    },
 
});