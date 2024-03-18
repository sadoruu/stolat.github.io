let picture = document.getElementById("pic");
let button = document.getElementById("dot-button");
let header = document.getElementById("header");
let footer = document.getElementById("footer");


button.onclick = function(){
    picture.style.display = 'block';
    button.style.display = 'none';
    header.style.display = 'flex';
    footer.style.display = 'flex';
    header.style.backgroundColor = '#ff8686';
    footer.style.backgroundColor = '#fdfd70d5';
}