import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

import Context from '../../Context/Context'

export default function SettingScreen() {
  const { color, setcolor, changecolor, text, settext,textcolor } = useContext(Context)

  const Change = () => {
    changecolor()
  }
  return (
    <View style={styles.container}>
      <View style={{ height: height, width: width, alignItems: 'center',justifyContent:'center' }}>
        <Text style={{fontSize:22,fontWeight:'bold',color:'white'}}>
        Setting Screen
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#05001E',
    alignItems: 'center',
    // justifyContent: 'center',
  },
})