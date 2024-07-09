import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from '../../../tailwind.config'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const FootballNews = () => {

    const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'Champions League 2022-23 draw: group stage analysis and predictions',
          image: require('../../assets/livescore/soccer.png')
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Champions League 2022-23 draw: group stage analysis and predictions',
          image: require('../../assets/livescore/soccer2.jpg')
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Champions League 2022-23 draw: group stage analysis and predictions',
          image: require('../../assets/livescore/soccer.png')
        },
      ];
      
      const Item = ({item}) => (
        <View style={tw`flex-row mt-4`}>
    <Image source={item?.image} style={[tw`w-20 h-15`, { borderRadius: 10 }]} />
          <Text style={tw`text-[#fff] text-[15px] mx-3 font-600 w-55 leading-tight`}>{item?.title}</Text>
          <FontAwesome
                  name={'bookmark'}
                  size={18}
                  color={'#fff'}
                  style={tw`mt-2 mr-10`}
                />
        </View>
      );


  return (
    <View style={tw`mx-5 mb-5`}>
    <View style={tw`flex-row justify-between`}>
    <Text style={tw`text-[#fff] text-[24px] font-600  mt-7 leading-tight`}>
      Football News{' '}
    </Text>
    <Text style={tw`text-[#fff] text-[14px] font-400  mt-9 leading-tight`}>
      See All{' '}
    </Text>
  </View>
  <FlatList
        data={DATA}
        renderItem={({item}) => <Item item={item} />}
        keyExtractor={item => item.id}
      />
  </View>
  )
}

export default FootballNews

const styles = StyleSheet.create({})