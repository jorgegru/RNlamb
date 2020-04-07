import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, Platform, Image } from 'react-native';
import { Gravatar } from 'react-native-gravatar';

import icon from '../../assets/imgs/icon.png'

class Header extends Component {
  render() {
    const nome = this.props.nome || 'Anonymous';
    const gravatar = this.props.email ?
      <Gravatar options={{ email: this.props.email, secure: true}} 
        style={styles.avatar}/>
      : null;
    return (
      <View style={ styles.container } >
        <View style={ styles.rowContainer }>
            <Image source={icon} style={styles.image} />
            <Text style={ styles.title} >Lamb</Text>
        </View>
        <View style={styles.userContainer}>
          <Text style={styles.user}>{nome}</Text>
          {gravatar}
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
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
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
    },
    userContainer:{
      flexDirection: 'row',
      alignItems: 'center'
    },
    user: {
      fontSize: 10,
      color: '#888'
    },

    avatar: {
      width: 30,
      height: 30,
      marginLeft: 10  ,
      borderRadius: 75,
    }
    
});

const mapStateToProps = state => {
  return {
    email: state.user.email,
    nome: state.user.nome,
  }
}

export default connect(mapStateToProps)(Header);