import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import TopTab from '../../Components/TopTab'
import BottomTab from '../../Components/BottomTab'
import { useNavigation, useRoute } from '@react-navigation/native'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function MainChatScreen() {
  const Route = useRoute()
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={{ height: height, width: width, alignItems: 'center', justifyContent: 'space-between' }}>
        <View style={{ height: 70, width: width, borderBottomColor: 'white', borderBottomWidth: 2, flexDirection: 'row', alignItems: 'center', }}>

          <View style={{ height: 70, width: 1 / 1.7 * width, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', position: 'absolute', left: 0 }}>
            <TouchableOpacity onPress={() => {
              navigation.navigate('Chat')
            }}
              style={{ marginLeft: 20, position: 'absolute', left: 0 }}
            >
              <AntDesign name="arrowleft" size={30} color="white" />
            </TouchableOpacity>
            <Text style={{ fontSize: 22, fontWeight: 'bold', marginLeft: 15, color: 'white', position: 'absolute', left: 50 }}>
              {Route.params.name}
            </Text>
          </View>
          <View style={{ height: 70, width: 1 / 2.3 * width, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', position: 'absolute', right: 0 }}>
            <TouchableOpacity>
              <Ionicons name="call" size={27} color="white" style={{ marginLeft: 25, }} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="videocam" size={27} color="white" style={{ marginLeft: 25, }} />
            </TouchableOpacity>
          </View>
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
    justifyContent: 'center',
  },
})