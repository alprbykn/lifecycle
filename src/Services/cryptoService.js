import React, { Component } from 'react'
import { Text, View } from 'react-native'
import axios from 'axios';

export const getMarketData = async (page) =>{
        let link = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page="+(page)+"&sparkline=false";
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



