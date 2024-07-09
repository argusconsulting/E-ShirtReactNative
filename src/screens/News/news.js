import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from '../../../tailwind.config'

const News = () => {
  return (
    <View style={tw` flex-1 bg-black`}>
      <Text style={tw`text-[#fff] text-[24px] font-600  mt-13 self-center leading-tight`}>News</Text>
    </View>
  )
}

export default News

const styles = StyleSheet.create({})