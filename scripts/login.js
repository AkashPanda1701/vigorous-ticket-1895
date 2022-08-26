
let RegisterUser = JSON.parse(localStorage.getItem("RegisterUser"))||[];


document.querySelector("form button").addEventListener("click", verify);


function verify() {
    event.preventDefault();
    
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;

    let flag=false;
    for(let i=0; i<RegisterUser.length; i++) {
        if(RegisterUser[i].email==email && RegisterUser[i].password==password) {
           flag=true;
        }
    }

    if(flag) {
        alert('Login Successfull');
        window.location.href = 'index.html';
    }else{
        alert('Please check the credential or sign up first');
        return;
    }
}