const wrapper = document.querySelector('.site-wrapper');
const burger = document.querySelector('.burger');
const navbtn = document.querySelector('.mobile-nav');
const loader = document.querySelector('.loader-container');

const links = document.querySelector('.links');
const aboutBtn = document.querySelector('.details');

const skillsBtn = document.querySelector('#skills');
const educationBtn = document.querySelector('#education');
const experienceBtn = document.querySelector('#experience');
const skills = document.querySelector('.skills');
const education = document.querySelector('.education');
const experience = document.querySelector('.experience');

// content loading handler
window.addEventListener('load', ()=>{
  console.log("loading...")
  console.log(loader.style.display = "none")
})

// navbar animate buttons handler
burger.addEventListener('click', () => {
  wrapper.classList.remove('no-animation');
  document.body.classList.add('mobile-open');
});
navbtn.addEventListener('click', () => {
  // wrapper.classList.remove('no-animation');
  document.body.classList.remove('mobile-open');
});

// about details handler as button click event to skills part
const skillsHandler = (value, num) => {
  skills.style.display = value;
  skillsBtn.children[0].style.width = num;
}

skillsHandler("flex", "60%");
// about details handler as button click event to education part
const educationHandler = (value, num) => {
  education.style.display = value;
  educationBtn.children[0].style.width = num;
}

// about details handler as button click event to experience part
const experienceHandler = (value, num) => {
  experience.style.display = value;
  experienceBtn.children[0].style.width = num;;
}

aboutBtn.addEventListener('click', (e) => {
  console.log(e.target.id);
  if (e.target.id === "skills") {
    skillsHandler("flex", "60%");
    experienceHandler("none", "0");
    educationHandler("none", "0");
  }
  if (e.target.id === "education") {
    educationHandler("block", "60%");
    skillsHandler("none", "0");
    experienceHandler("none", "0");
  }
  if (e.target.id === "experience") {
    experienceHandler("block", "60%");
    educationHandler("none", "0");
    skillsHandler("none", "0");
  }
})


