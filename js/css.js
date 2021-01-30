const css = document.getElementById('css');
var background = document.querySelectorAll('.icon-hobby');
var main = document.querySelector('main');
var style = getComputedStyle(main);
var color = style.backgroundColor;

css.addEventListener('mouseover', function(){
    if(color == "rgb(59, 59, 59)") {
    main.style.backgroundColor = "#1a659e";
    }
    else {
        main.style.backgroundColor = "#a9d6e5";
    }
})

css.addEventListener('mouseout', function(){
    main.style.backgroundColor = color;
})
