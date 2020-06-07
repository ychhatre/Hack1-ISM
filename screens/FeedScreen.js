import React from 'react';
import {View, Text,StyleSheet, ActivityIndicator, FlatList, TouchableOpacity, ScrollView} from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import {Ionicons} from "@expo/vector-icons";
import * as firebase from 'firebase';
import moment from "moment"
 class Feed extends React.Component {
   constructor(props) {
       super(props);
       this.state = {
       school: '',
       errorFieldColor:'',
       fontsLoaded: false,
        navigation:'',
        list:[]



       }
     }



     handlePostGet = () => {
    firebase.firestore().collection("Posts").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
      //  console.log(doc.data())
            var postData = [
              {
                id: `${doc.id}`,
                text:doc.data().Text,
                author:doc.data().Author,
                timestamp:doc.data().time.toDate(),
                upvotes: doc.data().upvotes
              }
            ]
             this.setState({list:this.state.list.concat(postData)})


      });



      console.log(this.state.list)

  });
  }

  handleUpvotes = () => {

  }




     renderPost = post => {
       return(


      this.state.list.map((item, i)  (

         <View style={styles.feedItem}>

            <View style={{flex: 1}}>
                <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                  <View>
                      <Text style={styles.name}></Text>
                      <Text style={styles.timeStamp}></Text>

                  </View>
                  <TouchableOpacity>
                  <Ionicons name="ios-more" size={24} color="#737888" />
                  </TouchableOpacity>
                </View>

                <Text style={styles.posts}></Text>
                <View style={{flexDirection: "row"}}>
                <TouchableOpacity>
                    <Ionicons name="md-arrow-up" size={24} color="#73788B"  style={{marginRight: 16, marginTop: 20}} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name="ios-chatboxes" size={24} color="#73788B" style={{marginRight: 16, marginTop: 20}} />
                </TouchableOpacity>

                </View>
            </View>
         </View>
       ))


       )
     }
     componentDidMount() {
       Font.loadAsync( {
                 'DMSans-Medium': require('../assets/fonts/DMSans-Medium.ttf'),
                 "sofiapro-light": require('../assets/fonts/sofiapro-light.otf')
               }
           ).then( () => this.setState( { fontsLoaded: true } ) )
           this.handlePostGet()

       }

       render() {
         if( !this.state.fontsLoaded ) {
           return <AppLoading/>
         }else{
           return (
             <View style={styles.container}>
                <View style={styles.header}>

                  <Text style={{justifyContent:"center", alignItems:'center', fontFamily: "DMSans-Medium", fontSize:25}}> Feed </Text>
                </View>
                  <ScrollView>
                  {

                          this.state.list.map((item, i) => (

                             <View style={styles.feedItem}>

                                <View style={{flex: 1}}>
                                    <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                                      <View>
                                          <Text style={styles.name}>{item.author}</Text>
                                          <Text style={styles.timeStamp}>{moment(item.timestamp).fromNow()}</Text>
                                          <Text style={styles.timeStamp}>{item.upvotes} upvotes</Text>

                                      </View>
                                      <TouchableOpacity>
                                      <Ionicons name="ios-more" size={24} color="#737888" />
                                      </TouchableOpacity>
                                    </View>

                                    <Text style={styles.posts}>{item.text}</Text>
                                    <View style={{flexDirection: "row"}}>
                                    <TouchableOpacity>
                                        <Ionicons name="md-arrow-up" size={24} color="#73788B"  style={{marginRight: 16, marginTop: 20}} />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Ionicons name="ios-chatboxes" size={24} color="#73788B" style={{marginRight: 16, marginTop: 20}} />
                                    </TouchableOpacity>



                                    </View>
                                </View>
                             </View>
                           ))
                  }
                  </ScrollView>
              </View>
      );
    }
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBECF4',

  },
  header: {

    backgroundColor: "#FFF",
    paddingTop:30,
    alignItems:"center",
    justifyContent: "flex-start",
    borderBottomWidth: 1,
    borderBottomColor: "#EBECF4",
    shadowColor:"#454D65",
    shadowOffset:{ height: 5},
    shadowRadius: 15,
    shadowOpacity:0.15,
    zIndex:10
  },
  feed: {
    marginHorizontal: 16
  },
  feedItem: {
    backgroundColor: "#FFF",
    borderRadius: 5,
    padding: 10,
    flexDirection: "row",
    marginVertical:8,


    shadowColor:"#454D65",
    shadowOffset:{ height: 3},
    shadowRadius: 4,
    shadowOpacity:0.3,
    zIndex:5,
  },
  name: {
    fontSize: 15,
    fontFamily: "sofiapro-light",
    fontWeight: "bold",
    color: "#454D65"

  },
  timeStamp: {
    fontSize:11,
    color: '#C4C6CE'
  }

});
export default Feed
