import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import tw from '../../tailwind.config';

const Sensor = () => {
  return (
    <View style={tw`w-90 h-90 justify-center self-center `}>
      <ImageBackground
        source={require('../assets/sensor.jpeg')}
        style={[tw`w-full h-full self-center `, {resizeMode: 'contain'}]}>
        {/* Pain level */}
        <View style={tw`flex-row mt-2  self-end`}>
          <View
            style={tw`border-b border-b-[#d3d3d3] border-[0.3px] w-25 mt-3 self-center`}
          />
          <Text style={tw`mt-2 text-[#fff] text-[14px]  font-500`}>Pain level</Text>
        </View>

        {/* ecg Monitor */}
        <View style={tw`flex-row mt-4 mr-5 `}>
          <Text style={tw`mt-2 text-[#fff] text-[14px]  font-500`}>ECG Monitor</Text>
          <View
            style={tw`border-b border-b-[#d3d3d3] border-[0.3px] w-13 mt-3 self-center`}
          />
        </View>

        {/* oxygen level */}
        <View style={tw`flex-row mt-10  w-40`}>
          <Text style={tw`mt-2 text-[#fff] text-[14px]  font-500`}>Oxygen Level</Text>
          <View
            style={tw`border-b border-b-[#d3d3d3] border-[0.3px] w-10 mt-3 self-center`}
          />
        </View>

        {/* blood presure */}
        <View style={tw`flex-row self-end`}>
          {/* <View style={tw`border-b border-b-[#d3d3d3] border-[0.3px] w-25 mt-3 self-center`}/> */}
          <Text style={tw`mt-2 text-[#fff] text-[14px]  font-500 `}>Blood Pressure</Text>
        </View>

        {/* Pulse rate */}
        <View style={tw`flex-row mt-3  w-40`}>
          <Text style={tw`mt-2 text-[#fff] text-[14px]  font-500`}>Pulse Rate</Text>
          <View
            style={tw`border-b border-b-[#d3d3d3] border-[0.3px] w-10 mt-3 self-center`}
          />
        </View>

        {/* signal transmitter */}

        <View style={tw`flex-row self-end mt-4`}>
          <View
            style={tw`border-t border-t-[#d3d3d3] self-center border-[0.3px] w-6`}
          />
          <View style={tw`justify-center items-center`}>
            <Text style={tw`text-center text-[#fff] text-[14px]  font-500`}>Signal{'\n'}Transmitter</Text>
          </View>
        </View>

        <View style={tw`flex-row justify-between`}>
          {/* Fatigue rate */}
          <View style={tw`flex-row mt-1 w-40`}>
            <Text style={tw`mt-2 text-[#fff] text-[14px]  font-500`}>
              Fatigue/{'\n'}Activity{'\n'}Rate
            </Text>
            <View
              style={tw`border-b border-b-[#d3d3d3] border-[0.3px] w-13 mt-3 self-center`}
            />
          </View>

          {/* sweat */}
          <View style={tw`flex-row self-end mb-1`}>
            <View
              style={tw`border-t border-t-[#d3d3d3] self-center border-[0.3px] w-6`}
            />
            <View style={tw`justify-center items-center`}>
              <Text style={tw`text-center text-[#fff] text-[14px]  font-500`}>Sweat{'\n'}Temperature</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Sensor;

const styles = StyleSheet.create({});
