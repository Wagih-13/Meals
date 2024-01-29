async function getCategories() {
  let htmlBlock = ``;
  let resp = await fetch(
    `https://www.themealdb.com/api/json/v1/1/categories.php`
  );
  let mealsData = await resp.json();
  
  for (let i = 0; i < mealsData.categories.length; i++) {
    htmlBlock += `    <div class="card">
      <img src="${mealsData.categories[i].strCategoryThumb}" alt="">
      <div class="overLay"><h3>${mealsData.categories[i].strCategory}</h3>
      <p>    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est consectetur
      nemo incidunt, nobis minus fugit ratione maxime vel molestias! Iusto!</p></div>
      </div>`;
  }
  document.querySelector(".Categories .cards").innerHTML = htmlBlock;

  // $(".Categories .card ").click((eInfo) => {
  //   console.log(eInfo.target);
  // });
}

getCategories();
