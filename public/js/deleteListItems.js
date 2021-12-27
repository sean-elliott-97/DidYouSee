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
