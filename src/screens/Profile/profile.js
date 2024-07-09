import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from '../../../tailwind.config'

const Profile = () => {
  return (
    <View style={tw`flex-1 bg-black`}>
      <Text style={tw`text-[#fff] text-[24px] font-600 mt-13 self-center leading-tight`}>Profile</Text>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})