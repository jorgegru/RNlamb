import React, { Component } from 'react';
import { View, Text,
    StyleSheet,
    TouchableOpacity,
    TextInput
} from 'react-native';
import { connect } from 'react-redux';
import { createUser } from '../store/actions/user';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            email: '',
            password: ''
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.nome}
                    placeholder="Nome"
                    autoFocus
                    value={this.state.nome}
                    onChangeText={nome => this.setState({ nome })}
                />
                <TextInput style={styles.email} 
                    placeholder="Email"
                    autoFocus
                    keyboardType='email-address'
                    value={this.props.email}
                    onChangeText={email => this.setState({ email })}
                />
                <TextInput  style={styles.password}
                    placeholder="Senha"
                    autoFocus
                    secureTextEntry
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}
                />
                <TouchableOpacity style={styles.buttom} onPress={() => { this.props.onCreateUser(this.state) }} >
                    <Text style={styles.buttonText}>Salvar</Text>
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
    buttonText: {
        fontSize: 20,
        color: '#fff'
    },
    input: {
        marginTop: 20,
        width: '90%',
        backgroundColor: '#EEE',
        height: 40,
        borderWidth: 1,
        borderColor: '#333',
        paddingLeft: 15
    }
});

export default connect(null, { onCreateUser: createUser })(Register);