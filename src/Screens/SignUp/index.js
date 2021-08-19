import React, { Component } from 'react'
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { ScrollView } from 'react-native-gesture-handler'
import  SignUpScreen  from './SignUpScreen'
export default class SignUp extends Component {
    static navigationOptions = {
        title:'SingUp',
        headerTitleStyle:{color:'#fff'},
    };
    constructor(){
        super();
    }
  render() {
    return (
    <SafeAreaView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
    
      <SignUpScreen navigation={this.props.navigation}/>
   
    </SafeAreaView>
    )
  }
}
