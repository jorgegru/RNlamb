import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import { login } from '../store/actions/user';
// import userReducer from '../store/reducers/user';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            nome: 'temporario'
        };
    }

    componentDidUpdate = prevProps => {
        if (prevProps.isLoading && !this.props.isLoading) {
            this.props.navigation.navigate('Profile');
        }
    }

    login = () => {
        this.props.onlogin({ ...this.state });
    }

    render() {
        console.log(this.props);

        return (
        <View style={styles.container}>
            <TextInput placeholder="Email" style={styles.input} 
                autoFocus={true} keyboardType='email-address' 
                value={this.state.email}
                onChangeText={email => this.setState({email})}
            />
            <TextInput placeholder="Senha" style={styles.input} 
                autoFocus={true} secureTextEntry 
                value={this.state.password}
                onChangeText={password => this.setState({password})}
            />
            <TouchableOpacity onPress={this.login} style={styles.buttom}>
                <Text style={styles.buttomText}> Login </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Register') }} style={styles.buttom}>
                <Text style={styles.buttomText}> Criar nova conta </Text>
            </TouchableOpacity>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttom: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4'
    },
    buttomText: {
        fontSize: 20,
        color: '#FFF'
    },
    input: {
        marginTop: 20,
        width: '90%',
        backgroundColor: '#EEE',
        height: 40,
        borderWidth: 1,
        borderColor: '#333'
    }
});

const mapStateToProps = state => {
    return {
        isLoading: state.user.isLoading
    }
}

export default connect(mapStateToProps, {
    onlogin: login
})(Login);