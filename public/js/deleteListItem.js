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

//console.log(id);
$(".delete").click(async function () {
  

  const res = await fetch(`/list/${id}`, {
    method: "DELETE",
  }).then(response=>{
      console.log(response);
      window.location.reload();
  })
  
});