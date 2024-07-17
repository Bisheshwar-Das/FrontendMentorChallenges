console.log("connected")
function submitit(){
    const emailInput=document.getElementById('emailinpt').value;
    const feedbacke=document.getElementById('emailfeedback');
    const emailRegex = /\S+@\S+\.\S+/;
    
    if(emailRegex.test(emailInput)){
        document.getElementById("err").style.visibility="hidden"
        console.log("connected")   
        feedbacke.textContent="";
}else{
    console.log(emailInput)   
    document.getElementById("err").style.visibility="visible"
    feedbacke.textContent="Please provide a valid email";
}
}