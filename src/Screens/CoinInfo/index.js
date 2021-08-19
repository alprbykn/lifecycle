import React, { Component } from 'react'
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { CoinInfoScreen } from './CoinInfoScreen';
export default class CoinInfo extends Component {
  constructor() {
    super();
    // Burada this.setState()'i çağırmayınız!
    this.state = { counter: 0 };
    
  }
    
  render() {
    const { navigation } = this.props
    const coin_id = JSON.stringify(navigation.getParam('id', 'NO-ID'))
    return (
    <SafeAreaView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
    <CoinInfoScreen coin_id={coin_id}/>
    </SafeAreaView>
    )
  }
}
