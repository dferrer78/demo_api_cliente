$("button").click(function (e) { 
  e.preventDefault();
  //console.log("He pulsado el botón")
  $.ajax({
    type: "GET",
    url: "http://localhost:8080/api/cervezas",
    dataType: "json",
    success: function (response) {
      console.log(response); // Aqui un foreach y aplicar formatos a los elementos
    },
    error: function (error) {
      console.log(error);
      }
  });
});