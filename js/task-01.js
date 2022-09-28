const categoryItemsEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoryItemsEl.length}`);

categoryItemsEl.forEach(element => {
    
    console.log(`Category: ${element.firstElementChild.textContent}`);
    console.log(`Elements: ${element.lastElementChild.children.length}`)
})







