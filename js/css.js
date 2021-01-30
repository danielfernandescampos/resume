const css = document.getElementById('css');
var background = document.querySelectorAll('.icon-hobby');
var body = document.querySelector('body');
var style = getComputedStyle(body);
var color = style.backgroundColor;

css.addEventListener('mouseover', function(){
    if(color == "rgb(59, 59, 59)") {
    body.style.backgroundColor = "#118ab2";
    }
    else {
        body.style.backgroundColor = "#a9d6e5";
    }
})

css.addEventListener('mouseout', function(){
    body.style.backgroundColor = color;
})
