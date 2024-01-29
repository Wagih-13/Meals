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
