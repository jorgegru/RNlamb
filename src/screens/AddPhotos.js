import React, { Component } from 'react';
import { 
    View, 
    Text, 
    Alert, 
    Image, 
    StyleSheet, 
    Platform,
    ScrollView, 
    TouchableOpacity, 
    TextInput, 
    Dimensions  
} from 'react-native';
import ImagePicker from 'react-native-image-picker';

export default class AddPhotos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            comment: ''
        };
    }

    pickImage = () => {
        ImagePicker.showImagePicker({
            title: 'Escolha a imagem',
            maxHeight: 600,
            maxWidth: 800
        }, response => {


            if (response.didCancel) {
                console.log('User cancelled image picker');
              } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
              } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
              } else {
                const source = { uri: response.uri };
            
                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };
                
                
                this.setState({
                    image: source,
                });
                console.log(this.state.image);
                  
              }
        })
    }

    save = async () => {
        Alert.alert('Imagem Adicionada!', this.state.comment );
    }

    render() {
        return (
            <ScrollView>

                <View style={styles.container}>
                    <Text style={styles.title}> AddPhotos </Text>
                    <View style={styles.imageContainer}>
                        <Image source={this.state.image}  style={styles.image}/>
                    </View>
                    <TouchableOpacity onPress={this.pickImage} style={styles.buttom}>
                        <Text style={styles.buttomText}>Escolha a foto</Text>
                    </TouchableOpacity>
                    <TextInput placeholder="Algum comentario para a foto"
                        style={styles.input}
                        value={this.state.comment}
                        onChangeText={comment => this.setState({ comment })} />
                    <TouchableOpacity onPress={this.save}  style={styles.buttom} >
                        <Text  style={styles.buttomText}>Salvar</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginTop: Platform.OS === 'ios' ? 30 : 10,
        fontWeight: 'bold'
    },
    imageContainer: {
        width: '90%',
        height: Dimensions.get('window').width /2,
        backgroundColor: '#EEE',
        marginTop: 10
    },
    image: {
        width: '100%',
        height: Dimensions.get('window').width /2,
        resizeMode: 'center'
    },
    buttom: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4'
    },
    buttomText: {
        fontSize: 20,
        color: '#fff'
    },
    input: {
        marginTop: 20,
        width: '90%'
    }
});
