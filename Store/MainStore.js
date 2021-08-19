import { observable,action } from 'mobx'
import React, { Component } from 'react'
import { Text, View } from 'react-native'
class MainStore extends Component {
    @observable name ='alper';
    @action getName(){
        return this.name;
    }
    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}
export default new MainStore();
