import React from 'react';
import { View, Text, StyleSheet, Button, Image  } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';
import fire from '../Fire'

export default class ProfileScreen extends React.Component{
  state = {
    user:{}
  }

  unsubscribe = null

  componentDidMount(){
    const user = this.props.uid || Fire.shared.uid

    this.unsubscribe = Fire.shared.firestore;
      .collection("users")
      .doc(user)
      .onSnapshot(doc => {

        this.setState({user: doc.data() });
      });
  }

  componentWillUnmount(){
    this.unsubscribe();
  }

  render(){
    return (
      <View style={styles.container}>
        <View style {{marginTop: 64, alignItems: "center"}}
          <View style {styles.avatarContainer}>
            <Image style {styles.avatar} source={this.state.user.avatar ? {uri: this.state.user.avatar} : require('../asstes')}/>
          </View>
        </View>
      </View>
    );
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBECF4',
  }
});



export default Profile

