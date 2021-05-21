

// **************access Html Elements in JavaScript************


let container = document.getElementById('container')
let button = document.getElementById('button1')
let Title = document.getElementById('title')
let ul = document.getElementsByTagName('ul')



container

// ***********querySelector()*************
// access Css Selectors eg Id class Tag etc
// This returns the first Element that matches a specific css selector

let styleContainer = document.querySelector("#container")


styleProperties = {
    color:'white',
    fontSize:"30px",
    backgroundColor:'Red'
}


styleContainer.style = styleProperties;



let inHeader = document.querySelector("h1#container")

//******************querySelectorAll() **********
// accessing sll elements that fit the Css Selector
let all_lis = document.querySelectorAll('li')




// *******Adding Content in Html*************
// innerHtml :this helps us to add content in the Html
// document.innerHtml = ('This')


// console.log('Hello World')
// console.log(all_lis.colo)


//********Changing Value of an attribute ******/

document.getElementsByTagName('div').id = "containers";

document.querySelector('#container').style.color = "blue";




// ************adding an Deleting Elements************

let newDiv = document.createElement('div');
let paragraph = document.createElement('p')
let content = document.createTextNode('Hello World');
let contentChange = document.createTextNode('How are you?');

paragraph.appendChild(content)

newDiv.appendChild(paragraph)

newDiv.appendChild(content);
// newDiv.style.backgroundColor = 'blue'

document.body.insertBefore(newDiv,button);

newDiv.removeChild(content)

button.appendChild(content)

container.replaceChild(contentChange,Title)

container.appendChild(newDiv)

// ***************displayBox**************


function displayBox(){

    let popUp = document.querySelector('#popUp').style.display='block'
    
    
}


function closeBox(){

    let popUp = document.querySelector('#popUp');

    popUp.style.display='none';

    popUp.style.transition= "2s 2s cubic-bezier(1, 0, 0, 1) "
    
    
}


let trigger = document.getElementById('trigger');

function outPut(){
    console.log('I was clicked')
}

// trigger.onclick= outPut

// trigger.onmousedown = function(){console.log('onmousedown')}
// trigger.onmouseup = function(){console.log('onmouseup')}
// trigger.onmouseover = function(){console.log('mouseover')}
// trigger.onmouseenter = function(){alert('please go on')}

trigger.addEventListener('click', outPut)





// trigger.
