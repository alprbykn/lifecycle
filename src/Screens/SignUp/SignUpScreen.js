import React, { useState } from 'react';
import { Button, StyleSheet, Text, View,Image} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView,ScrollView } from 'react-navigation';
import NavigationService from '../../NavigationService';
import * as Yup from 'yup';
import {Formik} from 'formik'
import MainStore from '../../../Store/MainStore';
import auth from '@react-native-firebase/auth';
import SignUp from '.';

import Home from '../Home'
import { firebase } from '@react-native-firebase/database';
const email = "";
const password="";
const create= true;
export default class SignUpScreen extends React.Component {
    constructor(){
        super();
        this.state={
            checkbox:false
        }
        }
    
    componentDidMount(){
       
    };
    _handleSubmit = (values) =>{
        auth()
        .createUserWithEmailAndPassword(values.email, values.password)
        .then(() => {
            const user =firebase.auth().currentUser;
            user.updateProfile({
                displayName:'nopremium'
            })
          alert('Hesap başarıyla oluşturuldu. Yönlendiriliyorsunuz');
          this.props.navigation.navigate('Home')

        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            alert('Bu e-posta kullanılmaktadır.');
            this.props.navigation.navigate('SignUp');
          }
          if(error.code === 'auth/weak-password'){
              alert('Şifre çok zayıf');
              this.props.navigation.navigate('SignUp');
          }
          if (error.code === 'auth/invalid-email') {
            alert('Bu e-posta geçersizdir.');
            this.props.navigation.navigate('SignUp');
          }
          console.error(error);
          
        });
    };  
    render(){
    return(
        <SafeAreaView style={{ flex: 1,backgroundColor:'#fff' }} contentContainerStyle={{ flexGrow: 1 }}>
             <ScrollView style={{flex: 1,backgroundColor:'#fff'}} contentContainerStyle={{ flexGrow: 1 }}>
                 <View stlye={{backgroundColor:'white'}}>
                    <View style={styles.logo_area}>
            <Image  source={require('../../Components/Images/logo.jpg')}  />
                    </View>
        <Formik
                        initialValues={{email:'',password:'',premium:''}}
                        onSubmit={this._handleSubmit}
                        validationSchema={Yup.object().shape({
                            email:Yup.string().required("e-mail boş olamaz"),
                            password:Yup.string().required("şifre boş olamaz"),
                        })}
                        >{({
                            values,handleSubmit,handleChange,errors,isValid,isSubmitting,
                        })=>(
                    <View style={styles.container}>
            
            <TextInput 
            
                placeholder="E-posta" 
                value={values.email}
                keyboardType={"email-address"}
                style={StyleSheet.textInput}
                onChangeText={handleChange('email')}/>
                {(errors.email)&&<Text>{errors.email}</Text>}
            
            {(errors.email)&&<Text style={styles.alert}>{errors.email}</Text>}
                <TextInput
                placeholder="Şifre" 
                value={values.password} 
                style={StyleSheet.textInput}
                onChangeText={handleChange('password')}
                secureTextEntry={true}/>
                {(errors.password)&&<Text>{errors.password}</Text>}
                
            {(errors.password)&&<Text style={styles.alert}>{errors.password}</Text>}
            <View style={styles.checkboxRow}
                onPress={handleSubmit}>
                <TouchableOpacity style={styles.checkbox} onPress={()=>{this.setState({checkbox:!this.state.checkbox})

                }} >{
                    this.state.checkbox &&
             <Text style={{fontSize:20,}}>✓</Text>
             }
             </TouchableOpacity>  
                        
                    <Text style={{padding:5,paddingTop:15,marginLeft:9,maxWidth:250}}>Kullanım şartlarını ve Politikalarını kabul ediyorum.</Text>
               
                </View>
            <View style={{justifyContent:'center',alignItems:'center',paddingTop:20,}}>
                <TouchableOpacity 
                disabled={isSubmitting||!isValid}
                style={styles.Button}
                onPress={handleSubmit}
                >
                
            <Text style={{color:'white'}}>KAYIT OL</Text>
                </TouchableOpacity>
                </View>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Login')}>
                <Text style={styles.text}>
                Zaten bir hesabım var. Giriş Yap.</Text>
                    </TouchableOpacity>
                    </View>)}
            </Formik>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#fff',
        justifyContent: 'center',
        padding: 22,
        
        
    },
    textInput: {
        borderWidth:1,
        borderColor:'grey',
        padding: 10,
        marginBottom: 30,
        borderRadius:6,
    },
    text:{
        color : 'blue',
        marginTop: 20,
        textAlign:'center',
    },
    logo_area:{
        paddingTop:69,
        backgroundColor:'#fff',
        alignItems: 'center',
    },
    alert:{
        color:'red',
        fontSize:12,
    },
    checkbox:{
        alignItems:'center',
        marginTop:10,
        width:25,
        height:25,
        borderWidth:0.3,
    },
    checkboxRow:{

        alignItems:'center',
      flexDirection:'row',
    },
    Button:{
        
        justifyContent: 'center',
        alignItems:'center',
borderWidth:1,
height:50,
width:200,
backgroundColor:'#010340'
    }

})


