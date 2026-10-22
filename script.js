'use strict';
const menuButton=document.querySelector('.menu-toggle');
const nav=document.getElementById('navigation');
function closeMenu(){nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Open navigation');}
menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')!=='true';nav.classList.toggle('open',open);menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'Close navigation':'Open navigation');});
document.addEventListener('click',e=>{if(!e.target.closest('.site-header'))closeMenu();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open')){closeMenu();menuButton.focus();}});
window.matchMedia('(min-width:801px)').addEventListener('change',e=>{if(e.matches)closeMenu();});
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
const motion=document.querySelector('.motion-toggle');
if(motion){const reduce=window.matchMedia('(prefers-reduced-motion:reduce)');function syncMotion(){if(reduce.matches){motion.hidden=true;document.querySelector('.hero').classList.add('paused');}else motion.hidden=false;}syncMotion();reduce.addEventListener('change',syncMotion);motion.addEventListener('click',()=>{const paused=document.querySelector('.hero').classList.toggle('paused');motion.setAttribute('aria-pressed',String(paused));motion.setAttribute('aria-label',paused?'Play hero image animation':'Pause hero image animation');motion.textContent=paused?'▷':'Ⅱ';});}
const photos=Array.from(document.querySelectorAll('[data-photo]'));
const dialog=document.querySelector('.lightbox');
let activePhotos=photos,activeIndex=0,previousFocus;
function renderPhoto(){const button=activePhotos[activeIndex];const img=button.querySelector('img');document.getElementById('lightbox-image').src=button.dataset.photo;document.getElementById('lightbox-image').alt=img.alt;document.getElementById('lightbox-caption').textContent=img.alt;document.getElementById('lightbox-count').textContent=`${activeIndex+1} / ${activePhotos.length}`;}
function movePhoto(direction){activeIndex=(activeIndex+direction+activePhotos.length)%activePhotos.length;renderPhoto();}
photos.forEach(button=>button.addEventListener('click',()=>{activePhotos=photos.filter(p=>!p.hidden);activeIndex=activePhotos.indexOf(button);previousFocus=button;renderPhoto();dialog.showModal();document.body.classList.add('locked');dialog.querySelector('.lightbox-close').focus();}));
function closePhoto(){if(dialog.open)dialog.close();}
dialog.querySelector('.lightbox-close').addEventListener('click',closePhoto);
dialog.querySelector('.previous').addEventListener('click',()=>movePhoto(-1));
dialog.querySelector('.next').addEventListener('click',()=>movePhoto(1));
dialog.addEventListener('close',()=>{document.body.classList.remove('locked');previousFocus?.focus();});
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)closePhoto();}});
dialog.addEventListener('keydown',e=>{if(e.key==='ArrowRight'){e.preventDefault();movePhoto(1);}if(e.key==='ArrowLeft'){e.preventDefault();movePhoto(-1);}});
let touchStart=0;dialog.addEventListener('touchstart',e=>{touchStart=e.changedTouches[0].screenX;},{passive:true});dialog.addEventListener('touchend',e=>{const delta=e.changedTouches[0].screenX-touchStart;if(Math.abs(delta)>70)movePhoto(delta<0?1:-1);},{passive:true});
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));photos.forEach(p=>p.hidden=button.dataset.filter!=='All'&&p.dataset.category!==button.dataset.filter);const count=photos.filter(p=>!p.hidden).length;document.getElementById('gallery-status').textContent=`${count} photograph${count===1?'':'s'}${button.dataset.filter==='All'?'':' · '+button.dataset.filter}`;}));
const form=document.getElementById('eventForm');
if(form){
const date=form.querySelector('[type="date"]');if(date){const today=new Date();date.min=`${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,'0')}-${String(today.getDate()).padStart(2,'0')}`;}
function inquiryText(){return 'REGAL TOUCH EVENTS — EVENT INQUIRY\n\n'+Array.from(new FormData(form).entries()).map(([k,v])=>k+': '+v).join('\n')+'\n\nPlease let me know the next steps.';}
async function copyInquiry(){if(!form.reportValidity())return false;const value=inquiryText();let copied=false;try{await navigator.clipboard.writeText(value);copied=true;}catch(error){const text=document.createElement('textarea');text.value=value;text.style.position='fixed';text.style.top='0';text.style.left='0';document.body.appendChild(text);text.select();copied=document.execCommand('copy');text.remove();}const toast=document.getElementById('toast');toast.classList.add('visible');toast.textContent=copied?'Details copied. Open Instagram, paste your inquiry into a message to @regaltouchevent, and send it. Your inquiry has not been sent yet.':'Copy was unavailable in this browser. Please message @regaltouchevent directly with your event details.';return copied;}
form.querySelector('[data-copy-inquiry]').addEventListener('click',copyInquiry);
form.addEventListener('submit',async e=>{e.preventDefault();if(!form.reportValidity())return;const popup=window.open('about:blank','_blank');if(popup)popup.opener=null;const copied=await copyInquiry();if(copied){if(popup)popup.location.href='https://www.instagram.com/regaltouchevent/';else document.getElementById('toast').innerHTML='Details copied. <a href="https://www.instagram.com/regaltouchevent/" target="_blank" rel="noopener noreferrer">Open Instagram</a>, paste your inquiry and send it.';}else if(popup)popup.close();});
}
