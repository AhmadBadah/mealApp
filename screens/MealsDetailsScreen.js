import React, { useEffect, useCallback }  from 'react';
import { StyleSheet,Button, Text, View,Image,FlatList,ScrollView } from 'react-native';
import { HeaderButtons, HeaderButton, Item } from 'react-navigation-header-buttons';
// import {MEALS} from '../data/dummy-data';
import {useSelector,useDispatch} from 'react-redux';
import IoniconsHeaderButton from '../components/IconHeaderButtom';
import DefaultText from '../components/DefaultText';
import {toggleFavorite} from '../store/actions/meals';


const ItemList = props =>{
  return(
    <View style={styles.ingredientsMeal}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
}

const MealsDetails = (props)=> {
  const mealsRedux = useSelector(state=>state.meals.meals);
  const mealId = props.navigation.getParam('mealId');
  const MealsCategory = mealsRedux.find(meal=>meal.id === mealId);
  let Image_Http_URL  = {uri:MealsCategory.imageUrl};
  const dispatch = useDispatch();
  const currentMealIsFavorite = useSelector(state =>
    state.meals.fovariteArr.some(meal => meal.id === mealId)
  );
  const toggleFavHandler =useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId]);
  
  useEffect(() => {
    props.navigation.setParams({ toggleFav: toggleFavHandler });
  }, [toggleFavHandler]);

  useEffect(() => {
    props.navigation.setParams({ isFav: currentMealIsFavorite });
  }, [currentMealIsFavorite]);

  const FavRedux = useSelector(state=>state.meals.fovariteArr);
  console.log('favarr',FavRedux)
  
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.screen}>
        <Image source={Image_Http_URL} style={{width:'100%',height:200}} />
        <View style={styles.mealDetail}>
            <Text>{MealsCategory.duration}m</Text>
            <Text style={styles.textMealDetails}>{MealsCategory.complexity}</Text>
            <Text style={styles.textMealDetails}>{MealsCategory.affordability}</Text>
        </View>
        <View>
          <Text style={styles.Head}>ingredients</Text>
        </View>
            {MealsCategory.ingredients.map(ingredients=><ItemList key={ingredients}>{ingredients}</ItemList>)}
          
        <View>
          <Text style={styles.Head}>steps</Text>
        </View>
          {MealsCategory.steps.map(steps=><ItemList key={steps}>{steps}</ItemList>)}
      
      </View>
    </ScrollView>
  );
}

MealsDetails.navigationOptions = navigationData => {
  const mealName = navigationData.navigation.getParam('mealTitle');
  const toggle = navigationData.navigation.getParam('toggleFav');
  const isFavorite = navigationData.navigation.getParam('isFav');
  return{
    headerTitle:mealName,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
        <Item title="Favorite"
         iconName={isFavorite ? 'ios-star' : 'ios-star-outline'}
         onPress={toggle}
             
        />
      </HeaderButtons>
    ),
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  scrollView:{
    flex: 1,
    height:1000

  },
  mealDetail:{
    backgroundColor:'white',
    flexDirection:'row',
    justifyContent:'space-around',
    width:'100%',
    padding:8,
    margin:5
  },
  textMealDetails:{
    textTransform:'uppercase'
  },
  Head:{
    fontSize:25,
    fontWeight:'bold',
    margin:10
  },
  ingredientsMeal:{
    width:'80%',
    padding:10,
    borderColor:'#ccc',
    borderWidth:0.5,
    borderRadius:10,
    margin:5,
    alignSelf:'center',
  },
  listIngredientsMeal:{
    width:'100%',
    marginBottom:10
  },
  ListItem:{
    marginVertical:10,
    marginHorizontal:20,
    borderColor:'#ccc',
    borderWidth:1,
    padding:10
  } 
});

export default MealsDetails;