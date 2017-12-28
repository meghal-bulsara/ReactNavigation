import React, { Component } from 'react';
import { Text, View, AppRegistry, Button, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class ScreenOne extends React.Component {
    static navigationOptions = {
        title: 'Page 1',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text style={styles.red}> Screen One </Text>
                <Button onPress = {() => navigate('Two', {user: 'meghal'})}
                title="Next" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bigblue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red',
    },
});