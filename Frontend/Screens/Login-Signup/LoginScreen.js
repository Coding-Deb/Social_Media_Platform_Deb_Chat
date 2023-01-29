import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

import { useNavigation } from '@react-navigation/native';

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export default function LoginScreen() {
  const navigation = useNavigation()
  const [email, setemail] = useState('')
  return (
    <View style={styles.container}>
      <View style={{ height: height, width: width, alignItems: 'center', justifyContent: 'center' }}>
        <Image
          source={require('../../assets/DebChat.jpg')}
          style={{ height: 250, width: 250, }}
          resizeMode='stretch'
        />
        <TextInput
          style={{ height: 80, width: width - 60, padding: 20, margin: 15, fontSize: 20, fontWeight: 'bold', backgroundColor: 'white', borderRadius: 25 }}
          placeholder='Enter Email Address'
          keyboardType='email-address'
          value={email}
          onChangeText={(text) => setemail(text)}
        />
        <TouchableOpacity style={{ height: 70, width: 1 / 2.2 * width, margin: 15, borderColor: 'white', borderWidth: 2, alignItems: 'center', justifyContent: 'center', borderRadius: 20 }}
          onPress={() => {
            navigation.navigate('Home')
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: 'bold', margin: 15, color: 'white' }}>
            Login
          </Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 15, fontWeight: '600', margin: 8, color: 'white' }}>
          Don't Have Account?
        </Text>
        <Text style={{ fontSize: 20, fontWeight: 'bold', margin: 8, color: 'white' }}
          onPress={() => {
            navigation.navigate('Register')
          }}
        >
          Register Here
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
    justifyContent: 'center',
  },
})