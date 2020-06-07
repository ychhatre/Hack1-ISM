import React from 'react';
import {
  Alert, Dimensions, KeyboardAvoidingView, StyleSheet, Platform, TouchableOpacity, Image, View
} from 'react-native';
import {Icon} from 'react-native-elements';

import * as firebase from 'firebase';
import {
  Block, Button, Input, NavBar, Text,
} from 'galio-framework';
import theme from '../components/theme.js';

const { height, width } = Dimensions.get('window');




class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorMessage: null,

    }
  }



  handleChange = (name, value) => {
    this.setState({ [name]: value });
  }

  render() {
    const { navigation } = this.props;

   return (
     <View style={styles.container}>
       <View style={{marginTop: 64, alignItems: 'center'}}>
         <View style={styles.avatarContainer}>
           <Image source={require('../assets/images/profile1.png')}
           style={styles.avatar}
           />
         </View>
         <Text style={styles.name}>Cailean Fernandes</Text>
       </View>
     <View style={styles.statsContainer}>
     <View style={styles.stat}>
      <Text style={styles.statAmount}>2</Text>
      <Text style={styles.statTitle}>Posts</Text>
      </View>
      <View style={styles.stat}>
       <Text style={styles.statAmount}>0</Text>
       <Text style={styles.statTitle}>Following</Text>
       </View>
       <View style={styles.stat}>
        <Text style={styles.statAmount}>0</Text>
        <Text style={styles.statTitle}>Followers</Text>
        </View>
        </View>
        </View>

   );
 }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#EBECF4'
},
avatarContainer:{
  shadowRadius:15,
  shadowOpacity:0.4
},
avatar:{
  width:136,
  height:136,
  borderRadius:68
},
name:{
  marginTop:24,
  fontSize:16,
  fontWeight:"600"
},
statsContainer:{
  flexDirection:'row',
  justifyContent:'space-between',
  margin:32
},
stat:{
  alignItems:'center',
  flex:1
},
statAmount:{
  color:"#4F566D",
  fontSize:18,
  fontWeight:"300"
},
statTitle:{
  color:"#C3C5CD",
  fontSize:12,
  fontWeight:"500",
  marginTop:4
},

});

export default Profile;
