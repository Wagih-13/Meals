$("#byName").keyup(() => {
  let htmlBlock = ``;
  let inpVal = $("#byName").val();

  async function getMealsByName() {
    let resp = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=`
    );
    let mealsData = await resp.json();

    for (let i = 0; i < mealsData.meals.length; i++) {
      if (mealsData.meals[i].strMeal.includes(inpVal)) {
        htmlBlock += `    <div class="card"  onclick="mealsDitails( ${mealsData.meals[i].idMeal}) ">
          <img src="${mealsData.meals[i].strMealThumb}" alt="">
          <div class="overLay"><h3>${mealsData.meals[i].strMeal}</h3></div>
          </div>`;
      }
      document.querySelector(".Search .cards").innerHTML = htmlBlock;
    }
  }
  getMealsByName();
});

$("#byFirstLetter").keyup(() => {
  let htmlBlock = ``;
  let inpVal = $("#byFirstLetter").val();

  async function getMealsByFirstLetter() {
    let resp = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?f=${inpVal}`
    );
    let mealsData = await resp.json();

    for (let i = 0; i < mealsData.meals.length; i++) {
      htmlBlock += `    <div class="card"  onclick="mealsDitails( ${mealsData.meals[i].idMeal}) ">
        <img src="${mealsData.meals[i].strMealThumb}" alt="">
        <div class="overLay"><h3>${mealsData.meals[i].strMeal}</h3></div>
        </div>`;
    }
    document.querySelector(".Search .cards").innerHTML = htmlBlock;
    return mealsData;
  }
  getMealsByFirstLetter();
});
