import React, {Component} from 'react';
import Menu from  './menuComponents'
import Home from './homeComponent';
import Contact from './ContactUs';
import About from './AboutUs';
import {View, FlatList} from 'react-native';
import DishDetail from './dishdetailComponent';
import {createStackNavigator, createDrawerNavigator} from 'react-navigation';
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

const HomeNavigator = createStackNavigator({
    Home: {screen: Home}
},{
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

const ContactUsNavigator = createStackNavigator({
    ContactUs: {screen: Contact}
},{
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

const AboutUsNavigator = createStackNavigator({
    AboutUs: {screen: About}
},{
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

const MainNavigator = createDrawerNavigator({
    Home: {
        screen: HomeNavigator,
        navigationOptions:{
            title: 'Home',
            drawerLabel: 'Home'
        }
    },
    AboutUs: {
        screen: AboutUsNavigator,
        navigationOptions: {
            title: 'About Us',
            drawerLabel: 'About Us'
        }
    },
    Menu: {
        screen: MenuNavigator,
        navigationOptions: {
            title: 'Menu',
            drawerLabel: 'Menu'
        }
    },
    ContactUs: {
        screen: ContactUsNavigator,
        navigationOptions:{
            title: 'Contact Us',
            drawerLabel: 'Contact Us'
        }
    },
    AboutUs: {
        screen: AboutUsNavigator,
        navigationOptions: {
            title: 'About Us',
            drawerLabel: 'About Us'
        }
    }
},{
    drawerBackgroundColor: '#D1C4E9'
})

class Main extends Component {
    render(){
        return(
            <View style = {{flex:1, paddingTop : Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight}}>
               <MainNavigator />
            </View>
        );
    }
}

export default Main;