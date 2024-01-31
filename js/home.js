async function getMeals() {
  let resp = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=`
  );
  let mealsData = await resp.json();
  disblayMeals(mealsData);
}

function disblayMeals(mealsData) {
  let htmlBlock = ``;

  for (let i = 0; i < mealsData.meals.length; i++) {
    htmlBlock += `    <div class="card" onclick="mealsDitails(${mealsData.meals[i].idMeal})">
      <img src="${mealsData.meals[i].strMealThumb}" alt="">
      <div class="overLay"><h3>${mealsData.meals[i].strMeal}</h3></div>
      </div>`;
  }
  document.querySelector("#homeCards").innerHTML = htmlBlock;
}

getMeals();
