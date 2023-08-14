// for subhan Allah increment
let subhanAllahDisplay = document.getElementsByClassName("count")[0];
let countInitially = subhanAllahDisplay.innerText;
let subhanAllahIncrement = document.getElementsByClassName("increment")[0].addEventListener("click", function(){
    let subhanAllahCounting =  document.getElementsByClassName("count")[0];
    let subhanAllahCounted =  subhanAllahCounting.innerText = countInitially++;
})
//for subhan Allah decrement
let subhanAllahDecrement = document.getElementsByClassName("decrement")[0].addEventListener("click", function(){
    let PresentNumberOfsubhanAllah = document.getElementsByClassName("count")[0];
    let subhanAllahDecrementCounted = PresentNumberOfsubhanAllah.innerText = countInitially--;
})



//for alhamdulillah increment
let alhamdulillahDisplay = document.getElementsByClassName("count")[1];
let alhamdulillahInitially = subhanAllahDisplay.innerText;
let alhamdulillahIncrement = document.getElementsByClassName("increment")[1].addEventListener("click", function(){
    let alhamdulillahCounting = document.getElementsByClassName("count")[1];
    let alhamdulillahCounted = alhamdulillahCounting.innerText = alhamdulillahInitially++
})
//for alhamdulillah decrement
let alhamdulillahDecrement = document.getElementsByClassName("decrement")[1].addEventListener("click", function(){
    let PresentNumberOfAlhamdulillah = document.getElementsByClassName("count")[1];
    let alhamdulillahDecrementCounted = PresentNumberOfAlhamdulillah.innerText = alhamdulillahInitially--
})


//for Allahu akbar increment
let allahuAkbarDisplay = document.getElementsByClassName("count")[2];
let allahuAkbarInitially = alhamdulillahDisplay.innerText;
let allahuAkbarIncrement = document.getElementsByClassName("increment")[2].addEventListener("click", function(){
    let allahuAkbarCounting = document.getElementsByClassName("count")[2];
    let allahuAkbarCounted = allahuAkbarCounting.innerText = allahuAkbarInitially++
})
//for Allahu akabr decrement
let allahuAkbarDecrement = document.getElementsByClassName("decrement")[2].addEventListener("click", function(){
    let PresentNumberOfAllahuAkbar = document.getElementsByClassName("count")[2];
    let AllhuAkbarDecrementCounted = PresentNumberOfAllahuAkbar.innerText = allahuAkbarInitially--
})

let resetTasbeeh = document.getElementsByClassName("reset-btn")[0].addEventListener("click", function(){
    // allahuAkbarDisplay.innerText = 0;
    let tryt = document.getElementsByClassName("count")
    console.log(tryt);
    for(const item of tryt){
        // item.innerText = 0;
        console.log(item.innerText);
    }
})