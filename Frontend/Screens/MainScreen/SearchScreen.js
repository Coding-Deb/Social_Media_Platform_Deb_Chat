import { Dimensions, FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import TopTab from '../../Components/TopTab'
import BottomTab from '../../Components/BottomTab'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

import axios from 'axios'

import SampleApi from '../../Api/SampleApi'
import { FontAwesome } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import Context from '../../Context/Context'

export default function SearchScreen() {
  const [show, setshow] = useState(true)

  const [value, setvalue] = useState('')
  const [data, setdata] = useState([])

  const navigation = useNavigation()

  
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
  
  const { color, setcolor, changecolor, text, settext, textcolor, settextcolor, isEnabled, setIsEnabled } = useContext(Context)

  return (
    <View style={{
      flex: 1,
      backgroundColor: color,
      alignItems: 'center',
    }}>
      <View style={{ height: height, width: width, alignItems: 'center', margin: 40, justifyContent: 'space-between' }}>
        <TextInput
          placeholder='Search Here'
          placeholderTextColor={textcolor}
          style={{ height: 60, width: width - 20, padding: 15, marginBottom: 15, color: textcolor, fontSize: 20, fontWeight: '800', backgroundColor: 'grey', borderRadius: 25 }}
          value={value}
          onChangeText={(text) => {
            // Search(text)
            setvalue(text)

          }}
        />
        <ScrollView contentContainerStyle={{ width: width, justifyContent: 'center', alignItems: 'center' }}>
          {
            data.filter(Name => {
              if (value == '') {
                return null
              }
                else if (Name.name.toLowerCase().includes(value.toLowerCase())) {
                return Name
              }
            })
              .map((item) => {
                return (
                  <TouchableOpacity style={{ height: 70, width: width - 20, alignItems: 'center', justifyContent: 'space-between', borderColor: 'grey', borderWidth: 1, borderRadius: 20, marginLeft: 10, marginRight: 10, marginBottom: 4, marginTop: 4, flexDirection: 'row' }}
                    onPress={() => {
                      navigation.navigate('SearchProfile', {
                        name: item.name,
                        id:item._Id
                      })
                    }}
                  >
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10, marginRight: 10, marginBottom: 4, marginTop: 4, }} key={item._id}>
                      <FontAwesome name="user-circle-o" size={27} color={textcolor} style={{ marginLeft: 20 }} />
                      <Text style={{ fontSize: 22, fontWeight: '800', color: textcolor, margin: 10 }}>
                        {item.name}
                      </Text>
                    </View>
                  </TouchableOpacity>
                )
              })
          }
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