import React, { Component, version } from 'react'
import { Text, View,Image,StyleSheet, SafeAreaView} from 'react-native'
import { Histories } from '../Screens/Histories'
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
function currencyFormat(num) {
    return '$' + num.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
 }
 
export const CoinBody = ({name,symbol,change1d,vol,sup,image,price,cap,id}) => {


let sign = change1d >=0 ? "+" : "-";
let color = change1d >=0 ? "green" : "red";
    return(
    <SafeAreaView >
        <View style={styles.topPage}>
        <View style={{flexDirection:'row'}}>
            <View style={styles.row1}> 
            
                <Image  style={styles.images}source={{uri: image}}  />
                <Text style={{textTransform:'uppercase',fontWeight:'bold'}}> 
                   {name} ({symbol})
                </Text>
                
                <View style={styles.others}>
                </View>
            <View style = {styles.viewStyleForLine}></View>
            <View>
                <View style={styles.price}>
                <Text>
                Fiyat: {currencyFormat(price)} 
                </Text>
                
                <Text style={{color:color}}>
                ({sign}%{change1d})
                </Text>
                </View>
            
                <Text > 
                Piy. Değ: {currencyFormat(cap)}
                </Text>
           
                <Text>
                Hacim(1gün):{currencyFormat(vol)}
                </Text>
          
                <Text>
                Maksimum Adet: {sup}
                </Text>
            </View>
            </View>

        </View>
        <View style={styles.nextEvent}>
            <View style={{}}>
                <Text style={{marginBottom:15,fontWeight:'bold'}}>SIRADAKİ ETKİNLİK</Text>
            </View>
            <View>
                
            </View>
            <View style = {styles.viewStyleForLine}></View>
            
        </View>
        
        </View>
        
    </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    images:{
       marginTop:15,
        maxWidth:40,
        maxHeight:40,
        marginBottom:10,
    height:40,
    width:40,
    },
    row1:{
        
        borderRadius:31,
        maxWidth:windowWidth*4/9,
        maxHeight:windowHeight*2/5,
        borderWidth:0,
        margin:0,
        justifyContent:'space-between',
        alignItems:'flex-start',
        flexDirection:'column',
        padding:25,
        marginTop:-10,
    },
    others:{
        justifyContent: 'space-between',
    paddingVertical:8,
    
    },
    price:{
        flexDirection:'row',
    },
    nextEvent:{
        marginTop:55,
        marginBottom:25,
        marginHorizontal:15,
        paddingVertical:30,
        paddingTop:30,
        padding: 15,
        alignItems:'center',
        maxWidth:windowWidth*5/10,
        maxHeight:windowHeight*3/10,
        borderRadius:31,
        backgroundColor:'#9DF5A9',
       
    },
    topPage:{
        flexDirection:'row',
    },
    card:{
       
    },
    viewStyleForLine: {
        borderBottomColor: "black", 
        borderBottomWidth: StyleSheet.hairlineWidth, 
        alignSelf:'stretch',
        width: "100%"
      }


})