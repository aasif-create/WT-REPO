// index.js
document.addEventListener('DOMContentLoaded',function(){
  const heroStage = document.getElementById('heroStage');
  const themeToggle = document.getElementById('themeToggle');
  const showFacts = document.getElementById('showFacts');
  const aboutText = document.getElementById('aboutText');
  const contactForm = document.getElementById('contactForm');
  const clearFormBtn = document.getElementById('clearForm');
  const formResult = document.getElementById('formResult');
  const toast = document.getElementById('toast');
  const serverTime = document.getElementById('serverTime');
  const facts = [
    'Full name: Cristiano Ronaldo dos Santos Aveiro',
    'Born: 5 February 1985, Funchal',
    'Height: 1.87 m',
    'Renowned for free kicks, headers, and athleticism'
  ];
  let factsVisible = false;

  function setTime(){
    const now = new Date();
    serverTime.textContent = now.toLocaleString();
  }
  setTime();
  setInterval(setTime,1000);

  themeToggle.addEventListener('click',()=>{
    document.documentElement.classList.toggle('light');
    if(document.documentElement.classList.contains('light')){
      document.documentElement.style.setProperty('--bg-0','#f6f7fb');
      document.documentElement.style.setProperty('--text-1','#0b1220');
      document.documentElement.style.setProperty('--muted','#4b5563');
    } else {
      document.documentElement.style.removeProperty('--bg-0');
      document.documentElement.style.removeProperty('--text-1');
      document.documentElement.style.removeProperty('--muted');
    }
  });

  heroStage.addEventListener('mousemove',function(e){
    const rect = heroStage.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    const layers = heroStage.querySelectorAll('.hero-card');
    layers.forEach((el,i)=>{
      const depth = (i - 1) * 20;
      const rx = (y * 10) - depth;
      const ry = (x * 18) + depth;
      el.style.transform = `translate3d(-50%,-50%, ${depth}px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    });
  });

  heroStage.addEventListener('mouseleave',function(){
    const layers = heroStage.querySelectorAll('.hero-card');
    layers.forEach((el,i)=>{
      const depth = (i - 1) * 20;
      el.style.transform = `translate3d(-50%,-50%, ${depth}px) rotateX(4deg) rotateY(0deg)`;
    });
  });

  showFacts.addEventListener('click',()=>{
    factsVisible = !factsVisible;
    if(factsVisible){
      aboutText.textContent = facts.join(' • ');
      showFacts.textContent = 'Hide Facts';
    } else {
      aboutText.textContent = 'Cristiano Ronaldo dos Santos Aveiro is a Portuguese professional footballer known for his scoring, athleticism, and longevity at the top level.';
      showFacts.textContent = 'Show Facts';
    }
  });

  clearFormBtn.addEventListener('click',()=>{
    contactForm.reset();
    formResult.textContent = '';
  });

  contactForm.addEventListener('submit',async function(e){
    e.preventDefault();
    formResult.textContent = 'Sending...';
    const formData = new FormData(contactForm);
    try{
      const res = await fetch(contactForm.action, {
        method: 'POST',
        headers: {'X-Requested-With':'XMLHttpRequest'},
        body: formData
      });
      const data = await res.json();
      if(data && data.status === 'ok'){
        formResult.textContent = data.message;
        contactForm.reset();
        showToast('Message sent');
      } else {
        formResult.textContent = data.message || 'Server error';
        showToast('Failed to send',true);
      }
    } catch(err){
      formResult.textContent = 'Network error';
      showToast('Network error',true);
    }
  });

  function showToast(msg,err){
    toast.textContent = msg;
    toast.style.background = err ? 'linear-gradient(90deg,#333,#ff3d6b)' : 'linear-gradient(90deg,#ff3d6b,#ff8a00)';
    toast.style.opacity = '1';
    toast.style.pointerEvents = 'auto';
    setTimeout(()=>{toast.style.opacity = '0';toast.style.pointerEvents = 'none';},2200);
  }

  const gallery = document.getElementById('galleryGrid');
  let rotateIndex = 0;
  setInterval(()=>{
    const cells = Array.from(gallery.children);
    rotateIndex = (rotateIndex + 1) % cells.length;
    cells.forEach((c,i)=>{
      c.style.transform = `translateY(${(i - rotateIndex) * 6}px)`;
    });
  },3500);

  const prefersReduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(!prefersReduce){
    const imgs = document.querySelectorAll('.gcell img');
    imgs.forEach((img,i)=>{
      img.style.transitionDelay = (i * 80) + 'ms';
    });
  }
});
