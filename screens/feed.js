import React from 'react';
import {View, Text,StyleSheet, ActivityIndicator, FlatList, TouchableOpacity} from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import {Ionicons} from "@expo/vector-icons";

posts = [
  {
    id: "1",
    name:"Mlack Ban",
    text:
      "AMA my grandfather was a slave!",
    timestamp: 156910927372,

  },
  {
    id: "2",
    name:"Mlack Ban",
    text:
      "AMA my grandfather was a slave!",
    timestamp: 1569109273726,

  },
  {
    id: "3",
    name:"Mlack Ban",
    text:
      "AMA my grandfather was a slave!",
    timestamp: 1569109273726,

  },
  {
    id: "4",
    name:"Mlack Ban",
    text:
      "AMA my grandfather was a slave!",
    timestamp: 1569109273726,

  }
]
 class Feed extends React.Component {
   constructor(props) {
       super(props);
       this.state = {
       school: '',
       errorFieldColor:'',
       fontsLoaded: false,
        navigation:'',



       }
     }

     renderPost = post => {
       return(
         <View style={styles.feedItem}>

            <View style={{flex: 1}}>
                <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                  <View>
                      <Text style={styles.name}>{post.name} </Text>
                      <Text style={styles.timeStamp}>{post.timestamp}</Text>

                  </View>
                  <TouchableOpacity>
                  <Ionicons name="ios-more" size={24} color="#737888" />
                  </TouchableOpacity>
                </View>

                <Text style={styles.posts}>{post.text}</Text>
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
       )
     }
     componentDidMount() {
       Font.loadAsync( {
                 'DMSans-Medium': require('../assets/fonts/DMSans-Medium.ttf'),
                 "sofiapro-light": require('../assets/fonts/sofiapro-light.otf')
               }
           ).then( () => this.setState( { fontsLoaded: true } ) )
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
              <FlatList
               style={styles.feed}
                data={posts}
                renderItem = {({item}) => this.renderPost(item)}
                keyExtractor={item  => item.id}
                showsVerticalScrollIndicator={false}/>
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
    padding: 8,
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
