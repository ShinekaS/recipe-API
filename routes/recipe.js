const express = require('express');
const router = express.Router();

const fs = require('fs');

//establishes a connection to the recipes json db
const recipe_file = './data/recipe.json'

// GET recipe listings
router.get('/',(req, res)=>{
    fs.readFile(recipe_file, 'utf-8',(err, data) => {
        if(err){
            console.error(err);
            res.status(500).send('There was a promblem reading the file')
            return;    
        }
        res.json(JSON.parse(data));
    })

});

//GET a single recipe 
router.get('/:id', (req, res,) => {
    fs.readFile(recipe_file, 'utf-8', (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send('There was a promblem reading the file')
        return;
      }
      //this is to retreive a single recipe by recipe ID.
      const recipes = JSON.parse(data)
      const recipe = recipes.find(recipe => recipe.id === req.params.id)
      console.log(recipes);
      console.log(req.params);
      res.json(recipes);
    })
  });



//put the data in an array so we can push to it (JSON from is slightly diff.
// const recipes = JSON.parse(data)
// const recipe = {
//   id: (recipe_file.length + 1).toString(),
//   name: req.body.name,
//   usage_method: req.body.usage_method,
// };

// recipes.push(recipe);
// fs.writeFile(recipe_file, JSON.stringify(recipes), err => {
// if (err) {
//   console.error(err);
//   res.status(500).send('There was a promblem reading the file')
//   return;
// }
// res.json(recipe);
// });

module.exports = router;