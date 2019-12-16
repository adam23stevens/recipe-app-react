import Category from '../entities/Category';
import Ingredient from '../entities/Ingredient';
import MealIngredient from '../entities/MealIngredient';
import Meal from '../entities/Meal';

export const CATEGORIES = [
  new Category('c1', 'Italian', '#f5428d'),
  new Category('c2', 'Quick & Easy', '#f54242'),
  new Category('c3', 'Hamburgers', '#f5a442'),
  new Category('c4', 'German', '#f5d142'),
  new Category('c5', 'Light & Lovely', '#368dff'),
  new Category('c6', 'Exotic', '#41d95d'),
  new Category('c7', 'Breakfast', '#9eecff'),
  new Category('c8', 'Asian', '#b9ffb0'),
  new Category('c9', 'French', '#ffc7ff'),
  new Category('c10', 'Summer', '#47fced')
];

export const INGREDIENTS = [
  new Ingredient('i1', 'Tomato'),
  new Ingredient('i2', 'Olive oil'),
  new Ingredient('i3', 'Onion'),
  new Ingredient('i4', 'Spaghetti'),
  new Ingredient('i5', 'Spices'),
  new Ingredient('i6', 'Cheese'),
  new Ingredient('i7', 'White bread'),
  new Ingredient('i8', 'Slice Ham'),
  new Ingredient('i9', 'Slice Pineapple'),
  new Ingredient('i10', 'Slice of Cheese'),
  new Ingredient('i11', 'Butter'),
  new Ingredient('i12', 'Cattle Hack'),
  new Ingredient('i13', 'Ketchup'),
  new Ingredient('i14', 'Burger Buns'),
  new Ingredient('i15', 'Cucumber'),
  new Ingredient('i16', 'Egg'),
  new Ingredient('i17', 'Bread Crumbs'),
  new Ingredient('i18', 'Flour'),
  new Ingredient('i19', 'Vegetable Oil'),
  new Ingredient('i20', 'Salt'),
  new Ingredient('i21', 'Lemon Slice'),
  new Ingredient('i22', 'Veal Cutlet'),
  new Ingredient('i23', 'Arugula'),
  new Ingredient('i24', 'Lamb\'s Lettuce'),
  new Ingredient('i25', 'Parsley'),
  new Ingredient('i26', 'Fennel'),
  new Ingredient('i27', 'Smoked Salmon'),
  new Ingredient('i28', 'Mustard'),
  new Ingredient('i29', 'Balsamic Vinegar'),
  new Ingredient('i30', 'Salt and Pepper'),
  new Ingredient('i31', 'Sheets of Gelatine'),
  new Ingredient('i32', 'Orange Juice'),
  new Ingredient('i33', 'Sugar'),
  new Ingredient('i34', 'Yoghurt'),
  new Ingredient('i35', 'Cream'),
  new Ingredient('i36', 'Orange Peel'),
  new Ingredient('i37', 'Baking Powder'),
  new Ingredient('i38', 'Milk'),
  new Ingredient('i39', 'Chicken Breast'),
  new Ingredient('i40', 'Garlic Clove'),
  new Ingredient('i41', 'Piece of Ginger'),
  new Ingredient('i42', 'Almonds'),
  new Ingredient('i43', 'Cayenne Pepper'),
  new Ingredient('i44', 'Coconut Milk'),
  new Ingredient('i45', 'Dark Chocolate pieces'),
  new Ingredient('i46', 'Cream of Tartar'),
  new Ingredient('i47', 'White and Green Asparagus'),
  new Ingredient('i48', 'Pine Nuts'),
  new Ingredient('i49', 'Cherry Tomato'),
  new Ingredient('i50', 'Salad')
]


