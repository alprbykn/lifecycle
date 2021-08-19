import React, { Component } from 'react'
import { Text, View } from 'react-native'
import axios from 'axios';

export const OnePull = async (x) =>{
    x=x.replace(/['"]+/g, '');
    const link = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids="+x+"&order=market_cap_desc&per_page=1&page=1&sparkline=false&price_change_percentage=24h%2C7d"   
    try{
            const response = await axios.get(link);
            const data = response.data;
            const formattedResponse=formatMarketData(data);
            return formattedResponse;
        } catch(error) {
            console.log(error.message);
        }
}
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



