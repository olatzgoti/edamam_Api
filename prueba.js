//LINK COMPLETO
//https://api.edamam.com/api/recipes/v2?type=public&app_id=46827f8a&app_key=d3c95ee2c2fd114cce90e759e28e3c44&ingr=2%2B&diet=balanced&health=alcohol-cocktail&cuisineType=Asian&mealType=Dinner&dishType=Bread&calories=200-300&time=10&excluded=banana&random=true&co2EmissionsClass=A
//const quantityIng = document.getElementById("quantity-ing").value;

const appId = '46827f8a';
const appKey = 'd3c95ee2c2fd114cce90e759e28e3c44';


const searchForm = document.querySelector('form');

//VARIABLES DE CONTAINERS DE HTML

const recipesContainer = document.getElementById('recipes-container');
const recipeDetails = document.getElementById('recipe-details');

let query_ = '';


searchForm.addEventListener('submit', (e) =>
{
    e.preventDefault();
    query_ = e.target.querySelector('input').value;
    fetchAPI();
});


async function fetchAPI() 
{
    const baseUrl = `https://api.edamam.com/search?app_id=${appId}&app_key=${appKey}&q=${query_}&diet=balanced&health=vegan&cuisineType=italian`;
    const response = await fetch(baseUrl); 
    const data = await response.json();
    console.log(data);
}



//prevent default para no generar un article cada vez que submit
//recipesData.preventDefault();
     
//const dietType = document.getElementById("diet-type").value;
//const healthType = document.getElementById("health-type").value;
//const cuisineType = document.getElementById('cuisine-type').value;
//console.log(dietType);
//console.log(healthType);
//console.log(cuisineType);

/* console.log(1);
document.getElementById('recipes-search-form').reset();
recipesContainer.innerHTML = '';
console.log(2);
if (dietType === "") {
    //Utilizo esto por si quiero decir que metan algo en el form, pero si le doy al refrescar tambien me sale, solucionar el problema
    alert('Insert diet type');
}

console.log(3); */

    //const idKey = `?app_id=${appId}&app_key=${appKey}`;
    
    //const query = `$diet=${dietType}&health=${healthType}&cuisineType=${cuisineType}`;

    // &q=${query}`;

    //const url = baseUrl + idKey + query;

console.log(4);

    /*try {
        //const response = await fetch(url);
        
          
        
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
       
        const data = await response.json();

      if (data.Error) {
        throw new Error(data.Error);
        //return data;
        }       
    } 
catch (error) 
{
    console.error('Error fetching data:', error);
    return null;
}});
console.log(5);  
   
console.log(6);
// Example usage

const query = 'chicken';

getRecipesFromEdamam(appId, appKey, query)
    .then(data => {
        if (data) {
            console.log(data);

            data.hits.forEach(hit => {
                console.log(hit.recipe.label);
                //console.log(hit.response.image);
            });
        } else {
            console.log("An error occurred while fetching data from the Edamam API.");
        }
    })*/