import React, { Component } from 'react'
import { Text, View,StyleSheet, SafeAreaView } from 'react-native'
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export const FillHistories = ({coin_id,new_title,new_date,event_date,new_price_release,new_price_until_event_min,new_price_until_event_max,n_p_a_e_1h_min,n_p_a_e_1h_max,n_p_a_e_1h_closing,n_p_a_e_1d_min,n_p_a_e_1d_max,n_p_a_e_1d_closing,n_p_a_e_3d_min,n_p_a_e_3d_max,n_p_a_e_3d_closing,n_p_a_e_1w_min,n_p_a_e_1w_max,n_p_a_e_1w_closing,n_p_a_e_1m_min,n_p_a_e_1m_max,n_p_a_e_1m_closing,exchange,source,source_exch})=>{
   
   var new_color = ''
    exchange= exchange =='all' ? '' : exchange+' BORSASINDA' 
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
    if((new_date==event_date)||(new_date==0)||(new_date=='')||(new_date==' ')||(new_date==undefined))
    preEventInfo='Haberin yayınlandığı tarih '+new_title2 +' gerçekleşmiştir. Bu tarihte fiyat'
    else
    preEventInfo='Haberin çıktığı '+new_date+' ile gerçekleştiği tarih '+event_date+' arasında fiyat'
   
    if(new_title=='list'){
    new_title='listelenme'+' haberi'
    new_color='red' 
    }
    else if (new_title=='update') {
        new_title='güncelleme'+' haberi' 
        new_color='yellow' 
        }
        else if ((new_title=='hardfork')||(new_title=='hard fork')) {
            new_title='sert çatallanmma'+' haberi'  
            new_color='white'
        }
        else if (new_title=='fork') {
            new_title='çatallanma'+' haberi'  
            new_color='green' 
        }
        else if (new_title=='upgrade') {
            new_title='sürüm yükseltme'+' haberi'
            new_color='black' 
        }
        else if ((new_title=='burn')||(new_title=='burning')||(new_title=='ignition')) {
            new_title='yakım'+' haberi'  
            new_color='black' 
        } else {
            new_title=new_title+' haberi'
            new_color='black'
        }
         //const color_1d = change1d >= 0 ? 'green' : 'red';
         let cpremin=((n_p_a_e_1d_min-new_price_release)/new_price_release*100).toFixed(1);
  
        let cpremax=((n_p_a_e_1d_max-new_price_release)/new_price_release*100).toFixed(1);
        
        


        let c1dmin=((n_p_a_e_1d_min-new_price_release)/new_price_release*100).toFixed(1);
  
        let c1dmax=((n_p_a_e_1d_max-new_price_release)/new_price_release*100).toFixed(1);
        
        let c1dclo=((n_p_a_e_1d_closing- new_price_release)/new_price_release*100).toFixed(1);
        let col1dclo= c1dclo >= 0 ? 'green' : 'red';

        let c3dmin=((n_p_a_e_3d_min-new_price_release)/new_price_release*100).toFixed(1);
  
        let c3dmax=((n_p_a_e_3d_max-new_price_release)/new_price_release*100).toFixed(1);
        
        let c3dclo=((n_p_a_e_3d_closing- new_price_release)/new_price_release*100).toFixed(1);
        let col3dclo= c3dclo >= 0 ? 'green' : 'red';

        let c1wmin=((n_p_a_e_1w_min-new_price_release)/new_price_release*100).toFixed(1);
  
        let c1wmax=((n_p_a_e_1w_max-new_price_release)/new_price_release*100).toFixed(1);
        
        let c1wclo=((n_p_a_e_1w_closing- new_price_release)/new_price_release*100).toFixed(1);
        let col1wclo= c1wclo >= 0 ? 'green' : 'red';

        let c1mmin=((n_p_a_e_1m_min-new_price_release)/n_p_a_e_1m_min*100).toFixed(1);
  
        let c1mmax=((n_p_a_e_1m_max-new_price_release)/new_price_release*100).toFixed(1);
        
        let c1mclo=((n_p_a_e_1m_closing- new_price_release)/new_price_release*100).toFixed(1);
        let col1mclo= c1mclo >= 0 ? 'green' : 'red';



    return(
        
        <View style={styles.card}>
            
            <View style={{flexDirection:'row',flexWrap:'wrap'}}>
                <Text style={styles.newTitle}>{event_date} tarihinde {exchange}</Text><Text style={{flexWrap:'wrap', fontWeight:'bold',textTransform:'uppercase', color:new_color}}>{new_title}.</Text>
            </View>
            <View style = {styles.viewStyleForLine}></View>
            <View></View>
            <View style={styles.preEvent}>
               <Text>{preEventInfo}</Text>
                <View style={{flexDirection:'row'}}>
                    <Text style={{fontWeight:'bold'}}>Min≈ </Text>
                    <Text> ${new_price_until_event_min} </Text>
                     <Text style={{fontWeight:'bold'}}>Max≈ </Text>
                     <Text> ${new_price_until_event_max} aralığındadır.</Text>
                </View>
                
            </View>

            <View style = {styles.viewStyleForLine}></View>
            
            <View style={styles.changes}>
                <View style={{flexDirection:'row'}}>
                <Text>{new_title2} tarihinde fiyat≈</Text>
                <Text style={{fontWeight:'bold'}}> ${new_price_release}</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                <Text style={{fontWeight:'bold'}}>1 Gün Sonra Kapanış≈</Text>
                <Text style={{color:col1dclo,fontWeight:'bold'}}>{n_p_a_e_1d_closing}({c1dclo}%)</Text>
                </View>
            <View style={{flexDirection:'row'}}>
                    <Text style={{fontWeight:'bold'}}>Min≈</Text>
                    <Text> ${n_p_a_e_1d_min} (</Text>
                    <Text style={{color:'red'}}> {c1dmin}%)</Text>
                     <Text style={{fontWeight:'bold'}}>Max≈</Text>
                     <Text> ${n_p_a_e_1d_max}</Text>
                     <Text style={{color:'green'}}>(+{c1dmax}%) </Text>
                </View>
            </View>

            <View style = {styles.viewStyleForLine}></View>

            <View style={styles.changes}>
                
                <View style={{flexDirection:'row'}}>
                <Text style={{fontWeight:'bold'}}>3 Gün Sonra Kapanış≈</Text>
                <Text style={{color:col3dclo,fontWeight:'bold'}}>{n_p_a_e_3d_closing}({c3dclo}%)</Text>
                </View>
            <View style={{flexDirection:'row'}}>
                    <Text style={{fontWeight:'bold'}}>Min≈</Text>
                    <Text> ${n_p_a_e_3d_min} (</Text>
                    <Text style={{color:'red'}}>{c3dmin}%) </Text>
                     <Text style={{fontWeight:'bold'}}>Max≈</Text>
                     <Text> ${n_p_a_e_3d_max}</Text>
                     <Text style={{color:'green'}}>(+{c3dmax}%) </Text>
                </View>
            </View>
            <View style = {styles.viewStyleForLine}></View>
            <View style={styles.changes}>
                
                <View style={{flexDirection:'row'}}>
                <Text style={{fontWeight:'bold'}}>1 Hafta Sonra Kapanış≈</Text>
                <Text style={{color:col1wclo,fontWeight:'bold'}}>{n_p_a_e_1w_closing}({c1wclo}%)</Text>
                </View>
            <View style={{flexDirection:'row'}}>
                    <Text style={{fontWeight:'bold'}}>Min≈</Text>
                    <Text> ${n_p_a_e_1w_min} (</Text>
                    <Text style={{color:'red'}}>{c1wmin}%) </Text>
                     <Text style={{fontWeight:'bold'}}>Max≈</Text>
                     <Text> ${n_p_a_e_1w_max}</Text>
                     <Text style={{color:'green'}}>(+{c1wmax}%) </Text>
                </View>
            </View>
            <View style = {styles.viewStyleForLine}></View>


             <View style={styles.changes}>
                
                <View style={{flexDirection:'row'}}>
                <Text style={{fontWeight:'bold'}}>1 Ay Sonra Kapanış≈</Text>
                <Text style={{color:col1mclo,fontWeight:'bold'}}>{n_p_a_e_1m_closing}({c1mclo}%)</Text>
                </View>
            <View style={{flexDirection:'row'}}>
                    <Text style={{fontWeight:'bold'}}>Min≈</Text>
                    <Text> ${n_p_a_e_1m_min} (</Text>
                    <Text style={{color:'red'}}>{c1mmin}%) </Text>
                     <Text style={{fontWeight:'bold'}}>Max≈</Text>
                     <Text> ${n_p_a_e_1m_max}</Text>
                     <Text style={{color:'green'}}>(+{c1mmax}%) </Text>
                </View>
            </View>
            <View style = {styles.viewStyleForLine}></View>
            <View style={{alignItems:'flex-end'}}>
                <Text style={{fontSize:12}}>
                    Veri Kaynağı: {source_exch} borsası
                </Text>
                <Text style={{fontSize:12}}>
                    Haber Kaynağı: {source}
                </Text>
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    card:{
        backgroundColor:'#c4def6',
        borderRadius:31,
        marginVertical:windowHeight*0.005,
        marginHorizontal: windowWidth*0.1,
        justifyContent: 'center',
        alignItems:'flex-start',
        maxWidth:windowWidth*9.2/10,
        width:windowWidth*8/10,
        height:windowHeight*19/40,
        maxHeight:windowHeight*20/40,
        padding: windowHeight*0.025,
        
        borderWidth:0.01,
        shadowColor: "#000000",
        shadowOpacity: 1,
        shadowRadius: 100,
        marginBottom:10,
        
    },newTitle:{
        fontWeight:'bold',
        textTransform:'uppercase'
    },
    viewStyleForLine: {
        borderBottomColor: "black", 
        borderBottomWidth: StyleSheet.hairlineWidth, 
        alignSelf:'stretch',
        width: "100%"
      }
 
})