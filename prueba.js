/*const healthSelect = document.getElementById('health-type');
const cuisineSelect = document.getElementById('cuisine-type');

fetch(`https://api.edamam.com/api/recipes/v2?type=public&app_id=46827f8a&app_key=d3c95ee2c2fd114cce90e759e28e3c44`)
    .then(response => response.json())
    .then(data => {
        // Obtener valores únicos de health
        const healthOptions = [...new Set(data.healthLabels)];
        // Cargar valores únicos en el select de health
        healthOptions.forEach(option => {
            const opt = document.createElement('option');
            opt.value = option;
            opt.innerHTML = option;
            healthSelect.appendChild(opt);
        });

        // Obtener valores únicos de cuisineType
        const cuisineOptions = [...new Set(data.cuisineType)];
        // Cargar valores únicos en el select de cuisineType
        cuisineOptions.forEach(option => {
            const opt = document.createElement('option');
            opt.value = option;
            opt.innerHTML = option;
            cuisineSelect.appendChild(opt);
        });
    })
    .catch(error => console.error('Error:', error));

*/



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
    
  //  document.getElementById('recipes-search-form').reset();
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
        renderRecipes(data);
 //        console.log(data.hits.label);
        
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
function renderRecipes(data)
{  
    data.hits.forEach(hit => 
    {         
      console.log(hit);
        const recipesArticle = document.createElement('article');
            recipesContainer.className = 'clBusqueda';
            recipesArticle.className = 'recipes-details';
          /*   recipesArticle.addEventListener("click", ()=>{
                getSingleRecipe(hit);
            }        
            
            ) */
        recipesContainer.appendChild(recipesArticle);
          // agrego detalles de la película al elemento article
        
          const recipeTitle = document.createElement('h2');
          recipeTitle.className = 'title-h2';
          recipeTitle.innerHTML = hit.recipe.label;
          recipesArticle.appendChild(recipeTitle);     
         
          const emissions = document.createElement('p');
          const nodeEC = document.createTextNode('Co2 Emissions class: ');
          emissions.appendChild(nodeEC); 
          emissions.innerHTML += hit.recipe.co2EmissionsClass;
          recipesArticle.appendChild(emissions);
          
            const dishType = document.createElement('p');
            const nodeDT = document.createTextNode('Dish type: ');
            dishType.appendChild(nodeDT);
            dishType.innerHTML += hit.recipe.dishType;
            recipesArticle.appendChild(dishType);
            
            const imgElement = document.createElement('img');
            // imgElement.className = 'movie-image';
            
            imgElement.src = hit.recipe.image;
            recipesArticle.appendChild(imgElement);

            imgElement.addEventListener("click", ()=>{
                getSingleRecipe(hit);
            }        
            
            )
            
            const articleIngredients = document.createElement('article');
            articleIngredients.className = 'article-ingredients';

            const brocco = document.createElement('img');

            if(isRecipeFav(hit))
            {
                brocco.src = "./assets/brocoli.png";
            }
            else{
                brocco.src = "./assets/brocoliRosa.png";
            }

            brocco.className = "favorite";
            recipesArticle.appendChild(brocco);
            brocco.addEventListener('click', ()=>
            
            {
            addRemoveFavs(hit);
            if(isRecipeFav(hit))
            {
                brocco.src = "./assets/brocoli.png";
            }
            else{
                brocco.src = "./assets/brocoliRosa.png";
            }
            }
    )
        });
      };
      
      function getSingleRecipe(hit)
{
    console.log(hit);
    recipesContainer.style.display = 'none';
    
    const onlyRecipe = document.getElementById('only-recipe');
    onlyRecipe.innerHTML = '';
    
    const article_ = document.createElement('article');
    article_.className = 'articulo-fondo';
    
    onlyRecipe.appendChild(article_)
    
    
    const recipeTitle_ = document.createElement('h2');
    recipeTitle_.innerHTML += hit.recipe.label;
    article_.appendChild(recipeTitle_);
    recipeTitle_.className = 'titulo-only';
    
    const articlePrincipal = document.createElement('article');
    articlePrincipal.className = 'article-principal';
    article_.appendChild(articlePrincipal);
    
    const articleText = document.createElement('article');
    articleText.className = 'article-text';
    articlePrincipal.appendChild(articleText);
    
    const totalTime = document.createElement('p');
    const nodeTT = document.createTextNode('Total time: ');
    totalTime.appendChild(nodeTT);
    totalTime.innerHTML += hit.recipe.totalTime;
    const minu = document.createTextNode(' minutes');
    totalTime.appendChild(minu);
    articleText.appendChild(totalTime);
    
    const calories = document.createElement('p');
    const nodeCalories = document.createTextNode(' calories');
    calories.innerHTML += Math.floor(hit.recipe.calories);
    calories.appendChild(nodeCalories);
    articleText.appendChild(calories);   

    const ingredients = document.createElement('p');
    const nodeI = document.createTextNode('Ingredients');
    ingredients.appendChild(nodeI);
ingredients.innerHTML += hit.recipe.ingredients;

    const dietLabels = document.createElement('p');
    const nodeDL = document.createTextNode('Diet labels: ');
    dietLabels.appendChild(nodeDL);
    dietLabels.innerHTML += hit.recipe.dietLabels;
    articleText.appendChild(dietLabels);

    const mealType = document.createElement('p');
    const nodeMT = document.createTextNode('Meal type: ')
    mealType.appendChild(nodeMT);
    mealType.innerHTML += hit.recipe.mealType;
    articleText.appendChild(mealType);

    const sourceF = document.createElement('p');
    const nodeSF = document.createTextNode('Source: ');
    sourceF.appendChild(nodeSF);
    sourceF.innerHTML += hit.recipe.source;
    articleText.appendChild(sourceF);


    const urlRecipe = document.createElement('a');
    const textUR = document.createElement('p');
    const nodeUR = document.createTextNode('Link: ')
    
    textUR.appendChild(nodeUR);

    urlRecipe.innerHTML += hit.recipe.url;
    urlRecipe.href = hit.recipe.url;
    textUR.appendChild(urlRecipe);
    articleText.appendChild(urlRecipe);
    
    const ingredientLines = document.createElement('p');
    const nodeIL = document.createTextNode('Ingredient lines: ');
    ingredientLines.appendChild(nodeIL);
    ingredientLines.innerHTML += hit.recipe.ingredientLines;
    articleText.appendChild(ingredientLines);

    
    const articleImage = document.createElement('article');
    articleImage.className = 'article-image';

    const imageRecipe = document.createElement('img');
    articleImage.appendChild(imageRecipe);
    
    imageRecipe.src = hit.recipe.image;
    
    articlePrincipal.appendChild(articleImage);
    
    
    const articleIngredients = document.createElement('article');
    articleIngredients.className = 'article-ingredients';
    articleText.appendChild(articleIngredients);
    


    const healthLabels = document.createElement('p');
    const nodeHL = document.createTextNode('Health Labels: ')
    healthLabels.appendChild(nodeHL);
    healthLabels.innerHTML = hit.recipe.healthLabels;
    //articleText.appendChild(healthLabels);
   //onlyRecipe.appendChild(healthLabels);

//ELEMENTO PARA AÑADIR FAVORITO AL LOCALSTORAGE
    const brocco = document.createElement('img');

        if(isRecipeFav(hit))
        {
            brocco.src = "./assets/brocoli.png";
        }
        else{
            brocco.src = "./assets/brocoliRosa.png";
        }

        brocco.className = "favorite";
        articlePrincipal.appendChild(brocco);
        brocco.addEventListener('click', ()=>
        
        {
        addRemoveFavs(hit);
        if(isRecipeFav(hit))
        {
            brocco.src = "./assets/brocoli.png";
        }
        else{
            brocco.src = "./assets/brocoliRosa.png";
        }
        }

        )

return hit;
}    




















         function addRemoveFavs(hit)
         {
            let favo = localStorage.getItem("favorites")
            if(!favo)
            {
                favo = [];
            } 
            else{

                favo=JSON.parse(favo);
            }
          
            if(favo.find(element=>element.recipe.label==hit.recipe.label))
          {
           
              favo = favo.filter(element=>element.recipe.label!=hit.recipe.label)
              
            }
            else
            {
                favo.push(hit);
            }
            
            localStorage.setItem("favorites", JSON.stringify(favo));
        }

          function isRecipeFav(hit)
          {
            let favo = localStorage.getItem("favorites")
            if(!favo)
            {
                favo = [];
            } 
            else{

                favo=JSON.parse(favo);
            }

            if(favo.find(element=>element.recipe.label==hit.recipe.label))
            {return true;}
            else
            {
                return false;
            }
        }
            






    
      /*   function getLabel() {
            const label = JSON.parse(localStorage.getItem(label));
            if (!label) {
              localStorage.setItem(
                "userInformation",
                JSON.stringify({
                  name: "Jhon",
                  lastname: "Doe",
                  adress: "No Doe Address",
                })
              );
            }
          
            const h1Element = document.querySelector(".user-name");
          
            h1Element.textContent = `Hola ${userInformation.name}`;
          }
          
          window.addEventListener("load", getlabel); */
         
         
         
         
         
    
         /*    const nodeEC = document.createTextNode('Co2 Emissions class: ');
         emissions.appendChild(nodeEC); 
         emissions.innerHTML += hit.recipe.co2EmissionsClass;
         recipesArticle.appendChild(emissions); */
    
    
         
         
    /*      recipesArticle.addEventListener('click', function()
    {
        getSingleRecipe(data);
        
    }
    )
    */
   
   
   

/*
*/

/* async function getSingleRecipe(data) {
            const urlStart = 'http://www.omdbapi.com/';
            const filmId = '?i=' + imdbID;
            const apiKey = '&apikey=66dfa7cd';
            const urlRecip = urlStart + filmId + apiKey;
          
            try {
              const response = await fetch(urlRecip);
              if (!response.ok) {
                throw new Error("Fallo en la llamada.");
              }
              const film = await response.json();
              console.log(film);
              createFilmFile(film); /*recibidos datos de la API,
                llamamos a la fn que crea el DOM
            } catch (e) {
              console.log(e);
              alert('Error llamando a la API.');
              return null;
            }
        } */


        /* (hit.recipe.label);
        console.log(label_);
        const source_ = (hit.recipe.source);
        console.log(source_);


        hit.recipe.ingredients.forEach(t=>
    
               {    console.log(t.text);
            
               }
            ) */
    
    
    
    
    
    
    
    
    
    


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