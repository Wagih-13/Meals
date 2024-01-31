setTimeout(() => {
  $(document).ready(() => {
    $("#loading").fadeOut(1500);
  });
}, 2500);

//==================side bar functions======================//

let sideBarWidth = $(".sideBar .links").outerWidth(true);
$(".sideBar").css("left", `${-sideBarWidth}`);
$("#open").click(() => {
  let sideBarWidth = $(".sideBar .links").outerWidth(true);
  $(".sideBar").animate({ left: `0px` });
  $("#open").addClass("d-none");
  $("#close").removeClass("d-none");
});

$("#close").click(() => {
  $(".sideBar").animate({ left: `-${sideBarWidth}px` });
  $("#close").addClass("d-none");
  $("#open").removeClass("d-none");
});

$("#open").click(() => {
  $("#toUp li").animate({ marginTop: "0px" }, 1000);
});

$("#close").click(() => {
  $("#toUp li").animate({ marginTop: "300px" }, 900);
});

//===========================contact us ======================================//

function loding() {
  $("#loading").fadeIn(0);
  $(".sideBar").animate({ left: `-${sideBarWidth}px` });
  $("#close").addClass("d-none");
  $("#open").removeClass("d-none");
  setTimeout(() => {
    $(document).ready(() => {
      $("#loading").fadeOut(1500);
    });
  }, 2500);
}

//===========================contact us ======================================//

function mealsDitails(x) {
  loding();
  async function getMeals() {
    let resp = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${x}`
    );
    let mealsData = await resp.json();
    disblayMealDitails(mealsData);
  }

  function disblayMealDitails(mealsData) {
    document.querySelector(
      " .container "
    ).innerHTML = ` <div class="row  g-4" id="rowData ">
    <div class="col-md-4">
      <img
        class="w-100 rounded-3"
        src="${mealsData.meals[0].strMealThumb}"
        alt=""
      />
      <h2 class="text-light">${mealsData.meals[0].strMeal}</h2>
    </div>
    <div class="col-md-8">
      <h2 class="text-light" >Instructions</h2>
      <p class="text-light">${mealsData.meals[0].strInstructions}</p>
      <h3 class="text-light"><span class="fw-bolder"> Area :  </span>${mealsData.meals[0].strArea}</h3>
      <h3 class="text-light"><span class="fw-bolder"> Category : </span> ${mealsData.meals[0].strCategory} </h3>
      <h3 class="text-light"> Recipes :</h3>
      <ul class="list-unstyled d-flex g-3 flex-wrap">
        <li class="alert alert-info m-2 p-1">${mealsData.meals[0].strIngredient1}</li>
        <li class="alert alert-info m-2 p-1">${mealsData.meals[0].strIngredient2}</li>
        <li class="alert alert-info m-2 p-1">${mealsData.meals[0].strIngredient3}</li>
        <li class="alert alert-info m-2 p-1">${mealsData.meals[0].strIngredient4}</li>
        <li class="alert alert-info m-2 p-1">${mealsData.meals[0].strIngredient5}</li>
        <li class="alert alert-info m-2 p-1">${mealsData.meals[0].strIngredient6}</li>
        <li class="alert alert-info m-2 p-1">${mealsData.meals[0].strIngredient7}</li>
        
      </ul>

      <h3 class="text-light">Tags : </h3>
      <ul class="list-unstyled d-flex g-3 flex-wrap"></ul>

      <a target="_blank" href="" class="btn btn-success">Source</a>
      <a target="_blank" href="${mealsData.meals[0].strYoutube}" class="btn btn-danger">Youtube</a>
    </div>
  </div>`;
  }
  getMeals();
}
