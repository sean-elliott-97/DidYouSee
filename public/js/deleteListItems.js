//used to delete movie from list
$(".delete").click(async function () {
  let buttonId = this.id;
  const res = await fetch(`/api/movie/${buttonId}/`, {
    method: "DELETE",
  }).then((response) => {
    console.log(response);
    window.location.reload();
  });
});
