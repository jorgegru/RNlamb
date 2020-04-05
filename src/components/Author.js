import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Gravatar } from 'react-native-gravatar';

export default class Author extends Component {
  render() {
    return (
        <View style={ styles.container }>
            <Gravatar options={{ email: this.props.email, secure: true}}
                style={styles.avatar} />
            <Text style={ styles.nickname }>{ this.props.nickname }</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    avatar: {
        width: 30,
        height: 30,
        marginHorizontal: 15,
        borderRadius: 15
    },
    nickname: {
        color: '#000',
        marginVertical: 10,
        fontSize: 15,
        fontWeight: 'bold'
    }
})
