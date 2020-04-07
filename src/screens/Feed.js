import React, { Component } from 'react';
import { View,  StyleSheet, FlatList } from 'react-native';
import  Header  from '../components/Header';
import Post from '../components/Post';
import { connect } from 'react-redux';

class Feed extends Component {
  render() {
    return (
      <View style={styles.container}>
          <Header />
            <FlatList 
                data={this.props.posts}
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
});

const mapStateToProps = state => {
  console.log(state.posts.posts);
  return {
    posts: state.posts.posts
  }
}

export default connect(mapStateToProps)(Feed);
