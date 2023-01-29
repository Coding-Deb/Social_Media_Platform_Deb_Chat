import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopTab from '../../Components/TopTab'
import BottomTab from '../../Components/BottomTab'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export default function NotificationScreen() {
  return (
    <View style={styles.container}>
      <View style={{ height: height, width: width, alignItems: 'center', margin: 40, justifyContent: 'space-between' }}>
        <TopTab page={'NotificationPage'}/>
        <View style={{height:height,width:width,alignItems:'center'}}>
          <Text style={{ fontSize: 25, fontWeight: 'bold', margin: 15, color: 'white' }}>
            Notification Screen
          </Text>
        </View>
        <BottomTab page={'NotificationPage'}/>
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