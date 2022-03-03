
console.log("Dev m3");
const allColors = document.getElementById('allColors');
const moreColors = document.querySelector('#moreColors');
const productList = document.querySelector('.productsList');
const inputs = document.querySelectorAll('input');
const aside = document.querySelector("aside");
const filterTitle= document.getElementsByClassName("sub-title");
const filterContent = document.getElementsByClassName("subcontent")

const filterButton = document.getElementsByClassName("filtrar");
const sortButton = document.getElementsByClassName("ordenar");

const url = 'http://localhost:5000/products';


function exibirTodasCores(){
    if(moreColors.style.display === 'block') {
      moreColors.style.display = 'none';
    } else {
      moreColors.style.display = 'block';
      allColors.style.display = 'none'; 
    }
}

allColors.addEventListener('click', exibirTodasCores);

try {
  fetch(url)
  .then(res => res.json())
  .then(data =>{
    let html = '';
    data.map(product =>{
    
      html += 
    `
    <li class="productItem" data-id=${product.id} data-color=${product.color} data-size=${product.size} data-date=${product.date}>
      <img src=${product.image} alt=${product.name}>
      <h4>${product.name}</h4>
      <strong>R$ ${product.price}</strong>
      <p>até ${product.parcelamento[0]}x de R$${product.parcelamento[1]}</p>
      <button>Comprar</button>
    </li>
    `
    })
    productList.innerHTML = html;
    
    for(i = 0; i < inputs.length; i++){
      inputs[i].addEventListener("click", (e) =>{
        const filterColors = e.target.value;
            
      });
    }
    
    console.log(data)
  
  })  
} catch (error) {
  console.log(error)
}


function openFilters(){
  if(aside.style.display == 'none') {
    aside.style.display = 'block';
   
  } else{
    aside.style.display = "none";
  }


}

filterButton[0].addEventListener('click', openFilters);
