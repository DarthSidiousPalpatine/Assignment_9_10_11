const Myself = document.getElementById("Myself");
const Perks = document.getElementById("Perks");
const Images = document.getElementById("Images");
const Contacts = document.getElementById("Contacts");

const menuBtn1 = document.getElementById("scroll1");
const menuBtn2 = document.getElementById("scroll2");
const menuBtn3 = document.getElementById("scroll3");
const menuBtn4 = document.getElementById("scroll4");

const header = document.getElementById("header");

menuBtn1.addEventListener("click", function() {
  window.scrollTo({left:0, top: Myself.getBoundingClientRect().top - 100, behavior: 'smooth'});
})
menuBtn2.addEventListener("click", function() {
  window.scrollTo({left: 0, top: Perks.getBoundingClientRect().top - 100, behavior: 'smooth'});
})
menuBtn3.addEventListener("click", function() {
  window.scrollTo({left: 0, top: Images.getBoundingClientRect().top - 100, behavior: 'smooth'});
})
menuBtn4.addEventListener("click", function() {
  window.scrollTo({left: 0, top: Contacts.getBoundingClientRect().top - 100, behavior: 'smooth'});
})

const hiddenElements = document.querySelectorAll('.hidden');

RevealElements();
function RevealElements() {

  hiddenElements.forEach(element => {
    if (element.getBoundingClientRect().top < window.innerHeight * 0.9) {
      element.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', RevealElements);

window.addEventListener('scroll', function() {
  if(window.scrollY > 300) {
    header.classList.add('minimised');
  } else {
    header.classList.remove('minimised');
  }
})

let lastInput = null;
const inputField = document.getElementById("telNum");

inputField.addEventListener('input', function() {
  var regexA = /^[0-9-+]+$/;
  var regexB = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{11}$/;
  if(!inputField.value || regexA.test(inputField.value)){
    lastInput = inputField.value;
  } else {
    inputField.value = lastInput ? lastInput : "";
  }
  if(regexB.test(inputField.value)) {
    alert(`Попавси! Твой номер: ${inputField.value}`);
    inputField.value = "";
    lastInput = "";
  }
});


const errorBtn = document.getElementById("errorBtn");

const underTheHeader = document.getElementById("ErrorsList");
const showErrorBtn = document.getElementById("showErrorBtn");
showErrorBtn.addEventListener('click', function() {
  if(underTheHeader.style.display === 'block') {
    underTheHeader.style.display = 'none';
  } else {
    underTheHeader.style.display = 'block';
  }
  
});


let errorsList = new Map();

window.addEventListener('error', (event) => {
  console.log(event);
  let errString = `${event.error}<->${event.target}`;
  if(errorsList == null || errorsList.length == 0 || errorsList[errString] == null) {
    errorsList.set(errString, 1);
  } else {
    errorsList[errString]++;
  }
  
  if(errorsList.length > 10) {
    errorsList.shift();
  }
  
  console.log(errorsList);
});
  
errorBtn.addEventListener('click', releaseTheKraken);
