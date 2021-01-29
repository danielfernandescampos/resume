const photoshop = document.getElementById('photoshop');
const circle = document.querySelector('.circle-off');

photoshop.addEventListener('mouseover', function(){
    circle.classList.add('circle')   
})

photoshop.addEventListener('mouseout', function(){
    circle.classList.remove('circle')   
})