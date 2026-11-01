/* Prototype corpus: every article, link and cover below comes from gardari.art.
   The complete 182-text archive is intentionally not claimed as connected yet. */
const articles = [
  {
    title: 'ЧТО ЕСТЬ ТВОРЧЕСТВО?',
    short: 'ЧТО ЕСТЬ ТВОРЧЕСТВО?',
    topic: 'ТЕОРИЯ ТВОРЧЕСКОЙ ДЕЯТЕЛЬНОСТИ',
    detail: 'Цикл бесед о творчестве. Беседа первая.',
    image: 'https://static.tildacdn.com/tild6564-3166-4162-a365-623231386134/021.jpeg',
    url: 'https://gardari.art/article2/tpost/7ajorvb8k1-chto-est-tvorchestvo'
  },
  {
    title: 'ПЯТЬ УРОВНЕЙ «Я»',
    short: 'ПЯТЬ УРОВНЕЙ «Я»',
    topic: 'ЗАНИМАТЕЛЬНАЯ ФИЛОСОФИЯ',
    detail: 'Модель пяти уровней становления мировоззрения.',
    image: 'https://static.tildacdn.com/tild6637-3230-4332-a362-353137646137/DSC_3752.jpeg',
    url: 'https://gardari.art/article4/tpost/ual45f65c1-pyat-urovnei-ya'
  },
  {
    title: 'РУССКИЙ КУЛЬТУРНЫЙ КОД',
    short: 'РУССКИЙ КУЛЬТУРНЫЙ КОД',
    topic: 'ЗАНИМАТЕЛЬНАЯ КУЛЬТУРОЛОГИЯ',
    detail: 'Очерк № 1. Проблемы нашей идентичности.',
    image: 'https://static.tildacdn.com/tild6534-6665-4939-b961-343762383766/026.jpeg',
    url: 'https://gardari.art/article3/tpost/xnxaux4eg1-russkii-kulturnii-kod-ocherk-n1'
  },
  {
    title: 'ПЛАСТИКА МИКЕЛАНДЖЕЛО',
    short: 'ПЛАСТИКА МИКЕЛАНДЖЕЛО',
    topic: 'ОЧЕРКИ ОБ ИСКУССТВЕ',
    detail: 'Искусство и художники.',
    image: 'https://static.tildacdn.com/tild3936-3931-4633-a235-393866656638/021.jpeg',
    url: 'https://gardari.art/gardari_club/tpost/6fefvusvr1-plastika-mikelandzhelo'
  },
  {
    title: 'РАДИ ДОЖДЯ',
    short: 'РАДИ ДОЖДЯ',
    topic: 'ИСТОРИИ ИЗ ЖИЗНИ',
    detail: 'История Дениса Гардари.',
    image: 'https://static.tildacdn.com/tild6131-6439-4565-b432-303764626331/021.jpeg',
    url: 'https://gardari.art/article5/tpost/rnraiinl31-radi-dozhdya'
  },
  {
    title: 'КОНТУРЫ БУДУЩЕГО',
    short: 'КОНТУРЫ БУДУЩЕГО',
    topic: 'ЗАНИМАТЕЛЬНАЯ ФИЛОСОФИЯ',
    detail: 'Что же всё-таки нас ждёт, какой образ мира брезжит на горизонте?',
    image: 'https://static.tildacdn.com/tild3562-3430-4337-b531-363331643262/Snapseed_3.jpg',
    url: 'https://gardari.art/article4/tpost/i8a9zp1gg1-konturi-buduschego-1-prishlo-drugoe-vrem'
  },
  {
    title: 'КАК ПРАВИЛЬНО СМОТРЕТЬ КАРТИНЫ?',
    short: 'КАК ПРАВИЛЬНО СМОТРЕТЬ КАРТИНЫ?',
    topic: 'ЗАНИМАТЕЛЬНАЯ КУЛЬТУРОЛОГИЯ',
    detail: 'О способах смотрения искусства и правильном зрении.',
    image: 'https://static.tildacdn.com/tild3666-6265-4566-a565-653831356639/022.jpeg',
    url: 'https://gardari.art/article3/tpost/xv3yfx46b1-kak-pravilno-smotret-kartini'
  },
  {
    title: 'КАК ПРАВИЛЬНО ХОДИТЬ В МУЗЕИ?',
    short: 'КАК ПРАВИЛЬНО ХОДИТЬ В МУЗЕИ?',
    topic: 'ЗАНИМАТЕЛЬНАЯ КУЛЬТУРОЛОГИЯ',
    detail: '',
    image: 'https://static.tildacdn.com/tild6163-3865-4836-b737-336635643666/021.jpeg',
    url: 'https://gardari.art/article3/tpost/yocnsldan1-kak-pravilno-hodit-v-muzei'
  },
  {
    title: 'ПОНИМАНИЕ СОВРЕМЕННОГО ИСКУССТВА',
    short: 'ПОНИМАНИЕ СОВРЕМЕННОГО ИСКУССТВА',
    topic: 'ЗАНИМАТЕЛЬНАЯ КУЛЬТУРОЛОГИЯ',
    detail: '',
    image: null,
    url: 'https://gardari.art/article3/tpost/aoxeinend1-ponimanie-sovremennogo-iskusstva'
  }
];

