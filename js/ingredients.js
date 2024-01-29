async function getIngredients() {
  let htmlBlock = ``;
  let resp = await fetch(
    `https://www.themealdb.com/api/json/v1/1/list.php?i=list`
  );
  let mealsData = await resp.json();

  for (let i = 0; i < 30; i++) {
    htmlBlock += `    <div class="card">
      <i class="fa-solid fa-drumstick-bite"></i>
      <h3>${mealsData.meals[i].strIngredient}</h3>
      <p>    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est consectetur
      nemo incidunt, nobis minus fugit ratione maxime vel molestias! Iusto!</p>
      </div>`;
  }
  document.querySelector(".ingredients .cards").innerHTML = htmlBlock;
}

getIngredients();
