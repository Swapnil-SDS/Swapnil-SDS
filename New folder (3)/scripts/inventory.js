// let product_data = JSON.parse(localStorage.getItem("products"));

//  product_data.map(function(el){
//      let div=document.createElement("div")
//      let type=document.createElement("h2");
//      type.innerText = `${el.type}`;
//      let desc=document.createElement("h4");
//       type.innerText = `${el.desc}`;
//      let price=document.createElement("h4");
//       type.innerHTML = `${el.price}`;
//      let image=document.createElement("image")
//       image.src = `${el.image}`;
//      div.append(image, type, desc, price);
//      console.log(div)
//  })

var product_data = JSON.parse(localStorage.getItem("products"));
displayData();
function displayData() {
 product_data.map(function (el, index) {
   var div = document.createElement("div");
   var img_div = document.createElement("div");
   var h4 = document.createElement("h4");
   h4.innerText = el.name;
   var h3 = document.createElement("h3");
   h3.innerText = el.price;
   var p = document.createElement("p");
   p.innerText = el.type;
   var img = document.createElement("img");
   img.setAttribute("src", el.image);
   var btn = document.createElement("button");
   btn.innerText = "Remove";
   btn.addEventListener("click", function () {
     remove(product_data, index);
   });
   img_div.append(img);
   div.append(img_div, h4, h3, p, btn);
   document.getElementById("all_products").append(div);
 });
}


function remove(product_data, index) {
  product_data.splice(index, 1);
  var data1 = product_data;
  localStorage.setItem("products", JSON.stringify(data1));
  document.getElementById("all_products").innerHTML = "";
  displayData();
}
