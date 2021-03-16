

let form = document.getElementById('form');


//add event listener

form.addEventListener('submit',formValue);


//function
function formValue(e){

    // Username
    let username = document.getElementById('username').value;
    let userCheck = /^[A-Za-z0-9]{4,10}/;

    if(userCheck.test(username)){
        document.getElementById('usererror').innerHTML = ' ';
    }
    else{
        document.getElementById('usererror').innerHTML = '**Invalid Username';
    }

    //Email
    let email = document.getElementById('email').value;
    let emailCheck = /^([a-zA-Z0-9]\.?)+[^\.]@([a-zA-Z0-9]\.?)+[^\.]$/;

    if(emailCheck.test(email)){
        document.getElementById('emailerror').innerHTML = ' ';
    }
    else{
        document.getElementById('emailerror').innerHTML = '**Invalid email';
    }

    //Password
    let password = document.getElementById('password').value;
    let passwordCheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/;

    if(passwordCheck.test(password)){
        document.getElementById('passworderror').innerHTML = ' ';
    }
    else{
        document.getElementById('passworderror').innerHTML = '**password between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter';
    }

    //Phone number
    let phone = document.getElementById('phone').value;
    let phoneCheck = /^(\+)?(88)?01[0-9]{9}$/;

    if(phoneCheck.test(phone)){
        document.getElementById('phoneerror').innerHTML = ' ';
    }
    else{
        document.getElementById('phoneerror').innerHTML = '**Invalid phone number';
    }

    // Postal Code
    let postCode = document.getElementById('code').value;
    let postCheck = /^[0-9]{4}$/;

    if(postCheck.test(postCode)){
        document.getElementById('postalerror').innerHTML = ' ';
    }
    else{
        document.getElementById('postalerror').innerHTML = '**Invalid postal Code';
    }

    e.preventDefault();
}
