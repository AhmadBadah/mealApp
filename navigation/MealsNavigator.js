import {createStackNavigator,createAppContainer,createBottomTabNavigator,createDrawerNavigator } from 'react-navigation';
import {Platform,TouchableOpacity} from 'react-native';
import React from 'react';
import CategoriesMeals from '../screens/CategoriesMealsScreen';
import MealsDetails from '../screens/MealsDetailsScreen';
import Categories from '../screens/CategoriesScreen';
import Favorites from '../screens/FavoritesScreen';
import Colors from '../constants/Colors';
import Filters from '../screens/FiltersScreen'
import { Ionicons,AntDesign } from '@expo/vector-icons';

const NavigationOptions = {
  defaultNavigationOptions:{
    headerStyle:{
        backgroundColor:Platform.OS === 'android' ? Colors.primaryColor : ''
      },
      headerTintColor:Platform.OS === 'android'?'white': Colors.primaryColor
}
};

const MealsNavigator =  createStackNavigator({
    Categories: {
        screen: Categories,
    },
    CategoriesMeals:{
        screen: CategoriesMeals
    },
    MealsDetails: MealsDetails
},
    NavigationOptions
);

const FavTab = createStackNavigator({
  Favorites: Favorites,
  MealsDetails: MealsDetails
},
  NavigationOptions
);

const MealsWithBottomBar = createBottomTabNavigator(
    {
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
          tabBarIcon: tabInfo => {
            return (
              <Ionicons
                name="ios-restaurant"
                size={25}
                color={tabInfo.tintColor}
              />
            );
          }
        }
      },
      Favorites: {
        screen: FavTab,
        navigationOptions: {
          tabBarLabel: 'Favorites!',
          tabBarIcon: tabInfo => {
            return (
              <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
            );
          }
        }
      }
    
    },{
        tabBarOptions: {
            activeTintColor: Colors.accentColor
          }
    }
);

const filterNav = createStackNavigator({
  Filters: Filters,
},
  NavigationOptions
);

const MainNavigation = createDrawerNavigator(
  {
    MealsFav:{
      screen: MealsWithBottomBar,
      navigationOptions:{
        drawerLabel: 'Meals'
      }

    },
    Filters:{
    screen:filterNav
  }
  },
  {
    contentOptions: {
      activeTintColor: Colors.accentColor,
      labelStyle: {
        fontFamily: 'open-sans-bold'
      }
    }
  }
);

    

export default createAppContainer(MainNavigation);