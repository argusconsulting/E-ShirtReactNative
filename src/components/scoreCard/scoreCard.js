import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from '../../../tailwind.config';
import LinearGradient from 'react-native-linear-gradient';

const ScoreCard = () => {

    const DATA = [
        {
          id: '123',
          score: '60 : 22',
          homeTeam: require('../../assets/livescore/1.png'),
          homeTeamScore:'2',
          awayTeamScore:'4',
          homePlayerName:"De Jong 66’",
          homePlayerName2:"Depay 79’",
          awayPlayerName:"Alvarez 21’",
          awayPlayerName2:"Palmer 70’",
          awayTeam: require('../../assets/livescore/2.png')
        },
        {
          id: '2346',
          score: '30 : 22',
          homeTeamScore:'3',
          awayTeamScore:'1',
          homePlayerName:"De Jong 66’",
          homePlayerName2:"Depay 79’",
          awayPlayerName:"Alvarez 21’",
          awayPlayerName2:"Palmer 70’",
          homeTeam: require('../../assets/livescore/3.png'),
          awayTeam: require('../../assets/livescore/2.png')
        },
       
      ];
      
      const Item = ({item}) => (
        // <View style={tw`w-70 h-50 bg-red-200 mt-5 mr-5 rounded-2xl `}>
        <View>
            <LinearGradient
            colors={['#4568DC', '#B06AB3']}
            start={{x: 0, y: 0}} // Start from top left
            end={{x: 1, y: 1}} // End at bottom right
            style={[
              tw`rounded-2xl justify-center w-80 h-50 mr-5 mt-5`,
          
            ]}>
          <Text  style={tw`text-[#fff] text-[18px] font-600 ml-3 mt-4 leading-tight self-center`}>{item.score}</Text>
          <View style={tw`flex-row justify-between`}>
          <Image source={item?.homeTeam} style={[tw`w-15 h-15 mx-3 mt-3 `,{resizeMode:"contain"}]}/>
          <Text  style={tw`text-[#fff] text-[24px] font-600  mt-4 leading-tight self-center`}>{item.homeTeamScore}  </Text>
          <Text  style={tw`text-[#fff] text-[34px] font-600  mt-4 leading-tight self-center`}>- </Text>
          <Text  style={tw`text-[#fff] text-[24px] font-600  mt-4 leading-tight self-center`}>{item.awayTeamScore}</Text>
          <Image source={item?.awayTeam} style={[tw`w-14 h-14 mx-3 mt-3 `,{resizeMode:"contain"}]}/>
          </View>
          <View style={tw`flex-row justify-between`}>
            <View>
            <Text  style={tw`text-[#fff] text-[16px] font-400  mt-4 ml-3 leading-tight self-center`}>{item.homePlayerName}  </Text> 
            <Text  style={tw`text-[#fff] text-[16px] font-400  ml-3 mt-2 leading-tight self-center`}>{item.homePlayerName2}  </Text> 
            </View>
            <View>
                <View>
            <Text  style={tw`text-[#fff] text-[16px] font-400  mt-4 ml-3 leading-tight self-center`}>{item.awayPlayerName}  </Text> 
            <Text  style={tw`text-[#fff] text-[16px] font-400  ml-3 mt-2 leading-tight self-center`}>{item.awayPlayerName2}  </Text> 
            </View>
            </View>
            </View>
            </LinearGradient>
            </View>
      
      );


  return (
    <View style={tw`mt-3 mx-5`}>
       <FlatList
        data={DATA}
        showsHorizontalScrollIndicator={false}
        horizontal
        renderItem={({item}) => <Item item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

export default ScoreCard

const styles = StyleSheet.create({})