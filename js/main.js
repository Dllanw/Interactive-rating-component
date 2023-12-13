document.addEventListener("DOMContentLoaded", function(){
    
    const score = document.querySelector("#rating");
    const rate = document.querySelector('#rate');
    const submit = document.querySelector('#btn'); 
    const cardTy = document.querySelector('.card__thanyou')
    const cardRating = document.querySelector('.card')
    

    score.addEventListener('click', function(e) {
       rate.innerText = e.target.innerText;
       if (e.target.classList.contains('click')) {
           submit.classList.remove('opacity');
           
       } else if(e.target) {
           submit.classList.add('opacity')

       };
    });
    submit.addEventListener('click', function(e){
        if (!submit.classList.contains('opacity')) {
            cardRating.style.display = 'none';
            cardTy.style.display = 'grid';
            return;
        };
    });

});
