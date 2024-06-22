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
var questions=document.getElementById("question");
var output=document.getElementById("question-answer");
console.log(qna.length)
var html2=''
for(var i=0;i<qna.length;i++){
    html2+=`
            <div id="question-line">
                <h5 id="question">${qna[i].question}</h5>
                <button>
                    <img id="plus-minus" src="faq-accordion-main/assets/images/icon-plus.svg" alt="plus icon">
                </button>
            </div>
            <p id="answer">${qna[i].answer}</p>`;
}
output.innerHTML=html2;

