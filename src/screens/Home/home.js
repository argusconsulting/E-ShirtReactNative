import { Image, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from '../../../tailwind.config'
import Header from '../../components/Header/header'
import ScoreCard from '../../components/scoreCard/scoreCard'
import MatchSchedule from '../../components/matchSchedule/matchSchedule'
import FootballNews from '../../components/news/footballNews'


const Home = () => {
  return (
    <View style={tw`flex-1 bg-black `}>
      
         <StatusBar animated={true} translucent={true} backgroundColor="#000" />
         <ScrollView >
      <Header/>
      <ScoreCard/>
      <MatchSchedule/>
      <FootballNews/>
      </ScrollView>

    </View>
  )
}

export default Home

const styles = StyleSheet.create({})