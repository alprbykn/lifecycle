import React, { Component } from 'react'
import { Text, View ,SafeAreaView,TouchableOpacity, Image} from 'react-native'
import { StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';
import { firebase } from '@react-native-firebase/app';
import { TextInput } from 'react-native-gesture-handler';
import UseOfTerms from '../UseOfTerms';
import PrivacyPolicy from '../PrivacyPolicy';
import NavigationService from '../../NavigationService';
import Disclaimer from './Disclaimer';

export const UserProfilePage = ({user,navigation}) => {
    const current_user =firebase.auth().currentUser;
         
    const u_status = current_user.displayName;
    const u_statuscol = 'red'
    const u_email = current_user.email;
    u_status =='nopremium' ? 'red' :  'green'
   const makePremium = () =>{
        current_user.updateProfile({
            displayName:'premium'
        });
    }
    logout = async () => {
        await  auth().signOut().then(()=>console.log('logged out'));
      }
    return(
        <SafeAreaView>
            <View style={styles.pagecontainer}>
            <View style={styles.ppsection}>
                <Image style={styles.image} source={require('../../Components/Images/profile.png')}></Image>
            </View>
            <View style={styles.user}>
                
            <Text style={styles.userInfoHeader}>
                   Kullanıcı Bilgileri
                </Text>
                </View>
                <View>
            <Text style={styles.userInfo}>
                   Kullanıcı E-posta: {u_email}
                </Text>
               
                <Text style={styles.userInfo,{color:u_statuscol}}>
                   Kullanıcı Türü: {u_status}
                </Text>
            </View>

            <View>
               
                <Text style={styles.userInfoHeader}>
                    Ayarlar
                </Text>
                
               <TouchableOpacity onPress={()=>{
                   
               }}>
               <View style={{flexDirection:'row',alignItems:'center',}}>
                <Text style={styles.userInfo} >
                    E-mail değiştir
                </Text>
                <Image style={styles.imagePen} source={require('../../Components/Images/change.png')}></Image>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{

                }}>
                <View style={{flexDirection:'row',alignItems:'center',}}>
                <Text style={styles.userInfo}>
                    Şifre Değiştir
                </Text>
                <Image style={styles.imagePen} source={require('../../Components/Images/change.png')}></Image>
                </View>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={()=>{
               navigation.navigate('Disclaimer',{});
               }}>
               <View style={{flexDirection:'row',alignItems:'center',}}>
               <Text style={styles.userInfo}>
                  Feragatname
               </Text>
               
               </View>
               </TouchableOpacity>
            <View>
              <TouchableOpacity onPress={()=>{
                  navigation.navigate('UseOfTerms',{})
                  
              }}>
              <View style={{flexDirection:'row',alignItems:'center',}}>
               <Text style={styles.userInfo} >
                  Kullanım Koşulları
               </Text>
              
               </View>
               </TouchableOpacity>
               <TouchableOpacity onPress={()=>{
               navigation.navigate('PrivacyPolicy',{});
               }}>
               <View style={{flexDirection:'row',alignItems:'center',}}>
               <Text style={styles.userInfo}>
                  Gizlilik Sözleşmesi
               </Text>
               
               </View>
               </TouchableOpacity>
           </View>
            </View>

            <View>
                    {
                        u_status=='nopremium' ? 
                        <TouchableOpacity onPress={()=>{
                            makePremium()
                            alert('premium oldun')
                        }}>
                            <View >
                                <Text>
                                    Görmek için premium olun
                                </Text>
                            </View>
                        </TouchableOpacity> :
                        <View >
                        <Text>
                            Zaten premiumsun keke
                        </Text>
                        </View>
                        
                    }
            </View>
            <View style={{justifyContent:'center',alignItems:'center',}}>
        <View style={styles.logout}> 
            <TouchableOpacity onPress={()=>{
                logout();
            }}>
            <View>
                <Text style={{color:'white',fontSize:16,}}>SIGN OUT</Text>
            </View>
            </TouchableOpacity>
        </View>
        </View>
        
        </SafeAreaView>
    )
} 

const styles= StyleSheet.create({
    pagecontainer:{
        
        padding:20,
        flexDirection:'column',
    },
    ppsection:{
        
        alignItems:'center'
    },
    image:{
        height:70,
        width:70,
    },
    imagePen:{
        height:10,
        width:10,
    },
    user:{
        marginTop:10,

    },
    userInfoHeader:{
        marginVertical:5,
        fontSize:18,
        fontWeight:'bold',
        textDecorationLine:'underline',
    },
    userInfo:{
        paddingVertical:5,
        fontSize:16,
        
    },viewStyleForLine: {
        borderBottomColor: "black", 
        borderBottomWidth: StyleSheet.hairlineWidth, 
        alignSelf:'stretch',
        width: "100%"
    },
    logout:{
    marginVertical:20,
    backgroundColor:'red',
    justifyContent:'center',
    width:150,
    height:50,
    alignItems:'center',
    },
})