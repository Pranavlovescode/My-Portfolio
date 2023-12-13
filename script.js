
console.log("Hello World");

redirect = () => {
  window.location.href = "login.html";
  console.log("working");
};
function redirect1() {
  window.location.href = "signup.html";
  console.log("signup is also working");
}


let lineIndex = 0;
let charIndex = 0;
const textLines = ["Web Developer.", "Graphic Designer.", "Java Developer."];

function typeWriter() {
  if (lineIndex < textLines.length) {
    if (charIndex < textLines[lineIndex].length) {
      document.getElementById("typewriter").innerHTML +=
        textLines[lineIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeWriter, 300);
    } else {
      // Move to the next line after a delay
      setTimeout(() => {
        document.getElementById("typewriter").innerHTML = "";
        lineIndex++;
        charIndex = 0;
        typeWriter();
      }, 2000);
    }
  } else {
    lineIndex = 0;
    typeWriter();
  }
}

// Start the animation
document.addEventListener('DOMContentLoaded', function () {
  // Your code here
  typeWriter();
});


// function closeMenu(){
//   let menu = document.getElementById('menu-bar')
//   let mid = document.getElementById('mid')
//   if (mid.style.display==='flex') {
//     mid.style.display='none'    
//     menu.innerHTML='<i class="fa-solid fa-bars"></i>'
//     // toggleHide()
//   }
// }

function toggleHide(){
  let mid = document.getElementById('mid')
  let menu = document.getElementById('menu-bar')
  if (mid.style.display==='none') {
    mid.style.display='flex'     
    menu.innerHTML = '<i class="fa-solid fa-xmark"></i>'

  }
  else{
    mid.style.display = 'none'
    // closeMenuMenu()
    menu.innerHTML='<i class="fa-solid fa-bars"></i>'
  }
}

