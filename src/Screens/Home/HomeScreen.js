import React, { useEffect,useState,Component } from 'react'
import { View, StyleSheet, Text, Button, SafeAreaView, Touchable } from "react-native";
import { FlatList, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Trypage from '../../Components/Trypage';
//import CoinInfo from '../CoinInfo/CoinInfo';
import { CoinInfo } from '../CoinInfo/CoinInfoScreen';
import { getMarketData } from  '../../Services/cryptoService';
import { NavigationAction, NavigationActions } from 'react-navigation';
import NavigationService from '../../NavigationService';
import Login from '../Login';
import SignUp from '../SignUp';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';
export const HomeScreen = ({page}) => {
    const [searchText,setSearchText] = useState('')
    const [data,setData]= useState([]);
    const[selectedCoinData,setSelectedCoinData] = useState([]);
    
    useEffect(()=>{
        const fetchMarketData = async () =>{
            const marketData = await getMarketData(page);
            return setData(marketData);
        }
        fetchMarketData();
    },[page])
    
      logout = async () => {
        await  auth().signOut().then(()=>console.log('logged out'));
      }
     
    return(
       
        <SafeAreaView style = {styles.container}>

            
            <View style={styles.divider}></View>
            
            <View style={{flexDirection:'row',justifyContent: 'space-between',alignItems:'center'}}>
                
                <View stlye={{flexDirection:'row',justifyContent: 'flex-start',alignItems:'center'}}>
                    <Text style={{color:'#010340',fontWeight:'700',paddingHorizontal:10,marginTop:-10}}>CoinNewHistories.com</Text>
                    
                </View>

            <View style={{flexDirection:'row',marginTop:10,justifyContent:'flex-end',}}>

            <TextInput
            
            style={styles.search,{width:150,marginTop:-15}}
            placeholder="Sayfada Ara"
            underlineColorAndroid="transparent"
            onChangeText={searchText=>setSearchText(searchText)}
            defaultValue={searchText} 
           />
           <TouchableOpacity style={{height:20,width:50,backgroundColor:'#ddd'}} onPress={()=>{
               logout()
           }}>
           <Text >ARAMA</Text>
           </TouchableOpacity>
           </View>
        
           </View>
            <View style={styles.coinsrow,{marginTop:-15}}>
        
            <FlatList
                data={data}
                keyExtractor={(item)=>item.id}
                renderItem={({item})=>(
                    <Trypage 
                    id={item.id}
                    name={item.name}
                    symbol={item.symbol}
                    price={item.current_price}
                    change1d={item.price_change_percentage_24h.toFixed(2)}
                    imageUrl={item.image}
                    
                    />
                )}
                />
                
            </View>
           
        </SafeAreaView>
      
    );
}
const styles = StyleSheet.create({
    container: {
        paddingTop:0,
        flex:1,
        backgroundColor: '#fff',
        paddingBottom:55,
        //padding: 20,
        

    },
    title:{
        
        fontSize:20,
        fontWeight:"bold",
    },
    titlecol:{
        alignItems:'center',
        paddingHorizontal:12,
    },
    coinsrow:{
        marginBottom:1,
    },
    divider:{
        height: StyleSheet.hairlineWidth,
        backgroundColor:'#AAABB1',
        marginHorizontal:12,
        marginTop:10,
    }
});

