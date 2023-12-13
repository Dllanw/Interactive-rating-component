document.addEventListener("DOMContentLoaded", function(){
    
    const score = document.querySelector("#rating");
    const rate = document.querySelector('#rate');
    const submit = document.querySelector('#btn'); 
    const card = document.querySelector('.card__thanyou')
    

    score.addEventListener('click', function(e) {
       rate.innerText = e.target.innerText;
       
    });
    submit.addEventListener('click', function(e){
        card.classList
        console.log(e);
        
    });




})
