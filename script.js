//Get all of the menu list items
const list = document.querySelectorAll('.list');
console.log(list);
//Arrow functions do not have their own this. They are not well suited for defining object methods. Arrow functions are not hoisted. They must be defined before they are used.

/* 
Create a function for the activeLink. For each item in your list const, remove the active class from all list items, and then add it to his
particular list item that was clicked.
*/
function activeLink (){
    list.forEach((item) => 
    item.classList.remove('active'));
    this.classList.add('active');
    console.log(this);
};

// Add an event listener for each list item item, when a particular item is clicked, run the activeLink function.
list.forEach((item) =>
item.addEventListener('click', activeLink))
