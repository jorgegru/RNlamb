import React from 'react';
import Header from './src/components/Header'
import { View } from 'react-native'
import Post from './src/components/Post'


const App = () => {

  const comments = [{
    nickname: 'Jorge Goulart',
    comment: 'Excelente Foto!'
  },{
    nickname: 'Elisa Goulart',
    comment: 'Muito Feito!'
  }]
  
  return (
    <View style={{ flex:1 }}>
      <Header />
      <Post image={ require('./assets/imgs/fence.jpg') } 
        comments={comments}
      />
    </View>
  
  );
};

export default App;
