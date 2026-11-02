(() => {
 if(document.querySelector('.photo-dialog'))return;
 const cover=document.querySelector('.article-cover'),body=[...document.querySelectorAll('.article-body .open-photo')];
 let photos=[...body];
 if(cover&&!cover.hasAttribute('data-photo-index'))photos.unshift(cover);
 if(!photos.length)return;
 const dialog=document.createElement('dialog');dialog.className='photo-dialog';dialog.setAttribute('aria-label','Просмотр фотографий статьи');
 dialog.innerHTML='<img alt=""><div class="photo-controls"><button type="button" class="photo-previous" aria-label="Предыдущая фотография"><svg viewBox="0 0 20 20" aria-hidden="true"><path d="m12 4-6 6 6 6"/></svg></button><button type="button" class="photo-next" aria-label="Следующая фотография"><svg viewBox="0 0 20 20" aria-hidden="true"><path d="m8 4 6 6-6 6"/></svg></button><button type="button" class="photo-close" aria-label="Закрыть фотографию"><svg viewBox="0 0 20 20" aria-hidden="true"><path d="m5 5 10 10M15 5 5 15"/></svg></button></div><span class="visually-hidden photo-count" aria-live="polite"></span>';
 document.body.append(dialog);
 const img=dialog.querySelector('img'),previous=dialog.querySelector('.photo-previous'),next=dialog.querySelector('.photo-next'),close=dialog.querySelector('.photo-close');let index=0,origin,oldOverflow;
 function fit(){const source=photos[index].querySelector('img');const w=Number(source.getAttribute('width'))||img.naturalWidth||780,h=Number(source.getAttribute('height'))||img.naturalHeight||780;const scale=Math.min(1,(innerWidth-32)/w,(innerHeight-32)/h);dialog.style.width=Math.max(1,w*scale)+'px';dialog.style.height=Math.max(1,h*scale)+'px';}
 function show(i){index=Math.max(0,Math.min(photos.length-1,i));img.src=photos[index].href;img.alt=photos[index].querySelector('img').alt;previous.hidden=index===0;next.hidden=index===photos.length-1;dialog.querySelector('.photo-count').textContent=`Фотография ${index+1} из ${photos.length}`;fit();if(document.activeElement===previous&&previous.hidden)(next.hidden?close:next).focus();if(document.activeElement===next&&next.hidden)(previous.hidden?close:previous).focus();}
 function open(a,i,e){e.preventDefault();origin=a;oldOverflow=document.body.style.overflow;document.body.style.overflow='hidden';show(i);dialog.showModal();close.focus();}
 body.forEach(a=>a.addEventListener('click',e=>open(a,photos.indexOf(a),e)));
 if(cover){cover.removeAttribute('target');cover.addEventListener('click',e=>open(cover,cover.hasAttribute('data-photo-index')?Number(cover.dataset.photoIndex):photos.indexOf(cover),e));}
 previous.addEventListener('click',()=>show(index-1));next.addEventListener('click',()=>show(index+1));close.addEventListener('click',()=>dialog.close());dialog.addEventListener('close',()=>{document.body.style.overflow=oldOverflow;origin?.focus();});
 dialog.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'){e.preventDefault();show(index-1);}if(e.key==='ArrowRight'){e.preventDefault();show(index+1);}});
 let touchX;img.addEventListener('touchstart',e=>{touchX=e.changedTouches[0].clientX;},{passive:true});img.addEventListener('touchend',e=>{const dx=e.changedTouches[0].clientX-touchX;if(Math.abs(dx)>50)show(index+(dx<0?1:-1));},{passive:true});
 addEventListener('resize',()=>{if(dialog.open)fit();});
})();
