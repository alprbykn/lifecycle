import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { HomeScreen } from './HomeScreen';
import NavigationService from '../../NavigationService';
import { Platform } from 'react-native';
import {BannerAd,BannerAdSize, TestIds} from '@react-native-firebase/admob';
import { TextInput } from 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/app'

const BannerCode= (Platform.OS=='android') ? 'ca-app-pub-1011921588767736/7594978167' : 'ca-app-pub-1011921588767736/4962103637';

export class Home extends Component {
  
  constructor(props) {
    super();
    // Burada this.setState()'i çağırmayınız!
    this.state = { page: 1 };
  };
 
  
  getData = async () => {
    const name = database().ref('/bitcoin-cash');
  
    var data = await name.once('value')
      .then(snapshot => {
        
        return snapshot.val();
      })
      .catch(e => {
        console.log("firebase error", e);
        return null;
      });
  
    return data;
  }
 
  handlePage = (x)=>{
    this.setState({page:x})}
  handleNextPage = ()=>{
    this.state.page <5 ? this.setState({page:(this.state.page+1)}) : alert("Son Sayfa")}
  handlePrewPage = ()=>{
    this.state.page >1 ? this.setState({page:(this.state.page-1)}) : alert("Son Sayfa")}
  
  render() {
    
    
    this.getData().then((data) => console.log(data));
    const { navigation } = this.props;
    const num = JSON.stringify(navigation.getParam('page', 'NO-ID'));
    return (
    
    <SafeAreaView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
      <BannerAd
      unitId={BannerCode}
      size={BannerAdSize.SMART_BANNER}
      onAdFailedToLoad={(e)=>console.log(e)}
      requestOptions={{
        requestNonPersonalizedAdsOnly:true,
      }}/>
      
      <View style={styles.pages}>
      
      <TouchableOpacity onPress={()=>{
        //this.fbdb();
        this.handlePrewPage() 
        }}>
      <Text style={styles.text}>GERİ</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{
        this.handlePage(1) }}>
      <Text style={styles.text}>1</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{
        this.handlePage(2) }}>
      <Text style={styles.text}>2</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{
        this.handlePage(3) }}>
      <Text style={styles.text}>3</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{
        this.handlePage(4) }}>
      <Text style={styles.text}>4</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{
        this.handlePage(5) }}>
      <Text style={styles.text}>5</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{
       this.handleNextPage() }}>
      <Text style={styles.text}>İLERİ</Text>
      </TouchableOpacity>
      </View>
      
      <HomeScreen page={this.state.page}/>
    </SafeAreaView>
    )
  }
}
const styles = StyleSheet.create({
  pages:{
    
    marginHorizontal:11,
    paddingHorizontal:9,
    marginTop:-3,
    alignItems:'center',
    alignContent:'center',
    justifyContent:'space-between',
    maxHeight:25,
    flex:1,
    flexDirection:'row',
  }
})
