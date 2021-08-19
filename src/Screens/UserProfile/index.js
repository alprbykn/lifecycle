import React, { Component } from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';
import { withOrientation } from 'react-navigation';
import { UserProfilePage } from './UserProfilePage';
import { firebase } from '@react-native-firebase/app';
import UseOfTerms from '../UseOfTerms';
export default class UserProfile extends Component {
        constructor(props){
            super();
            this.state={user:[]}
        }
   
     async componentDidMount (){
      await this.setState({user:firebase.auth().currentUser});
        
        if(this.state.user){
        alert(this.state.user.email)
        }
      }
    render() {
        return (
            <SafeAreaView>
                <View>
                    <TouchableOpacity onPress={()=>{this.props.navigation.navigate('UseOfTerms')}}><Text>gitititi</Text></TouchableOpacity>
                    <UserProfilePage 
                    user={this.state.user}
                    navigation={this.props.navigation}
                    />
                </View>
            </SafeAreaView>
        )
    }
}
