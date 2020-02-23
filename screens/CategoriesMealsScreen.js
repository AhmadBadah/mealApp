import React from 'react';
import { StyleSheet } from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
// import {MEALS} from '../data/dummy-data';
import {useSelector} from 'react-redux';
// import CategoryMealsCard from '../components/CategoryMealsCard';
import MealList from '../components/MealList';


const CategoriesMeals = props => {
  const catId = props.navigation.getParam('categoryId');
  const mealsRedux = useSelector(state => state.meals.filterModels)
  const MealsCategory = mealsRedux.filter(meal=>meal.categoryIds.indexOf(catId) >= 0);
  return<MealList listData={MealsCategory} navigation={props.navigation} />
};

CategoriesMeals.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
  return{
    headerTitle:selectedCategory.title,
  }
}

// const styles = StyleSheet.create({
//   screen: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

export default CategoriesMeals;