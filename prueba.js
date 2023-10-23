//Variable del formulario
const searchForm = document.querySelector('form');

//VARIABLES DE CONTAINERS DE HTML

const recipesContainer = document.getElementById('recipes-container');
const recipeDetails = document.getElementById('recipe-details');
//let query_ = '';
searchForm.addEventListener('submit', 
async function getRecipes(recipes)
{    
    recipes.preventDefault();
    
    const healthType = document.getElementById("health-type").value;
    const cuisineType = document.getElementById('cuisine-type').value;   

    console.log(healthType);
    console.log(cuisineType);
    
    document.getElementById('recipes-search-form').reset();
    recipesContainer.innerHTML = '';
    
    if(healthType === '')
    {
        alert('Insert');
        return;
    }   
    
    const apiUrl = `https://api.edamam.com/api/recipes/v2?type=public&app_id=46827f8a&app_key=d3c95ee2c2fd114cce90e759e28e3c44&health=${healthType}&cuisineType=${cuisineType}`;
    


//    https://api.edamam.com/api/recipes/v2?type=public&app_id=46827f8a&app_key=d3c95ee2c2fd114cce90e759e28e3c44&health=vegan&cuisineType=chinese
console.log(apiUrl);    
    
try
    {
        const response = await fetch(apiUrl);

        if(!response.ok)
        {
            throw new Error('Error gordo');
        }
     
        const data = await response.json();
        console.log(data);
        if(data.Error)
        {
            throw new Error(data.Error);
        }
        
        //const results = data['Search'];

   /*      results.map((result)=>
        {
            console.log(result);
            //renderRecipe(result);
        }
        )   */
    }
 catch (error) {
     console.error('Error:', error);
    }
});

//getRecipes();












/* function renderRecipes(recipes) {
    const recetasDiv = document.getElementById("recipe-details");
    recetasDiv.innerHTML = "";

    recipes.forEach(receta => {
        const nombre = receta.recipe.label;
        const imagen = receta.recipe.image;
        //const enlace = `receta.html?nombre=${nombre}` // Enlace a la página de detalles

        const recetaElement = document.createElement("article");
        recetaElement.innerHTML = `
            <h2>${nombre}</h2>
         
                <img src="${imagen}" alt="${nombre}">
            </a>
        `;

        recipes.appendChild(recetaElement);
    });
} */

























    /*
    fetchAPI();
    
    async function fetchAPI() 
    {
        
        
    }
    */
   
   
   //prevent default para no generar un article cada vez que submit
   //recipesData.preventDefault();
   
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
    
    
    // &q=${query}`;
    
    //const url = baseUrl + idKey + query;

//console.log(4);

/*try {
    //const response = await fetch(url);
    
    
    const idKey = `?app_id=${appId}&app_key=${appKey}`;
    
    const query = `$diet=${dietType}&health=${healthType}&cuisineType=${cuisineType}`;
    
    
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