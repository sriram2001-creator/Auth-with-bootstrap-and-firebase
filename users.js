

const logoutBtn = document.querySelector('#logoutform');
const updateCloseBtn1 = document.getElementById('updateclosebtn1');
const updateCloseBtn2 = document.getElementById('updateclosebtn2');
const updatedetailsMessage1 = document.querySelector('#updatemessage1');
const updatedetailsMessage2 = document.querySelector('#updatemessage2');;
const updateemailForm = document.querySelector('#updateEmailform');
const updatepasswordform = document.querySelector('#updatePasswordform');
const updateEmailSubmitbtn = document.getElementById('updateemailSubmitbtn');
const updateinputEmail1 = document.getElementById('updateInputEmail1');
const updateinputPassword1 = document.getElementById('updateInputPassword1');
const bodyLogin = document.getElementById('loginbody');




logoutBtn.addEventListener('submit', (e) => {
    
    e.preventDefault();
    
    auth.signOut().then(() =>{
        alert("You are going to logout now")
        window.location.assign("index.html")
    }).catch((err) =>{
        
    })
})

auth.onAuthStateChanged((user) => {
    if(user){
        bodyLogin.classList.remove("d-none")
        const user = auth.currentUser;
        if(user != null){
            const userEmail = user.email ;
            document.getElementById('userdetails').innerHTML ="Logged in as :"+" "+userEmail;
            
        }
    }else{
        document.getElementById('userdetails').innerHTML = "";
    }
})


updateCloseBtn1.addEventListener('click', (e) => {
    updatedetailsMessage1.innerHTML = ""; 
    updatedetailsMessage2.innerHTML = "";
    updateemailForm.reset();
    updatepasswordform.reset();
})

updateCloseBtn2.addEventListener('click', (e) => {
    updatedetailsMessage1.innerHTML = "";
    updatedetailsMessage2.innerHTML = "";
    updateemailForm.reset();
    updatepasswordform.reset();
})


updateemailForm.addEventListener(('submit'),(e) =>{
    e.preventDefault();
      const updateinputEmail = updateinputEmail1.value;
      

      var user = auth.currentUser;
      user.updateEmail(updateinputEmail).then(() =>{
        auth.signOut().then(() =>{
            alert("New E-mail Address updated successfully, You will be logged out now. Kindly login again with New Login Credentials")
            window.location.assign("index.html")
        }).catch((err) =>{
            
        })
      }).catch((err)=>{
        updatedetailsMessage1.innerHTML = err.Message;
      })

     
})


updatepasswordform.addEventListener(('submit'),(e) =>{
    e.preventDefault();
    const updateinputPassword = updateinputPassword1.value;
      
        var user = auth.currentUser;
        user.updatePassword(updateinputPassword).then(() =>{
            auth.signOut().then(() =>{
                alert("New Password updated successfully, You will be logged out now. Kindly login again with New Login Credentials")
                window.location.assign("index.html")
            }).catch((err) =>{
                
            })
        }).catch((err)=>{
            updatedetailsMessage2.innerHTML = err.Message;
        })  
})


