import React, { Component } from 'react'
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { ScrollView } from 'react-native-gesture-handler'
import HomeScreen from './HomeScreen'
import LoadingScreen from './LoadingScreen'
import LoginScreen from './LoginScreen'

export default class Drawer extends Component {
  constructor(){
    super();
  }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}