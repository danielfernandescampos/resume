const html = document.getElementById('html');
var titles = document.querySelectorAll('.title');

var getLetter = /[A-Z\s]/g; 

html.addEventListener('mouseover', function(){

    titles.forEach(title => {
        var titleContent = title.textContent;
        title.textContent = `<h3>${titleContent}<h3>`
    })

})

html.addEventListener('mouseout', function(){

    titles.forEach(title => {
        var titleContent = title.textContent;
        title.textContent = titleContent.match(getLetter).join('');
    })

})