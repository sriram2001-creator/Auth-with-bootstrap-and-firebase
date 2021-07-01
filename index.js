

const Name = document.getElementById('registerInputName');
const regEmail = document.getElementById('registerInputEmail1');
const regPassword = document.getElementById('registerInputPassword1');
const logEmail = document.getElementById('loginInputEmail1');
const logPassword = document.getElementById('loginInputPassword1');
const regBtn = document.getElementById('registerbtn');
const logBtn = document.getElementById('loginbtn');
const logBtn2 = document.getElementById('loginbtn2');
const Message = document.querySelector('#message');
const registerForm = document.querySelector('#registerForm');
const loginForm = document.querySelector('#loginform');
const logMessage = document.querySelector('#message1');
const closeBtn1 = document.getElementById('closebtn1');
const closeBtn2 = document.getElementById('closebtn2');
const closeBtn3 = document.getElementById('closebtn3');
const closeBtn4 = document.getElementById('closebtn4');



closeBtn1.addEventListener('click', (e) => {
    Message.innerHTML = "";
    logBtn2.classList.add("d-none")
    registerForm.reset();
})


closeBtn2.addEventListener('click', (e) => {
    Message.innerHTML = "";
    logBtn2.classList.add("d-none")
    registerForm.reset();
})

closeBtn3.addEventListener('click', (e) => {
    logMessage.innerHTML = ""; 
    logBtn2.classList.add("d-none");
    loginForm.reset();
})

closeBtn4.addEventListener('click', (e) => {
    logMessage.innerHTML = "";
    loginForm.reset();
})
registerForm.addEventListener('submit',(e)=>{
    e.preventDefault();
   const name = Name.value;
   const email = regEmail.value;
   const password = regPassword.value;
   
   
   auth.createUserWithEmailAndPassword(email,password).then(() =>{
    Message.innerHTML = "account created succesfully";
    logBtn2.classList.remove("d-none");
    registerForm.reset();
   }).catch((err) =>{
    Message.innerHTML = err.Code;
    Message.innerHTML = err.Message;
    registerForm.reset();
   })
   
})
loginForm.addEventListener('submit',(e)=>{
    e.preventDefault();
   const name = Name.value;
   const email = logEmail.value;
   const password = logPassword.value;
   
 
   auth.signInWithEmailAndPassword(email,password).then(() =>{
    window.location.assign("users.html")
    }).catch((err) =>{
       logMessage.innerHTML = err.Code;
       logMessage.innerHTML = err.Message;
       
    })
   
})


















 
