import React, { Component } from 'react';
import { Alert } from 'react-native';
import { connect } from 'react-redux';
import Navigator from './Navigator';

import { setMessage } from './store/actions/message';

class App extends Component {

    componentDidUpdate = () =>{
        if( this.props.text && this.props.text.trim() ) {
            Alert.alert(
                this.props.title || 'Message',
                this.props.text
            );
            this.props.clearMessage({title: '', text: '' });
        }
    }


    render() {
        return (
            <Navigator />
        );
    }
}

const mapStateToProps = ({ message }) => {
    return {
        title: message.title,
        text: message.text,
    }
}



export default connect(mapStateToProps, {clearMessage: setMessage})(App);