 console.log("JavaScript is working!");

 
function toggleMenu() {
            let menu = document.getElementById("navToggle-list");
            menu.classList.toggle("open");
        }


function handlemenuclose(){
    const close = document.getElementById('navToggle-list')
    close.classList.remove('open')
}        