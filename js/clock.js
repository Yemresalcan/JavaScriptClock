
// take get name and getname = selectName  and  add to id myName 
let Getname = prompt("Lüften İsminizi Giriniz !")
let selectName = document.querySelector("#myName")
selectName.innerHTML = `${Getname}`


//CLOCK 

function showClock() {

    let moment = new Date()
    let h = moment.getHours()
    let s = moment.getMinutes()
    let sn = moment.getSeconds()
    let days = [
        "Pazar",
        "Pazartesi",
        "Salı",
        "Çarşamba",
        "Perşembe",
        "Cuma",
        "Cumartesi",
      ];

    let showTime = document.querySelector("#myClock")
    showTime.innerHTML= h + ":" + s + ":" + sn + days[moment.getDay()];   

}   

let actual = setInterval(showClock,1000)

