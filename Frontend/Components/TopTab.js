import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { useNavigation } from '@react-navigation/native'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width
import { Ionicons } from '@expo/vector-icons';

import Context from '../Context/Context'

export default function TopTab({ page }) {
    const navigation = useNavigation()
    const { show, counter, change, color, textcolor } = useContext(Context)
    return (
        <View style={{ height: 120, width: width, alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row', backgroundColor: '#05001E', }}>
            {
                page === 'ProfilePage' ?
                    <View style={{ height: 120, width: 1 / 2 * width, alignItems: 'center', justifyContent: 'center', marginLeft: 35 }}>
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('Home')
                        }}>
                            <Ionicons name="arrow-back-sharp" size={40} color="white" />
                        </TouchableOpacity>
                    </View>
                    :
                    null
            }
            {
                page === 'NotificationPage' ?
                    <View style={{ height: 120, width: 1 / 2 * width, alignItems: 'center', justifyContent: 'center', marginLeft: 35 }}>
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('Home')
                        }}>
                            <Ionicons name="arrow-back-sharp" size={40} color="white" />
                        </TouchableOpacity>
                    </View>
                    :
                    null
            }

            <View style={{ width: 1 / 2 * width, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginLeft: 50 }}>

                <Image
                    source={require('../assets/DebChat.jpg')}
                    style={{ height: 80, width: 80, alignItems: 'center', justifyContent: 'center', margin: 15 }}
                    resizeMode='center'
                />
                <Text style={{ fontSize: 30, fontWeight: 'bold', margin: 15, color: 'white' }}>
                    Deb Chat
                </Text>
            </View>

            <View style={{width: 1 / 2 * width, alignItems: 'center', justifyContent: 'center', marginLeft: 50 }}>
                {
                    page === 'HomePage' ?
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('Chat')
                        }}>
                            <Ionicons name="chatbubbles-sharp" size={40} color="white" />
                        </TouchableOpacity>
                        :
                        null
                }
            </View>

        </View >
    )
}

const styles = StyleSheet.create({})