
let syntaxbutton = document.getElementById("syntax-add");
syntaxbutton.addEventListener('click', function(){
    descriptionSyntax();
});

function descriptionSyntax(){
    let button = document.getElementById('syntax-add');
    let p = document.querySelector('.emptySyntax');
    p.innerHTML = `TESTING ONLY---What is <em> Syntax? </em> 
    <li> Syntax in JavaScript are defined as two types of values. </li> 
    <li>Fixed values and variable values. </li>
    <li>Fixed values are called literals. Example.. 20 or 20.50. </li>
    <li>Variable values are called variables. Variables are used to store data value. Example.. let x; x = 20;</li>`
}
    
function objectbutton(){
    document.getElementById("#comparison-add").innerHTML = " "
}

