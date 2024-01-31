async function getIngredients() {
  let htmlBlock = ``;
  let resp = await fetch(
    `https://www.themealdb.com/api/json/v1/1/list.php?i=list`
  );
  let mealsData = await resp.json();

  for (let i = 0; i < 30; i++) {
    htmlBlock += `    <div class="card" onclick="mealsByByIngredients(${i})">
      <i class="fa-solid fa-drumstick-bite"></i>
      <h3>${mealsData.meals[i].strIngredient}</h3>
      <p>    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est consectetur
      nemo incidunt, nobis minus fugit ratione maxime vel molestias! Iusto!</p>
      </div>`;
  }
  document.querySelector(".ingredients .cards").innerHTML = htmlBlock;
  return mealsData;
}

getIngredients();

async function mealsByByIngredients(x) {
  let ingredientsList = await getIngredients();
  loding();

  //======================================================
  async function getCategories2() {
    let res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredientsList.meals[x].strIngredient}`
    );
    let mealsDat = await res.json();
    disblayMealsByCat(mealsDat);
  }

  function disblayMealsByCat(mealsDat) {
    let htmlBlock = ``;
    for (let i = 0; i < mealsDat.meals.length; i++) {
      htmlBlock += `<div class="card" onclick="mealsDitails( ${mealsDat.meals[i].idMeal}) ">
      <img src="${mealsDat.meals[i].strMealThumb}" alt="">
      <div class="overLay"><h3>${mealsDat.meals[i].strMeal}</h3>
      </div></div>`;
    }
    document.querySelector(".ingredients .cards").innerHTML = htmlBlock;
  }
  getCategories2();
}
