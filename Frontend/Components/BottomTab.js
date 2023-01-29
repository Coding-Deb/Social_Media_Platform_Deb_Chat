import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function BottomTab({ page }) {
    const navigation = useNavigation()
    return (
        <View style={{ height: 100, width: width ,justifyContent:'center',alignItems:'center'}}>
            <View style={{ height: 100, width: width, alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row', backgroundColor: 'black', borderTopColor: 'white', borderTopWidth: 2, position: 'absolute', bottom: 0 }}>
                {
                    page === 'HomePage' ?
                        <TouchableOpacity onPress={() => { navigation.navigate('Home') }} style={{ backgroundColor: 'white', borderRadius: 30, width: 50, height: 50, justifyContent: 'center', alignItems: 'center' }}>
                            <Ionicons name="ios-home-sharp" size={30} color={page === 'HomePage' ? 'black' : 'white'} />
                        </TouchableOpacity>
                        :
                        <TouchableOpacity onPress={() => { navigation.navigate('Home') }} style={{ borderRadius: 30, width: 50, height: 50, justifyContent: 'center', alignItems: 'center' }}>
                            <Ionicons name="ios-home-sharp" size={30} color="white" />
                        </TouchableOpacity>
                }

                {/* <TouchableOpacity onPress={() => { navigation.navigate('Search') }}>
                <FontAwesome name="search" size={30} color="white" style={{ marginLeft: 25, marginRight: 25, }} />
            </TouchableOpacity> */}

                {
                    page === 'SearchPage' ?
                        <TouchableOpacity onPress={() => { navigation.navigate('Search') }} style={{ backgroundColor: 'white', borderRadius: 30, width: 50, height: 50, justifyContent: 'center', alignItems: 'center' }}>
                            <FontAwesome name="search" size={30} color={page === 'SearchPage' ? 'black' : 'white'} />
                        </TouchableOpacity>
                        :
                        <TouchableOpacity onPress={() => { navigation.navigate('Search') }} style={{ borderRadius: 30, width: 50, height: 50, justifyContent: 'center', alignItems: 'center' }}>
                            <FontAwesome name="search" size={30} color="white" />
                        </TouchableOpacity>
                }

                <TouchableOpacity onPress={() => { navigation.navigate('Post') }}>
                    <Ionicons name="add-circle-sharp" size={50} color="white" style={{ borderRadius: 30, width: 50, height: 50, justifyContent: 'center', alignItems: 'center' }} />
                </TouchableOpacity>


                {/* <TouchableOpacity onPress={() => { navigation.navigate('Notification') }}>
                <Ionicons name="notifications" size={30} color="white" style={{ marginLeft: 25, marginRight: 25, }} />
            </TouchableOpacity> */}

                {
                    page === 'NotificationPage' ?
                        <TouchableOpacity onPress={() => { navigation.navigate('Notification') }} style={{ backgroundColor: 'white', borderRadius: 30, width: 50, height: 50, justifyContent: 'center', alignItems: 'center' }}>
                            <Ionicons name="notifications" size={30} color={page === 'NotificationPage' ? 'black' : 'white'} />
                        </TouchableOpacity>
                        :
                        <TouchableOpacity onPress={() => { navigation.navigate('Notification') }} style={{ borderRadius: 30, width: 50, height: 50, justifyContent: 'center', alignItems: 'center' }}>
                            <Ionicons name="notifications" size={30} color="white" />
                        </TouchableOpacity>
                }

                {/* <TouchableOpacity onPress={() => { navigation.navigate('Profile') }}>
                <FontAwesome name="user" size={30} color="white" style={{ marginLeft: 25, marginRight: 25, }} />
            </TouchableOpacity> */}

                {
                    page === 'ProfilePage' ?
                        <TouchableOpacity onPress={() => { navigation.navigate('Profile') }} style={{ backgroundColor: 'white', borderRadius: 30, width: 50, height: 50, justifyContent: 'center', alignItems: 'center' }}>
                            <FontAwesome name="user" size={30} color={page === 'ProfilePage' ? 'black' : 'white'} />
                        </TouchableOpacity>
                        :
                        <TouchableOpacity onPress={() => { navigation.navigate('Profile') }} style={{ borderRadius: 30, width: 50, height: 50, justifyContent: 'center', alignItems: 'center' }}>
                            <FontAwesome name="user" size={30} color="white" />
                        </TouchableOpacity>
                }

            </View>
        </View>
    )
}

const styles = StyleSheet.create({})