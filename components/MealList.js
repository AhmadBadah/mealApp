import React from 'react'
import { StyleSheet,Button, FlatList ,Text, View ,TouchableOpacity,Platform} from 'react-native';
import CategoryMealsCard from './CategoryMealsCard'

const MealList = (props) => {
  
    const renderMealItem = itemData => {
      let Image_Http_URL  = {uri:itemData.item.imageUrl}
      return (
        <CategoryMealsCard 
          ImgURL={Image_Http_URL}
          title={itemData.item.title}
          duration={itemData.item.duration}
          complexity={itemData.item.complexity}
          affordability={itemData.item.affordability}
          onSelect = {() => {
            props.navigation.navigate({
            routeName: 'MealsDetails',
            params: {
              mealId: itemData.item.id,
              mealTitle: itemData.item.title,
            }
          });
        }}
        />
      );
    };
  
    return (
      <View style={styles.screen}>
        
        <FlatList 
          keyExtractor={(item,index)=>item.id}
          data={props.listData}
          renderItem={renderMealItem}
          
        />
      </View>
    );
  };

  const styles = StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal:3
    },
  });
export default MealList