const tabShape = 'M 46.79072656342929 0.5 H 66.666667 A 11.5 11.5 0 0 1 78.166667 12 V 66.666667 A 11.5 11.5 0 0 1 66.666667 78.166667 H 12 A 11.5 11.5 0 0 1 0.5 66.666667 V 46.79072656342929 A 11.5 11.5 0 0 1 12.767732953990608 35.316381871406264 A 21.181818156064274 21.181818156064274 0 0 0 35.316381871406264 12.767732953990608 A 11.5 11.5 0 0 1 46.79072656342929 0.5 Z';
const escapeHtml = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

function buildNavigation() {
  const items = [
    {label:'Главная',href:'#top'},
    {label:'Темы',href:'#topics'},
    {label:'Циклы',href:'#cycles'},
    {label:'Клуб',href:'#club'}
  ];
  const nav = document.getElementById('matrix-nav');
  items.forEach((item,index)=>{
    const link = document.createElement('a');
    link.href = item.href;
    link.className = 'section-tab';
    link.setAttribute('aria-label',item.label);
    link.innerHTML = '<svg class="tab-outline" viewBox="0 0 78.666667 78.666667" aria-hidden="true"><path d="' + tabShape + '"/></svg>'
      + '<span class="tab-number">' + String(index+1).padStart(2,'0') + '</span>'
      + '<span class="tab-name">' + escapeHtml(item.label) + '</span>';
    nav.append(link);
  });
  const syncActive = () => {
    const current = items.some(item=>item.href === location.hash) ? location.hash : '#top';
    [...nav.querySelectorAll('.section-tab')].forEach(link=>{
      const active = link.getAttribute('href') === current;
      link.classList.toggle('is-active',active);
      if (active) link.setAttribute('aria-current','location');
      else link.removeAttribute('aria-current');
    });
  };
  window.addEventListener('hashchange',syncActive);
  syncActive();
}

/* The footer shares the Gallery menu contour and disc-only hover response,
   but uses an outlined, transparent treatment on the graphite surface. */
