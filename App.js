import React from 'react';
import { 
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native'

import Sound from 'react-native-sound'

const soundList = [
  require('./assests/one.wav'),
  require('./assests/two.wav'),
  require('./assests/three.wav'),
  require('./assests/four.wav'),
  require('./assests/five.wav'),
  require('./assests/six.wav'),
  require('./assests/seven.wav'),
  require('./assests/eight.wav'),
  require('./assests/nine.wav'),
  require('./assests/ten.wav')
];

const App = ()=>{

  const playSound = (sound)=>{
    const music = new Sound(sound,Sound.MAIN_BUNDLE,(err)=>{
      if(err){
        console.log("Unable to play the sound")
      }
    });

    setTimeout(()=>{
      music.play()
    },1000)

    music.release()
  }

  return(
    <ScrollView style={styles.container}>
        <Image style={styles.logo} source={require('./assests/logo.png')}/>
        <View style={styles.gridContainer}>
          {soundList.map((sound)=>(
            <TouchableOpacity
            key={sound}
            onPress={()=>{playSound(sound)}}
            style={styles.box}>
              <Text style={styles.text}>{sound}</Text>
            </TouchableOpacity>
          ))}
        </View>
    </ScrollView>
  )

}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "#1B262C"
  },
  logo:{
    alignSelf:"center",
    marginTop: 15,
  },
  gridContainer:{
    flex:1,
    margin: 5,
    flexDirection:"row",
    flexWrap:"wrap",
    alignItems:"flex-start",
    justifyContent: "space-around",
  

  },
  box:{
    height:110,
    alignItems:"center",
    justifyContent: "center",
    width:"40%",
    marginVertical: 6,
    backgroundColor:"#0f4c75",
    borderRadius: 5,

    shadowColor:"#393e46",
    elevation:5
  },
  text:{
    fontSize: 50,
    color: "#FF4301"
  }
})