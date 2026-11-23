(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){var d=document.documentElement,rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
[].forEach.call(document.querySelectorAll('.stg'),function(g){[].forEach.call(g.children,function(c,i){c.style.transitionDelay=(i*110)+'ms';});});
function cnt(el){var to=parseFloat(el.getAttribute('data-count')),dec=(el.getAttribute('data-count').split('.')[1]||'').length,t0=null,dur=1600;if(rm){el.textContent=to.toFixed(dec);return;}function f(t){if(!t0)t0=t;var p=Math.min(1,(t-t0)/dur),e=1-Math.pow(1-p,3);el.textContent=(to*e).toFixed(dec);if(p<1)requestAnimationFrame(f);}requestAnimationFrame(f);}
var els=[].slice.call(document.querySelectorAll('.rv,[data-count]'));
if(rm||!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in');if(e.hasAttribute('data-count'))e.textContent=e.getAttribute('data-count');});}
else{var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var ts=(e.target.__rv||[]).concat(els.indexOf(e.target)>-1?[e.target]:[]);ts.forEach(function(t){t.classList.add('in');if(t.hasAttribute('data-count'))cnt(t);});io.unobserve(e.target);}});},{rootMargin:'0px 0px -6% 0px',threshold:.01});
 els.forEach(function(e){var o=e;if(e.classList.contains('rv-c')||e.classList.contains('rv-w')){o=e.parentElement;}if(o!==e){(o.__rv=o.__rv||[]).push(e);}io.observe(o);});
 setTimeout(function(){els.forEach(function(e){var r=e.getBoundingClientRect();if(r.top<innerHeight&&r.bottom>0)e.classList.add('in');});},1200);}
var px=[].slice.call(document.querySelectorAll('[data-px]')),pr=document.getElementById('prog'),tk=false;
function upd(){var h=innerHeight;if(!rm)px.forEach(function(el){var r=el.parentElement.getBoundingClientRect();if(r.bottom<0||r.top>h)return;var s=+el.getAttribute('data-px');el.style.transform='translate3d(0,'+((r.top+r.height/2-h/2)*s).toFixed(1)+'px,0) scale(1.14)';});
 if(pr){var m=d.scrollHeight-h;pr.style.width=(m>0?scrollY/m*100:0)+'%';}d.classList.toggle('scd',scrollY>60);tk=false;}
