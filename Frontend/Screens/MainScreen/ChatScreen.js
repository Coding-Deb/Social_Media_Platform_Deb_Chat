import { Dimensions, FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import TopTab from '../../Components/TopTab'
import SampleApi from '../../Api/SampleApi'
import { FontAwesome } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export default function ChatScreen() {
  const [value, setvalue] = useState('')
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <TopTab />
      <TextInput
        placeholder='Search Here'
        style={{ height: 70, width: width - 20, padding: 15, marginBottom: 15, fontSize: 20, fontWeight: '800', backgroundColor: 'white', borderRadius: 25 }}
        value={value}
        onChangeText={(text) => {
          setvalue(text)
        }}
      />
      <ScrollView contentContainerStyle={{ width: width, justifyContent: 'center', alignItems: 'center' }}>
        {
          SampleApi.filter(chat => {
            if (value == '') {
              return chat
            }
            else if (chat.Name.toLowerCase().includes(value.toLowerCase())) {
              return chat
            }
          })
            .map((item) => {
              return (
                <TouchableOpacity style={{ height: 70, width: width - 20, alignItems: 'center', borderColor: 'grey', borderWidth: 1, borderRadius: 20, marginLeft: 10, marginRight: 10, marginBottom: 4, marginTop: 4, flexDirection: 'row' }} key={item.Id} onPress={()=>{
                  navigation.navigate('Main_Chat',{
                    name : item.Name
                  })
                }}>
                  <FontAwesome name="user-circle-o" size={27} color="white" style={{ marginLeft: 20 }} />
                  <Text style={{ fontSize: 22, fontWeight: '800', color: 'white', margin: 10 }}>
                    {item.Name}
                  </Text>
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