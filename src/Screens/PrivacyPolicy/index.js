import React, { Component } from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { StyleSheet } from 'react-native'

export default class PrivacyPolicy extends Component {
    render() {
        return (
            <SafeAreaView>
            <View style={{padding:10,maxWidth:350,width:350,}}>
                <Text style={styles.title}> 1-Kişisel Veriler </Text>
                <Text style={styles.inside}> Mobil uygulamalarımızda,
                web sitelerimizde ya da ilişkili diğer ürünlerimizde sizden
                e-posta, isim, ödeme bilgileriniz ve ya adres bilgileriniz
                talep edilebilir. Bu bilgilerin taleep edilmesinin sebebi
                sağlayıcı hizmetlerimizin en verimli şekilde çalışmasıdır. Bu 
                verilerin verilmesi tamamen hangi içeriklerden yararlanmak
                istediğinize göre değişebilir. Verilerinizi vermeme konusunda
                tamamen özgürsünüzdür ve verileri vermemeniz durumunda bazı içeriklerden
                yararlanamayabilirsiniz. Kişisel bilgilerinizi üçüncü parti kişilerle 
                paylaşmamaktayız lakin hukuki yaptırımlar ve sizi ve kendimizi korumak için
                kullanabiliriz. Kişisel bilgilerinizi sadece size içerik sunmak için kullanmaktayız.
                </Text>
                <Text>https://coinmarketcal.com/tr/privacy-policy</Text>
            </View>
            </SafeAreaView>
        )
    }
}
const styles= StyleSheet.create({
    title:{
        fontSize:18,
        fontWeight:'bold'
    },
    inside:{
        fontSize:15,
    }
})