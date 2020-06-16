import React, {Component} from 'react';
import Menu from  './menuComponents'
import {DISHES} from '../shared/dishes';
import {View, FlatList} from 'react-native';
import DishDetail from './dishdetailComponent';
import {createStackNavigator} from 'react-navigation';
import {createAppContainer} from 'react-navigation';

const MenuNavigator = createStackNavigator({
    Menu: {screen : Menu},
    Dishdetail: {screen: DishDetail}
},{
    initialRouteName: 'Menu',
    navigationOptions:{
        headerStyle:{
            backgroundColor: '#512DA8'
        },
        headerTintColor: '#fff',
        headerTitleStyle:{
            color: '#fff'
        }
    }
});

class Main extends Component {
    render(){
        return(
            <View style = {{flex:1, paddingTop : Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight}}>
               <MenuNavigator />
            </View>
        );
    }
}

export default Main;