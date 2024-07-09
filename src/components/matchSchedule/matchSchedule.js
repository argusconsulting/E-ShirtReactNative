import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import tw from '../../../tailwind.config';

const MatchSchedule = () => {
  const DATA = [
    {
      id: '123',
      date: '27 Aug 2022',
      time: '01:40',
      homeTeam: require('../../assets/livescore/1.png'),
      homeTeamName: 'Brighton',
      awayTeamName: 'Chelsea',
      awayTeam: require('../../assets/livescore/2.png'),
    },
    {
      id: '123',
      date: '28 Aug 2022',
      time: '03:20',
      homeTeam: require('../../assets/livescore/3.png'),
      homeTeamName: 'Chelsea',
      awayTeamName: 'Leicester',
      awayTeam: require('../../assets/livescore/4.png'),
    },
    {
      id: '123654',
      date: '28 Aug 2022',
      time: '09:20',
      homeTeam: require('../../assets/livescore/1.png'),
      homeTeamName: 'Brighton',
      awayTeamName: 'Leeds Unit',
      awayTeam: require('../../assets/livescore/5.png'),
    },
  ];

  const Item = ({item}) => (
   
    <View style={tw`w-100% h-22 bg-[#222232] mt-5 mr-5 rounded-xl justify-center `}>
      <View style={tw`flex-row justify-between`}>
        <Text
          style={tw`text-[#fff] text-[16px] font-500 ml-3 leading-tight self-center`}>
          {item.homeTeamName}
        </Text>
        <Image
          source={item?.homeTeam}
          style={[tw`w-8 h-8 mt-3 `, {resizeMode: 'contain'}]}
        />
        <View>
          <Text
            style={tw`text-[#fff] text-[16px] font-500  mt-4 leading-tight self-center`}>
            {item.date}
          </Text>
          <Text
            style={tw`text-[#fff] text-[16px] font-500  leading-tight self-center`}>
            {item.time}
          </Text>
        </View>

        <Image
          source={item?.awayTeam}
          style={[tw`w-8 h-8 mt-3 `, {resizeMode: 'contain'}]}
        />
        <Text
          style={tw`text-[#fff] text-[16px] font-500 mr-3 leading-tight self-center`}>
          {item.awayTeamName}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={tw`mx-5`}>
      <View style={tw`flex-row justify-between`}>
        <Text style={tw`text-[#fff] text-[24px] font-600  mt-7 leading-tight`}>
          Match Schedule{' '}
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
  );
};

export default MatchSchedule;

const styles = StyleSheet.create({});
