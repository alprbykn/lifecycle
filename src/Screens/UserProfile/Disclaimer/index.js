import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Disclaimer extends Component {
    render() {
        return (
            <View style={{maxWidth:350,width:350,padding:20,}}>
                <Text style={{fontWeight:'bold'}}>  Feragatname: </Text>
                <Text> Bu uygulama ve bağlantılı site coinnewhistories.com sitesindeki
                    içerikler, köprü bağlantılı sitelerde, 
                    ilgili diğer uygulamalar, mobil uygualamalr, forumlar, bloglar,
                     sosyal medya hesapları ve diğer platformlarda 
                     sağlanan tüm içerik ("Site") yalnızca sizi bilgilendirme
                     amaçlıdır ve üçüncü taraf veri sağlayıcıları tarafından
                     sağlanmıştır. Doğruluk ve güncellik dahil,
                      ancak bununla sınırlı olmamak üzere sunulan içerik ve veriler ile 
                      ilgili hiçbir türden garanti vermiyoruz. Sağlanılan bilgilerin,
                      verilerin, görsellerin ya da herhangi içeriğin finansal ya da hukuki
                      tavsiye içermediğini belirtiriz. İlişkili mobil uygulamalar,
                      web siteleri, bloglar, sosyal medya hesapları ya da ilişkili herhangi bir 
                      içeriğin finansal tavsiye, hukuki tavsiye veya herhangi bir amaç 
                       için özel olarak güvenebileceğiz herhangi başka şekilde
                        tavsiye içermez. Verilerimize güvenme, kullanma ve işlem yapma tercihi
                        tamamen sizin kararınızdır ve hiçbir şekilde zorlama, garati verme içermez. 
                         İçeriğimize güvenmeden önce kendi araştırmanızı,
                          incelemenizi, analizinizi ve doğrulamanızı yapmalısınız. 
                          Kripto para piyasası ve diğer finansal işlemler ve yatırımlar
                          çok risklilerdir ve büyük kayıplara 
                          sebep olabilir, dolayısıyla herhangi
                           bir karar almadan önce lütfen mali danışmanınızla görüşün.
                            Sitemizdeki hiçbir içerik, teşvik, tavsiye veya teklif amaçlı değildir. 
                            </Text>
            </View>
        )
    }
}
