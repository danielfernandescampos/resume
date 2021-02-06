const illustrator = document.getElementById('illustrator');
const icons = document.querySelectorAll('.icon-hobby');

illustrator.addEventListener('mouseover', function(){
    icons.forEach(icon=>{
        icon.classList.add('icon-move') 
    })   
})

illustrator.addEventListener('mouseout', function(){
    icons.forEach(icon=>{
        icon.classList.remove('icon-move') 
    })
})