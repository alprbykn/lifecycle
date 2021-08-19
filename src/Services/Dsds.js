import axios from "axios";

import React from 'react'
import { View, Text } from 'react-native'

export default function Dsds() {
   const response = axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&order=market_cap_desc&per_page=100&page=1&sparkline=false");
   console.log(response.data);
    return (
        <View>
            <Text></Text>
        </View>
    )
}
