const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsItems = ingredients.map(ingredient => {

  const ingredientEl = document.createElement('li');
  ingredientEl.textContent = ingredient;
  ingredientEl.classList = 'item';

  return ingredientEl;

});
  
console.log(ingredientsItems);

const ingredientsList = document.querySelector('#ingredients');

ingredientsList.append(...ingredientsItems);