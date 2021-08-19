import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Home from "./Screens/Home";
import Login from "./Screens/Login/LoginScreen";

import CoinList from "./Components/CoinList";
import CoinInfo from "./Screens/CoinInfo/CoinInfo";

const optsNavigation = {
    initRouteNmae:'Home'
}
const NavRoot=createStackNavigator({
    Home:{screen:Home},
    Login:{screen:Login},
    Coin:{screen:CoinInfo},
},optsNavigation);
export default createAppContainer(NavRoot);