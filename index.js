let openModal = document.getElementById("openButton")
let modal = document.getElementById("modalCover")
openModal.onclick = function(){
    modal.style.display = "block"
}

let exit = document.getElementById("exitModal")
exit.onclick = function(){
    modal.style.display = "none"
}
window.onclick = function(a){
    if(a.target.id === "modalCover"){
        modal.style.display = "none"     
    }
}