import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View, Switch, Pressable } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import TopTab from '../../Components/TopTab'
import BottomTab from '../../Components/BottomTab'

import SampleApi from '../../Api/SampleApi'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'

import Context from '../../Context/Context'


const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export default function SearchingPeopleProfileScreen() {
  const navigation = useNavigation()
  const Route = useRoute()
  const [data, setdata] = useState([])
  const { color, setcolor, changecolor, text, settext, textcolor, settextcolor, isEnabled, setIsEnabled, btntext, changebtntext } = useContext(Context)

  useEffect(() => {
    async function getAllData() {
      try {
        const Data = await axios.get('http://192.168.56.210:5000/userdata/Registered_User')
        setdata(Data.data)
      } catch (error) {
        console.log(error);
      }
    }
    getAllData()
  }, [])


  return (
    <View style={{
      flex: 1,
      backgroundColor: color,
      alignItems: 'center',
    }}>
      <View style={{ height: height, width: width, alignItems: 'center', margin: 40, }}>
        <View style={{ height: 120, width: width, alignItems: 'center', flexDirection: 'row' }}>
          <Pressable onPress={() => { navigation.navigate('Search') }}>
            <Ionicons name="arrow-back-sharp" size={35} color={textcolor} style={{ marginLeft: 20 }} />
          </Pressable>
          <Text style={{ fontSize: 25, fontWeight: 'bold', color: textcolor, marginLeft: 15 }}>
            Profile Screen
          </Text>
          <Pressable onPress={() => { navigation.navigate('Setting') }}>
            <Ionicons name="settings-sharp" size={35} color={textcolor} style={{ marginLeft: 100 }} />
          </Pressable>
        </View>
        <View style={{ height: 100, width: 100, alignItems: 'center', justifyContent: 'center', borderRadius: 100 }}>
          <Image
            source={require('../../assets/Cartoon.jpg')}
            style={{ height: 100, width: 100, margin: 15, borderRadius: 100 }}
            resizeMode='contain'
          />
        </View>
        <Text style={{ fontSize: 22, fontWeight: 'bold', color: textcolor, margin: 20 }}>
          @{Route.params.name}
        </Text>
          <View style={{ height: 120, width: width, alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
            <Pressable style={{ height: 70, width: 1 / 2.5 * width, justifyContent: 'center', alignItems: 'center', backgroundColor: '#097969', borderColor: '#097969', borderWidth: 2, margin: 15, padding: 12, borderRadius: 30, }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white', padding: 5 }}
                onPress={() => {
                  changebtntext()
                }}
              >
                {btntext}
              </Text>
            </Pressable>
            <Pressable style={{ height: 70, width: 1 / 2.5 * width, justifyContent: 'center', alignItems: 'center', backgroundColor: '#1F51FF', borderColor: '#1F51FF', borderWidth: 2, margin: 15, padding: 15, borderRadius: 30, flexDirection: 'row' }}
              onPress={() => {
                navigation.navigate('Main_Chat', {
                  name: Route.params.name
                })
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5, color: 'white' }}>
                Message
              </Text>
            </Pressable>
          </View>
        <Text style={{ fontSize: 22, fontWeight: 'bold', color: textcolor, margin: 20 }}>
          Here Is Posts
        </Text>
        {
          btntext === 'Follow' ?
            <View style={{ height: 100, width: width, alignItems: 'center', justifyContent: 'center', margin: 20 }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: textcolor }}>
                Can't Show
              </Text>
            </View>
            :
            <FlatList
              data={SampleApi}
              numColumns={3}
              horizontal={false}
              renderItem={({ item }) => {
                return (
                  <View style={{ width: 1 / 3 * width, height: 100, alignItems: 'center', justifyContent: 'center', borderColor: textcolor, borderWidth: 2 }}>
                    {
                      item.src ?
                        <Image
                          source={item.src}
                          style={{ height: 90, width: 1 / 3 * width - 10, }}
                          resizeMode='cover'
                        />
                        :
                        <Skeleton animation="pulse" width={1 / 3 * width} height={90} />
                    }
                  </View>
                )
              }}
            />
        }
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