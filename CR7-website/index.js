document.addEventListener("DOMContentLoaded",function(){
  const toggle=document.getElementById("toggleTheme");
  const showFacts=document.getElementById("showFacts");
  const aboutText=document.getElementById("aboutText");
  const clearBtn=document.getElementById("clearForm");
  const form=document.getElementById("contactForm");
  const formResult=document.getElementById("formResult");
  const serverTime=document.getElementById("serverTime");
  const facts=[
    "Full name: Cristiano-Ronaldo dos Santos Aveiro",
    "Born: 5 February 1985 in Funchal, Madeira",
    "Height: 1.87 m",
    "Famous for powerful-shots, free kicks, and athleticism"
  ];
  let factsVisible=false;
  toggle.addEventListener("click",()=>document.documentElement.classList.toggle("dark"));
  showFacts.addEventListener("click",()=>{
    factsVisible=!factsVisible;
    if(factsVisible){
      aboutText.textContent=facts.join(" • ");
      showFacts.textContent="Hide Facts";
    }else{
      aboutText.textContent="Cristiano Ronaldo dos Santos Aveiro is a Portuguese professional footballer known for his scoring, athleticism, and longevity at the top level.";
      showFacts.textContent="Show Facts";
    }
  });
  clearBtn.addEventListener("click",()=>{
    form.reset();
    formResult.textContent="";
  });
  form.addEventListener("submit",e=>{
    e.preventDefault();
    formResult.textContent="Submitting...";
    setTimeout(()=>formResult.textContent="Form submitted to server.",700);
  });
  function rotateGallery(){
    const imgs=Array.from(document.querySelectorAll(".gallery-grid img"));
    imgs.push(imgs.shift());
    const parent=document.querySelector(".gallery-grid");
    parent.innerHTML="";
    imgs.forEach(i=>parent.appendChild(i));
  }
  setInterval(rotateGallery,4000);
  function updateClock(){
    const now=new Date();
    serverTime.textContent=now.toLocaleString();
  }
  updateClock();
  setInterval(updateClock,1000);
});