function buildFooterResources() {
  const nav = document.getElementById('footer-resource-nav');
  if (!nav) return;
  const resources = [
    { label:'Арт-галерея', lines:['АРТ','ГАЛЕРЕЯ'], href:'https://gardari.art/gallery' },
    { label:'Концепт-бюро', lines:['КОНЦЕПТ','БЮРО'], href:'https://dgardari-ai.github.io/kb-gardari/' },
    { label:'Платформа методов', lines:['ПЛАТФОРМА','МЕТОДОВ'], href:'https://dgardari-ai.github.io/gardari-tools-platform/' },
    { label:'Клуб Гардари', lines:['КЛУБ','ГАРДАРИ'], href:'https://gardari.art/gardari_club' }
  ];
  resources.forEach((item,index)=>{
    const link = document.createElement('a');
    link.className = 'section-tab footer-resource-tab';
    link.href = item.href;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.setAttribute('aria-label',item.label);
    link.innerHTML = '<svg class="tab-outline" viewBox="0 0 78.666667 78.666667" aria-hidden="true"><path d="' + tabShape + '"/></svg>'
      + '<span class="tab-number">' + String(index+1).padStart(2,'0') + '</span>'
      + '<span class="tab-name">' + item.lines.map(escapeHtml).join('<br>') + '</span>';
    nav.append(link);
  });
}

function buildAccordion() {
  const track = document.getElementById('accordion-track');
  articles.slice(0,7).forEach((item,index)=>{
    const panel = document.createElement('article');
    panel.className = 'accordion-panel' + (index === 0 ? ' is-open' : '');
    panel.innerHTML = [
      '<a class="panel-activate" href="',item.url,
      '" target="_blank" rel="noopener noreferrer" aria-label="Читать статью: ',escapeHtml(item.title),'">',
      '<img src="',item.image,'" alt="Исходная иллюстрация публикации «',escapeHtml(item.title),'»" loading="eager">',
      '<span class="panel-overlay"></span>',
      '<span class="panel-title-vertical">',escapeHtml(item.short),'</span>',
      '<span class="panel-caption"><small>',escapeHtml(item.topic),'</small>',
      '<strong>',escapeHtml(item.title),'</strong><span>',escapeHtml(item.detail),'</span></span>',
      '</a>'
    ].join('');
    const img=panel.querySelector('img');
    img.addEventListener('error',()=>panel.classList.add('image-missing'));
    track.append(panel);
  });
  const panels = [...track.querySelectorAll('.accordion-panel')];
  const activate = index => {
    panels.forEach((p,i)=>{
      p.classList.toggle('is-open',i===index);
    });
  };
  panels.forEach((panel,index)=>{
    panel.addEventListener('pointerenter',event=>{if(event.pointerType!=='touch')activate(index);});
    panel.querySelector('.panel-activate').addEventListener('focus',()=>activate(index));
  });
  track.addEventListener('keydown',event=>{
    if(!['ArrowRight','ArrowLeft'].includes(event.key))return;
    const current=panels.findIndex(p=>p.classList.contains('is-open'));
    const next=(current+(event.key==='ArrowRight'?1:-1)+panels.length)%panels.length;
    activate(next); panels[next].querySelector('.panel-activate').focus(); event.preventDefault();
  });
}

function buildRelated() {
  const holder=document.getElementById('related-list');
  [articles[5],articles[1],articles[2]].forEach(item=>{
    const link=document.createElement('a');
    link.className='related-item';
    link.href=item.url;
    link.target='_blank';
    link.rel='noopener noreferrer';
    link.innerHTML='<img src="'+item.image+'" loading="lazy" alt="">'
      +'<span><small>'+escapeHtml(item.topic.replace('ЗАНИМАТЕЛЬНАЯ ',''))+'</small>'
      +'<strong>'+escapeHtml(item.short)+'</strong></span>';
    holder.append(link);
  });
}

