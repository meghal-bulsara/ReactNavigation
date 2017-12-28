import React, { Component } from 'react';
import { Text, View, AppRegistry, Button, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';


export default class ScreenTwo extends React.Component {
    static navigationOptions = {
        title: 'Page 2',
    };
    render() {
        const { navigate } = this.props.navigation;
        const { params } = this.props.navigation.state;
        return (
            <View>
                <Text style={styles.bigblue}> Welcome {params.user} </Text>
                <Button style={styles.button} onPress={() => navigate('Three')}
                    title="Next" raised={true}
                    theme='dark'
                    overrides={true}
                    backgroundColor='#3fffff' />
                <Button onPress={() => navigate('One')}
                    title="Back" />
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
    button : {
        color: 'red',
        fontSize: 10,
        height: 40,
        width: 50
    }
});
