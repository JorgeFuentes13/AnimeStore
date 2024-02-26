
$(document).ready(function() {
    var apiUrl = "https://api.jikan.moe/v4/anime/";
    var animeList = [
      { id: 47778, titleField: ".card:eq(0) .card-title", imageField: ".card:eq(0) img"},
      { id: 52034, titleField: ".card:eq(1) .card-title",imageField: ".card:eq(1) img"},
      { id: 11757, titleField: ".card:eq(2) .card-title",imageField: ".card:eq(2) img"},
      { id: 41467, titleField: ".card:eq(3) .card-title",imageField: ".card:eq(3) img"},
      { id: 1735, titleField: ".card:eq(4) .card-title",imageField: ".card:eq(4) img"},
      { id: 54707, titleField: ".card:eq(5) .card-title",imageField: ".card:eq(5) img"},
      { id: 42205, titleField: ".card:eq(6) .card-title", imageField: ".card:eq(6) img"},
      { id: 235, titleField: ".card:eq(7) .card-title", imageField: ".card:eq(7) img"},
      { id: 8171, titleField: ".card:eq(8) .card-title", imageField: ".card:eq(8) img"},
      { id: 5114, titleField: ".card:eq(9) .card-title", imageField: ".card:eq(9) img"},
      { id: 40748, titleField: ".card:eq(10) .card-title", imageField: ".card:eq(10) img"},
      { id: 43608, titleField: ".card:eq(11) .card-title", imageField: ".card:eq(11) img"}
      // Añade más objetos de anime aquí si deseas mostrar más de un anime
    ];
  
    for (var i = 0; i < animeList.length; i++) {
        (function(i) {
          var anime = animeList[i];
          var animeUrl = apiUrl + anime.id + "/full";
      
          setTimeout(function() {
            $.ajax({
              url: animeUrl,
              dataType: "json",
              cache: true, // Establecer cache en verdadero
              cacheTime: 3600, // Tiempo de almacenamiento en caché en segundos
              success: (function(anime) {
                return function(response) {
                  $(anime.titleField).text(response.data.title);
                  $(anime.imageField).attr("src",response.data.images.jpg.large_image_url);
                  console.log(response);
                  console.log(anime.titleField);
                  console.log(response.data.images.jpg.large_image_url,"imagen")
                  console.log(response.data.title);
                };
              })(anime) // Pasa el objeto anime como argumento para la función anónima
            });
          }, i * 1000); // Espera i segundos antes de hacer la solicitud
        })(i);
    }
  });