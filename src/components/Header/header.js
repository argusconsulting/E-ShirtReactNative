import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from '../../../tailwind.config'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const Header = () => {
  return (
    <View style={tw`mt-12 flex-row justify-between mx-5 `}>
         <Image
            source={require('../../assets/Category.png')}
            style={tw`w-8 h-8`}
          />
       <Text
              style={tw`text-[#A4A4A4] text-[20px] font-600 ml-3 leading-tight self-center`}>
            LiveScore
            </Text>

            <FontAwesome
                  name={'bell-o'}
                  size={22}
                  color={'#fff'}
                  style={tw`mt-2`}
                />
            </View>
  )
}

export default Header

const styles = StyleSheet.create({})