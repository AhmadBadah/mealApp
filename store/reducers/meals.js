import {MEALS} from '../../data/dummy-data';
import {TOGGLE_FAVORITE,SET_FILTERS} from '../actions/meals'

const initialState = {
    meals : MEALS,
    filterModels :MEALS ,
    fovariteArr : []
}
const mealsReducers =(state=initialState, action)=>{
    console.log('action', action);
    switch(action.type){       
        case TOGGLE_FAVORITE:
            const existingIndex = state.fovariteArr.findIndex(
                meal => meal.id === action.mealId
            );
            if(existingIndex >= 0){
                const updateFavMeals = [...state.fovariteArr];
                updateFavMeals.splice(existingIndex,1);
                return {...state,fovariteArr:updateFavMeals};
            }else{
                const meal = state.meals.find(meal => meal.id === action.mealId)
                return {...state , fovariteArr: state.fovariteArr.concat(meal)};
            }

        case SET_FILTERS:
            const appliedFiltters = action.filter;
            const updateFliterMeals = state.meals.filter(meal =>{
                if(appliedFiltters.isGlutenFree && !meal.isGlutenFree){
                    return false;
                }
                if(appliedFiltters.isVegan && !meal.isVegan){
                    return false;
                }
                if(appliedFiltters.isVegetarian && !meal.isVegetarian){
                    return false;
                }
                if(appliedFiltters.isLactoseFree && !meal.isLactoseFree){
                    return false;
                }
                return true;
            })

            return {...state ,filterModels:updateFliterMeals}

        default:
            return state;
    }
};

export default mealsReducers;