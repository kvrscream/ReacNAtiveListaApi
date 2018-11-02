import { createStackNavigator } from 'react-navigation';

import Main from './pages/main';

export default createStackNavigator({
    Main,
}, 
{
    navigationOptions: {
        headerStyle:{backgroundColor:"#a64dff"},
        headerTintColor:"#fff"
    }
}




);