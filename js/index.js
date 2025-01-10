
$(document).ready(function(){
    $('.slider').slick({
        arrows: false,
        dots: true,
        customPaging: function(slider, i) {
            if (i == 0){
                return '<button>' + 'i' + '</button>'
            }
            if (i == 13){
                return '<button>' + 'итог' + '</button>';
            }
            else{
                return '<button>' + i + '</button>';
            }
            
          },
        infinite: false,
        waitForAnimate: false,
        easing: false,
        draggable: false,
        swipe: false,
        speed: "none", 
    });

});

// let rules = document.querySelector('#rules');
// let pRules = document.createElement('p');
// pRules.classList.add('h2-centr')
// pRules.textContent = "gbgbghjhfgg";
// rules.appendChild(pRules);