function initSearch() {
  const form=document.getElementById('search-form');
  const input=document.getElementById('material-search');
  const list=document.getElementById('search-results');
  const normalize = str => String(str||'').toLocaleLowerCase('ru-RU').replace(/ё/g,'е');
  const close = () => {list.hidden=true;input.setAttribute('aria-expanded','false');};
  function show() {
    const query=normalize(input.value.trim());
    list.replaceChildren();
    if(!query){close();return;}
    const found=articles.filter(a=>normalize(a.title+' '+a.topic+' '+a.detail).includes(query));
    const label=document.createElement('div');
    label.className='search-results-label';
    label.textContent='НАЙДЕНО: '+found.length+' · ПОИСК ПО '+articles.length+' МАТЕРИАЛАМ ПРОТОТИПА';
    list.append(label);
    if(found.length===0){
      const empty=document.createElement('p');
      empty.className='search-empty';
      empty.textContent='В этой подборке ничего не найдено. Полный архив будет подключён позже.';
      list.append(empty);
    }
    found.slice(0,7).forEach(a=>{
      const link=document.createElement('a');
      link.className='search-result';
      link.href=a.url;
      link.target='_blank';
      link.rel='noopener noreferrer';
      const strong=document.createElement('strong');
      strong.textContent=a.title;
      const small=document.createElement('small');
      small.textContent=a.topic;
      link.append(strong,small);
      list.append(link);
    });
    list.hidden=false;
    input.setAttribute('aria-expanded','true');
  }
  input.addEventListener('input',show);
  input.addEventListener('focus',()=>{if(input.value.trim())show();});
  input.addEventListener('keydown',e=>{
    if(e.key==='Escape'){close();input.blur();}
    if(e.key==='ArrowDown'&&!list.hidden){list.querySelector('.search-result')?.focus();e.preventDefault();}
  });
  form.addEventListener('submit',e=>{e.preventDefault();show();list.querySelector('.search-result')?.focus();});
  document.addEventListener('pointerdown',e=>{if(!form.contains(e.target))close();});
}

