import React from 'react';
import { StyleSheet,Button, FlatList ,Text, View ,TouchableOpacity,Platform} from 'react-native';

const CategoryGridTile = (props)=>{
    return(
        <TouchableOpacity
        style={styles.gridItem}
        onPress={props.onSelect}
      >
        <View style={{...{backgroundColor: props.color}, ...styles.container}}>
          <Text style={styles.title} numberOfLines={2}> {props.title} </Text>
        </View>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        overflow: 'hidden'
      },
      container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 3,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
      },
      title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'right',
        color:'white'
      }
})

export default CategoryGridTile;