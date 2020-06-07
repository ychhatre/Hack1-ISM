import React, { Component } from 'react';
import {Alert, Dimensions, KeyboardAvoidingView, StyleSheet, Platform, TouchableOpacity, Image, View, ScrollView} from 'react-native';
import {
    Block, Button, Input, NavBar, Text,
  } from 'galio-framework';
import {Ionicons} from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native-paper';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import Fire from '../Fire.js';
import * as ImagePicker from "expo-image-picker";
import * as firebase from 'firebase';
class Post extends Component {
  constructor(props) {
      super(props);
      this.state = {
        text: "",
        image:""


      }

    }
    componentDidMount() {
        this.getPhotoPermission();
    }

    getPhotoPermission = async () => {
        if (Constants.platform.ios) {
            const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL)

            if (status != "granted") {
                alert("We need to access your camera roll")
            }
        }
    }

    handlePost = () => {
      Fire.shared
          .addPost({ text: this.state.text.trim(), localUri: this.state.image})
          .then(ref => {
            this.setState({text:"", image: null});
            this.props.navigation.navigate('Feed')
          })
    }

    addtoDatabase = () => {
      firebase.firestore().collection("Posts").doc(this.state.text).set({Text: this.state.text, Author: firebase.auth().currentUser.email, time: new Date().getTime()})
    }

    pickImage = async() => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3]
      })
      if (!result.cancelled)  {
        this.setState({image: result.uri});
      }
    }

    render () {
        return(
            <ScrollView style={styles.container} keyboardDismissMode='on-drag'>
                <View style={styles.header}>
                    <TouchableOpacity onPress={this.addtoDatabase}>
                        <Text style = {{fontWeight:"500"}}> Post </Text>
                    </TouchableOpacity>
                </View>
                <View style = {styles.inputContainer}>

                    <TextInput
                        autoFocus={true}
                        multiline={true}
                        numberOfLines={4}
                        style={{flex: 1}}
                        placeholder="Share your thoughts..."
                        onChangeText={text => this.setState({text})}/>


                </View>

                <TouchableOpacity style={styles.photo} onPress={this.pickImage}>
                    <Ionicons name='md-camera' size ={32} color = "#D8D9DB"></Ionicons>
                </TouchableOpacity>

                <View style={{marginHorizontal: 32, marginTop:32, height: 150}}>
                  <Image source = {{uri: this.state.image}} style ={{width: "100%", height: "100%"}}></Image>
                </View>
            </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 32,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#D8D9DB"
    },
    inputContainer: {
        margin: 32,
        flexDirection: "row"
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        marginRight: 16,
    },
    photo: {
        alignItems: "flex-end",
        marginHorizontal: 32,
    }
});

export default Post;
