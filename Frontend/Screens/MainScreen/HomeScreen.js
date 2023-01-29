import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

import { useNavigation } from '@react-navigation/native';

import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import SampleApi from '../../Api/SampleApi'
import BottomTab from '../../Components/BottomTab';
import TopTab from '../../Components/TopTab';

export default function HomeScreen() {
  const navigation = useNavigation()
  const [show, setshow] = useState(false)
  const [counter, setcounter] = useState(0)

  const change = () => {
    if (show === true) {
      setshow(false)
      setcounter(counter)
      if (counter > 0) {
        setcounter(counter - 1)
      }
    } else {
      setshow(true)
      setcounter(counter + 1)
    }
  }

  return (
    <View style={styles.container}>
      <View style={{ height: height, width: width, alignItems: 'center', margin: 40, justifyContent: 'space-between', }}>

        <TopTab page={'HomePage'} />

        <FlatList
          data={SampleApi}
          renderItem={({ item }) => {
            return (
              <View style={{ width: width, borderColor: 'white', borderWidth: 2, alignItems: 'center', }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: width, marginLeft: 25 }}>
                  <FontAwesome name="user-circle-o" size={25} color="white" />
                  <Text style={{ fontSize: 20, fontWeight: '800', color: 'white', margin: 15 }}>
                    {item.Name}
                  </Text>
                </View>

                <View style={{ width: width - 20, height: 270, justifyContent: 'center', alignItems: 'center', borderColor: 'white', borderWidth: 2, }}>
                  <Image
                    source={item.src}
                    style={{ height: 120, width: width - 20, }}
                    resizeMode='contain'
                  />
                </View>
                <View style={{ width: width, flexDirection: 'row', margin: 15, alignItems: 'center' }}>
                  {
                    show === true ?
                      <AntDesign name="heart" size={30} color="white" style={{ margin: 12 }} onPress={change} />
                      :
                      <AntDesign name="hearto" size={30} color="white" style={{ margin: 12 }} onPress={change} />
                  }
                  <Text style={{ fontSize: 20, fontWeight: '600', color: 'white' }}>
                    {counter}
                  </Text>
                  <TouchableOpacity onPress={() => { navigation.navigate('Chat') }}>
                    <FontAwesome name="send" size={25} color="white" style={{ margin: 12 }} />
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