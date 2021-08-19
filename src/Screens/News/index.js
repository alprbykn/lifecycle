import React, { Component } from 'react'
import { useState, useEffect} from 'react'
import { SafeAreaView, Text, TouchableOpacity, View ,Image} from 'react-native'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { NewsScreen } from './NewsScreen'
import { StyleSheet } from 'react-native'
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export class News extends Component {
  static navigationOptions = {
    title:'Haberler',
  
    
};
constructor(props){
    super();
    this.state = {
      order: 'all'
    }
}


  render() {
    return (
      <SafeAreaView>
        <View>
          <View style={styles.headerContainer}>
           
            <Text style={styles.header}>Haberler</Text>
          </View>
          <View style={{alignItems:'center',justifyContent:'center',textAlign:'center',flexDirection:'row',padding:windowWidth*0.2/10,backgroundColor:'lightblue',flexWrap:'wrap',
  maxWidth:windowWidth,}}>
          <View style={{alignItems:'center',justifyContent:'center',textAlign:'center',}}>
              <Text style={{fontWeight:'bold',fontSize:17,}}>Son Haberler </Text>
          </View>
          <View style={styles.options}>
          <TouchableOpacity onPress={()=>{
                this.setState({order:'all'})
                
              }}>
              <Text style={styles.textoptions}>
                Tüm Haberler
              </Text >
              </TouchableOpacity>
            <TouchableOpacity onPress={async ()=>{
               this.setState({order:'list'})
                
              }}>
              <Text style={styles.textoptions}>
                Listeleme
              </Text >
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{
                this.setState({order:'update'})
                
              }}>
              <Text style={styles.textoptions}>
                Güncelleme
              </Text>
              </TouchableOpacity >
              <TouchableOpacity onPress={()=>{
                this.setState({order:'other'})
              }}>
              <Text style={styles.textoptions}>
                Diğer
              </Text>
              </TouchableOpacity>
          </View>
          </View> 
          <NewsScreen show={this.state.order} />
        </View>
      </SafeAreaView>
    )
  }
}
const styles = StyleSheet.create({
headerContainer:{
  height:40,
  backgroundColor:'#010340',
  alignItems:'center',
  flexDirection:'row',
  justifyContent: 'center',
  
},
  header:{
    textAlign:'center',
    fontSize:20,
    fontWeight:'bold',
  color:'#ddd',
  alignItems: 'center',
  


},
options:{
  marginHorizontal:15,
  textAlign:'center',
  alignItems:'center',
  flexDirection:'row',
  justifyContent:'flex-end',
 
},
textoptions:{
  
  textDecorationLine: 'underline',
  paddingHorizontal:10,
  fontSize:14,
}
})