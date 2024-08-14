const cardDis = document.querySelector('.cardDis');
const cardImg = document.querySelector('.cardImg')
let cardNoExpanded = false;

card.addEventListener('hover',function(e){
    
    if(cardNoExpanded){
        cardDis.style.width= '28%';
        cardDis.style.transform= '1s ease-in';
        cardImg.classList.remove('hidden')    
    }else{
        cardDis.style.width= '95%';
        cardDis.style.transform= '1s ease-in';
        cardImg.classList.add('hidden')  
    }

    cardNoExpanded=!cardNoExpanded
})
