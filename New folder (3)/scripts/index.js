//store the products array in localstorage as "products"
//store the products array in localstorage as "products"


 let array= JSON.parse(localStorage.getItem("products")) || []
function Products(T,D,P,I){
this.type=T;
this.description=D;
this.price=P;
this.image=I;
}

document.getElementById("products").addEventListener("click",my_Product)
function my_Product(){
event.preventDefault();
let type = document.getElementById("type").value;
let description = document.getElementById("desc").value;
let price = document.getElementById("price").value;
let image = document.getElementById("image").value;
let p1 = new Products(type, description, price, image);
// console.log(p1)
array.push(p1)
// console.log(array)
localStorage.setItem("products",JSON.stringify(array))
}

