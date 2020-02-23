import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import fonts
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
// import navigation 
import MealsNavigator from './navigation/MealsNavigator';
import {Provider} from 'react-redux';
import {createStore , combineReducers} from 'redux';
import mealsReducers from './store/reducers/meals'


const rootReducer = combineReducers({
  meals: mealsReducers
});

const store = createStore(rootReducer)

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    'Barlow-ExtraLight': require('./assets/fonts/Barlow-ExtraLight.ttf')
  });
};

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={err => console.log(err)}
      />
    );
  }

  return (
   <Provider store={store}>
     <MealsNavigator />
   </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