function initDateTicker() {
  const label = document.querySelector('.date-ticker');
  if (!label || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const units = [...label.querySelectorAll('[data-count-to]')].map((el,index)=>({
    el,
    target: Number(el.dataset.countTo),
    digits: Number(el.dataset.digits),
    delay: index * 150,
    duration: 1900 + index * 180
  }));
  let started = false;
  const easeInOut = x => x < .5 ? 4*x*x*x : 1 - Math.pow(-2*x+2,3)/2;
  function start() {
    if (started) return;
    started = true;
    const origin = performance.now();
    units.forEach(({el,digits})=>{el.textContent = '0'.padStart(digits,'0');});
    function tick(now) {
      let completed = true;
      units.forEach(({el,target,digits,delay,duration})=>{
        const progress = Math.min(1,Math.max(0,(now-origin-delay)/duration));
        el.textContent = String(Math.round(target * easeInOut(progress))).padStart(digits,'0');
        if (progress < 1) completed = false;
      });
      if (!completed) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  if (!('IntersectionObserver' in window)) { start(); return; }
  const observer = new IntersectionObserver(entries=>{
    if (entries.some(entry=>entry.isIntersecting)) { observer.disconnect(); start(); }
  },{threshold:.2,rootMargin:'0px 0px -45% 0px'});
  observer.observe(label);
}

/* Keep the three reference blocks docked while the whole article is read.
   Their placeholder preserves grid height; unlike sticky, the dock does not
   silently release when the article's parent reaches its bottom edge. */
function initAsideDock() {
  const dock = document.querySelector('.aside-dock');
  const aside = dock?.querySelector('.links-column');
  const footer = document.querySelector('.reading-footer');
  if (!dock || !aside) return;
  const mobile = window.matchMedia('(max-width: 680px)');
  let queued = false;
  function update() {
    queued = false;
    if (mobile.matches) {
      aside.classList.remove('is-docked');
      aside.classList.remove('is-overflowing');
      aside.classList.remove('is-footer-covered');
      aside.inert = false;
      aside.style.removeProperty('left');
      aside.style.removeProperty('width');
      dock.style.removeProperty('min-height');
      return;
    }
    aside.classList.toggle('is-overflowing',aside.scrollHeight > aside.clientHeight + 1);
    dock.style.minHeight = Math.ceil(aside.getBoundingClientRect().height) + 'px';
    const rect = dock.getBoundingClientRect();
    const shouldDock = rect.top <= 97;
    aside.classList.toggle('is-docked',shouldDock);
    /* The full-width reading footer takes over only after article reading ends.
       Fade the dock instead of letting it slide beneath the fixed header. */
    const footerTop = footer ? footer.getBoundingClientRect().top : Infinity;
    const footerCovered = shouldDock && footerTop <= 97 + aside.getBoundingClientRect().height;
    aside.classList.toggle('is-footer-covered',footerCovered);
    aside.inert = footerCovered;
    if (shouldDock) {
      aside.style.left = rect.left.toFixed(2) + 'px';
      aside.style.width = rect.width.toFixed(2) + 'px';
    } else {
      aside.style.removeProperty('left');
      aside.style.removeProperty('width');
    }
  }
  function schedule() {
    if (queued) return;
    queued = true;
    requestAnimationFrame(update);
  }
  update();
  window.addEventListener('scroll',schedule,{passive:true});
  window.addEventListener('resize',schedule);
}

function initReadingFooterAccordion() {
  const root = document.getElementById('reading-footer-accordion');
  if (!root) return;
  /* The date selection stays visible even when the other folds change. */
  const folds = [...root.querySelectorAll('.footer-fold:not(.is-always-open)')];
  const triggers = folds.map(fold=>fold.querySelector('.footer-fold-trigger'));
  function update(openFold) {
    folds.forEach(fold=>{
      const isOpen = fold === openFold;
      const trigger = fold.querySelector('.footer-fold-trigger');
      const panel = fold.querySelector('.footer-fold-panel');
      fold.classList.toggle('is-open',isOpen);
      trigger.setAttribute('aria-expanded',String(isOpen));
      trigger.querySelector('.footer-fold-mark').textContent = isOpen ? '−' : '+';
      panel.setAttribute('aria-hidden',String(!isOpen));
      panel.inert = !isOpen;
    });
  }
  folds.forEach((fold,index)=>{
    const trigger = triggers[index];
    trigger.addEventListener('click',()=>update(fold.classList.contains('is-open') ? null : fold));
    trigger.addEventListener('keydown',event=>{
      let nextIndex;
      if (event.key === 'ArrowDown') nextIndex = (index+1)%triggers.length;
      else if (event.key === 'ArrowUp') nextIndex = (index+triggers.length-1)%triggers.length;
      else if (event.key === 'Home') nextIndex = 0;
      else if (event.key === 'End') nextIndex = triggers.length-1;
      else return;
      event.preventDefault();
      triggers[nextIndex].focus();
    });
  });
  update(folds.find(fold=>fold.classList.contains('is-open')) || null);
}

function initRandomFooterDate() {
  const dateLink = document.getElementById('footer-random-date');
  const titleLink = document.getElementById('footer-random-title');
  if (!dateLink || !titleLink) return;
  /* Every entry is an actual dated Gardari publication, distinct from the
     previous-date record. The choice changes on page load. */
  const candidates = [
    { date:'14.04.2023', iso:'2023-04-14', title:'РУССКИЙ КУЛЬТУРНЫЙ КОД', url:'https://gardari.art/article3/tpost/xnxaux4eg1-russkii-kulturnii-kod-ocherk-n1' },
    { date:'30.05.2023', iso:'2023-05-30', title:'КАК ПРАВИЛЬНО ХОДИТЬ В МУЗЕИ?', url:'https://gardari.art/article3/tpost/yocnsldan1-kak-pravilno-hodit-v-muzei' },
    { date:'31.05.2023', iso:'2023-05-31', title:'ПЛАСТИКА МИКЕЛАНДЖЕЛО', url:'https://gardari.art/gardari_club/tpost/6fefvusvr1-plastika-mikelandzhelo' }
  ];
  const selected = candidates[Math.floor(Math.random() * candidates.length)];
  dateLink.href = selected.url;
  titleLink.href = selected.url;
  const time = dateLink.querySelector('time');
  time.dateTime = selected.iso;
  time.textContent = selected.date;
  titleLink.textContent = selected.title;
}

function initArticleShare() {
  const button = document.getElementById('share-article');
  const feedback = document.getElementById('share-feedback');
  if (!button || !feedback) return;
  button.addEventListener('click',async()=>{
    const link = new URL(location.href);
    link.hash = 'article';
    if (navigator.share) {
      try {
        await navigator.share({
          title: document.querySelector('.main-article h1')?.textContent.trim() || document.title,
          url: link.href
        });
        return;
      } catch(error) {
        if (error?.name === 'AbortError') return;
      }
    }
    let copied = false;
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(link.href);
        copied = true;
      }
    } catch(error) { /* Show a selectable link if clipboard access is restricted. */ }
    feedback.replaceChildren();
    feedback.classList.toggle('needs-copy',!copied);
    if (copied) {
      feedback.textContent = 'ССЫЛКА СКОПИРОВАНА';
      return;
    }
    const label = document.createElement('span');
    label.textContent = 'СКОПИРУЙТЕ ССЫЛКУ';
    const field = document.createElement('input');
    field.type = 'text';
    field.readOnly = true;
    field.className = 'share-link-field';
    field.value = link.href;
    field.setAttribute('aria-label','Ссылка на эту статью для копирования');
    feedback.append(label,field);
    field.focus();
    field.select();
  });
}

buildNavigation();
buildFooterResources();
buildAccordion();
buildRelated();
initSearch();
initDateTicker();
initAsideDock();
initRandomFooterDate();
initReadingFooterAccordion();
initArticleShare();

/* Gallery entrance: logo 800ms, rail 456+440ms, top-axis folds 420/90ms. */
async function initBlogEntrance() {
  const root = document.documentElement;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const animations = [];
  const finish = () => { animations.forEach(a => a.cancel()); root.classList.remove('blog-enter-pending'); };
  if (reduced.matches || new URLSearchParams(location.search).has('editor_view')) { finish(); return; }
  try {
    await document.fonts.ready;
    await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
    const ease = 'cubic-bezier(.16,1,.3,1)';
    const animate = (element, frames, duration, delay=0, easing=ease) => {
      const a = element.animate(frames, {duration, delay, easing, fill:'both'});
      animations.push(a); return a;
    };
    const rail = document.querySelector('.search-rail');
    animate(rail, [{clipPath:`inset(0 ${Math.max(0,rail.offsetWidth-rail.offsetHeight)}px 0 0 round 40px)`,opacity:1}, {clipPath:'inset(0 0px 0 0 round 40px)',opacity:1}],440,456);
    animate(document.querySelector('.brand-mark'),[{transform:'scale(.015)',offset:0},{transform:'scale(1.3)',offset:.65},{transform:'scale(1)',offset:1}],800,0,'ease-in-out');
    for (const selector of ['.search-field','.search-submit']) animate(document.querySelector(selector),[{opacity:0},{opacity:1}],160,800);
    document.querySelectorAll('.matrix-nav .section-tab').forEach((el,i)=>animate(el,[{opacity:0,transform:'perspective(650px) rotateX(-86deg)'},{opacity:1,transform:'perspective(650px) rotateX(0deg)'}],420,i*90));
    document.querySelectorAll('.accordion-panel').forEach((el,i)=>animate(el,[{opacity:0,transform:'perspective(650px) rotateX(-86deg)'},{opacity:1,transform:'perspective(650px) rotateX(0deg)'}],420,380+i*90));
    reduced.addEventListener('change',finish,{once:true});
    await Promise.all(animations.map(a=>a.finished.catch(()=>{})));
    reduced.removeEventListener('change',finish);
  } finally { finish(); }
}
initBlogEntrance();
