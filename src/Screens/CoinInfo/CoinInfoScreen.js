import React, { Component } from 'react'
import { Image,SafeAreaView,StatusBar,StyleSheet, Text, View } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { useState } from 'react';
import { useEffect } from 'react';
import { CoinBody } from '../../Components/CoinBody';
import { OnePull } from '../../Services/OnePull';
import { Histories } from '../Histories';
import firebase from '@react-native-firebase/app'
import firestore from '@react-native-firebase/firestore';


export const CoinInfoScreen = ({coin_id}) => {
   
    const [data,setData]= useState([]);
    const[selectedCoinData,setSelectedCoinData] = useState([]);
   useEffect( async ()=>{
       const fetchMarketData = async () =>{
           const marketData = await OnePull(coin_id);
          setData(marketData);
          return marketData;
           
       }
       return fetchMarketData();
   },[])
 
return (
    <SafeAreaView style={{flex:1}}>
    <View>
       
       <View style={styles.top}>

       <FlatList
                
                data={data}
                keyExtractor={(item)=>item.id}
                renderItem={({item})=>(
                    <CoinBody
                        id={item.id}
                        name={item.name}
                        symbol={item.symbol}
                        price={item.current_price}
                        change1d={item.price_change_percentage_24h_in_currency.toFixed(2)}
                        image={item.image}
                        vol={item.total_volume}
                        sup={item.total_supply}
                        cap={item.market_cap}
                    />
                )}
                />
               
                        
       </View>
       <View style={styles.bottom}>
            <Histories id={coin_id}/>
        </View>
    </View>
    </SafeAreaView>
)
}


const styles = StyleSheet.create({
  top:{

  },
  bottom:{
    
    justifyContent:'center',
  }
 
})
