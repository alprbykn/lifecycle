import React, { Component } from 'react'
import { Home } from './Screens/Home'
import { createAppContainer, createSwitchNavigator, NavigationEvents } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import NavigationService from './NavigationService'
import {check, PERMISSIONS, RESULTS,checkMultiple,request,requestMultiple} from 'react-native-permissions';
import { Platform } from 'react-native'
import {BannerAd,BannerAdSize, TestIds} from '@react-native-firebase/admob'
import Login from './Screens/Login'
import SignUp from './Screens/SignUp'
import { News } from './Screens/News'
import CoinInfo from './Screens/CoinInfo'
import { CoinInfoScreen } from './Screens/CoinInfo/CoinInfoScreen'
import AuthRedirect from './Screens/AuthRedirect'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { View, Text } from 'react-native'
import UserProfile from './Screens/UserProfile'
import PrivacyPolicy from './Screens/PrivacyPolicy'
import UseOfTerms from './Screens/UseOfTerms'
import Disclaimer from './Screens/UserProfile/Disclaimer'
const BannerCode= (Platform.OS=='android') ? 'ca-app-pub-1011921588767736/7594978167' : 'ca-app-pub-1011921588767736/4962103637';


<BannerAd
      //unitId={TestIds.BANNER}
      unitId={BannerCode}
      size={BannerAdSize.SMART_BANNER}
      requestOptions={{requestNonPersonalizedAdsOnly:true,}}
      />
      

class sidePage extends Component {
  logout = () => {
    auth().signOut().then(()=>console.log('logged out'));
}
  render() {
    return (
      <View>
        <Text> Profile </Text>
        <TouchableOpacity onPress={()=>{logout()

        }}>
        <Text> logout </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const AppStack = createStackNavigator({
  Home:{
    screen: Home,
    navigationOptions:{
        title:"Kripto Varlıklar",
           headerStyle:{
             height:40,
             backgroundColor:'#010340'
             
           },
           headerTitleStyle:{color:'#ddd',
          justifyContent: 'center',
        textAlign:'center'},
        
        
    }
},CoinInfoScreen:{
  screen: CoinInfoScreen,
  navigationOptions:{
      headerTitle:'haberler',
      title:"CryptoCurrencies", 
      headerStyle:{
        height:40,
        
      }  
  }

},
CoinInfo:{
  screen:CoinInfo,
navigationOptions:{
  headerStyle:{
    height:40,
  }
}},
News:{
  screen: News,
  navigationOptions:{
      title:"Kripto Varlıklar",
         headerStyle:{
           height:40,
           backgroundColor:'#010340'
           
         },
         headerTitleStyle:{color:'#ddd',
        justifyContent: 'center',
      textAlign:'center'},
      
      
  }
},Ayarlar:{
  screen: UserProfile,
  navigationOptions:{
      title:"Ayarlar",
         headerStyle:{
           height:40,
           backgroundColor:'#010340'
           
         },
         headerTitleStyle:{color:'#ddd',
        justifyContent: 'center',
      textAlign:'center'},
      
      
  },PrivacyPolicy:{
    screen:PrivacyPolicy,
  },UseOfTerms:{
    screen:UseOfTerms,
  },
}

})
const profileStack = createStackNavigator({
  UserProfile:{
    screen:UserProfile,
    navigationOptions:{
      height:40,
      title:'Kullanıcı Bilgileri'
    }
  },
  PrivacyPolicy:{
    screen:PrivacyPolicy,
  },
  UseOfTerms:{
    screen:UseOfTerms,
  },
  Disclaimer:{
    screen:Disclaimer,
    navigationOptions:{
      height:40,
      title:'Feragatname'
    }
  }
})
const homeStack = createBottomTabNavigator({
  Home:{
  screen:AppStack,navigationOptions:{
    height:20,
    title:'Ana Sayfa'
    
    }
  },
  News:{
  screen:News,navigationOptions:{
    height:20,
    headerTitle:'haberler',
    title:'Haberler',
    header:'Haberler',
    }
},Ayarlar:{
  screen:profileStack,navigationOptions:{
    height:20,
    headerTitle:'Ayarlar',
    
    }
},

  
})
const AppNavigator = createDrawerNavigator({
  Home:homeStack,
},{contentComponent:sidePage
})
const AuthenticateStack= createStackNavigator({
  SignUp:{
    screen:SignUp,
    navigationOptions:{
      header:false
    }
  },
  Login:{
    screen:Login,
    navigationOptions:{
      header:false
    },  
  Home:{
      screen:Home,
  }
}
});
const SwitchNavigator = createSwitchNavigator({
App:AppNavigator,
AuthRedirect,
Auth:AuthenticateStack,
},{
  initialRouteName:'AuthRedirect'
})



const AppContainer = createAppContainer(SwitchNavigator);

export default class Route extends React.Component {
  // ...
componentDidMount(){
const locationPermission= Platform.select({
  android:PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION,
  ios:PERMISSIONS.IOS.ACCESS_BACKGROUND_LOCATION
});
const notificationPermission= Platform.select({
  
});

const faceIDPermission= Platform.select({
  ios:PERMISSIONS.IOS.FACE_ID,
});
requestMultiple([locationPermission,faceIDPermission]);
  checkMultiple([locationPermission,faceIDPermission]).then((status)=>{
    
  })
}

  render() {
    return (
      
      <AppContainer
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
      
    );
  }
}
/*
export default class App extends Component {  

  render() {
    return (
      
      //<Flatlist/>
     //<HomeScreen/>
     //<Route/> 
     //<NavRoot/>
    //<Datapull/>
    //<CoinInfo/>
     
    )
  }
}*/
// App.js



