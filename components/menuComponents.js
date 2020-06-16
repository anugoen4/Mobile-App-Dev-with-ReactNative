import React, {Component} from 'react';
import {View,Text, FlatList} from 'react-native';
import {ListItem, ThemeConsumer} from 'react-native-elements';
import {DISHES} from '../shared/dishes';
import DishDetail from './dishdetailComponent';

class Menu extends Component{
    constructor(props){
        super(props);
        this.state = {
            dishes: DISHES
        };
    }

    static navigationOptions = {
        title: 'Menu'
    };

    
    render(){
        const {navigate} = this.props.navigation;
        const renderMenuItem = ({item, index}) => {
            return(
                <ListItem
                    key = {index}
                    title = {item.name}
                    subtitle = {item.description}
                    hideChevron={true}
                    onPress = {() => navigate('Dishdetail',{dishId: item.id} )}
                    leftAvatar={{source: require('../assets/images/buffet.png')}}
                />
            )
        }

        return(
            <FlatList
                data = {T=this.state.dishes}
                renderItem= {renderMenuItem}
                keyExtractor= {item =>item.id.toString()}
            />
            
        );
    }
    
}

export default Menu;