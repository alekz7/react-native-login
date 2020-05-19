import React from 'react';
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native';
import { Block, Button, TextView } from '../../components';
import HeaderTop from './HeaderTop';
import { FlatList } from 'react-native-gesture-handler';
import foodapp from '../../mooks/foodapp.json'
const W = Dimensions.get('window').width / 4;

const PopularItems = () => {
  const renderItem = ({item}) => {
    return (
      <Button margin={5} borderRadius={8} shadow padding={10} color='#fff'>
        <Block direction='row'>
          <Image style={styles.img} source={{ uri: item.image }} />
          <Block paddingHorizontal={8}>
            <Block block>
              <TextView size={16}>{item.name}</TextView>
              <TextView color='#AAAAAA' size={16}>By {item.location}</TextView>
            </Block>
            <TextView size={16}>{item.price}</TextView>
          </Block>            
        </Block>
      </Button>
    )
  }
  return (
    <Block padding={10}>
      <HeaderTop title='Populares' moreTitle='Ver todos'/>
      <FlatList horizontal data = {foodapp} renderItem={renderItem} />
    </Block>
  )
}

const styles = StyleSheet.create({
  img:{
    width:W,
    height: W,
    borderRadius: 8   
  }
})


export default PopularItems
