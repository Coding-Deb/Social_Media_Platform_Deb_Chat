import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View, Switch } from 'react-native'
import React, { useContext, useState } from 'react'
import TopTab from '../../Components/TopTab'
import BottomTab from '../../Components/BottomTab'

import SampleApi from '../../Api/SampleApi'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import Context from '../../Context/Context'


const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export default function ProfileScreen() {
  const navigation = useNavigation()
  // const [isEnabled, setIsEnabled] = useState(false);
  // const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const { color, setcolor, changecolor, text, settext, textcolor, settextcolor, isEnabled, setIsEnabled } = useContext(Context)

  return (
    <View style={{
      flex: 1,
      backgroundColor: color,
      alignItems: 'center',
    }}>
      <View style={{ height: height, width: width, alignItems: 'center', margin: 40, }}>
        <View style={{ height: 120, width: width, alignItems: 'center', flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => { navigation.navigate('Home') }}>
            <Ionicons name="arrow-back-sharp" size={35} color={textcolor} style={{ marginLeft: 20 }} />
          </TouchableOpacity>
          <Text style={{ fontSize: 25, fontWeight: 'bold', color: textcolor, marginLeft: 15 }}>
            My Profile
          </Text>

          <Switch
            trackColor={{ false: 'grey', true: 'grey' }}
            thumbColor={isEnabled ? textcolor : textcolor}
            onValueChange={changecolor}
            value={isEnabled}
            style={{ marginLeft: 90 }}
          />

          <TouchableOpacity onPress={() => { navigation.navigate('Setting') }}>
            <Ionicons name="settings-sharp" size={35} color={textcolor} style={{ marginLeft: 20 }} />
          </TouchableOpacity>
        </View>
        <View style={{ height: 100, width: 100, alignItems: 'center', justifyContent: 'center', borderRadius: 100 }}>
          <Image
            source={require('../../assets/Cartoon.jpg')}
            style={{ height: 100, width: 100, margin: 15, borderRadius: 100 }}
            resizeMode='contain'
          />
        </View>
        <Text style={{ fontSize: 22, fontWeight: 'bold', color: textcolor, margin: 20 }}>
          @Debanshu Brahma
        </Text>
        <View style={{ height: 120, width: width, alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
          <View style={{ height: 70, width: 1 / 2.5 * width, justifyContent: 'center', alignItems: 'center', backgroundColor: '#097969', borderColor: '#097969', borderWidth: 2, margin: 15, padding: 12, borderRadius: 30, flexDirection: 'row' }}>
            <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'white', borderRightColor: 'white', borderRightWidth: 2, padding: 5 }}>
              Followers
            </Text>
            <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'white', margin: 5 }}>
              1200
            </Text>
          </View>
          <View style={{ height: 70, width: 1 / 2.5 * width, justifyContent: 'center', alignItems: 'center', backgroundColor: 'grey', borderColor: 'grey', borderWidth: 2, margin: 15, padding: 15, borderRadius: 30, flexDirection: 'row' }}>
            <Text style={{ fontSize: 15, fontWeight: 'bold', borderRightColor: 'white', borderRightWidth: 2, padding: 5, color: 'white' }}>
              Followings
            </Text>
            <Text style={{ fontSize: 15, fontWeight: 'bold', margin: 5, color: 'white' }}>
              2400
            </Text>

          </View>
        </View>
        <Text style={{ fontSize: 22, fontWeight: 'bold', color: textcolor, margin: 20 }}>
          My Posts
        </Text>
        <FlatList
          data={SampleApi}
          numColumns={3}
          horizontal={false}
          renderItem={({ item }) => {
            return (
              <View style={{ width: 1 / 3 * width, height: 100, alignItems: 'center', justifyContent: 'center', borderColor: textcolor, borderWidth: 2 }}>
                <Image
                  source={item.src}
                  style={{ height: 80, width: 1 / 3 * width, }}
                  resizeMode='contain'
                />
              </View>
            )
          }}
        />
      </View>
    </View >
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