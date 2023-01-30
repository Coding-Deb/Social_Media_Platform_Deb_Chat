import { Dimensions, FlatList, Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width
import axios from 'axios'

import { useNavigation, useRoute } from '@react-navigation/native';

import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import SampleApi from '../../Api/SampleApi'
import BottomTab from '../../Components/BottomTab';
import TopTab from '../../Components/TopTab';

import Context from '../../Context/Context';

import { Skeleton } from '@rneui/themed';

export default function HomeScreen() {
  const navigation = useNavigation()
  const Route = useRoute()
  const [data, setdata] = useState([])
  const { show, counter, change, color, textcolor, changebtntext,btntext } = useContext(Context)


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
      // justifyContent: 'center',
    }}>
      <View style={{ height: height, width: width, alignItems: 'center', justifyContent: 'space-between', }}>

        <TopTab page={'HomePage'} />

        <FlatList
          data={data}
          style={{ marginBottom: 50 }}
          renderItem={({ item }) => {
            return (
              <View style={{ width: width, borderColor: textcolor, borderWidth: 2, alignItems: 'center', }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: width, marginLeft: 25, justifyContent: 'space-between' }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <FontAwesome name="user-circle-o" size={25} color={textcolor} />
                    <Text style={{ fontSize: 20, fontWeight: '800', color: textcolor, margin: 15 }}>
                      {item.name}
                    </Text>
                  </View>
                  <Pressable style={{ alignItems: 'center', justifyContent: 'center', marginRight: 35 }}
                    onPress={changebtntext}
                  >
                    <Text style={{ fontSize: 15, fontWeight: '700', color: textcolor }}>
                      {btntext}
                    </Text>
                  </Pressable>
                </View>

                {
                  item.src ?
                    <View style={{ width: width - 20, height: 270, justifyContent: 'center', alignItems: 'center', borderColor: textcolor, borderWidth: 2, }}>
                      <Image
                        source={item.src}
                        style={{ height: 250, width: width - 40, }}

                      />
                    </View>
                    :
                    <View style={{ width: width - 20, height: 270, justifyContent: 'center', alignItems: 'center', borderColor: textcolor, borderWidth: 2, }}>
                      <Skeleton animation="pulse" width={width - 40} height={250} />
                    </View>
                }
                <View style={{ width: width, flexDirection: 'row', margin: 15, alignItems: 'center' }}>
                  {
                    show === true ?
                      <AntDesign name="heart" size={30} color={textcolor} style={{ margin: 12 }} onPress={change} />
                      :
                      <AntDesign name="hearto" size={30} color={textcolor} style={{ margin: 12 }} onPress={change} />
                  }
                  <Text style={{ fontSize: 20, fontWeight: '600', color: textcolor }}>
                    {counter}
                  </Text>
                  <TouchableOpacity onPress={() => {
                    navigation.navigate('Main_Chat', {
                      name: item.name
                    })
                  }}>
                    <FontAwesome name="send" size={25} color={textcolor} style={{ margin: 12 }} />
                  </TouchableOpacity>
                </View>
              </View>
            )
          }}
        />

        {/* <View style={{height:100,width:width}}> */}
        <BottomTab page={'HomePage'} />
        {/* </View> */}

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