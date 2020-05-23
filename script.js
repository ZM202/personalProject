//search button//


//beginner 10 mins lesson starts here...

let syntaxbutton = document.getElementById("syntax-add");
syntaxbutton.addEventListener('click', function(){
   mySyntax();
});


function mySyntax(){
    let x = document.getElementById("syntaxResults");
    if(x.style.display === "none"){
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


// function descriptionSyntax(){
//     let button = document.getElementById('syntax-add');
//     let p = document.querySelector('.emptySyntax');
//     p.innerHTML = `What is <em> Syntax? </em> 
//     <li> When you think of Syntax, you can think of semicolon at the end each
//     statements. </li> 
//     <li> For example... let x = 10;
//     <li> Keep in mind that--Javascript is case sensitive in term of naming function or variables.</li>`
// }

let variablesbutton = document.getElementById("variables-add");
variablesbutton.addEventListener('click', function(){
    descriptionVariables();
});
    
// function descriptionVariables(){
//     let button = document.getElementById('variables-add');
//     let p = document.querySelector('.emptyVariables');
//     p.innerHTML = `What is <em> Variables? </em>
//     <li>In order for the system to do its job, the data needs to be store somewhere.
//     That is when the variables came in. The data can be store in variables.
//     <li>First, you need to declare a variable. You can use <em> var, let, or const. </em> </li>
//     <li>Most developers will use either let or const to declare a variable.
//     Const is the same as let variable except, it cannot be reassigned. </li>
//     <li>Let's take a look at some examples to how to declare a variables..</li>
//     <li>let >> variable keyword </li>
//     <li>grocery>> variable name </li>
//     <li>avocado>> variable value </li>
//     <li>let grocery = avocado </li>`
// }

let dataTypesbutton = document.getElementById("datTypes-add");
dataTypesbutton.addEventListener('click', function(){
    descriptionDataTypes();    
});

// function descriptionDataTypes(){
//     let button = document.getElementById('datTypes-add');
//     let p = document.querySelector('.emptyDataTypes');
//     p.innerHTML = `What is <em> Data Types and how do we incorporate into coding?
//     <li>Data Types are important since it allow programmers to store different types
//     of data. You can have <em>string, boolean, numbers, undefined, null, object, array, and function data types. </em> </li>
//     <li>Let’s tackle on how to write each data types using a variable to store a data...</li>
//     <li>The <em> string </em> data type can use either single or double quotes.</li>
//     <li>let grocery = “avocado”; </li>
//     <li>let grocery = 'avocado'; </li>
//     <li>The <em>boolean</em> data type can have two values of either true or false.</li>
//     <li>let fruit = orange; </li>
//     <li>let vegetable = iceCream; </li>
//     <li>fruit = true; </li>
//     <li>vegetable = false; </li>
//     <li>The <em> numbers</em> data type can be written as with or without decimals.
//     </li>
//     <li>let x = 5; </li>
//     <li>let y = 5.00; </li>
//     <li>The <em>undefined </em> data type is when a variable has been declared, but 
//     has not been assigned a value.</li>
//     <li> let x; </li>
//     <li> let y = "fruits"; </li>
//     <li> console.log(x); The output will be <em>undefined </em> since there is no value
//     assigned to x. </li>
//     <li> console.log(y); The output will be <em> fruits</em> since there is value assigned to y as fruits.</li>
//     <li> The <em>null</em> is when value does not exist. In Javascript, null is an 
//     object.</li>
//     <li> let x = null; </li>
//     <li> console.log(x); The output will be <em>null</em> since it is assigned as null.</li>
//     <li> <em>Array</em> used for storing multiple values in single variable using 
//     square brackets and separated by using commas.</li>
//     <li>let fruits = ['grapes', 'oranges', 'apples'];
//     <li> <em>Objects</em> allows to store collections of data by using curly brackets. An object contains properties which are defined as key value pairs.</li>
//     <li> let fruits = {
//         name = "apples";
//         cost = 1;
//     }
//     In this example, an object represents fruits. Name and cost represent keys. The 
//     apples and 1 represent values. </li>`
// }

//beginner 10 mins lesson ends here...

//beginner 20 mins lesson starts here...

//comparison operator starts here//
// let comparisonbutton = document.getElementById("comparison-add");
// comparisonbutton.addEventListener('click', function(){
//     descriptionComparison();
// });

// function descriptionComparison(){
//     let button = document.getElementById('comparison-add');
//     let p = document.querySelector('.emptyComparison');
//     p.innerHTML = `gasdfd`
// }

// let logicalbutton = document.getElementById("logical-add");
// logicalbutton.addEventListener('click', function(){
//     descriptionLogical();
// });

// function descriptionLogical(){
//     let button = document.getElementById('logical-add');
//     let p = document.querySelector('emptyLogical');
//     p.innerHTML = `dfad`
// }

// let conditionalbutton = document.getElementById("conditional-add");
// conditionalbutton.addEventListener('click', function(){
//     descriptionConditonal();
// });

// function descriptionConditional(){
//     let button = document.getElementById('conditional-add');
//     let p = document.querySelector('emptyConditional');
//     p.innerHTML = `dfasefd`
// }


