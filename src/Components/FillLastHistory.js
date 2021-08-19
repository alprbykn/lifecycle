import React, { Component } from 'react'
import { Text, View } from 'react-native'

export const FillLastHistory = ({new_title,event_date,exchange})=> {
   if(new_title=='')
   new_title2="no data"
   else if (new_title==' ') {
       new_title2='no data'
   }
   else if (new_title==null) {
    new_title2='no data'
    }
    else if (new_title==undefined) {
        new_title2='no data'
        }
   
    exchange= exchange =='all' ? '' : exchange
    var preEventInfo = ''
    var new_title2=""
    if(new_title=='list')
    new_title2='listelenme'
    else if (new_title=='update') {
        new_title2='güncelleme'
        }
        else if ((new_title=='hardfork')||(new_title=='hard fork')) {
            new_title2='sert çatallanmma' 
        }
        else if (new_title=='fork') {
            new_title2='çatallanma'  
        }
        else if ((new_title=='burn')||(new_title=='burning')||(new_title=='ignition')) {
            new_title2='yakım'
        } else {
            new_title2=new_title
        }
        return (
            <View style={{}}>
                <Text> {new_title2}</Text>
                <Text> {exchange}</Text>
                
            </View>
        )
    
}
