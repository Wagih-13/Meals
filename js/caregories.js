let trt = [];

async function getCategories() {
  let resp = await fetch(
    `https://www.themealdb.com/api/json/v1/1/categories.php`
  );
  let mealsData = await resp.json();
  disblayMeals(mealsData);
}

function disblayMeals(mealsData) {
  let htmlBlock = ``;
  for (let i = 0; i < mealsData.categories.length; i++) {
    htmlBlock += `<div class="card" onclick="test(${i})">
    <img src="${mealsData.categories[i].strCategoryThumb}" alt="">
    <div class="overLay"><h3>${mealsData.categories[i].strCategory}</h3>
    <p>    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est consectetur
    nemo incidunt, nobis minus fugit ratione maxime vel molestias! Iusto!</p></div>
    </div>`;
    trt.push(mealsData.categories[i].strCategory);
  }
  document.querySelector(".Categories .cards").innerHTML = htmlBlock;
}

getCategories();

function test(x) {
  $("#loading").fadeIn(0);

  $(".sideBar").animate({ left: `-${sideBarWidth}px` });
  $("#close").addClass("d-none");
  $("#open").removeClass("d-none");

  setTimeout(() => {
    $(document).ready(() => {
      $("#loading").fadeOut(1500);
    });
  }, 2500);
  async function getCategories2() {
    let res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${trt[x]}`
    );
    let mealsDat = await res.json();
    disblayMealsByCat(mealsDat);
  }

  function disblayMealsByCat(mealsDat) {
    let htmlBlock = ``;
    for (let i = 0; i < mealsDat.meals.length; i++) {
      htmlBlock += `<div class="card" ">
      <img src="${mealsDat.meals[i].strMealThumb}" alt="">
      <div class="overLay"><h3>${mealsDat.meals[i].strMeal}</h3>
      </div></div>`;
    }
    document.querySelector(".Categories .cards").innerHTML = htmlBlock;
  }
  getCategories2();
}
