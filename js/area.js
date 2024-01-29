async function getArea() {
  let htmlBlock = ``;
  let resp = await fetch(
    `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
  );
  let mealsData = await resp.json();

  for (let i = 0; i < mealsData.meals.length; i++) {
    htmlBlock += ` <div class="card">
      <i class="fa-solid fa-house"></i>
      <h3>${mealsData.meals[i].strArea}</h3>
      </div>`;
  }

  document.querySelector(".Area .cards").innerHTML = htmlBlock;
}

getArea();
