"use strict"

let tableProduct;
let productForm;
let productList;

document.addEventListener("DOMContentLoaded", () => {
    tableProduct = document.getElementById("productListTable");
    productForm = document.getElementById("productForm");
    productList = []

    productForm.addEventListener('submit', (event) => {
        event.preventDefault();
        let productName = event.target.elements[0];
        let productCalories = event.target.elements[1];
        let productProtein = event.target.elements[2];
        let productFat = event.target.elements[3];
        let productCarbo = event.target.elements[4];
        let productPrice = event.target.elements[5];

        let product = {
            name: productName.value,
            calories: productCalories.value,
            protein: productProtein.value,
            fat: productFat.value,
            carbo: productCarbo.value,
            price: productPrice.value
        }
        productList.push(product);
        renderList();
    })
})

const renderList = () => {
    tableProduct.innerHTML = "";
    productList.forEach((product, index) => {
        let tr = document.createElement('tr');
        let tdName = document.createElement('td');
        let tdCalories = document.createElement('td');
        let tdProtein = document.createElement('td');
        let tdFat = document.createElement('td');
        let tdCarbo = document.createElement('td');
        let tdPrice = document.createElement('td');

        tdName.innerText = product.name;
        tr.appendChild(tdName);
        tdCalories.innerText = product.calories;
        tr.appendChild(tdCalories);
        tdProtein.innerText = product.protein;
        tr.appendChild(tdProtein);
        tdFat.innerText = product.fat;
        tr.appendChild(tdFat);
        tdCarbo.innerText = product.carbo;
        tr.appendChild(tdCarbo);
        tdPrice.innerText = product.price;
        tr.appendChild(tdPrice);
        tableProduct.appendChild(tr);
    });
}
