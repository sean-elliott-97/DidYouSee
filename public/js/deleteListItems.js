var id;
$("#delete1").click(function () {
  id = 1;
});
$("#delete2").click(function () {
  id = 2;
});
$("#delete3").click(function () {
  id = 3;
});
$("#delete4").click(function () {
  id = 4;
});
$("#delete5").click(function () {
  id = 5;
});
$("#delete6").click(function () {
  id = 6;
});
$("#delete7").click(function () {
  id = 7;
});
$("#delete8").click(function () {
  id = 8;
});
$("#delete9").click(function () {
  id = 9;
});
$("#delete10").click(function () {
  id = 10;
});
$("#delete11").click(function () {
  id = 11;
});
$("#delete12").click(function () {
  id = 12;
});

//console.log(id);
$(".delete").click(async function () {
  

  const res = await fetch(`/list/${id}`, {
    method: "DELETE",
  }).then(response=>{
      console.log(response);
      window.location.reload();
  })
  
});
