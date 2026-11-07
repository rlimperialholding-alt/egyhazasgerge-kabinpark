const fm=document.getElementById('formModal'),ff=document.getElementById('formFrame'),fb=document.getElementById('formFallback');
document.querySelectorAll('.open-form').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();const u=a.dataset.form||a.href;ff.src=u;fb.href=u;fm.classList.add('open');fm.setAttribute('aria-hidden','false')}));
document.getElementById('formClose').onclick=()=>{fm.classList.remove('open');fm.setAttribute('aria-hidden','true');ff.src=''};
fm.addEventListener('click',e=>{if(e.target===fm)document.getElementById('formClose').click()});
const lb=document.getElementById('lightbox'),li=document.getElementById('lightImg'),lc=document.getElementById('lightClose');
document.querySelectorAll('.cabin-shot,.park-shot').forEach(b=>b.addEventListener('click',()=>{li.src=b.dataset.full;lb.classList.add('open');lb.setAttribute('aria-hidden','false')}));
lc.onclick=()=>{lb.classList.remove('open');lb.setAttribute('aria-hidden','true');li.src=''};
lb.addEventListener('click',e=>{if(e.target===lb)lc.click()});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){if(lb.classList.contains('open'))lc.click();if(fm.classList.contains('open'))document.getElementById('formClose').click()}});
