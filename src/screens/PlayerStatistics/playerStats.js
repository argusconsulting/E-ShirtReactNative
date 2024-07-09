import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import tw from '../../../tailwind.config'
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation, useRoute } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Chart from './modules/chart';
import Hexagon from '../../components/hexagon';
import Sensor from '../../components/sensor';

const PlayerStats = () => {
    const route = useRoute()
    const navigation = useNavigation()
    const [data , setData] = useState()
    const [isFirstRun, setIsFirstRun] = useState(true);

    const name = route?.params?.name
    const playerName = route?.params?.playerName
    const ageGroup = route?.params?.ageGroup
    const weightGroup = route?.params?.weightGroup

    const submitHandler = async () => {
      try {
        const data = {
          user_id: playerName,
          age_group: ageGroup,
          weight_range: weightGroup,
        };
    
        const response = await fetch('https://ai.eprime.app/sensor/public/api/calculate', {
          method: 'POST', // Specify the POST method
          headers: {
            'Content-Type': 'application/json', // Set content type for JSON data
          },
          body: JSON.stringify(data), // Stringify the data object
        });
    
        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }
    
        const json = await response.json();
        setData(json)
        console.log("json---------------", json);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    useEffect(() => {
      // Immediate API call on first render
      submitHandler();
  
      const intervalId = setInterval(() => {
        submitHandler();
      }, 2000); // Interval for subsequent API calls (5 seconds)
  
      // Cleanup function to clear the interval when the component unmounts
      return () => clearInterval(intervalId);
    }, []); // Empty dependency array ensures useEffect runs only once
  
    useEffect(() => {
      // Reset the isFirstRun flag after the first API call
      if (!isFirstRun) return;
      setIsFirstRun(false);
    }, [data]); 

    

    const createdAt = data?.created_at;
    const time = createdAt ? new Date(createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '';


    
  return (
 
      <ScrollView style={tw`flex-1 bg-black`}>
        <View style={tw`flex-row justify-between mt-15`}>
            <TouchableOpacity onPress={()=> navigation.goBack() }>
         <AntDesign
                  name={'left'}
                  size={24}
                  color={'#fff'}
                  style={tw`pl-5 mt-1`}
                />
                </TouchableOpacity>
      <Text style={tw`text-[#fff] text-[24px] mr-5 font-600 self-center leading-tight`}>Player Statistics</Text>
      <Text></Text>
      </View>
      <View style={tw`flex-row justify-between`}>
        <View style={tw`flex-row`}>
      <FontAwesome
                  name={'user-circle'}
                  size={59}
                  color={'#fff'}
                  style={tw`mx-8 mt-10`}
                />
    <Text style={tw`text-[#fff] text-[24px] mr-5 mt-10 font-600 self-center leading-tight w-45`}>{name}</Text>
    </View>
    <LinearGradient
            colors={['#4568DC', '#B06AB3']}
            start={{x: 0, y: 0}} // Start from top left
            end={{x: 1, y: 1}} // End at bottom right
            style={[
              tw` justify-center w-13 h-13 mr-5 mt-11 rounded-full`,
          
            ]}>
<Text style={tw`text-[#fff] text-[20px]  font-600 self-center leading-tight`}>76</Text>
                </LinearGradient>
    </View>
    <View>
        <View style={tw`flex-row justify-between mx-4`}>
            <View style={tw`flex-row `}>
    <Text style={tw`text-[#797979] text-[18px] mt-6 font-600 self-center leading-tight`}>Pain level :</Text>
    <Text style={tw`text-[#fff] text-[18px] mt-6 font-600 self-center leading-tight`}>{' '}{data?.pain_level}</Text>
    </View>
    <View style={tw`flex-row `}>
    <Text style={tw`text-[#797979] text-[18px] mt-6 font-600 self-center leading-tight`}>Fatigue level :</Text>
    <Text style={tw`text-[#fff] text-[18px] mt-6 font-600 self-center leading-tight`}>{' '}{data?.fatigue_level}</Text>
    </View>
    </View>
    <View style={tw`flex-row justify-between mx-4`}>
    <View style={tw`flex-row `}>
    <Text style={tw`text-[#797979] text-[18px] mt-4 font-600 self-center leading-tight`}>Pulse Rate :</Text>
    <Text style={tw`text-[#fff] text-[18px] mt-4 font-600 self-center leading-tight`}>{' '}{data?.pulse_rate ? Math.floor(data.pulse_rate) : 'No pulse rate data'}</Text>
    </View>
    <View style={tw`flex-row `}>
    <Text style={tw`text-[#797979] text-[18px] mt-4 font-600 self-center leading-tight`}>Sweat :</Text>
    <Text style={tw`text-[#fff] text-[18px] mt-4 font-600 self-center leading-tight`}>{' '}{data?.sweat_level}ml</Text>
    </View>
    </View>
    <View style={tw`flex-row justify-between mx-4`}>
    <View style={tw`flex-row `}>
    <Text style={tw`text-[#797979] text-[18px] mt-4 font-600 self-center leading-tight`}>Time :</Text>
    <Text style={tw`text-[#fff] text-[18px] mt-4 font-600 self-center leading-tight`}>{' '}{time}</Text>
    </View>
   
    </View>

  
      </View>
    <Chart/>
    <View style={{backgroundColor: "#21233A", height:365, marginTop:30}}>
      <Hexagon/>
    </View>
    {/* <View style={{ marginTop:30}}>
    <Sensor/>
    </View> */}
    </ScrollView>
  
  )
}

export default PlayerStats

const styles = StyleSheet.create({

})