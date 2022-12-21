document.addEventListener("DOMContentLoaded", (ev) => {
    var buy = document.querySelectorAll('.Product');

    console.dir(buy);
    buy.forEach(function(e){
        e.addEventListener("click", (e) => {
            alert("Pickup at the pickup location (See pickup Page)")
        });
    });
   
});