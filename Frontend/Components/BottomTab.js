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
        <View style={{ width: width, justifyContent: 'center', alignItems: 'center' ,backgroundColor:'#05001E'}}>
            <View style={{  width: width, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', backgroundColor: 'black', borderTopColor: 'white', borderTopWidth: 2, bottom: 0, position: 'absolute',backgroundColor:'#05001E' }}>
                <View style={{ alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row', width: width, position: 'absolute',backgroundColor:'#05001E',height:100 }}>
                    {
                        page === 'HomePage' ?
                            <TouchableOpacity onPress={() => { navigation.navigate('Home') }} style={{ backgroundColor: 'white', borderRadius: 30, width: 50, height: 50, marginBottom:15,justifyContent: 'center', alignItems: 'center' }}>
                                <Ionicons name="ios-home-sharp" size={30} color={page === 'HomePage' ? 'black' : 'white'} />
                            </TouchableOpacity>
                            :
                            <TouchableOpacity onPress={() => { navigation.navigate('Home') }} style={{ borderRadius: 30, width: 50, height: 50,marginBottom:15, justifyContent: 'center', alignItems: 'center' }}>
                                <Ionicons name="ios-home-sharp" size={30} color="white" />
                            </TouchableOpacity>
                    }

                    {/* <TouchableOpacity onPress={() => { navigation.navigate('Search') }}>
                <FontAwesome name="search" size={30} color="white" style={{ marginLeft: 25, marginRight: 25, }} />
            </TouchableOpacity> */}

                    {
                        page === 'SearchPage' ?
                            <TouchableOpacity onPress={() => { navigation.navigate('Search') }} style={{ backgroundColor: 'white', borderRadius: 30, width: 50, height: 50, justifyContent: 'center', alignItems: 'center' ,marginBottom:15}}>
                                <FontAwesome name="search" size={30} color={page === 'SearchPage' ? 'black' : 'white'} />
                            </TouchableOpacity>
                            :
                            <TouchableOpacity onPress={() => { navigation.navigate('Search') }} style={{ borderRadius: 30, width: 50, height: 50, justifyContent: 'center', alignItems: 'center',marginBottom:15 }}>
                                <FontAwesome name="search" size={30} color="white" />
                            </TouchableOpacity>
                    }

                    <TouchableOpacity onPress={() => { navigation.navigate('Post') }}>
                        <Ionicons name="add-circle-sharp" size={50} color="white" style={{ borderRadius: 30, width: 50, height: 50, justifyContent: 'center', alignItems: 'center',marginBottom:15 }} />
                    </TouchableOpacity>


                    {/* <TouchableOpacity onPress={() => { navigation.navigate('Notification') }}>
                <Ionicons name="notifications" size={30} color="white" style={{ marginLeft: 25, marginRight: 25, }} />
            </TouchableOpacity> */}

                    {
                        page === 'NotificationPage' ?
                            <TouchableOpacity onPress={() => { navigation.navigate('Notification') }} style={{ backgroundColor: 'white', borderRadius: 30, width: 50, height: 50, justifyContent: 'center', alignItems: 'center',marginBottom:15 }}>
                                <Ionicons name="notifications" size={30} color={page === 'NotificationPage' ? 'black' : 'white'} />
                            </TouchableOpacity>
                            :
                            <TouchableOpacity onPress={() => { navigation.navigate('Notification') }} style={{ borderRadius: 30, width: 50, height: 50, justifyContent: 'center', alignItems: 'center' ,marginBottom:15}}>
                                <Ionicons name="notifications" size={30} color="white" />
                            </TouchableOpacity>
                    }

                    {/* <TouchableOpacity onPress={() => { navigation.navigate('Profile') }}>
                <FontAwesome name="user" size={30} color="white" style={{ marginLeft: 25, marginRight: 25, }} />
            </TouchableOpacity> */}

                    {
                        page === 'ProfilePage' ?
                            <TouchableOpacity onPress={() => { navigation.navigate('Profile') }} style={{ backgroundColor: 'white', borderRadius: 30, width: 50, height: 50, justifyContent: 'center', alignItems: 'center',marginBottom:15 }}>
                                <FontAwesome name="user" size={30} color={page === 'ProfilePage' ? 'black' : 'white'} />
                            </TouchableOpacity>
                            :
                            <TouchableOpacity onPress={() => { navigation.navigate('Profile') }} style={{ borderRadius: 30, width: 50, height: 50, justifyContent: 'center', alignItems: 'center',marginBottom:15 }}>
                                <FontAwesome name="user" size={30} color="white" />
                            </TouchableOpacity>
                    }
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({})