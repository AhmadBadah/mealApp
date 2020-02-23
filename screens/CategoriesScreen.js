import React from 'react';
import { StyleSheet,Button, FlatList ,Text, View ,TouchableOpacity,Platform} from 'react-native';
import {CATEGORIES} from '../data/dummy-data'
import CategoryGridTile from '../components/CategoryGridTile'
import IoniconsHeaderButton from '../components/IconHeaderButtom'
import { HeaderButtons, HeaderButton, Item } from 'react-navigation-header-buttons';



const Categories = (props)=> {
  const renderGridItem = itemData =>{
    return(
      <CategoryGridTile 
      title={itemData.item.title}
      color={itemData.item.color}
      onSelect={() => {
          props.navigation.navigate({
          routeName: 'CategoriesMeals',
          params: {
            categoryId: itemData.item.id,
          }
        });
      }}
      />
    )
  }
  return (
      <FlatList 
        keyExtractor={(item,index)=>item.id}
        data={CATEGORIES}
        renderItem={renderGridItem}
        numColumns={2}
        />
  );
}

Categories.navigationOptions= props =>{
  return{
    headerTitle:'Categories',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
        <Item title="Menu" iconName="ios-menu" onPress={() => {props.navigation.toggleDrawer()}} />
      </HeaderButtons>
    ),
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default Categories;