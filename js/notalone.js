let body = document.querySelector("body");
let main = document.querySelector(".own-mainbox");
let top_account_container = document.querySelector(".top_account_container");
let button = document.createElement("button");
button.id = "lstButton";
button.textContent = "Клик";
button.onclick = Size;
if(top_account_container){
    top_account_container.prepend(button)
};
function Size(){
    if (body.classList[0] == 'nightsky' && body.classList[1] == null){
        body.classList.add("lstSize");
        main.style.maxWidth = "1480px";
    }else if (body.classList[0] == 'nightsky' && body.classList[1] == 'lstSize'){
        body.classList.remove("lstSize");
        main.style.maxWidth = "";
    }else{
        ;
    }
}