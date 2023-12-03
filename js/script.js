const stars = document.querySelectorAll(".star");
stars.forEach(function(star) { //Iteramos sobre cada elemento
    star.addEventListener("click", function() { 
        console.log("diste click");
    });
})