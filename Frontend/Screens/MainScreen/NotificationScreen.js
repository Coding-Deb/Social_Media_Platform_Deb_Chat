import { Dimensions, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import TopTab from '../../Components/TopTab'
import BottomTab from '../../Components/BottomTab'
import { Ionicons } from '@expo/vector-icons'
import Context from '../../Context/Context'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export default function NotificationScreen() {
  const { color, setcolor, changecolor, text, settext, textcolor, settextcolor, isEnabled, setIsEnabled } = useContext(Context)
  return (
    <View style={{
      flex: 1,
    backgroundColor: color,
    alignItems: 'center',
    }}>
      <View style={{ height: height, width: width, alignItems: 'center', margin: 40, justifyContent: 'space-between' }}>
        <View style={{ height: 120, width: width, alignItems: 'center', flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => { navigation.navigate('Home') }}>
            <Ionicons name="arrow-back-sharp" size={35} color={textcolor} style={{ marginLeft: 20 }} />
          </TouchableOpacity>
          <Text style={{ fontSize: 25, fontWeight: 'bold', color: textcolor, marginLeft: 15 }}>
            Notifications
          </Text>
        </View>
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