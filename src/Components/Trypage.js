import React, { useEffect,useState,Component } from 'react'
import { View, StyleSheet,Text, Image,TouchableOpacity } from 'react-native'
import NavigationService from '../NavigationService';
import { CoinInfoScreen } from '../Screens/CoinInfo/CoinInfoScreen';
import { GetLastEvent } from './GetLastEvent';
import { CoinInfo } from '../Screens/CoinInfo/CoinInfoScreen';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Trypage = ({name,symbol,price,change1d,imageUrl,id},) => {
    
    const color_1d = change1d >= 0 ? 'green' : 'red';
    const sign_1d = change1d >= 0 ? '+' : "";
    
    change1d=parseFloat(change1d).toFixed(2);
    return (
        <TouchableOpacity onPress={()=>{
           // NavigationService.navigate(CoinInfo("coinname"));
          //<CoinInfo/> 
        NavigationService.navigate('CoinInfo',{id:id});
        
        //this.props.navigation.navigate('CoinInfo')
           
            
        }}>
            <View style={styles.itemWrapper}>
               
                {/*Left Side */}
                <Image  style={styles.images}source={{uri: imageUrl}}  />
                <View style={styles.leftWrapper}>
                    <View style={styles.titleWrapper}>
                        <Text style={styles.title}>{name}</Text>
                        <Text style={styles.symbol}>{String(symbol).toUpperCase()}</Text>
                    </View>
                </View>
              
                {/*CENTER SIDE */}
                <View style={styles.leftmidWrapper}>
                        <Text style={styles.title}>Sıradaki Olay</Text>
                        <Text style={styles.info}>listing</Text>
                        <Text style={styles.info}>binance</Text>
                </View>
                <View style={styles.rightmidWrapper}>
                        <Text style={styles.title}>Son Haber</Text>
                       <View> 
                         <GetLastEvent id={id}/>
                       </View>
                </View>
                

                {/* Right Side*/}
                <View style={styles.rightWrapper}>
                        <Text style={styles.title}>${price}</Text>
                        <Text style={[styles.info,{color:color_1d}]}>{sign_1d}  24h%: {change1d}</Text>
                </View>
                
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
itemWrapper:{
paddingHorizontal:8,
marginTop:12,
flexDirection:'row',
justifyContent:'space-between',
alignItems:'center',
padding: 10,
},
images:{
    maxWidth:30,
    maxHeight:30,
height:30,
width:28,
},
titleWrapper:{
    
marginLeft:-6,
},

leftWrapper:{
paddingLeft:15,
marginHorizontal:-15,

maxWidth:windowWidth*3/10,
width:75,
},
rightmidWrapper:{
    justifyContent:'flex-start',
    alignItems:'center',
    marginRight:0,
    maxWidth:windowWidth*1/4,
    height:50,
    paddingLeft:15,

},
leftmidWrapper:{
justifyContent:'center',
alignItems:'center',
marginRight:0,
maxWidth:windowWidth*1/4,
height:50,
marginLeft:20,
},
rightWrapper:{
    justifyContent: 'flex-start',
alignItems:'flex-end',
marginRight:0,
    maxWidth:windowWidth*1/4,
},

title:{
fontSize:13.5,
fontWeight:'bold',
},
symbol:{
    fontSize:11,
    color:'#ABCABC',
},
info:{
fontSize:12,
fontWeight:'900'
},

})

export default Trypage
