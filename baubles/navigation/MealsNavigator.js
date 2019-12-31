import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoriesMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import mainScreen from '../screens/mainScreen';
import { Colours } from '../constants/colours';

const mealNavigator = createStackNavigator({
    main: mainScreen,
    Categories: CategoriesScreen,
    CategoriesMeals: CategoriesMealsScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Colours.primary
        },
        headerTintColor: Colours.secondary   
    }
})

export default createAppContainer(mealNavigator); 