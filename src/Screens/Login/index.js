import React, { Component } from 'react'
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { ScrollView } from 'react-native-gesture-handler'
import LoginScreen from './LoginScreen'
import SignUp from '../SignUp'
export default class Login extends Component {
    static navigationOptions = {
        title:'Login',
        headerTitleStyle:{color:'#fff'},
    };
    constructor(){
        super();
    }
  render() {
    return (
    
    <LoginScreen  navigation={this.props.navigation}/>
    
    )
  }
}
