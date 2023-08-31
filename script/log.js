//LOG IN FORM VALIDATION

function validlogIn(){
  if(document.lformz.logInusername.value === ''){
    alert(`Please enter\nyour usernsme`);
    document.lformz.logInusername.focus();
    return false;
  }
  if(document.lformz.logInpassword.value === ''){
    alert(`Please enter\nyour password`);
    document.lformz.logInpassword.focus();
    return false;
  }
  
  return true;
}

//REGITRATION FORM VALIDATION
function regvalid(){

  if(document.sformz.fname.value === ''){

    alert(`Please enter\nyour name`);
    document.sformz.fname.focus();
    return false;
  }

  if(document.sformz.lname.value === ''){

    alert(`Please enter\nyour last name`);
    document.sformz.lname.focus();
    return false;
  }
  
  if(document.sformz.rusername.value === ''){

    alert(`Please choose\na username`);
    document.sformz.rusername.focus();
    return false;
  }


  if(document.sformz.phnumber.value === ''){
  
    alert(`Please enter\nyour phone number`);
    document.sformz.phnumber.focus();
    return false;
  }
  
  if(document.sformz.remail.value === ''){
  
    alert(`Please enter\nyour email`);
    document.sformz.remail.focus();
    return false;
  }
  
  /*if(document.sformz.rmale.checked === false || document.sformz.rfemale.checked === false){
    alert(`Please select\nyour gender`);
    return false;
  }*/

  if(document.sformz.pass1.value === ''){
  
    alert('create password');
    document.sformz.pass1.focus();
    return false;
  }
  
  if(document.sformz.pass2.value !== document.sformz.pass1.value){
  
    alert('recheck password');
    document.sformz.pass2.focus();
    return false;
  }

  return (true);
}

//SHOW AND HIDE PASSWORD

let passInput = document.querySelectorAll('#pswd');
let showAndHideP = document.querySelectorAll('#snh');

$(document).ready(function(){

  $(showAndHideP).click(function(){
  
    if($(passInput).attr('type') === 'password'){
      $(passInput).attr('type','text');
      $(showAndHideP).html('<i class="fa-solid fa-eye-slash"></i>');
    }
    else{
      $(passInput).attr('type','password');
      $(showAndHideP).html('<i class="fa-solid fa-eye"></i>');
    }
  
  });

  //HOME PAGE LOCATION
  
  let homePage = document.querySelectorAll('#home-link')
  
  $(homePage).click(() =>{
    window.location = '../index.html';
  });
 
});

let userN = document.getElementById('login-btn');

userN.addEventListener('click', ()=>{
  if(document.lformz.logInusername.value === 'admin' && document.lformz.logInpassword.value === 'admin123'){
    alert(`Login\nSuccessful`);
    window.location = 'account.html';
  }
  else{
    alert(`Please enter\nCorrect details`);
    return;
  }
});

