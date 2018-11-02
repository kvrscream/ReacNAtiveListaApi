import React, { Component } from 'react';
import {View, Text, FlatList} from 'react-native';
import api from '../services/api';

export default class Main extends Component {
    //Usar biblioteca axios para buscar dados na api

    static navigationOptions = {
        title: 'JSHunt'
    }

    state = {
        docs: [],
    };

    //Metodo que dispara o automaticamente um evento quando a tela é montada
    componentDidMount(){
        return fetch("https://rocketseat-node.herokuapp.com/api/products")
            .then((response) => response.json() )
            .then((responseJson) => {
                
                this.setState({
                    docs: responseJson.docs
                }, function(){
                                 
                });
            });
    };

    render(){
        return (
            <View>
                <FlatList 
                    data={this.state.docs}
                    renderItem={({item}) => <Text>{item.title}</Text> }
                    keyExtractor={({id}, index) => id}
                />
            </View>
        )
    }
} 