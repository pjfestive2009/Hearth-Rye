// Menu filter
const btns=document.querySelectorAll('.filters button'),rows=document.querySelectorAll('.items li');
btns.forEach(b=>b.addEventListener('click',()=>{
  btns.forEach(x=>x.setAttribute('aria-pressed',x===b));
  rows.forEach(r=>r.hidden=b.dataset.f!=='all'&&r.dataset.c!==b.dataset.f);
}));
// Pre-order form (demo only: nothing is sent anywhere)
const f=document.getElementById('orderForm');
f.date.min=new Date().toISOString().split('T')[0];
f.addEventListener('submit',e=>{
  e.preventDefault();
  document.getElementById('msg').textContent=
    `Thanks ${f.name.value}! Your ${f.item.value} is noted for ${f.date.value}. (Demo: no order was sent.)`;
  f.reset();
});
