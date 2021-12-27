//allows users to search for a movie by title

//must refresh page before searching for and adding a movie

var currentMovieData =[];

$("#search").click(async function () {
  
  //fetches movie data from omdb

  //still have to hide api_key
  fetch(`https://www.omdbapi.com/?apikey=99ada8e&t=${$("#movieName").val()}`)
    .then((response) => response.json())
    .then((data) => {
      
      //displays movie title
      $("#mTitle").text(data.Title);
      //displays add to list button
      $("#mAddToList").css("visibility", "visible");

      currentMovieData=[data.Title,data.Plot,data.Poster];
      console.log(currentMovieData);
     
     

    });
    $("#mAddToList").click(async function () {
          

      //decide on other movie info to include
       //currentMovieData =[data.Title,data.Plot,data.Poster];
      //console.log(currentMovieData); 
      $("#mAddToList").css("visibility","hidden");
      $("#refresh").css("visibility","visible");  
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(currentMovieData),
        };
        
        const res = await fetch("/movie", options).then(( response) => {
          
          
          //console.log(response.json());
          console.log(response.json());
          
        })
        
        
      })
  
});
$("#refresh").click(function(){
  location.reload();
})