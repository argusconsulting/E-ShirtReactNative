import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import {
    LineChart,
  } from 'react-native-gifted-charts';
import tw from '../../../../tailwind.config';
import SelectDropdown from 'react-native-select-dropdown'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const Chart = () => {

  const [chartLevels, setChartLevels] = useState(null)

  const getDataHandler = async () => {
    try {
      const response = await fetch('https://ai.eprime.app/sensor/public/api/fatigue-levels');
      const json = await response.json();
      const processedData = json.data.map(item => ({
        value: parseFloat(item.value), // Ensure the value is a number
        label: item.label,
      }));
      setChartLevels(processedData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(()=>{
    getDataHandler()
  },[])

//   const data = [
//     {value: 95, },
//     {value: 30,label: '11:00'},
//     {value: 56,},
//     {value: 40,label: '11:15'},
//     {value: 60, },
//     {value: 10 ,label: '11:30'},
//     {value: 70, },
//     {value: 10, label: '11:45'},
//     {value: 60, },
//     {value: 80, label: '12:00'},
//     {value: 80},
//     {value: 95}
// ];

// console.log("data===========",data)

const emojisWithIcons = [
  {title: 'Season 21/22' },
  {title: 'Season 22/23'},
  {title: 'Season 23/24'},
  {title: 'Season 24/25'},

 
];
  return (

    <View style={{ backgroundColor: "#21233A", marginTop: 20 }}>
      <View style={tw`flex-row justify-between mx-3`}>
    <Text style={tw`text-[#fff] text-[18px]  mt-4 font-600 leading-tight`}>{' '}Fatigue Level</Text>
    <SelectDropdown
    data={emojisWithIcons}
    onSelect={(selectedItem, index) => {
      console.log(selectedItem, index);
    }}
    renderButton={(selectedItem, isOpened) => {
      return (
        <View style={styles.dropdownButtonStyle}>
          {selectedItem && (
            <Icon name={selectedItem.icon} style={styles.dropdownButtonIconStyle} />
          )}
          <Text style={styles.dropdownButtonTxtStyle}>
            {(selectedItem && selectedItem.title) || 'Season 23/24'}
          </Text>
          <Icon name={isOpened ? 'chevron-up' : 'chevron-down'} style={styles.dropdownButtonArrowStyle} />
        </View>
      );
    }}
    renderItem={(item, index, isSelected) => {
      return (
        <View style={{...styles.dropdownItemStyle, ...(isSelected && {backgroundColor: '#D2D9DF'})}}>
          <Icon name={item.icon} style={styles.dropdownItemIconStyle} />
          <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
        </View>
      );
    }}
    showsVerticalScrollIndicator={false}
    dropdownStyle={styles.dropdownMenuStyle}
  />
  </View>
    <View style={tw`justify-center items-center h-70`}>
        <LineChart
            curved
            initialSpacing={15}
            data={chartLevels}
            spacing={40}
            hideDataPoints
            thickness={3}
            hideRules
            hideYAxisText
            yAxisColor="transparent"
            verticalLinesColor="#FFC043"
            xAxisColor="transparent"
            color="#FFC043"
            style={{flex: 1}}
            xAxisLabelTextStyle={{ color: '#FFC043', fontSize: 10 }}
            xAxisLabelWidth={10}
            xAxisLabelRotation={-45} // optional: rotates the labels for better visibility
        />
    </View>

   
</View>
 
  )
}

export default Chart

const styles = StyleSheet.create({
  dropdownButtonStyle: {
    width: 130,
    height: 30,
    backgroundColor: '#21233A',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 3,
    marginTop:20,
    borderWidth:1,
    borderColor:"#d3d3d3"
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 12,
    fontWeight: '500',
    color: '#fff',
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
  },
  dropdownItemStyle: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 2,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 14,
    fontWeight: '500',
    color: '#151E26',
  },
  dropdownItemIconStyle: {
    fontSize: 20,
    marginRight: 8,
  },
})