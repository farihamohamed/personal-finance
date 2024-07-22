const expensesButton = document.getElementById("barOne"); 
expensesButton.addEventListener("click", () =>{ 
    
    window.location.href = 'expensesPage.html';
})


const signUpButton = document.getElementById("sign-in-btn");  
const signUpPage = document.getElementById("signup-group"); 
signUpButton.addEventListener("click", ()=>{
    signUpPage.classList.toggle("hidden");
    console.log("Hello, testing!!")
})