var share=document.getElementById("share-img");

share.addEventListener("click",()=>{
    console.log("hi i am clicked")
    share.previousElementSibling.classList.toggle("share-tooltip-active")
})