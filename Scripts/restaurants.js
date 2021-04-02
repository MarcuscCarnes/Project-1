var i;
for(i = 0; i < Document.getElementsByClassName('restaurant').length; i++) {
    Document.getElementsByClassName('restaurant')[i].addEventListener('click', myFunction);
}

function myFunction() {
    alert ("Hello World!")
}

Document.getElementsByClassName('restaurant')[0].addEventListener('click', myFunction);

Document.addEventListener('click', myFunction);