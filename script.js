//search button//


//beginner 10 mins lesson...

let syntaxbutton = document.getElementById("syntax-add");
syntaxbutton.addEventListener('click', function(){
    descriptionSyntax();
});

function descriptionSyntax(){
    let button = document.getElementById('syntax-add');
    let p = document.querySelector('.emptySyntax');
    p.innerHTML = `What is <em> Syntax? </em> 
    <li> When you think of Syntax, you can think of semicolon at the end each
    statements. </li> 
    <li> For example... let x = 10;
    <li> Javascript is case sensitive in term of naming function or variables.</li>`
}

let variablesbutton = document.getElementById("variables-add");
variablesbutton.addEventListener('click', function(){
    descriptionVariables();
});
    
function descriptionVariables(){
    let button = document.getElementById('variables-add');
    let p = document.querySelector('.emptyVariables');
    p.innerHTML = `What is <em> Variables? </em>
    <li>In order for the system to do its job, the data needs to be store somewhere.
    That is when the variables came in. The data can be store in variables.
    <li>First, you need to declare a variable. You can use <em> var, let, or const. </em> </li>
    <li>Most developers will use either let or const to declare a variable.</li>
    <li>Const is the same as let variable except, it cannot be reassigned. </li>
    <li>Let's take a look at some examples..</li>
    <li>let >> variable keyword
    <li>grocery>> variable name </li>`;
}

