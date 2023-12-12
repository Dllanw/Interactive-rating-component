document.addEventListener("DOMContentLoaded", function(){
    
    const score = document.querySelector("#rating");
    const rate = document.querySelector('#rate');
    
    

    score.addEventListener('click', function(e) {
       rate.innerText = e.target.innerText;
    })



})
