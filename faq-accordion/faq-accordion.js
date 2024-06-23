const q1="What is Frontend Mentor, and how will it help me?";
const q2="Is Frontend Mentor free?";
const q3="Can I use Frontend Mentor projects in my portfolio?";
const q4="How can I get help if I'm stuck on a Frontend Mentor challenge?";

const a1=`Frontend Mentor offers realistic coding challenges to help developers improve their 
  frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for 
  all levels and ideal for portfolio building.`;
const a2=`Yes, Frontend Mentor offers both free and premium coding challenges, with the free 
  option providing access to a range of projects suitable for all skill levels.`;
const a3=`Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
  way to showcase your skills to potential employers!`;
const a4=` The best place to get help is inside Frontend Mentor's Discord community. There's a help 
  channel where you can ask questions and seek support from other community members.`;

//const qna={q1:a1,q2:a2,q3:a3,q4:a4}
const qna=[{question:q1,answer:a1},
    {question:q2,answer:a2},
    {question:q3,answer:a3},
    {question:q4,answer:a4},
]

// function changeicon(){
//   console.log(document.getElementsByClassName("plus-minus").src)
//   if(document.getElementsByClassName("plus-minus").src == "faq-accordion-main/assets/images/icon-plus.svg"){
//     document.getElementsByClassName("plus-minus").src="faq-accordion-main/assets/images/icon-minus.svg";
//   }else{
//     document.getElementsByClassName("plus-minus").src="faq-accordion-main/assets/images/icon-plus.svg";
//   }
// }

var output=document.getElementById("question-answer");
var html2=''
for(var i=0;i<qna.length;i++){
    html2+=`<div id="qna">
                <div id="question-line">
                    <h5 class="question">${qna[i].question}</h5>                  
                    <img class="plus-minus"  src="faq-accordion-main/assets/images/icon-plus.svg" alt="plus icon">
                    <p class="answer">${qna[i].answer}</p>
                </div>
            </div>`;
}
output.innerHTML=html2;

const containerQs = document.querySelectorAll('.question');
icona = document.querySelectorAll('plus-minus');

containerQs.forEach(container=>{
  container.addEventListener("click",()=>{
    container.nextElementSibling.nextElementSibling.classList.toggle('active');
    if(container.nextElementSibling.alt=="plus icon"){
      container.nextElementSibling.src="faq-accordion-main/assets/images/icon-minus.svg";
      container.nextElementSibling.alt="minus icon";
    }else{
      container.nextElementSibling.alt="plus icon";
      container.nextElementSibling.src="faq-accordion-main/assets/images/icon-plus.svg";
    }
  })
})