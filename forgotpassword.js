const resetEmail = document.getElementById('passresetEmail1');
const resetBtn = document.getElementById('passresetbtn');
const resetForm = document.querySelector('#logoutform');
const resetMessage = document.getElementById('messagereset');
resetForm.addEventListener('submit' , (e) =>{
    e.preventDefault();

    const email = resetEmail.value;

    auth.sendPasswordResetEmail(email).then(() => {
        window.location.assign("forgotpasswordsuccess.html")
    }).catch((err) => {
        resetMessage.innerHTML = err.Message;
    })

})

