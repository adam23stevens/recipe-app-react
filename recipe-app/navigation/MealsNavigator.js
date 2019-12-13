import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoriesMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';


const mealNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoriesMeals: CategoriesMealsScreen,
    MealDetails : MealDetailsScreen
})

export default createAppContainer(mealNavigator); 