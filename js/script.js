document.addEventListener('DOMContentLoaded', function() {

    const stars = document.querySelectorAll(".star");
    const rating = document.querySelector("#rating");
    
    stars.forEach(function(star) { //Iteramos sobre cada elemento
        star.addEventListener("click", function() { 
            //Elimina la clase "star-selected" de todas las estrellas
            stars.forEach(function(s) {
                s.classList.remove("star-selected");
            });
            //Agrega la clase "star-selected" a la estrella clicada
            this.classList.add("star-selected");
            const selectStar = star
            updateRating(selectStar)
            
            
        });
    })

    function updateRating(selectRating) {
        rating.textContent = selectRating;
    }

})