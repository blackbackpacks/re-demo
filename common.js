var toggleBtn = document.querySelector('.navbar-toggler');
var collapsedElm = document.querySelector('.navbar-collapse');
toggleBtn.addEventListener('click',function(){
    collapsedElm.classList.toggle('collapse');  
})