export const MEALS = [
  new Meal(
    'm1',
    ['c1', 'c2'],
    'Spaghetti with Tomato Sauce',
    'affordable',
    'simple',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg',
    20,
    [
      new MealIngredient('i1', 4, null, null, false),
      new MealIngredient('i2', null, 10, null, false),
      new MealIngredient('i3', 1, null, null, false),
      new MealIngredient('i4', null, null, 250, false),
      new MealIngredient('i5', null, null, null, false),
      new MealIngredient('i6', null, null, 50, true)
    ],
    [
      'Cut the tomatoes and the onion into small pieces.',
      'Boil some water - add salt to it once it boils.',
      'Put the spaghetti into the boiling water - they should be done in about 10 to 12 minutes.',
      'In the meantime, heaten up some olive oil and add the cut onion.',
      'After 2 minutes, add the tomato pieces, salt, pepper and your other spices.',
      'The sauce will be done once the spaghetti are.',
      'Feel free to add some cheese on top of the finished dish.'
    ],
    false,
    true,
    true,
    true
  ),

  new Meal(
    'm2',
    ['c2'],
    'Toast Hawaii',
    'affordable',
    'simple',
    'https://cdn.pixabay.com/photo/2018/07/11/21/51/toast-3532016_1280.jpg',
    10,
    [
      new MealIngredient('i7', 1, null, null, false),
      new MealIngredient('i8', 1, null, null, false),
      new MealIngredient('i9', 1, null, null, false),
      new MealIngredient('i10', 2, null, null, false),
      new MealIngredient('i11', null, null, 5, false)
    ],
    [
      'Butter one side of the white bread',
      'Layer ham, the pineapple and cheese on the white bread',
      'Bake the toast for round about 10 minutes in the oven at 200°C'
    ],
    false,
    false,
    false,
    false
  ),

  new Meal(
    'm3',
    ['c3'],
    'Classic Hamburger',
    'pricey',
    'simple',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    45,
    [
        new MealIngredient('i12', null, null, 300, false),
        new MealIngredient('i1', 1, null, null, false),
        new MealIngredient('i15', 1, null, null, false),
        new MealIngredient('i3', 1, null, null, false),
        new MealIngredient('i13', null, null, null, false),
        new MealIngredient('i14', 2, null, null, false)
    ],
    [
      'Form 2 patties',
      'Fry the patties for c. 4 minutes on each side',
      'Quickly fry the buns for c. 1 minute on each side',
      'Bruch buns with ketchup',
      'Serve burger with tomato, cucumber and onion'
    ],
    false,
    false,
    false,
    true
  ),

  new Meal(
    'm4',
    ['c4'],
    'Wiener Schnitzel',
    'luxurious',
    'challenging',
    'https://cdn.pixabay.com/photo/2018/03/31/19/29/schnitzel-3279045_1280.jpg',
    60,
    [
      new MealIngredient('i22', 8, null, null, false),
      new MealIngredient('i16', 4, null, null, false),
      new MealIngredient('i17', null, null, 200, false),
      new MealIngredient('i18', null, null, 100, false),
      new MealIngredient('i11', null, 300, null, false),
      new MealIngredient('i19', null, 100, null, false),
      new MealIngredient('i20', null, null, null, false),
      new MealIngredient('i21', 2, null, null, false)
    ],
    [
      'Tenderize the veal to about 2–4mm, and salt on both sides.',
      'On a flat plate, stir the eggs briefly with a fork.',
      'Lightly coat the cutlets in flour then dip into the egg, and finally, coat in breadcrumbs.',
      'Heat the butter and oil in a large pan (allow the fat to get very hot) and fry the schnitzels until golden brown on both sides.',
      'Make sure to toss the pan regularly so that the schnitzels are surrounded by oil and the crumbing becomes ‘fluffy’.',
      'Remove, and drain on kitchen paper. Fry the parsley in the remaining oil and drain.',
      'Place the schnitzels on awarmed plate and serve garnishedwith parsley and slices of lemon.'
    ],
    false,
    false,
    false,
    false
  ),

  new Meal(
    'm5',
    ['c2', 'c5', 'c10'],
    'Salad with Smoked Salmon',
    'luxurious',
    'simple',
    'https://cdn.pixabay.com/photo/2016/10/25/13/29/smoked-salmon-salad-1768890_1280.jpg',
    15,
    [
      new MealIngredient('i23', null, null, null, false),
      new MealIngredient('i24', null, null, null, false),
      new MealIngredient('i25', null, null, null, false),
      new MealIngredient('i26', null, null, null, false),
      new MealIngredient('i27', null, null, 200, false),
      new MealIngredient('i28', null, null, null, false),
      new MealIngredient('i2', null, null, null, false),
      new MealIngredient('i30', null, null, null, false)
    ],
    [
      'Wash and cut salad and herbs',
      'Dice the salmon',
      'Process mustard, vinegar and olive oil into a dessing',
      'Prepare the salad',
      'Add salmon cubes and dressing'
    ],
    true,
    false,
    true,
    true
  ),

  new Meal(
    'm6',
    ['c6', 'c10'],
    'Delicious Orange Mousse',
    'affordable',
    'hard',
    'https://cdn.pixabay.com/photo/2017/05/01/05/18/pastry-2274750_1280.jpg',
    240,
    [
      new MealIngredient('i31', 4, null, null, false),
      new MealIngredient('i32', null, 150, null, false),
      new MealIngredient('i33', null, null, 80, false),
      new MealIngredient('i34', null, null, 300, false),
      new MealIngredient('i35', null, null, 200, false),
      new MealIngredient('i36', null, null, null, false)
    ],
    [
      'Dissolve gelatine in pot',
      'Add orange juice and sugar',
      'Take pot off the stove',
      'Add 2 tablespoons of yoghurt',
      'Stir gelatin under remaining yoghurt',
      'Cool everything down in the refrigerator',
      'Whip the cream and lift it under die orange mass',
      'Cool down again for at least 4 hours',
      'Serve with orange peel'
    ],
    true,
    false,
    true,
    false
  ),

  new Meal(
    'm7',
    ['c7'],
    'Pancakes',
    'affordable',
    'simple',
    'https://cdn.pixabay.com/photo/2018/07/10/21/23/pancake-3529653_1280.jpg',
    20,
    [
      new MealIngredient('i18', null, null, 350, false),
      new MealIngredient('i37', null, null, 90, false),
      new MealIngredient('i20', null, null, 30, false),
      new MealIngredient('i33', null, null, 60, false),
      new MealIngredient('i16', 1, null, null, false),
      new MealIngredient('i11', null, null, 180, false)
    ],
    [
      'In a large bowl, sift together the flour, baking powder, salt and sugar.',
      'Make a well in the center and pour in the milk, egg and melted butter; mix until smooth.',
      'Heat a lightly oiled griddle or frying pan over medium high heat.',
      'Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot.'
    ],
    true,
    false,
    true,
    false
  ),

  new Meal(
    'm8',
    ['c8'],
    'Creamy Indian Chicken Curry',
    'pricey',
    'challenging',
    'https://cdn.pixabay.com/photo/2018/06/18/16/05/indian-food-3482749_1280.jpg',
    35,
    [
      new MealIngredient('i39', 4, null, null, false),
      new MealIngredient('i3', 1, null, null, false),
      new MealIngredient('i40', 2, null, null, false),
      new MealIngredient('i41', 1, null, null, false),
      new MealIngredient('i42', null, null, 240, false),
      new MealIngredient('i43', null, null, 30, false),
      new MealIngredient('i44', null, 500, null, false)
    ],
    [
      'Slice and fry the chicken breast',
      'Process onion, garlic and ginger into paste and sauté everything',
      'Add spices and stir fry',
      'Add chicken breast + 250ml of water and cook everything for 10 minutes',
      'Add coconut milk',
      'Serve with rice'
    ],
    true,
    false,
    false,
    true
  ),

  new Meal(
    'm9',
    ['c9'],
    'Chocolate Souffle',
    'affordable',
    'hard',
    'https://cdn.pixabay.com/photo/2014/08/07/21/07/souffle-412785_1280.jpg',
    45,
    [
      new MealIngredient('i11', null, 120, null, false),
      new MealIngredient('i33', null, null, 160, false),
      new MealIngredient('i45', null, null, 60, false),
      new MealIngredient('i18', null, null, 60, false),
      new MealIngredient('i38', null, 200, null, false),
      new MealIngredient('i20', null, null, null, false),
      new MealIngredient('i43', null, null, null, false),
      new MealIngredient('i16', 3, null, null, false),
      new MealIngredient('i46', null, null, null, false)
    ],
    [
      'Preheat oven to 190°C. Line a rimmed baking sheet with parchment paper.',
      'Brush bottom and sides of 2 ramekins lightly with 1 teaspoon melted butter; cover bottom and sides right up to the rim.',
      'Add 1 tablespoon white sugar to ramekins. Rotate ramekins until sugar coats all surfaces.',
      'Place chocolate pieces in a metal mixing bowl.',
      'Place bowl over a pan of about 3 cups hot water over low heat.',
      'Melt 1 tablespoon butter in a skillet over medium heat. Sprinkle in flour. Whisk until flour is incorporated into butter and mixture thickens.',
      'Whisk in cold milk until mixture becomes smooth and thickens. Transfer mixture to bowl with melted chocolate.',
      'Add salt and cayenne pepper. Mix together thoroughly. Add egg yolk and mix to combine.',
      'Leave bowl above the hot (not simmering) water to keep chocolate warm while you whip the egg whites.',
      'Place 2 egg whites in a mixing bowl; add cream of tartar. Whisk until mixture begins to thicken and a drizzle from the whisk stays on the surface about 1 second before disappearing into the mix.',
      'Add 1/3 of sugar and whisk in. Whisk in a bit more sugar about 15 seconds.',
      'whisk in the rest of the sugar. Continue whisking until mixture is about as thick as shaving cream and holds soft peaks, 3 to 5 minutes.',
      'Transfer a little less than half of egg whites to chocolate.',
      'Mix until egg whites are thoroughly incorporated into the chocolate.',
      'Add the rest of the egg whites; gently fold into the chocolate with a spatula, lifting from the bottom and folding over.',
      'Stop mixing after the egg white disappears. Divide mixture between 2 prepared ramekins. Place ramekins on prepared baking sheet.',
      'Bake in preheated oven until scuffles are puffed and have risen above the top of the rims, 12 to 15 minutes.'
    ],
    true,
    false,
    true,
    false
  ),
  new Meal(
    'm10',
    ['c2', 'c5', 'c10'],
    'Asparagus Salad with Cherry Tomatoes',
    'luxurious',
    'simple',
    'https://cdn.pixabay.com/photo/2018/04/09/18/26/asparagus-3304997_1280.jpg',
    30,
    [
      new MealIngredient('i47', null, null, null, false),
      new MealIngredient('i48', null, null, 30, false),
      new MealIngredient('i49', null, null, 300, false),
      new MealIngredient('i50', null, null, null, false),
      new MealIngredient('i2', null, null, null, false),
      new MealIngredient('i30', null, null, null, false)
    ],
    [
      'Wash, peel and cut the asparagus',
      'Cook in salted water',
      'Salt and pepper the asparagus',
      'Roast the pine nuts',
      'Halve the tomatoes',
      'Mix with asparagus, salad and dressing',
      'Serve with Baguette'
    ],
    true,
    true,
    true,
    true
  )
];