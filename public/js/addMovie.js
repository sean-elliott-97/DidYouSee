//allows users to search for a movie by title
$("#search").click(async function () {
    let movieTitle = [$("#movieName").val()];
  
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movieTitle),
    };
    console.log(movieTitle);
   
    const res = await fetch("/list", options).then((response) => {
      console.log(response);
      console.log(movieTitle);
      if(movieTitle!==''){
        window.location.reload();
      }
    });
   
  });