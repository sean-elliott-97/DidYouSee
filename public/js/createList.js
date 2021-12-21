var movieCardArray = [
  {
    id: "",
    title: "",
  },
];

$("#1").click(function () {
  let movieCardTitle = $(this).siblings("h5").text();
  movieCardArray.push({ 1: movieCardTitle });

  //alert(JSON.stringify(movieCardArray));

  $("#1").hide();
});
$("#2").click(function () {
  let movieCardTitle = $(this).siblings("h5").text();
  movieCardArray.push({ 2: movieCardTitle });

 // alert(JSON.stringify(movieCardArray));
  $("#2").hide();
});
$("#3").click(function () {
  let movieCardTitle = $(this).siblings("h5").text();
  movieCardArray.push({ 3: movieCardTitle });

  //alert(JSON.stringify(movieCardArray));
  $("#3").hide();
});
$("#4").click(function () {
  let movieCardTitle = $(this).siblings("h5").text();
  movieCardArray.push({ 4: movieCardTitle });

 // alert(JSON.stringify(movieCardArray));
  $("#4").hide();
});
$("#5").click(function () {
  let movieCardTitle = $(this).siblings("h5").text();
  movieCardArray.push({ 5: movieCardTitle });

  //alert(JSON.stringify(movieCardArray));
  $("#5").hide();
});
$("#6").click(function () {
  let movieCardTitle = $(this).siblings("h5").text();
  movieCardArray.push({ 6: movieCardTitle });

  //alert(JSON.stringify(movieCardArray));
  $("#6").hide();

});
