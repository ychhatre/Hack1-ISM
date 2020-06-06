import React from 'react';
import {
  Alert, Dimensions, KeyboardAvoidingView, StyleSheet, Platform, TouchableOpacity, Image, View, Switch
} from 'react-native';
import {Icon} from 'react-native-elements';
import * as firebase from 'firebase';
// galio component
import {
  Block, Button, Input, NavBar, Text
} from 'galio-framework';
import theme from '../components/theme.js';

const { height, width } = Dimensions.get('window');






class Register extends React.Component {

  constructor(props) {
      super(props);
      state = {
        email: '',
        password: '',
        fname: '',
        lname: '',
        errorMessage: null
      }
    }

    handleLogin = () => {
      const {email, password} = this.state

      firebase
      .auth()
      .signInWithEmailAndPassword(email,password)
      .catch(error => this.setState({errorMessage: error.message}));

    }

    handleSignUp = () => {
      this.props.navigation.navigate('Login')
      firebase.auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(userCredentials => {
        return userCredentials.user.updateProfile({
          displayName: this.state.fname + this.state.lname,
        });
      })
      .catch(error => this.setState({errorMessage: error.message}))
    };


  handleChange = (name, value) => {
    this.setState({ [name]: value });
  }

  state = {switchValue:false}
    toggleSwitch = (value) => {
        this.setState({switchValue: value})
}

  render() {
    const { navigation } = this.props;
    const { email, password } = this.state;

    return (

<Block safe flex style={{ backgroundColor: theme.COLORS.WHITE }}>

          <Block flex={2} flex column >
            <Block flex={2} flex middle>
            <View style={styles.box}>
            <View style={styles.pass}>
              <Input

              type="email-address"
              placeholder="First Name"
              autoCapitalize="none"
              style={{ width: width * 0.8 }}
              onChangeText={text => this.handleChange('email', text)}
              />
              <Input

              type="email-address"
              placeholder="Last Name"
              autoCapitalize="none"
              style={{ width: width * 0.8}}
              onChangeText={text => this.handleChange('email', text)}
              />
              <Input

              type="email-address"
              placeholder="Gender"
              autoCapitalize="none"
              style={{ width: width * 0.8 }}
              onChangeText={text => this.handleChange('email', text)}
              />
              <Input

              type="email-address"
              placeholder="Email"
              autoCapitalize="none"
              style={{ width: width * 0.8 }}
              onChangeText={text => this.handleChange('email', text)}
              />

              <Input
                password
                viewPass
                placeholder="Password"
                style={{ width: width * 0.8 }}
                onChangeText={text => this.handleChange('password', text)}
              />
              </View>
              </View>

              <Button
                style={styles.signinButton}

                shadowColor={theme.COLORS.BLACK}
                onPress={this.handleSignUp}
              >
                Sign Up
              </Button>
            </Block>
          </Block>
          </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: theme.SIZES.BASE * 0.3,
    paddingHorizontal: theme.SIZES.BASE,
    backgroundColor: theme.COLORS.WHITE,
  },
  box:{
    alignItems:'center',
    justifyContent:'center',
  },
  boxx:{
    alignItems:'center',
    justifyContent:'center',
  },
  signinButton:{
    width: width * 0.6,
    backgroundColor:'black',
    alignItems:'center',
    justifyContent:'center',
  },
  terms:{
    fontSize:13,
    color: '#40B8AF',
    textAlign:'center',
    alignItems:'center',
    justifyContent:'center',
  },
  pass:{
    bottom:20,
  },

});
export default Register;
