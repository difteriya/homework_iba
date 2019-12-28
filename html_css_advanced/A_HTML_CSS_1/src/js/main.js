let burger = document.querySelector('#burger');
let nav = document.querySelector('#nav');

burger.addEventListener('click', () => {
      console.log('clicking');
      burger.classList.toggle('active-burger');
      nav.classList.toggle('active-nav');
});


let productCategories = document.querySelectorAll('.product-category');
let counter = 1;
for (let prodCategory of productCategories ) {
      prodCategory.style.backgroundImage = `url("dist/img/product-category-${counter}.png")`;
      counter++; 
}