addEventListener('scroll',function(){if(!tk){requestAnimationFrame(upd);tk=true;}},{passive:true});addEventListener('resize',upd);upd();
[].forEach.call(document.querySelectorAll('.hs'),function(s){var down=false,x0=0,s0=0,mv=0;s.addEventListener('pointerdown',function(e){if(e.pointerType!=='mouse')return;down=true;mv=0;x0=e.clientX;s0=s.scrollLeft;s.classList.add('drag');});addEventListener('pointerup',function(){down=false;s.classList.remove('drag');});s.addEventListener('pointermove',function(e){if(!down)return;mv=Math.abs(e.clientX-x0);s.scrollLeft=s0-(e.clientX-x0);});s.addEventListener('click',function(e){if(mv>6){e.preventDefault();e.stopPropagation();}},true);});
})();
(function(){function $(i){return document.getElementById(i);}var rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
var hv=$('hero-v');if(hv&&!rm){var cs=[].slice.call(hv.querySelectorAll('.sk-hc'));hv.addEventListener('pointermove',function(e){var r=hv.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;cs.forEach(function(c){var d=+c.getAttribute('data-depth')*300;c.style.transform='rotate('+getComputedStyle(c).getPropertyValue('--r')+') translate('+(x*d).toFixed(1)+'px,'+(y*d).toFixed(1)+'px)';});});hv.addEventListener('pointerleave',function(){cs.forEach(function(c){c.style.transform='';});});}
var tp=$('tr-p');if(tp){var nd=[].slice.call(document.querySelectorAll('.sk-nd')),sec=tp.closest('.sk-tr');function tr(){var r=sec.getBoundingClientRect(),p=Math.max(0,Math.min(1,(innerHeight*.75-r.top)/(r.height*.7)));tp.style.strokeDashoffset=(1-p).toFixed(3);nd.forEach(function(n,i){n.classList.toggle('on',p>=i/4-.02);});}addEventListener('scroll',tr,{passive:true});tr();}
var pm=$('pl-m');if(pm){var ps=$('pl-s'),dv=4,db=[].slice.call(document.querySelectorAll('#pl-d button'));
 function esc(s){return s.replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
 function pl(){var m=+pm.value,sess=Math.ceil(1200/m),wk=Math.ceil(sess/dv),d=new Date();d.setDate(d.getDate()+Math.ceil(sess/dv*7));$('pl-mo').textContent=m;$('pl-w').textContent=wk;$('pl-r').style.strokeDasharray=Math.min(100,(m*dv/60)/10*100).toFixed(1)+' 100';
  $('pl-t').innerHTML='<b>'+sess+' sessions</b> of '+m+' minutes, '+dv+' times a week. At that pace you would pass 20 hours of '+esc(ps.value.trim()||'practice')+' around <b>'+d.toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric'})+'</b>.';
  var days=Math.min(140,wk*7),pat=[[3],[1,4],[0,2,4],[0,1,3,5],[0,1,2,3,5],[0,1,2,3,4,5],[0,1,2,3,4,5,6]][dv-1],h='',c=0;for(var i=0;i<days;i++){var on=pat.indexOf(i%7)>-1&&c<sess;if(on)c++;h+='<i class="'+(on?'on'+(c===sess?' l':''):'')+'" style="animation-delay:'+Math.min(i*6,800)+'ms"></i>';}$('pl-h').innerHTML=h;}
 db.forEach(function(b){b.addEventListener('click',function(){dv=+b.getAttribute('data-v');db.forEach(function(x){x.classList.toggle('on',x===b);x.setAttribute('aria-pressed',x===b);});pl();});});pm.addEventListener('input',pl);ps.addEventListener('input',pl);pl();}
var sb=$('ss-b');if(sb){var B=[['Warm-up',.1,'#3DDC97','Easy review of something you already know.'],['Focused practice',.6,'#FFC93C','Work on the one hardest thing, slowly.'],['Review',.2,'#3A5BFF','Play it through, note what improved.'],['Rest',.1,'#FF6B5A','Step away. Stretch, drink water.']],len=45,tm=null,t0=0;
 function ss(){sb.innerHTML=B.map(function(b){return '<span style="flex-grow:'+b[1]+';background:'+b[2]+(b[2]==='#3A5BFF'||b[2]==='#FF6B5A'?';color:#fff':'')+'">'+Math.round(b[1]*len)+'m</span>';}).join('')+'<b id="ss-c"></b>';$('ss-k').innerHTML=B.map(function(b,i){return '<li style="--c:'+b[2]+'" data-i="'+i+'"><b>'+b[0]+' &middot; '+Math.round(b[1]*len)+' min</b>'+b[3]+'</li>';}).join('');}
 function stop(){clearInterval(tm);tm=null;$('ss-go').textContent='Start session';$('ss-n').textContent='Ready when you are.';var c=$('ss-c');if(c)c.style.left='0';[].forEach.call(document.querySelectorAll('#ss-k li'),function(l){l.classList.remove('cur');});}
 function tick(){var el=(Date.now()-t0)/1000,tot=len*60,p=Math.min(1,el/tot),acc=0,cur=0;B.forEach(function(b,i){if(p>=acc)cur=i;acc+=b[1];});$('ss-c').style.left='calc('+(p*100).toFixed(2)+'% - 2px)';[].forEach.call(document.querySelectorAll('#ss-k li'),function(l,i){l.classList.toggle('cur',i===cur);});var left=Math.max(0,Math.round(tot-el));$('ss-n').textContent=B[cur][0]+' · '+Math.floor(left/60)+':'+String(left%60).padStart(2,'0')+' left';if(p>=1){stop();$('ss-n').textContent='Session complete. Nicely done!';}}
 [].forEach.call(document.querySelectorAll('#ss-l button'),function(b,_,a){b.addEventListener('click',function(){len=+b.getAttribute('data-v');[].forEach.call(document.querySelectorAll('#ss-l button'),function(x){x.classList.toggle('on',x===b);x.setAttribute('aria-pressed',x===b);});stop();ss();});});
 $('ss-go').addEventListener('click',function(){if(tm){stop();return;}t0=Date.now();tm=setInterval(tick,1000);$('ss-go').textContent='Stop';tick();});ss();}
var ga=document.querySelector('.sk-ga');if(ga){var key='sk_'+ga.getAttribute('data-key'),st={};try{st=JSON.parse(localStorage.getItem(key)||'{}')||{};}catch(e){}var bs=[].slice.call(document.querySelectorAll('.sk-done')),tl=[].slice.call(document.querySelectorAll('.sk-toc a'));
 function up(){var n=0;bs.forEach(function(b,i){var d=!!st[b.getAttribute('data-l')];if(d)n++;b.setAttribute('aria-pressed',d);b.lastChild.textContent=d?'Done':'Mark as done';b.closest('.sk-ls').classList.toggle('done',d);if(tl[i])tl[i].classList.toggle('done',d);});$('pg-t').textContent=n+' of '+bs.length+' lessons done';$('pg-b').style.width=(n/bs.length*100)+'%';try{localStorage.setItem(key,JSON.stringify(st));}catch(e){}}
 bs.forEach(function(b){b.addEventListener('click',function(){var l=b.getAttribute('data-l');st[l]=!st[l];up();});});up();}
})();
