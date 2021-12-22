var listObject = [
    {
      id: 10,
      title: "this title",
    },
  ];
  
  var submitList = $('<button id = "postList">');
  submitList.appendTo($("body"));
  submitList.attr("style", "visibility:hidden");
  $("#1").click(function () {
    let movieCardTitle = $(this).siblings("h5").text();
    listObject=[{ id: 1, title: movieCardTitle }];
  
    submitList.attr("style", "visibility:visible");
  
    $("#1").hide();
  });
  $("#2").click(function () {
    let movieCardTitle = $(this).siblings("h5").text();
    listObject=[{ id: 2,title: movieCardTitle }];
    submitList.attr("style", "visibility:visible");
    // alert(JSON.stringify(movieCardArray));
    $("#2").hide();
  });
  $("#3").click(function () {
    let movieCardTitle = $(this).siblings("h5").text();
    listObject=[{ id: 3,title: movieCardTitle }];
    submitList.attr("style", "visibility:visible");
    //alert(JSON.stringify(movieCardArray));
    $("#3").hide();
  });
  $("#4").click(function () {
    let movieCardTitle = $(this).siblings("h5").text();
    listObject=[{ id:4, title: movieCardTitle }];
    submitList.attr("style", "visibility:visible");
    // alert(JSON.stringify(movieCardArray));
    $("#4").hide();
  });
  $("#5").click(function () {
    let movieCardTitle = $(this).siblings("h5").text();
    listObject=[{ id: 5,title: movieCardTitle }];
    submitList.attr("style", "visibility:visible");
    //alert(JSON.stringify(movieCardArray));
    $("#5").hide();
  });
  $("#6").click(function () {
    let movieCardTitle = $(this).siblings("h5").text();
    listObject=[{ id: 6,title: movieCardTitle }];
    submitList.attr("style", "visibility:visible");
    //alert(JSON.stringify(movieCardArray));
    $("#6").hide();
  });
  
  // for posting movies to list
  $(".moviePost").click(async function () {
    const data = listObject;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(listObject),
    };
    const res = await fetch("/list", options).then(( response) => {
      
      //console.log(response.json());
      console.log(response.json());
    });
    
  });
  
  $("#postList").click( function(){
    document.location.replace("/list");
  })