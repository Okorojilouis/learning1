function displayDate(){
    let date = new date()
    date=date.toString().split("  ")
    console.log(date)
    document.querySelector("#date").innerHTML=date
    
}
window.onload = function  displayDate(){
   
}
let allDate = document.getElementById("date");
    allDate.innerHTML = new Date(); 
  

    
