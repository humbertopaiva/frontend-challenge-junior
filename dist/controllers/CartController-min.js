import{Order}from"../models/Order.js";const CartController=e=>{const t=document.getElementById("cart-items-list"),n=document.getElementById("total"),r=(document.getElementById("order-link"),Order(e.getItemsList())),d=()=>{t.innerHTML="",n.innerHTML="",e.getItemsList().map(e=>{const n=document.createElement("li"),r=document.createElement("img"),d=document.createElement("div"),a=document.createElement("h5"),c=document.createElement("span"),i=document.createElement("button");n.classList.add("carditem"),r.classList.add("image"),a.classList.add("name"),c.classList.add("price"),i.classList.add("remove"),d.classList.add("description"),r.src=e.img_url,a.innerText=e.name,c.innerText=e.price.toLocaleString("pt-br",{style:"currency",currency:"BRL"}),i.innerHTML='<i class="fa-solid fa-trash-can"></i>',i.id=e.id,n.appendChild(r),d.appendChild(a),d.appendChild(c),n.appendChild(d),n.appendChild(i),t.appendChild(n)}),a(),(()=>{const t=Array.from(document.querySelectorAll(".remove"));for(let n of t)n.addEventListener("click",()=>{e.removeItem(n.id),d(e.getItemsList())})})()},a=()=>{const e=document.createElement("span"),t=document.createElement("span");e.innerText=r.totalPrice(),t.innerHTML=r.totalAmount(),n.appendChild(e),n.appendChild(t)};return{createList:d}};export{CartController};