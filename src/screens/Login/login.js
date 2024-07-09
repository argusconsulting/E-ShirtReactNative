import {
  Alert,
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import tw from '../../../tailwind.config';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation()

  const [email, setEmail] = useState('')

  const [password, setPassword] = useState('')

  function handleSubmit(){
    if(!email || !password === ' '){
      Alert.alert("Please fill Email & Password !")
    }else{
    
      navigation.navigate('Home')
    }
  }

  
  return (
    <View style={tw`flex-1`}>
      <StatusBar animated={true} translucent={true} backgroundColor="#000" />
      <ImageBackground
        source={require('../../assets/bg6.jpeg')}
        style={styles.imageBackground}>
            <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/hkb_logo1.png')}
            style={styles.logo}
          />
        </View>
        <View style={[tw`w-full h-[65%]`, styles.bottomView]}>
      
            <Text
              style={tw`text-[#fff] text-[42px] font-600 ml-3 mt-1 leading-tight self-center`}>
              Welcome Back!
            </Text>
            <Text
              style={tw`text-[#A4A4A4] text-[16px] font-600 ml-3 mt-1 leading-tight self-center`}>
              welcome back me missed you
            </Text>

            <Text
              style={tw`text-[#A4A4A4] text-[16px] font-600  mt-5 leading-tight mx-10`}>
              Username
            </Text>

            <View style={tw`w-[80%] h-13 mt-3 mx-10  `}>
              <LinearGradient
                colors={[
                  'rgba(255, 255, 255, 0.2)',
                  'rgba(255, 255, 255, 0.148)',
                  'rgba(255, 255, 255, 0.118)',
                  'rgba(255, 255, 255, 0)',
                ]}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                style={tw`rounded-lg flex-row px-5 border border-[#bfbfbf] rounded-lg border-[0.3px] `}>
                <AntDesign
                  name={'user'}
                  size={16}
                  color={'#fff'}
                  style={tw`mt-4 mr-4`}
                />
                <TextInput
                  placeholder="Username"
                  placeholderTextColor={'#a4a4a4'}
                  value={email}
                  onChangeText={(text)=> setEmail(text)}
                  style={tw`w-full text-[#fff]`}
                />
              </LinearGradient>
            </View>
           

            <Text
              style={tw`text-[#A4A4A4] text-[16px] font-600  mt-4 leading-tight mx-10`}>
              Password
            </Text>
            <View style={tw`w-[80%] h-13 mt-3 mx-10  `}>
              <LinearGradient
                colors={[
                  'rgba(255, 255, 255, 0.2)',
                  'rgba(255, 255, 255, 0.148)',
                  'rgba(255, 255, 255, 0.118)',
                  'rgba(255, 255, 255, 0)',
                ]}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                style={tw`rounded-lg flex-row px-5 border border-[#bfbfbf] rounded-lg border-[0.3px] `}>
                <AntDesign
                  name={'key'}
                  size={16}
                  color={'#fff'}
                  style={tw`mt-4 mr-4`}
                />
                <TextInput
                  placeholder="Password"
                  placeholderTextColor={'#a4a4a4'}
                  value={password}
                  style={tw`w-full text-[#fff]`}
                  onChangeText={(text)=> setPassword(text)}
                  secureTextEntry={true}
                />
              </LinearGradient>
            </View>
            <Text
              style={tw`text-[#A4A4A4] text-[14px] font-400  mt-3 leading-tight  self-end mr-10`}>
              Forgot Password?
            </Text>
            <TouchableOpacity
   onPress={()=> handleSubmit()}
          style={[
            tw`mt-6 mx-10 rounded-md justify-center`,
            {
              width: '80%',
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
              Sign In
            </Text>
          </LinearGradient>
        </TouchableOpacity>

        <View style={tw`mt-5 flex-row self-center`}>
        <LinearGradient
            colors={['transparent', 'white', 'white', 'transparent']}
            start={{x: 0, y: 0.1}}
            end={{x: 5, y: 0.5}}
            style={styles.line}
          />
          <Text
           style={tw`text-[#fff] text-[12px] font-400 leading-tight mx-2`}>
            Or continue with
          </Text>
          <LinearGradient
        colors={['white', 'transparent', 'transparent', 'white']}
        start={{ x: 3, y: 0.5 }}
        end={{ x: 0, y: 0.5 }}
        style={styles.line}
      />
        </View>

<View style={tw`flex-row justify-evenly mt-5`}>
        <TouchableOpacity>
        <LinearGradient
                colors={[
                  'rgba(255, 255, 255, 0.2)',
                  'rgba(255, 255, 255, 0.148)',
                  'rgba(255, 255, 255, 0.118)',
                  'rgba(255, 255, 255, 0)',
                ]}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                style={tw`rounded-lg flex-row px-5 border border-[#bfbfbf] rounded-lg border-[0.3px] w-15 h-12 `}>
          <Image  source={require('../../assets/social/search.png')} style={tw`w-6 h-6 self-center`}/>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity>
        <LinearGradient
                colors={[
                  'rgba(255, 255, 255, 0.2)',
                  'rgba(255, 255, 255, 0.148)',
                  'rgba(255, 255, 255, 0.118)',
                  'rgba(255, 255, 255, 0)',
                ]}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                style={tw`rounded-lg flex-row px-5 border border-[#bfbfbf] rounded-lg border-[0.3px] w-15 h-12 `}>
          <Image  source={require('../../assets/social/apple.png')} style={tw`w-6 h-6 self-center`}/>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity>
        <LinearGradient
                colors={[
                  'rgba(255, 255, 255, 0.2)',
                  'rgba(255, 255, 255, 0.148)',
                  'rgba(255, 255, 255, 0.118)',
                  'rgba(255, 255, 255, 0)',
                ]}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                style={tw`rounded-lg flex-row px-5 border border-[#bfbfbf] rounded-lg border-[0.3px] w-15 h-12 `}>
          <Image  source={require('../../assets/social/facebook.png')} style={tw`w-6 h-6 self-center`}/>
          </LinearGradient>
        </TouchableOpacity>

        </View>
    
        </View>
      </ImageBackground>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  imageBackground: {
    justifyContent: 'flex-end', // Ensure children are positioned at the bottom
    width: '100%',
    height: '100%',
  },
  logo: {
    width: 150, // Adjust as needed
    height: 60, // Adjust as needed
    resizeMode: 'contain',
  },
  logoContainer: {
    position: 'absolute',
    top: 50, // Adjust as needed
    left: 0,
    right: 250,
    alignItems: 'center',
  },
  bottomView: {
    width: '100%',
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    overflow: 'hidden',
  },

  line: {
    height: 1,
    width: 100,
    alignSelf: 'center',
  
  },
});
