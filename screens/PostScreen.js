import React, { Component } from 'react';
import {Alert, Dimensions, KeyboardAvoidingView, StyleSheet, Platform, TouchableOpacity, Image, View} from 'react-native';
import {
    Block, Button, Input, NavBar, Text,
  } from 'galio-framework';
import {Ionicons} from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native-paper';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import Fire from '../Fire.js' 

class Post extends Component {

    state = {
        text: '',
        image: null
    }

    componentDidMount() {
        this.getPhotoPermission();
    }

    getPhotoPermission = async() => {
        if (Constants.platform.ios) {
            const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLE)

            if (status != "granted") {
                alert("We need to access your camera roll")
            }
        }
    }
    render () {
        return( 
            <SafeAreaView style={styles.container}> 
                <View style={styles.header}> 
                    <TouchableOpacity> 
                        <Ionicons name = "md-arrow-back" size = {24} color="#D8D9DB"></Ionicons>
                    </TouchableOpacity> 
                    <TouchableOpacity>
                        <Text style = {{fontWeight:"500"}}> Post </Text>
                    </TouchableOpacity>
                </View>
                <View styles = {styles.inputContainer}>
                    <Image source = {this.state.image} style = {styles.avatar}></Image>
                    <TextInput 
                        autoFocus={true} 
                        multiline={true} 
                        numberOfLines={4} 
                        style={{flex: 1}} 
                        placeholder="Would you like to share your thoughts?">
                    </TextInput>
                </View>

                <TouchableOpacity style={styles.photo}>
                    <Ionicons name='md-camera' size ={32} color = "#D8D9DB"></Ionicons>
                </TouchableOpacity>
            </SafeAreaView>
        );
    }
}


const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
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
        marginRight: 16
    },
    photo: {
        alignItems: "flex-end",
        marginHorizontal: 32
    }
});

export default Post; 
