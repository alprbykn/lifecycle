import React, { useState } from 'react';
import { Button, StyleSheet, Text, View,Image} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView,ScrollView } from 'react-navigation';
import * as Yup from 'yup';
import {Formik} from 'formik'
import SignUp from '../SignUp';
import SignUpScreen from '../SignUp/SignUpScreen';
import MainStore from '../../../Store/MainStore';
import { Home } from '../Home';
import auth from '@react-native-firebase/auth';

const email = "";
const password="";
const create= true;
export default class LoginScreen extends React.Component {
    constructor(){
        super();
        this.state={
            hidepassword:false
        }
        }
    componentDidMount(){
       
    };
    _handleSubmit = (values) =>{
        auth()
        .signInWithEmailAndPassword(values.email, values.password)
        .then(() => {
          alert('Giriş başarılı.');
          this.props.navigation.navigate('Home');
        })
        .catch(error => {
          if (error.code === 'auth/wrong-password') {
            alert('Yanlış Şifre');
           // this.props.navigation.navigate('Login');
           return ;
          }
      
          if (error.code === 'auth/user-not-found') {
            alert('Kullanıcı bulunamadı.');
            //this.props.navigation.navigate('Login');
            return;
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
                        initialValues={{email:'',password:''}}
                        onSubmit={this._handleSubmit}
                        validationSchema={Yup.object().shape({
                            email:Yup.string().required("please use a real email address"),
                            password:Yup.string().required("plaese enter your valid password"),
                        })}
                        >{({
                            values,handleSubmit,handleChange,errors,isSubmitting,isValid
                        })=>(
                    <View style={styles.container}>
            
            <TextInput 
            
                placeholder="Enter Your Email" 
                value={values.email}
                keyboardType={"email-address"}
                style={StyleSheet.textInput}
                onChangeText={handleChange('email')}
            />
            {(errors.email)&&<Text style={styles.alert}>{errors.email}</Text>}
                <TextInput
                placeholder="password" 
                value={values.password} 
                style={StyleSheet.textInput}
                onChangeText={handleChange('password')}
                secureTextEntry={true}/>
                {(errors.password)&&<Text style={styles.alert}>{errors.password}</Text>}
        <View style={{justifyContent:'center',alignItems:'center',paddingTop:20}}>
                <TouchableOpacity 
                disabled={!isValid}
                style={styles.Button}
                onPress={handleSubmit}>
            <Text style={{color:'white'}}>GİRİŞ YAP</Text>
                </TouchableOpacity>
        </View>
                <TouchableOpacity>
                <Text style={styles.text} >
                    Forgot Your Password?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('SignUp')}>
                <Text style={styles.text}>
                    Create an Account.</Text>
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
    Button:{
        justifyContent: 'center',
        alignItems:'center',
borderWidth:1,
height:50,
width:200,
backgroundColor:'#010340'
    }
})


