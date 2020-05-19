import React from 'react'
import { SafeAreaView, StyleSheet} from 'react-native'
import {Block} from '../../components';
import SearchBar from './SearchBar';
import TopCategories from './TopCategories';
import PopularItems from './PopularItems';
import NearByDeals from './NearByDeals';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeAreaStyle}>
      <Block block color='#F8F6F6' padding={10}>
        <SearchBar />
        <TopCategories />
        <Block height={1} color='#EFEEEE'/>
        <PopularItems />
        <Block height={1} color='#EFEEEE'/>
        <NearByDeals />
      </Block>
    </SafeAreaView>    
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  safeAreaStyle:{
    flex:1
  }  
})
