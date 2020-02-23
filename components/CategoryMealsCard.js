import React from 'react';
import { StyleSheet,Button, FlatList ,Text, View ,TouchableOpacity,Platform,ImageBackground} from 'react-native';
import DefaultText from './DefaultText';
const CategoryMealsCard = (props)=>{
    return(
        <View style={styles.mealItem}>
            <TouchableOpacity onPress={props.onSelect}>
                <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
                    <ImageBackground source={props.ImgURL}  style={styles.bgImage}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
                        </View>      
                    </ImageBackground>
                </View>
                <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
                    <DefaultText>{props.duration}m</DefaultText>
                    <DefaultText>{props.complexity.toUpperCase()}</DefaultText>
                    <DefaultText>{props.affordability.toUpperCase()}</DefaultText>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    mealItem: {
      height: 200,
      width: '100%',
      backgroundColor: '#f5f5f5',
      marginBottom:5,
      borderBottomLeftRadius:10,
      borderBottomRightRadius:10,
      overflow: 'hidden'
    },
    mealRow: {
      flexDirection: 'row'
    },
    mealHeader: {
      height: '85%'
    },
    bgImage: {
      width: '100%',
      height: '100%',
      justifyContent: 'flex-end'
    },
    mealDetail: {
      paddingHorizontal: 10,
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '15%'
    },
    titleContainer: {
      backgroundColor: 'rgba(0,0,0,0.5)',
      paddingVertical: 5,
      paddingHorizontal: 12
    },
    title: {
      fontFamily: 'open-sans-bold',
      fontSize: 20,
      color: 'white',
      textAlign: 'center'
    }
  });

export default CategoryMealsCard;