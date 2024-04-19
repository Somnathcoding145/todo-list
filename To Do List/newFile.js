addBtn.addEventListener('click', () => {
    if (input.value.trim() != 0) {
        let newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML =
            <><p> ${input.value}</p><div class="item-btn">
                <i class="fa-solid fa-pen-to-square"></i>
                <i class="fa-solid fa-xmark"></i>
            </div></>;
        tasks.appendChild(newItem);
        input.value = '';
    } else {
        alert('please enter a task');
    }
});
