var html=""
output=document.getElementById("rating-bar");
for(var i=1;i<=5;i++){
    html+=`<p class="ratings">${i}</p>`
}
output.innerHTML=html;


var selected_rating='';
var rating = document.querySelectorAll(".ratings");

rating.forEach(ratings=>{
    ratings.addEventListener("click",()=>{
        if(selected_rating!=ratings.innerHTML){
            rating.forEach(ratin=>{
                if(ratin.innerHTML==selected_rating){
                    ratin.classList.toggle('selected')
                }
            })
            selected_rating=ratings.innerHTML;
            ratings.classList.toggle('selected')
        }
    })
})