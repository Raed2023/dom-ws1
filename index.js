const btnPlus=document.getElementsByClassName("plus")

for (var i=0; i<btnPlus.length;i++){
    btnPlus[i].addEventListener("click",increment)
}

function increment(event){
const btn=event.target
const divElt=btn.parentElement
var quantityTag=divElt.querySelector("p")
var quantityValue=Number(quantityTag.innerHTML)
quantityValue++
quantityTag.innerHTML=quantityValue
const tdElt=divElt.parentElement
const trElt=tdElt.parentElement
const unitPriceValue=Number(trElt.querySelector(".unitPrice").innerHTML)
var priceTag=trElt.querySelector(".price")
var priceValue=Number(priceTag.innerHTML)
priceValue=quantityValue*unitPriceValue
priceTag.innerHTML=priceValue
}



const btnMinus=document.getElementsByClassName("minus")
// console.log(btnMinus)
for (var i=0; i<btnMinus.length;i++){
    btnMinus[i].addEventListener("click",decrement)
}


for (var i=0; i<btnMinus.length;i++){
    btnMinus[i].addEventListener("click",decrement)
}

function decrement(event){
    const btn=event.target
    const divElt=btn.parentElement
    var quantityTag=divElt.querySelector("p")
    var quantityValue=Number(quantityTag.innerHTML)
    if (quantityValue>0){
        quantityValue--}
        quantityTag.innerHTML=quantityValue
        const tdElt=divElt.parentElement
        const trElt=tdElt.parentElement
        const unitPriceValue=Number(trElt.querySelector(".unitPrice").innerHTML)
        var priceTag=trElt.querySelector(".price")
        var priceValue=Number(priceTag.innerHTML)
        priceValue=quantityValue*unitPriceValue
        priceTag.innerHTML=priceValue
    
}
const btndel=document.getElementsByClassName("delete")
// console.log(btndel)
for (var i=0; i<btndel.length;i++){
    btndel[i].addEventListener("click",remove)

}
function remove(event){
    const btn=event.target
// console.log(event)  
const divElt=btn.parentElement.parentElement.parentElement.parentElement
// console.log(divElt)
divElt.remove()




}
    

var btnlik=document.getElementsByClassName("like")
// console.log(btnlik)
for (var i=0; i<btnlik.length;i++){
    btnlik[i].addEventListener("click",color)
}

function color(event){
    const btn=event.target
    if (btn.style.color == "red") {
        btn.style.color = "grey"
    }
    else{
        btn.style.color = "red"
    } 
}

    // console.log()








const checkboxs=document.querySelectorAll("input")
for (var i=0; i<btnPlus.length;i++){
    
    checkboxs[i].addEventListener("click",totalPrice)}
function totalPrice(e) {
    const checkBox=e.target
    

    var price=Number(checkBox.parentElement.parentElement.querySelector(".price").innerHTML)

    var totalTag=document.getElementById("total")
    var totalValue=parseInt(totalTag.innerHTML)
    
    const bntPlus=checkBox.parentElement.parentElement.querySelector(".plus")
    if(checkBox.checked===true){
        totalValue+=price
        bntPlus.setAttribute("disabled",true)
    }
    else{
        totalValue-=price
        bntPlus.removeAttribute("disabled")
    }
    totalTag.innerHTML=totalValue

}


















