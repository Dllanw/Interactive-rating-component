document.addEventListener("DOMContentLoaded", function(){
    
    const score = document.querySelector("#rating");
    const rate = document.contentDocument('.card__info');
    console.log(rate)
    

    score.addEventListener('click', function(e) {
        const selectedRating = (e.target.innerText);
        localStorage.setItem('selectedRating', selectedRating);
        window,location.href = 'thank-you.html';
    })



})
