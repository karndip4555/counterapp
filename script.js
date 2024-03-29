let incre = document.querySelector(".plus-number")

let decre = document.querySelector(".minus-number")

let para1 = document.getElementById("para")

let count = 0;


incre.addEventListener("click", function(){

    count ++;
    para1.innerHTML = count

})
decre.addEventListener("click", function(){
    if(count > 0){

        
            count --;
            para1.innerHTML = count
    }

})