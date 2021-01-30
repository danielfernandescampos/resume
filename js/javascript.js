const javascript = document.getElementById('javascript');

javascript.addEventListener('mouseover', function(e){ 
    const firstX = e.pageX;
    const firstY = e.pageY;

    javascript.addEventListener('mousemove', function(e){
        document.querySelectorAll('.category-info').forEach(item => {
            const speed = item.getAttribute('data-speed');
            
            const x = ((e.pageX - firstX)*speed)/3;
            const y = ((e.pageY - firstY)*speed);
    
            item.style.transform = `translateX(${x}px) translateY(${y}px)`
        })
    })
})

javascript.addEventListener('mouseout', function(){
    document.querySelectorAll('.category-info').forEach(item => {        
        const x = 0
        const y = 0

        item.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
})
