import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

import { useNavigation } from '@react-navigation/native';

import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import SampleApi from '../../Api/SampleApi'
import BottomTab from '../../Components/BottomTab';
import TopTab from '../../Components/TopTab';

import Context from '../../Context/Context';

export default function HomeScreen() {
  const navigation = useNavigation()
  const { show, counter, change, color, textcolor } = useContext(Context)

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
          data={SampleApi}
          style={{marginBottom:50}}
          renderItem={({ item }) => {
            return (
              <View style={{ width: width, borderColor: textcolor, borderWidth: 2, alignItems: 'center', }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: width, marginLeft: 25 }}>
                  <FontAwesome name="user-circle-o" size={25} color={textcolor} />
                  <Text style={{ fontSize: 20, fontWeight: '800', color: textcolor, margin: 15 }}>
                    {item.Name}
                  </Text>
                </View>

                <View style={{ width: width - 20, height: 270, justifyContent: 'center', alignItems: 'center', borderColor: textcolor, borderWidth: 2, }}>
                  <Image
                    source={item.src}
                    style={{ height: 250, width: width - 40, }}

                  />
                </View>
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
                      name: item.Name
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