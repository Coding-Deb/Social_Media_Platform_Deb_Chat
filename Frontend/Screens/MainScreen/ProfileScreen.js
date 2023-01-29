import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import TopTab from '../../Components/TopTab'
import BottomTab from '../../Components/BottomTab'

import SampleApi from '../../Api/SampleApi'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export default function ProfileScreen() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={{ height: height, width: width, alignItems: 'center', margin: 40, }}>
        <View style={{ height: 120, width: width, alignItems: 'center', flexDirection: 'row' }}>
          <TouchableOpacity onPress={()=>{navigation.navigate('Home')}}>
            <Ionicons name="arrow-back-sharp" size={35} color="white" style={{ marginLeft: 20 }} />
          </TouchableOpacity>
          <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white', marginLeft: 15 }}>
            My Profile
          </Text>
          <TouchableOpacity onPress={()=>{navigation.navigate('Setting')}}>
            <Ionicons name="settings-sharp" size={35} color="white" style={{ marginLeft: 150 }} />
          </TouchableOpacity>
        </View>
        <View style={{ height: 100, width: 100, alignItems: 'center', justifyContent: 'center', borderColor: 'white', borderWidth: 2, borderRadius: 100 }}>
          <Image
            source={require('../../assets/Facebook.jpg')}
            style={{ height: 100, width: 100, margin: 15 }}
            resizeMode='contain'
          />
        </View>
        <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'white', margin: 20 }}>
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
          <View style={{ height: 70, width: 1 / 2.5 * width, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderColor: 'white', borderWidth: 2, margin: 15, padding: 15, borderRadius: 30, flexDirection: 'row' }}>
            <Text style={{ fontSize: 15, fontWeight: 'bold', borderRightColor: 'black', borderRightWidth: 2, padding: 5 }}>
              Followings
            </Text>
            <Text style={{ fontSize: 15, fontWeight: 'bold', margin: 5 }}>
              2400
            </Text>

          </View>
        </View>
        <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'white', margin: 20 }}>
          My Posts
        </Text>
        <FlatList
          data={SampleApi}
          numColumns={3}
          horizontal={false}
          renderItem={({ item }) => {
            return (
              <View style={{ width: 1 / 3 * width, height: 100, alignItems: 'center', justifyContent: 'center', }}>
                <Image
                  source={item.src}
                  style={{ height: 40, width: 40, margin: 8 }}
                  resizeMode='contain'
                />
              </View>
            )
          }}
        />
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