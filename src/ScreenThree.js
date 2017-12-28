import React, { Component } from 'react';
import { Text, View, AppRegistry, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';


export default class ScreenThree extends React.Component {
    static navigationOptions = {
        title: 'Page 3',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text> Screen three </Text>
                <Button onPress={() => navigate('Two', {user: 'meghal'})}
                    title="Back" />
            </View>
        )
    }
}