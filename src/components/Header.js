import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, Image } from 'react-native';

import icon from '../../assets/imgs/icon.png'

export default class Header extends Component {
  render() {
    return (
      <View style={ styles.container } >
        <View style={ styles.rowContainer }>
            <Image source={icon} style={styles.image} />
            <Text style={ styles.title} >Lamb</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? 20 : 0,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: "#BBB",
        width: '100%'
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        color: '#000',
        height: 30,
        fontSize: 18,
        fontFamily: 'shelter'
    },
    image: {
        height:30,
        width: 30,
        resizeMode: 'contain'
    }
    
});