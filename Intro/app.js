// DOM Manipulation


// GetElementById()
// const title = document.getElementById('main-heading');
// console.log(title);


// GetElementByClassName()
// const listItem = document.getElementsByClassName('list-items');
// console.log(listItem);


// getElementByTagName()
// const container = document.getElementsByTagName('div')
// console.log(container);


// querySelector()
// const title = document.querySelector("#main-heading");
// console.log(title);


// querySelectorAll()
// const container = document.querySelectorAll('div');
// console.log(container);


// Styling Elements

// const title = document.querySelector('#main-heading');

// title.style.color = 'red';

// const listItems = document.querySelectorAll('.list-items');


// for(let i = 0; i < listItems.length; i++){
//     listItems[i].style.fontSize = '2rem';
// }

// console.log(listItems);


// Creating Elements



// const li = document.createElement('li'); // create an element

// Adding Elements

// ul.append(li);

// Traversing the DOM



// console.log(ul.childNodes);
// console.log(ul.firstChild);
// console.log(ul.lastChild);


// console.log(ul.children);
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);

// sibling Node Traversal

// const ul = document.querySelector('ul'); // select an element
// const div = document.querySelector('div');


// console.log(div.childNodes);
// console.log(ul.previousElementSibling);
// console.log(ul.nextElementSibling);


// function sayName(name) {
//     return "Hello " + name;
// }

// Parent Node Traversal

// const ul = document.querySelector('ul');


// console.log(ul.parentNode);
// console.log(ul.parentElement);

// const html = document.documentElement;
// console.log(html.parentElement);
// console.log(html.parentNode);

 
// Child Node TRaversal

// console.log(ul.childNodes);
// console.log(ul.firstChild);
// console.log(ul.lastChild);


// ul.childNodes[5].style.backgroundColor = 'green';

// console.log(ul.children);
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);


// Sibling Node Traversal


// const div = document.querySelector('div');

// console.log(div.childNodes);


// console.log(ul.previousElementSibling);
// console.log(ul.nextElementSibling);


// Event Listeners

//element.addEventListener("click", function);

// const buttonTwo = document.querySelector('.btn-2');

// function alertBtn() {
//     alert('I also love JavaScript');
// };

// buttonTwo.addEventListener("click", alertBtn);


// // // Mouseover

// const newBackgroundColor = document.querySelector('.box-3');

// function changeBgColor(){
//     newBackgroundColor.style.backgroundColor = 'red';
// }

// newBackgroundColor.addEventListener("mouseover", changeBgColor);


// // Reveal Event

const revealBtn = document.querySelector('.reveal-btn');

const hiddenContent = document.querySelector('.hidden-content');

function revealMore(){
    if(hiddenContent.classList.contains('reveal-btn')){
        hiddenContent.classList.remove('reveal-btn')
    }else{
        hiddenContent.classList.add('reveal-btn')
    }     
};

revealBtn.addEventListener('click', revealMore);

// Event Propagation

// window.addEventListener("click", function(){
//     console.log('window');    
// }, false);
    
//     document.addEventListener('click', function(){
//     console.log('Document');
// }, false);

document.querySelector('.div2').addEventListener
('click', function(e) {
//    e.stopPropagation()
    console.log('DIV-2');   
}, false);

document.querySelector('.div1').addEventListener
('click', function(){
   console.log('DIV 1'); 
}, false);

document.querySelector('.button').addEventListener
('click', function(e){
    e.preventDefault()
        console.log(e.target.innerText = 'Clicked!');
}, false)


// Event Delegation

// It allows users to appens a SINGLE event listener to a 
// parent element that adds it to all of its present AND future 
// desendants that match the selector

document.querySelector('#sports').addEventListener
('click', function(e){

    console.log(e.target.getAttribute('id') + ' is clicked');

    const target = e.target;

    if(target.matches('li')) {
        target.style.backgroundColor = 'lightgrey';
    }
    
})

const sports = document.querySelector('#sports');
const newSport = document.createElement('li');

newSport.innerText = 'Rugby';
newSport.setAttribute('id', 'rugby');
newSport.classList.add('sport');
sports.appendChild(newSport);




// document.querySelector('#football').addEventListener
// ('click', function(e){
//     console.log('football is clicked');

//     const target = e.target;

//     if(target.matches('li')){
//         target.style.backgroundColor = '#ADD8E6'
//     }

// })

// document.querySelector('#basketball').addEventListener
// ('click', function(e){
//     console.log('basketball is clicked');

//     const target = e.target;

//     if(target.matches('li')){
//         target.style.backgroundColor = '#ADD8E6'
//     }

// })

// document.querySelector('#boxing').addEventListener
// ('click', function(e){
//     console.log('boxing is clicked');

//     const target = e.target;

//     if(target.matches('li')){
//         target.style.backgroundColor = '#ADD8E6'
//     }

// })

// document.querySelector('#tennis').addEventListener
// ('click', function(e){
//     console.log('tennis is clicked');

//     const target = e.target;

//     if(target.matches('li')){
//         target.style.backgroundColor = '#ADD8E6'
//     }

// })

// document.querySelector('#golf').addEventListener
// ('click', function(e){
//     console.log('golf is clicked');

//     const target = e.target;

//     if(target.matches('li')){
//         target.style.backgroundColor = '#ADD8E6'
//     }

// })





