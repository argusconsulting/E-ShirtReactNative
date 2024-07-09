import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import tw from '../../tailwind.config';

const Hexagon = () => {
    return (
        <View>
        
             <Image source={require('../assets/hex.png')} style={[tw`w-96 h-90 self-center`,{resizeMode:"cover"}]}/>
         
        </View>
    );
};

export default Hexagon;

const styles = StyleSheet.create({
 
});
