import { FlatList, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import tw from '../../../tailwind.config'
import Modal from "react-native-modal";
import { useNavigation } from '@react-navigation/native'
import SelectDropdown from 'react-native-select-dropdown'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';

const Standing = () => {

  const navigation = useNavigation()

  const DATA=[
    {
    id:1,
    playerName:"Mohammed Al-Owais",
    goals:"8"
  },
  {
    id:2,
    playerName:"Mohammed Al-Rubaie",
    goals:"3"
  },
  {
    id:3,
    playerName:"Ahmed Al-Kassar",
    goals:"5"
  },
  {
    id:4,
    playerName:"Ali Lajami",
    goals:"9"
  },
  {
    id:5,
    playerName:"Awn Al-Saluli",
    goals:"4"
  },
  {
    id:6,
    playerName:"Ali Ali-Bulayhi",
    goals:"1"
  },
]

const [isModalVisible, setModalVisible] = useState(false);
const [data, setData] = useState(null)
const [age, setAge] = useState(null)
const [weight, setWeight] = useState(null)
const [playerName, setPlayerName] = useState(null)
const [ageGroup, setAgeGroup] = useState(null)
const [weightGroup, setWeightGroup] = useState(null)
const [savedName, setSavedName] = useState(null)


const toggleModal = () => {
  setModalVisible(!isModalVisible);
};

const getDataHandler = async()=>{
  try {
    const response = await fetch('https://ai.eprime.app/sensor/public/api/users');
    const json = await response?.json();
    setData(json);

  } catch (error) {
    console.error(error);
  }

}

const getAgeWeightHandler = async()=>{
  try {
    const response = await fetch('https://ai.eprime.app/sensor/public/api/all-baseline-pulse-rates');
    const json = await response.json();
    setAge(json?.data?.age_group);
setWeight(json?.data?.weight_range)

  } catch (error) {
    console.error(error);
  }

}



useEffect(() => {

  getDataHandler();
  getAgeWeightHandler()
}, [])




  const Item = ({item})=>{
   
    return(
    
      <TouchableOpacity onPress={()=> {toggleModal()
        setSavedName(item?.playerName)
      }
      }>
<View style={tw`mt-7 border-b border-[#d3d3d3] border-b-[0.3px]`}>
  <View style={tw`flex-row justify-between mx-9 mb-3`}>
  <Text style={tw`text-[#fff] text-[18px] font-600  self-center leading-tight`}>{item?.playerName}</Text>
  <Text style={tw`text-[#fff] text-[16px] font-600   self-center leading-tight`}>{item?.goals}</Text>
  </View>
</View>
 </TouchableOpacity>
    )
  }
  return (
    <View style={tw`flex-1 bg-black`}>
  <ImageBackground
        source={require('../../assets/standing_bg.png')}
        style={tw`w-full h-full`}>
  <Text style={tw`text-[#fff] text-[24px] font-600  mt-13 self-center leading-tight`}>
      Standings
        </Text>

        <View style={tw`w-[90%] h-[70%] bg-[#222232] mt-10 self-center rounded-xl`}>
        <View style={tw`flex-row justify-between mx-3`}>
        <Text style={tw`text-[#fff] text-[22px] font-600  mt-7 leading-tight`}>
          Goals Scored
        </Text>
        <Text style={tw`text-[#fff] text-[14px] font-400  mt-9 leading-tight`}>
          See All{' '}
        </Text>
      </View>

      <View style={tw`flex-row justify-between mx-5`}>
        <Text style={tw`text-[#fff] text-[18px] font-600  mt-7 leading-tight`}>
         Player Name
        </Text>
        <Text style={tw`text-[#fff] text-[14px] font-400  mt-9 leading-tight`}>
          Goals
        </Text>
        </View>
    
        <FlatList
        data={DATA}
        renderItem={({item}) => <Item item={item} />}
        keyExtractor={item => item.id}
      />
        </View>
          </ImageBackground>

          <Modal isVisible={isModalVisible}>
        <View style={tw`flex-1 bg-[#fff] rounded-lg`}>
        <TouchableOpacity onPress={toggleModal} >
          <Text style={tw`text-[#000] text-[20px] font-600 self-end mt-3 mr-3 leading-tight`}>
      Close
        </Text>
          </TouchableOpacity>

        <Text style={tw`text-[#3b3b3b] text-[24px] font-600  mt-10 self-center leading-tight`}>
      E-Shirt SmartBoard
        </Text>

        <Text style={tw`text-[#3b3b3b] text-[20px] font-600  mt-10 self-center leading-tight`}>
    Select Player
        </Text>
        <SelectDropdown
    data={data}
    onSelect={(selectedItem, index) => {
      console.log(selectedItem, index);
      setPlayerName(selectedItem?.id)
    }}
    renderButton={(selectedItem, isOpened) => {
      return (
        <View style={styles.dropdownButtonStyle}>
          {selectedItem && (
            <Icon name={selectedItem.icon} style={styles.dropdownButtonIconStyle} />
          )}
          <Text style={styles.dropdownButtonTxtStyle}>
            {(selectedItem && selectedItem.name) || 'Select any player'}
          </Text>
          <Icon name={isOpened ? 'chevron-up' : 'chevron-down'} style={styles.dropdownButtonArrowStyle} />
        </View>
      );
    }}
    renderItem={(item, index, isSelected) => {
      return (
        <View style={{...styles.dropdownItemStyle, ...(isSelected && {backgroundColor: '#D2D9DF'})}}>
          <Icon name={item.icon} style={styles.dropdownItemIconStyle} />
          <Text style={styles.dropdownItemTxtStyle}>{item?.name}</Text>
        </View>
      );
    }}
    showsVerticalScrollIndicator={false}
    dropdownStyle={styles.dropdownMenuStyle}
  />

  {/* for age group  */}

  <Text style={tw`text-[#3b3b3b] text-[20px] font-600  mt-10 self-center leading-tight`}>
    Select Age Group
        </Text>
        <SelectDropdown
    data={age}
    onSelect={(selectedItem, index) => {
      console.log(selectedItem, index);
      setAgeGroup(selectedItem?.age_group)
    }}
    renderButton={(selectedItem, isOpened) => {
      return (
        <View style={styles.dropdownButtonStyle}>
          {selectedItem && (
            <Icon name={selectedItem.icon} style={styles.dropdownButtonIconStyle} />
          )}
          <Text style={styles.dropdownButtonTxtStyle}>
            {(selectedItem && selectedItem.age_group) || 'Select your age group'}
          </Text>
          <Icon name={isOpened ? 'chevron-up' : 'chevron-down'} style={styles.dropdownButtonArrowStyle} />
        </View>
      );
    }}
    renderItem={(item, index, isSelected) => {
      return (
        <View style={{...styles.dropdownItemStyle, ...(isSelected && {backgroundColor: '#D2D9DF'})}}>
          <Icon name={item.icon} style={styles.dropdownItemIconStyle} />
          <Text style={styles.dropdownItemTxtStyle}>{item?.age_group}</Text>
        </View>
      );
    }}
    showsVerticalScrollIndicator={false}
    dropdownStyle={styles.dropdownMenuStyle}
  />

  {/* weight */}
  <Text style={tw`text-[#3b3b3b] text-[20px] font-600  mt-10 self-center leading-tight`}>
    Select Weight Group(kg)
        </Text>
        <SelectDropdown
    data={weight}
    onSelect={(selectedItem, index) => {
      console.log(selectedItem, index);
      setWeightGroup(selectedItem?.weight_range)
    }}
    renderButton={(selectedItem, isOpened) => {
      return (
        <View style={styles.dropdownButtonStyle}>
          {selectedItem && (
            <Icon name={selectedItem.icon} style={styles.dropdownButtonIconStyle} />
          )}
          <Text style={styles.dropdownButtonTxtStyle}>
            {(selectedItem && selectedItem.weight_range) || 'Select your weight range'}
          </Text>
          <Icon name={isOpened ? 'chevron-up' : 'chevron-down'} style={styles.dropdownButtonArrowStyle} />
        </View>
      );
    }}
    renderItem={(item, index, isSelected) => {
      return (
        <View style={{...styles.dropdownItemStyle, ...(isSelected && {backgroundColor: '#D2D9DF'})}}>
          <Icon name={item.icon} style={styles.dropdownItemIconStyle} />
          <Text style={styles.dropdownItemTxtStyle}>{item?.weight_range}</Text>
        </View>
      );
    }}
    showsVerticalScrollIndicator={false}
    dropdownStyle={styles.dropdownMenuStyle}
  />

<TouchableOpacity
   onPress={()=> {toggleModal() 
     navigation.navigate('PlayerStats',{
    name: savedName,
    playerName: playerName,
    ageGroup:ageGroup,
    weightGroup:weightGroup
    
  })}}
          style={[
            tw`mt-10 mx-5 rounded-md justify-center`,
            {
              width: '90%',
              height: 50, 
            },
          ]}>
          <LinearGradient
            colors={['#9C3FE4', '#C65647']}
            start={{x: 0, y: 0}} // Start from top left
            end={{x: 1, y: 1}} // End at bottom right
            style={[
              tw`rounded-2xl justify-center`,
              {flex: 1, justifyContent: 'center', alignItems: 'center'},
            ]}>
             
            <Text style={tw`text-[#fff] text-[18px] font-400 leading-tight`}>
         Submit
            </Text>
          </LinearGradient>
        </TouchableOpacity>
         
        </View>
      </Modal>
    </View>
  )
}

export default Standing

const styles = StyleSheet.create({
  dropdownButtonStyle: {
    width: "90%",
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 7,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:"center",
    paddingHorizontal: 3,
    marginTop:20,
    borderWidth:1,
    borderColor:"#3b3b3b"
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '400',
    color: '#3d3d3d',
    paddingHorizontal:10
  },
  dropdownButtonArrowStyle: {
    fontSize: 24,
  },
  dropdownButtonIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
  dropdownMenuStyle: {
    backgroundColor: '#E9ECEF',
    borderRadius: 8,
    height:"30%"
  },
  dropdownItemStyle: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 2,
    height:40
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    color: '#151E26',
  },
  dropdownItemIconStyle: {
    fontSize: 20,
    marginRight: 8,
    color:"#3d3d3d"
  },
})