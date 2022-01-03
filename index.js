let display_div = document.getElementById("menu");
 
async function orderfood(){
    try{
    let res = await fetch("https://themealdb.com/api/json/v1/1/categories.php");
    let data = await res.json();
    let customer = data.categories;
    displaymenu(customer);
    console.log("data:",data);
    }catch(err){
        console.log("err:",err);
    }
}
orderfood();
var cart=[];
function displaymenu(arr){
arr.forEach(function(customer){
    var div = document.createElement("div");
    var img = document.createElement("img");
    img.src= customer.strCategoryThumb;

   var category = document.createElement("p");
   category.textContent = `Category :${customer.strCategory}`
    var idnum = document.createElement("p");
    idnum.textContent =`ID -${customer.idCategory}`;
   var item = document.createElement("p");
   item.textContent= `Price -${Math.floor(Math.random()*500)}`;

   var button = document.createElement("button");
   button.textContent="Add to Cart";
   button.addEventListener("click",additems);
   
   function additems(){
       cart.push(arr);

   localstorage.setItem("cart",JSON.stringify(arr));
   }
  


    div.append(img,idnum,category,item,button);

    display_div.append(div);

});
}
