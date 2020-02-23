import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';
import {useSelector} from 'react-redux';
import DefaultText from '../components/DefaultText';


const Favorites = (props)=> {

  const mealsRedux = useSelector(state => state.meals.fovariteArr);
  if (mealsRedux.length === 0 || !mealsRedux) {
    return (
      <View style={styles.content}>
        <DefaultText>No favorite meals found. Start adding some!</DefaultText>
      </View>
    );
  }
  return <MealList listData={mealsRedux} navigation={props.navigation} />;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

Favorites.navigationOptions = navigationData => {
  return{
    headerTitle:'Favorites!',
  }
}

export default Favorites;