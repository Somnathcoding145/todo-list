let input = document.querySelector('.entered-list');
let addBtn = document.querySelector('.add-list');
let tasks = document.querySelector('.tasks');

input.addEventListener('keyup' , () => {
    if(input.value.trim() != 0){
        addBth.classList.add('active')

    } else {
        addBtn.classList.remove('active')
    }
})

//delete item from list
tasks.addEventListener('click', (e)  => {
    if (e.target.classList.contains('fa-xmark')) {
        e.target.parentElement.parentElement.remove();
      }
})

//mark item as completed

tasks.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-pen-too-square')
 ) {
    e.target.parentElement.parentElement.classList.
    toggle('completed');
 }
 
})
