import { Dimensions, FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import TopTab from '../../Components/TopTab'
import SampleApi from '../../Api/SampleApi'
import { FontAwesome } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import Context from '../../Context/Context'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export default function ChatScreen() {
  const [value, setvalue] = useState('')
  const [data, setdata] = useState([])
  const navigation = useNavigation()

  const { color, setcolor, changecolor, text, settext, textcolor, settextcolor, isEnabled, setIsEnabled } = useContext(Context)

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
      <TopTab />
      <TextInput
        placeholder='Search Here'
        placeholderTextColor={color}
        style={{ height: 70, width: width - 20, padding: 15, marginBottom: 15, marginTop: 15, fontSize: 20, fontWeight: '800', backgroundColor: textcolor, borderRadius: 25 }}
        value={value}
        onChangeText={(text) => {
          setvalue(text)
        }}
      />
      <ScrollView contentContainerStyle={{ width: width, justifyContent: 'center', alignItems: 'center' }}>
        {
          data.filter(chat => {
            if (value == '') {
              return chat
            }
            else if (chat.name.toLowerCase().includes(value.toLowerCase())) {
              return chat
            }
          })
            .map((item) => {
              return (
                <TouchableOpacity style={{ height: 70, width: width - 20, alignItems: 'center', borderColor: 'grey', borderWidth: 1, borderRadius: 20, marginLeft: 10, marginRight: 10, marginBottom: 4, marginTop: 4, flexDirection: 'row' }} key={item.Id} onPress={() => {
                  navigation.navigate('Main_Chat', {
                    name: item.name
                  })
                }}>
                  <View key={item._id} style={{ height: 70, width: width - 20, alignItems: 'center', flexDirection: 'row' }}>
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