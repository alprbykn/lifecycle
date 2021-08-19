import axios from 'axios'
import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Flatlist extends Component {
    componentDidMount() {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false')
        .then((res)=>{console.log(res.data.id);}).catch((e)=>console.log(e))
    }
    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}
