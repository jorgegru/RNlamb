import React, { Component } from 'react';
import { View,  StyleSheet, FlatList } from 'react-native';
import  Header  from '../components/Header';
import Post from '../components/Post';

export default class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
        post: [{
            id: Math.random(),
            nickname: 'Jorgge Grumaria Jesus',
            email: 'elisa@teste.com.br',
            image: require('../../assets/imgs/fence.jpg'),
            comments: [
                {
                    nickname: 'John Ray sheen',
                    comment: 'Stunnis vamos!'
                },
                {
                    nickname: 'Julia kisandra',
                    comment: 'Não gostei!'
                },
            ]
        },{
            id: Math.random(),
            nickname: 'Fransisco De oliveira',
            email: 'fransisco@teste.com.br',
            image: require('../../assets/imgs/bw.jpg'),
            comments: []
        }]
    };
  }

  render() {
    return (
      <View style={styles.container}>
          <Header />
            <FlatList 
                data={this.state.post}
                keyExtractor={ item => `${item.id}` }
                renderItem={({ item }) => <Post key={item.id} {...item} />}
            />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5fcff'
    }
})
