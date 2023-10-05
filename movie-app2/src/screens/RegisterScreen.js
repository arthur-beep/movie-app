import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert,Image,SafeAreaView,  ScrollView, ActivityIndicator } from 'react-native';
import firebase from '../components/firebase';
import COLORS from '../const/colors';
import Input from '../components/input';


export default class RegisterScreen extends Component {
  
  constructor() {
    super();
    this.state = { 
      displayName: '',
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
  registerUser = () => {
    if(this.state.email === '' && this.state.password === '') {
      Alert.alert('Enter details to signup!')
    } else {
      this.setState({
        isLoading: true,
      })
      firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        res.user.updateProfile({
          displayName: this.state.displayName
        })
        console.log('User registered successfully!')
        this.setState({
          isLoading: false,
          displayName: '',
          email: '', 
          password: ''
        })
        this.props.navigation.navigate('Login')
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
          Register
        </Text>
        <Text style={{color: 'black', textAlign: 'center',fontWeight: 'bold', fontSize: 18, marginVertical: 10}}>
          Enter Your Details to Register
        </Text>

        <Input
          style={styles.inputStyle}
          placeholder="Enter your full name"
          label="Full name"
          value={this.state.displayName}
          onChangeText={(val) => this.updateInputVal(val, 'displayName')}
          iconName="account-outline"
        />      
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
          placeholder="Enter your password"
          label="Password"
          iconName="lock-outline"
          value={this.state.password}
          onChangeText={(val) => this.updateInputVal(val, 'password')}
          maxLength={15}
          secureTextEntry={true}
        
          
            
        /> 

        <Button
        color="black"
        title="Signup"
        onPress={() => this.registerUser()}
        />

        <Text 
              style={{
                color: COLORS.primary,
                fontWeight: 'bold',
                textAlign: 'center',
                fontSize: 16,
                marginVertical: 20
              }}
          onPress={() => this.props.navigation.navigate('Login')
          }>
          Already Registered? Click here to login
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
