async function getArea() {
  let htmlBlock = ``;
  let resp = await fetch(
    `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
  );
  let mealsData = await resp.json();

  for (let i = 0; i < mealsData.meals.length; i++) {
    htmlBlock += ` <div class="card"  onclick="mealsByArea(${i})">
      <i class="fa-solid fa-house"></i>
      <h3>${mealsData.meals[i].strArea}</h3>
      </div>`;
  }

  document.querySelector(".Area .cards").innerHTML = htmlBlock;
  return mealsData;
}

getArea();

async function mealsByArea(x) {
  let areaList = await getArea();
  loding();

  //======================================================
  async function getCategories2() {
    let res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${areaList.meals[x].strArea}`
    );
    let mealsDat = await res.json();
    disblayMealsByArea(mealsDat);
  }

  function disblayMealsByArea(mealsDat) {
    let htmlBlock = ``;
    for (let i = 0; i < mealsDat.meals.length; i++) {
      htmlBlock += `<div class="card" onclick="mealsDitails( ${mealsDat.meals[i].idMeal}) ">
      <img src="${mealsDat.meals[i].strMealThumb}" alt="">
      <div class="overLay"><h3>${mealsDat.meals[i].strMeal}</h3>
      </div></div>`;
    }
    document.querySelector(".Area .cards").innerHTML = htmlBlock;
  }
  getCategories2();
}
