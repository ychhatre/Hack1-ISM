import React from 'react';
import {
  Alert, Dimensions, KeyboardAvoidingView, StyleSheet, Platform, TouchableOpacity, Image, View
} from 'react-native';
import {Icon} from 'react-native-elements';
import { Formik } from "formik";
import * as Yup from "yup";
import * as firebase from 'firebase';
import {
  Block, Button, Input, NavBar, Text,
} from 'galio-framework';
import theme from '../components/theme.js';

const { height, width } = Dimensions.get('window');




class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorMessage: null,

    }
  }

  handleLogin = () => {


    firebase
    .auth()
    .signInWithEmailAndPassword(this.state.email,this.state.password)
    .catch(error => this.setState({errorMessage: error.message}));
    var user = firebase.auth().currentUser;
    if(user){
    this.props.navigation.navigate("Home")
  }else{
    console.log("User does not exist")
  }
}

  handleChange = (name, value) => {
    this.setState({ [name]: value });
  }

  render() {
    const { navigation } = this.props;


    return (

  <Block safe flex style={{ backgroundColor: theme.COLORS.WHITE }}>
  <Block flex middle>
   <View>
    {this.state.errorMessage && <Text>{this.state.errorMessage}</Text>}
  </View>
  <Image source={require('../assets/images/logo.png')}
  style={{width: 200, height:215}}
  />
            <Block center space="">
              <Block>
              <View style={styles.top}>
              <View style={styles.email}>
              <Input
              type="email-address"
              placeholder="Email"
              autoCapitalize="none"
              style={{ width: width * 0.8 }}
              onChangeText={email => this.setState({email})}
              value = {this.state.email}
              />

                <Input
                  password
                  viewPass
                  placeholder="Password"
                  style={{ width: width * 0.8 }}
                  onChangeText={password => this.setState({password})}
                  value = {this.state.password}
                />
                </View>
                </View>
              </Block>

              <Block row fluid center>

                <Button
                  style={styles.signinButton}
                  shadowColor={theme.COLORS.BLACK}
                  onPress={this.handleLogin}
                >
                  Sign in
                </Button>

              </Block>
              <View style={styles.bottom}>
                <Text
                  color={theme.COLORS.ERROR}
                  size={theme.SIZES.FONT * 0.75}
                  onPress={() => Alert.alert('Not implemented')}

                  style={styles.forgot}
                >
                  Forgot your password?
                </Text>

                <Button flex middle color="transparent" shadowless onPress={() => navigation.navigate('Register')}>
                  <Text style={styles.register} center color={theme.COLORS.ERROR} size={theme.SIZES.FONT * 0.75}>
                    {"Don't have an account? Sign Up"}
                  </Text>
                </Button>
                </View>


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
  entire:{
    bottom:10
  },
  top:{
    bottom:15,
    marginTop:40,
  },
  bottom:{
    top:15,
  },
  logocontainer:{
    justifyContent:'center',
    alignItems:'center'
  },
  inputs:{

    width: width * 0.8
  },
  email:{

  },
  social: {
    width: theme.SIZES.BASE * 3.5,
    height: theme.SIZES.BASE * 3,
    borderRadius: theme.SIZES.BASE * 1.75,
    justifyContent: 'center',
    marginLeft:20

  },
  signinButton:{

    width: width * 0.5,
    backgroundColor:'black'
  },
  register:{
    color:'#40B8AF',
  },
  forgot:{
    color:'#40B8AF',
    alignSelf: 'center', lineHeight: theme.SIZES.FONT * 2,
    justifyContent: "center",

  },


});

export default Login;
