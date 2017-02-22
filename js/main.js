//cats' data
var cats = [
  {
    name : "Cindy",
    picUrl : "Cindy.jpeg",
    clicked : 0
  }
];

//generate the cat selecting list
function catList() {
  for (var i = 0; i < cats.length; i++) {
    $(".catlist").append("<li class='new'>" + cats[i].name + "</li>");
    // $(".new").addClass(cats[i].name).removeClass('new');
    $(".new").attr("class", cats[i].name);
    console.log("meo~");
  };
}

catList();

// display the cat's picture when the cat
// is being clicked on the catlist.
// $(li).click(
//   function() {
//     $(img).attr("src",)
// });

//count if the cat was clicked
