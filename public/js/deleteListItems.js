// const movieCardArray=[];


// $("#1").click(function(){
//     const movieCard=$(this).parent().text();
//     movieCardArray.push(movieCard);
//     $("#1").hide();
//     //if click add hide button and push to an array
// })
// $("#2").click(function(){
//     alert("2");
// })
// $("#3").click(function(){
//     alert("3");
// })
// $("#4").click(function(){
//     alert("4");
// })
// $("#5").click(function(){
//     alert("5");
// })
// $("#6").click(function(){
//     alert("6");
// })

//console.log(id);
$(".delete").click(async function () {
    let buttonId = this.id;
    const res = await fetch(`/movie/${buttonId}`, {
      method: "DELETE",
    }).then((response) => {
      console.log(response);
      window.location.reload();
    });
  });