const productBtn = document.querySelector("#productBtn");

let id = productBtn.dataset.id;
productBtn.addEventListener("click", ()=>{
    productBtn.textContent = id;
})