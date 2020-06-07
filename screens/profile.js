import React from 'react';
import TouchID from 'react-native-touch-id';
import { StyleSheet, Text, View } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';

class Profile extends React.Component {
  state = { locked: true };

  componentDidMount() {
    LocalAuthentication.authenticateAsync().then(success =>
      this.setState({ locked: false }),
    );
  }

  render() {
    if (this.state.locked) {
      return(
      <View>
      </View>
    )
    }else{

    return (
      <View style={styles.container}>
      <Text style={styles.center}> Sucess! Welcome fool!</Text>
      </View>
    )
  }
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBECF4',

  },
  center:{
    justifyContent:"center",
    marginTop:40 
  }
})
export default Profile
