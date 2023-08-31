//DEPOSIT JS

function checkx(){

  let selectedMethod = document.frm.methodz.value;
  
  switch(selectedMethod){
  
  case "bank":
  
  document.frm.accountnum.value = 5774900355;
  
  document.frm.selectdmethod.value = "International Bank";
  
  break;
  
  case "btc":
  
  document.frm.accountnum.value = "truyuwttw4";
  
  document.frm.selectdmethod.value = "Bitcoin";

  break;
  
  case "USDT":
  
  document.frm.accountnum.value = "t57yudkkde";
  
  document.frm.selectdmethod.value = "USDT";

  break;
  
  case "eth":
  
  document.frm.accountnum.value = "eth95KumbsU73";
  
  document.frm.selectdmethod.value = "Ethereum";
  break;

  case "Paypal":
  
  document.frm.accountnum.value = "s-invest@pay";
  
  document.frm.selectdmethod.value = "paypal";
  break;

  default:

  document.frm.accountnum.value = "";
  
  document.frm.selectdmethod.value = "";
  }
  
}


//DEPOSIT ERROR MESAGE

function checky(){
  let messageDisplay = document.getElementById('msg');
  let amountD = document.getElementById('amount').value;
  
  try{
  if(amountD.trim() === "") throw "input cannot be empty";
  if(isNaN(amountD)) throw "input must be a number";
  }
  catch(err){
  messageDisplay.innerHTML = err;
  }
}
  
  
function validx(){

  
  if(document.frm.accountnum.value === ""){
  
    alert("Account details cannot be empty");
    document.frm.accountnum.focus();
    return false;
  }

  
  if(document.frm.selectdmethod.value === ""){
  
    alert("Account details cannot be empty");
    document.frm.selectdmethod.focus();
    return false;
  }

  if(document.frm.amount.value === ""){
  
  alert("please enter deposit amount");
  document.frm.amount.focus();
  return false;
  }
  return true;
}

//WITHDRAWAL JS

function checkWithdraw(){

  let selectedMethod2 = document.frm2.method2.value;
  
  switch(selectedMethod2){
  
  case "bankTransfer":
  
  document.frm2.selectdMethod2.value = "International Bank";
  
  break;
  
  case "btcTransfer":
  
  document.frm2.selectdMethod2.value = "Bitcoin";

  break;
  
  case "usdtTransfer":
  
  document.frm2.selectdMethod2.value = "Usdt";


  break;
  
  case "ethTransfer":
  
  document.frm2.selectdMethod2.value = "Ethereum";

  break;

  case "paypalTransfer":
  
  document.frm2.selectdMethod2.value = "Paypal";
  break;

  default:
  
  document.frm2.selectdmethod2.value = "";
  }
  
}

//WITHDRAWAL VALIDATION

function withx(){
  if(document.frm2.method2.value === "none"){
    alert('please select a method');
    document.frm2.method2.focus();
   return false;
  }

  if(document.frm2.accountNum2.value === ""){
    alert('please enter value');
    document.frm2.accountNum2.focus();
    return false;
  }

  if(document.frm2.amount2.value === ""){
    alert('value cannot be wmpty');
    document.frm2.amount2.focus();
    return false;
  }

  return true;
}

// WITHDRAWAL ERROR MESSAGE

function checkwErro(){
  let messageDisplay2 = document.getElementById('msg2');
  let amountW = document.getElementById('amount2').value;
  
  try{
  if(amountW.trim() === "") throw "input cannot be empty";
  if(isNaN(amountW)) throw "input must be a number";
  }
  catch(err){
  messageDisplay2.innerHTML = err;
  }
}

//LOCATION LINKS

$(document).ready(function (){
  //FROM HOME AND TO HOME PAGE LOCATION

  let homePage = document.querySelectorAll('#home-link')
  
  $(homePage).click(() =>{
    window.location = '../index.html';
  });

  $('.faq-header').click(function(){
    window.location = '../index.html';
  });

  $('#faq-page').click(function(){
    window.location = 'pages/faq.html';
  });

  // LOGIN AND REGISTER PAGE LOCATION

  $('#login-locate').click(function (){
    window.location = 'login.html';
  });

  $('#register-locate').click(function (){
    window.location = 'register.html';
  });
  

  let db = document.querySelectorAll('#dboard');

  $(db).click(() =>{
    alert('bbbbb');
  });
});



//TOGGLE MENU JAVASCRIPT

let navBtn = document.querySelector('.nav-btn');
let nav = document.querySelector('.mobile-menu-box');

navBtn.addEventListener('click', ()=> {

  navBtn.classList.toggle('nav-option');
  nav.classList.toggle('nav-option');
  
});


//ANIMATION ON SCROLL FOR INDEX PAGE

let sectionz = document.querySelectorAll('section');

window.onscroll = () => {
  sectionz.forEach(sec =>{
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;

    if(top >= offset && top < offset + height){
      sec.classList.add('show-animate');
    }
    else{
      sec.classList.remove('show-animate');
    }
  })
}