import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function SettingScreen() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:22,fontWeight:'700',color:'white'}}>SettingScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#05001E',
        alignItems: 'center',
        justifyContent: 'center',
      },
})