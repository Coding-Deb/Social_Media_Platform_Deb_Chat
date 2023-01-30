import { Dimensions, Pressable, ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import TopTab from '../../Components/TopTab'
import BottomTab from '../../Components/BottomTab'
import { Ionicons } from '@expo/vector-icons'
import Context from '../../Context/Context'
import { useNavigation } from '@react-navigation/native'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export default function NotificationScreen() {
  const navigation = useNavigation()
  const { color, setcolor, changecolor, text, settext, textcolor, settextcolor, isEnabled, setIsEnabled } = useContext(Context)
  return (
    <View style={{
      flex: 1,
      backgroundColor: color,
      alignItems: 'center',
    }}>
      <View style={{ height: height, width: width, alignItems: 'center', margin: 40, }}>
        <View style={{ height: 120, width: width, alignItems: 'center', flexDirection: 'row' }}>
          <Pressable onPress={() => { navigation.navigate('Home') }}>
            <Ionicons name="arrow-back-sharp" size={35} color={textcolor} style={{ marginLeft: 20 }} />
          </Pressable>
          <Text style={{ fontSize: 25, fontWeight: 'bold', color: textcolor, marginLeft: 15 }}>
            Notifications
          </Text>
        </View>
        <ScrollView contentContainerStyle={{width:width,alignItems:'center',justifyContent:'center'}}>
          <View style={{ width: width - 20, height: 60, justifyContent: 'center', backgroundColor: textcolor, borderRadius: 20, margin: 15 }}>
            <Text style={{ fontSize: 20, fontWeight: '700', color: color, margin: 15 }}>
              Notification 01 Here
            </Text>
          </View>
          <View style={{ width: width - 20, height: 60, justifyContent: 'center', backgroundColor: textcolor, borderRadius: 20, margin: 15 }}>
            <Text style={{ fontSize: 20, fontWeight: '700', color: color, margin: 15 }}>
              Notification 02 Here
            </Text>
          </View>
          <View style={{ width: width - 20, height: 60, justifyContent: 'center', backgroundColor: textcolor, borderRadius: 20, margin: 15 }}>
            <Text style={{ fontSize: 20, fontWeight: '700', color: color, margin: 15 }}>
              Notification 03 Here
            </Text>
          </View>
          
        </ScrollView>

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