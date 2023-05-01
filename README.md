# recipeAPI
## This is an API for recipes.

Here are the request methods.
-GET

/recipes - returns all recipes

/recipes/:id - returns a single recipe by its id
    example...
    {
      "id": 1,
      "name": "Classic Margherita Pizza",
      "style": "Italian",
      "prep_time": "1 hour",
      "cook_time": "10-15 minutes",
      "instructions": "1. Preheat oven to 500 degrees F. \n2. Roll out pizza dough on a floured surface. \n3. Spread tomato sauce on top of dough. \n4. Add sliced mozzarella cheese and fresh basil. \n5. Bake in oven for 10-15 minutes or until crust is golden brown. \n6. Slice and serve hot."
    },



/recipes/random - returns a random recipe


-POST
/recipes - create a new recipe that should show up at the next get request to /recipes