let x = document.getElementById("menu");
x.style.maxHeight = "0px";

function myFunction() {
    if(x.style.maxHeight == "0px") {
        x.style.maxHeight = "250px";
    } else {
        x.style.maxHeight = "0px";
    }
}


var productImg = document.getElementById("productImg");
var SmallImg = document.getElementsByClassName("small-img");

SmallImg[0].onclick = function() {
    productImg.src = SmallImg[0].src;
}
SmallImg[1].onclick = function() {
    productImg.src = SmallImg[1].src;
}
SmallImg[2].onclick = function() {
    productImg.src = SmallImg[2].src;
}
SmallImg[3].onclick = function() {
    productImg.src = SmallImg[3].src;
}
SmallImg[4].onclick = function() {
    productImg.src = SmallImg[4].src;
}
