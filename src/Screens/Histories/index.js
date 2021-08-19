import React, { Component } from 'react'
import { Dimensions, Image,StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import {FillHistories} from '../../Components/FillHistories'
import {SampleData} from '../../Components/SampleData'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import database from '@react-native-firebase/database';
import firebase from '@react-native-firebase/app'
import { useState,useEffect } from 'react';
import auth from '@react-native-firebase/auth';


const formatMarketData = (data) =>{
    let formattedData = [];
    
   data.forEach(item=>{
    const formattedItem = {
        ...item
    }
    formattedData.push(formattedItem);
    });
    return formattedData;
    }
export const Histories = ({id}) => {
    const [history,setHistory]= useState([]);
    id=id.replace(/['"]+/g, "");
    const historyKey="/coins/0/"+id+""
    useEffect(()=>{
        const fbdb = async () =>{
            await database()
      .ref(historyKey)
      .once('value')
      .then(snapshot => {
        const data = snapshot.val();
        const formattedResponse= formatMarketData(data);
        setHistory(formattedResponse)
        return formattedResponse
      });5
      };
        
        fbdb();
    },[]);
return (
        
       <View style={{}}>
       <FlatList
                showsHorizontalScrollIndicator={true}
                horizontal
                snapToInterval={windowWidth}
                contentContainerStyle={{alignItems:'center'}}
                data={history.sort((a, b) =>
                    b.event_date.split('-').join().localeCompare(a.event_date.split('-').join())) }
                keyExtractor={(item)=>item.new_id}
                renderItem={({item})=>(
                    <FillHistories
                    coin_id= {item.coin_name}
                    new_title={item.new_title}
                    event_date={item.event_date}
                    new_date={item.new_date}
                    new_price_release={item.new_price_release}
                    new_price_until_event_max={item.new_price_until_event_max}
                    new_price_until_event_min={item.new_price_until_event_min}
                    exchange={item.exchange}
                    source_exch={item.source_exch}
                    n_p_a_e_1d_max={item.n_p_a_e_1d_max}
                    n_p_a_e_1d_min={item.n_p_a_e_1d_min}
                    n_p_a_e_1h_max={item.n_p_a_e_1h_max}
                    n_p_a_e_1h_min={item.n_p_a_e_1h_min}
                    n_p_a_e_3d_min={item.n_p_a_e_3d_min}
                    n_p_a_e_3d_max={item.n_p_a_e_3d_max}
                    n_p_a_e_1w_min={item.n_p_a_e_1w_min}
                    n_p_a_e_1w_max={item.n_p_a_e_1w_max}
                    n_p_a_e_1m_min={item.n_p_a_e_1m_min}
                    n_p_a_e_1m_max={item.n_p_a_e_1m_max}
                    n_p_a_e_1h_closing={item.n_p_a_e_1h_closing}
                    n_p_a_e_1d_closing={item.n_p_a_e_1d_closing}
                    n_p_a_e_3d_closing={item.n_p_a_e_3d_closing}
                    n_p_a_e_1w_closing={item.n_p_a_e_1w_closing}
                    n_p_a_e_1m_closing={item.n_p_a_e_1m_closing}
                    source={item.source}

                    />
                )
                }
                
               />                             
       </View>
    
)
}


const styles = StyleSheet.create({
   
 
})
