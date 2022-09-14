window.addEventListener('scroll',()=>{
    let content= document.querySelector('.row');
    let contetPosition=content.getBoundingClientRect().top;
    let screenPosition=window.innerHeight;

    if(contetPosition<screenPosition){
       content.classList.add('active')
    }
    else{
        content.classList.remove('active')
    }

})