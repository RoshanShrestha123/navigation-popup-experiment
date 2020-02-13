const text = document.querySelector('span');
const  popupNav = document.querySelector('.popup');

text.addEventListener('mouseover',()=>{
    console.log("left:",text.offsetLeft);
    console.log("Width:",text.offsetWidth);
    console.log("Height:",text.offsetHeight);
    popupNav.style.display="block";
    popupNav.style.left = text.offsetLeft+5+'px';
    popupNav.style.top= text.offsetHeight+5+'px';

    
})
popupNav.addEventListener('mouseover',()=>{
    popupNav.style.display="block";
    console.log('hovering pop up div also');
    
})
popupNav.addEventListener('mouseout',()=>{
    popupNav.style.display="none";
    
})
text.addEventListener('mouseout',()=>{
    popupNav.style.display = "none";
})

