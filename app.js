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
    detail: 'История из жизни.',
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

const completedArticles = [{"postId": "article-paintings", "title": "КАК ПРАВИЛЬНО СМОТРЕТЬ КАРТИНЫ?", "short": "КАК ПРАВИЛЬНО СМОТРЕТЬ КАРТИНЫ?", "topic": "ЗАНИМАТЕЛЬНАЯ КУЛЬТУРОЛОГИЯ", "detail": "Иммерсивное смотрение картины: расстояние, детали, композиция и периферийное зрение.", "image": "https://static.tildacdn.com/tild3666-6265-4566-a565-653831356639/022.jpeg", "url": "./articles/kak-smotret-kartiny.html"}, {"postId": "article-levels", "title": "ПЯТЬ УРОВНЕЙ «Я».", "short": "ПЯТЬ УРОВНЕЙ «Я».", "topic": "ЗАНИМАТЕЛЬНАЯ ФИЛОСОФИЯ", "detail": "Размышления об ответственности, поиске своего дела и становлении мировоззрения. Авторская модель пяти уровней «Я».", "image": "https://static.tildacdn.com/tild6637-3230-4332-a362-353137646137/DSC_3752.jpeg", "url": "./articles/pyat-urovney-ya.html"}, {"postId": "sample-brera", "title": "ГАЛЕРЕЯ БРЕРА", "short": "ГАЛЕРЕЯ БРЕРА", "topic": "ОЧЕРКИ ОБ ИСКУССТВЕ И ХУДОЖНИКАХ", "detail": "Фотозаметки из миланской Галереи Брера: восемь фотографий искусства предвозрождения.", "image": "https://static.tildacdn.com/tild3266-3034-4161-a662-633330623233/021.jpeg", "url": "./articles/galereya-brera.html"}, {"postId": "sample-hundertwasser", "title": "ФРИДЕНСРАЙХ ХУНДЕРТВАССЕР", "short": "ФРИДЕНСРАЙХ ХУНДЕРТВАССЕР", "topic": "ОЧЕРКИ ОБ ИСКУССТВЕ И ХУДОЖНИКАХ", "detail": "Свобода, живопись и архитектура Фриденсрайха Хундертвассера. Очерк с десятью фотографиями.", "image": "https://static.tildacdn.com/tild3336-3835-4536-b334-623131363537/021.jpeg", "url": "./articles/hundertwasser.html"}, {"postId": "sample-modern-art", "title": "ПОНИМАНИЕ СОВРЕМЕННОГО ИСКУССТВА", "short": "ПОНИМАНИЕ СОВРЕМЕННОГО ИСКУССТВА", "topic": "ОЧЕРКИ ОБ ИСКУССТВЕ И ХУДОЖНИКАХ;ЗАНИМАТЕЛЬНАЯ КУЛЬТУРОЛОГИЯ", "detail": "Как смотреть на современное искусство без предубеждения: живое восприятие, ресентимент и уважение к непонятности.", "image": "https://static.tildacdn.com/tild6366-3066-4136-b635-393866643265/024.jpeg", "url": "./articles/ponimanie-sovremennogo-iskusstva.html"}, {"postId": "sample-advice", "title": "7 СОВЕТОВ НАЧИНАЮЩЕМУ ХУДОЖНИКУ", "short": "7 СОВЕТОВ НАЧИНАЮЩЕМУ ХУДОЖНИКУ", "topic": "ОЧЕРКИ ОБ ИСКУССТВЕ И ХУДОЖНИКАХ;ЗАНИМАТЕЛЬНАЯ ФИЛОСОФИЯ", "detail": "Начало творческого пути: самостоятельность, учёба, материалы и отношение к советам мастеров.", "image": "https://static.tildacdn.com/tild3530-6537-4133-a338-303238626434/023.jpeg", "url": "./articles/7-sovetov-hudozhniku.html"}];
const normalizedTitle = value => value.toLocaleLowerCase('ru-RU').replace(/[^а-яёa-z0-9]/g,'');
completedArticles.forEach(item=>{const at=articles.findIndex(a=>normalizedTitle(a.title)===normalizedTitle(item.title));if(at>=0)articles[at]={...articles[at],...item};else articles.push(item);});
const isInternalArticle = value => value.startsWith("./articles/");

const accordionArticles = articles.slice(0,7);
articles.splice(0,articles.length,...[{"postId": "blog-cc78fdddae9c19ac", "title": "КАК ПРАВИЛЬНО СМОТРЕТЬ КАРТИНЫ?", "short": "КАК ПРАВИЛЬНО СМОТРЕТЬ КАРТИНЫ?", "topic": "Теория и философия искусства / Выставки и художественная среда", "detail": "Иммерсивное смотрение картины: расстояние, детали, композиция и периферийное зрение.", "image": "./articles/assets/paintings.jpg", "url": "./articles/kak-smotret-kartiny.html"}, {"postId": "blog-03589706ef46769d", "title": "ПЯТЬ УРОВНЕЙ «Я».", "short": "ПЯТЬ УРОВНЕЙ «Я».", "topic": "Человек, культура, общество / Мышление, познание, когнитивность", "detail": "Размышления об ответственности, поиске своего дела и становлении мировоззрения. Авторская модель пяти уровней «Я».", "image": "./articles/assets/levels.jpg", "url": "./articles/pyat-urovney-ya.html"}, {"postId": "blog-6ab9b0a853909785", "title": "ГАЛЕРЕЯ БРЕРА", "short": "ГАЛЕРЕЯ БРЕРА", "topic": "Заметки и истории о художниках", "detail": "Фотозаметки из миланской Галереи Брера: восемь фотографий искусства предвозрождения.", "image": "./articles/assets/article-tests/g77pn30lp1/00.jpg", "url": "./articles/galereya-brera.html"}, {"postId": "blog-4c951a5900931ced", "title": "ФРИДЕНСРАЙХ ХУНДЕРТВАССЕР", "short": "ФРИДЕНСРАЙХ ХУНДЕРТВАССЕР", "topic": "Заметки и истории о художниках", "detail": "Свобода, живопись и архитектура Фриденсрайха Хундертвассера. Очерк с десятью фотографиями.", "image": "./articles/assets/article-tests/k9lua9c1b1/00.jpg", "url": "./articles/hundertwasser.html"}, {"postId": "blog-78f5df1a9f291521", "title": "ПОНИМАНИЕ СОВРЕМЕННОГО ИСКУССТВА", "short": "ПОНИМАНИЕ СОВРЕМЕННОГО ИСКУССТВА", "topic": "Теория и философия искусства", "detail": "Как смотреть на современное искусство без предубеждения: живое восприятие, ресентимент и уважение к непонятности.", "image": "./articles/assets/article-tests/aoxeinend1/00.jpg", "url": "./articles/ponimanie-sovremennogo-iskusstva.html"}, {"postId": "blog-157d35351796cde6", "title": "7 СОВЕТОВ НАЧИНАЮЩЕМУ ХУДОЖНИКУ", "short": "7 СОВЕТОВ НАЧИНАЮЩЕМУ ХУДОЖНИКУ", "topic": "Творчество, креативность и практика", "detail": "Начало творческого пути: самостоятельность, учёба, материалы и отношение к советам мастеров.", "image": "./articles/assets/article-tests/ts6i2oxbk1/00.jpg", "url": "./articles/7-sovetov-hudozhniku.html"}, {"postId": "blog-72d45b926e15ffc6", "title": "МЫШЛЕНИЕ ВО МНОЖЕСТВЕННОМ ЧИСЛЕ", "short": "МЫШЛЕНИЕ ВО МНОЖЕСТВЕННОМ ЧИСЛЕ", "topic": "Мышление, познание, когнитивность", "detail": "Шесть исторических форм мышления, их сосуществование, разные основания достоверности и вопросы, которые обостряет искусственный интеллект.", "image": null, "url": "./articles/blog-72d45b926e15ffc6.html"}, {"postId": "blog-a0af7ebf813d25e9", "title": "ПРАВДА, ВОЛЯ И АВОСЬ", "short": "ПРАВДА, ВОЛЯ И АВОСЬ", "topic": "Человек, культура, общество", "detail": "Авторская философско-поэтическая модель: правда, воля и авось как многозначные мотивы русской культуры и личного выбора.", "image": null, "url": "./articles/blog-a0af7ebf813d25e9.html"}, {"postId": "blog-f0d2d046cd0930e2", "title": "10 СОВЕТОВ по «вхождению» в мир искусства.", "short": "10 СОВЕТОВ по «вхождению» в мир искусства.", "topic": "Творчество, креативность и практика / Теория и философия искусства", "detail": "Десять советов для знакомства с искусством: насмотренность, открытость новому, собственная точка входа, общение и практика посещения музеев.", "image": null, "url": "./articles/10-cd0930e2.html"}, {"postId": "blog-1e9918a62febdd37", "title": "ИСТОКИ ВООБРАЖЕНИЯ", "short": "ИСТОКИ ВООБРАЖЕНИЯ", "topic": "Человек, культура, общество / Мышление, познание, когнитивность", "detail": "Авторское эссе о воображении, реальности и мифе: кружок Эранос, Жильбер Дюран и разные способы понимать мир через искусство.", "image": "./articles/assets/first-stage/0a746dd55f6e121c2dc4a0653e9a4bc124fadb9ef3c0a326712ca707a668b44d.jpg", "url": "./articles/blog-1e9918a62febdd37.html"}, {"postId": "blog-54a72611590df765", "title": "МИР МЕНЯЕТСЯ. А ЧЕЛОВЕК?", "short": "МИР МЕНЯЕТСЯ. А ЧЕЛОВЕК?", "topic": "Человек, культура, общество / Искусственный интеллект, ai, нейросети", "detail": "Размышления об ожиданиях от ИИ, исследованиях Anthropic и собственном опыте: как новые возможности меняют деятельность и самого человека.", "image": "./articles/assets/first-stage/d8295a0b83d7be59c93354ef3aa6238356c8c63af51b3a58a3f59c7cf20d01f1.png", "url": "./articles/blog-54a72611590df765.html"}, {"postId": "blog-c4386885939d3e26", "title": "ВОСПРИЯТИЕ ИСКУССТВА", "short": "ВОСПРИЯТИЕ ИСКУССТВА", "topic": "Теория и философия искусства", "detail": "Восприятие искусства как переживаемый опыт: габитус, изменение картины мира и возможность выйти за пределы привычного понимания.", "image": "./articles/assets/first-stage/e68dc5aedb523b6895877c5359dd6f70f9b636ff1e7abd2335c18ca07a535efd.jpg", "url": "./articles/blog-c4386885939d3e26.html"}, {"postId": "blog-8288aa0358c39fe4", "title": "ЗООПАРК. СЕРИЯ «ДЕТСКАЯ»", "short": "ЗООПАРК. СЕРИЯ «ДЕТСКАЯ»", "topic": "Арт-галерея Гардари", "detail": "«Зоопарк» из серии «Детская»: композиция из художественного стекла, 30 × 30 см. Общий вид работы и описание техники фьюзинга.", "image": "./articles/assets/first-stage/17744fd42394a0b1e7191f7303be0ac76039b0586fdc4d63080775ba038a23f7.jpg", "url": "./articles/blog-8288aa0358c39fe4.html"}, {"postId": "blog-d56165b371d16d81", "title": "БАЛАНС ПОВЕДЕНИЯ", "short": "БАЛАНС ПОВЕДЕНИЯ", "topic": "Человек, культура, общество", "detail": "«Баланс поведения» — авторская модель: статус, польза и потенциал в отношениях, когнитивные искажения и различие прагматики и этики.", "image": "./articles/assets/first-stage/c3be59e3baa4f93c8f3a8349d5ab4b2c6434475e37aec7813819ea95469bb5f3.jpg", "url": "./articles/blog-d56165b371d16d81.html"}, {"postId": "blog-938182e0bc3bfde2", "title": "ЧТО ТАКОЕ КУЛЬТУРНЫЙ КАПИТАЛ?", "short": "ЧТО ТАКОЕ КУЛЬТУРНЫЙ КАПИТАЛ?", "topic": "Человек, культура, общество / Мышление, познание, когнитивность", "detail": "Культурный капитал и габитус в теории Пьера Бурдьё: образование, искусство, творчество и их роль в изменении человеческих возможностей.", "image": "./articles/assets/first-stage/b4a0a76ae778a7bef5bc2664a40b1de5335210cffa61bf1ed05e6629158ee17d.jpg", "url": "./articles/blog-938182e0bc3bfde2.html"}, {"postId": "blog-e76a689711b388b7", "title": "РУССКИЙ АВАНГАРД. Очерк N4. КРИЗИС БЕЗОБРАЗИЯ.", "short": "РУССКИЙ АВАНГАРД. Очерк N4. КРИЗИС БЕЗОБРАЗИЯ.", "topic": "Заметки и истории о художниках / Теория и философия искусства", "detail": "Четвёртый очерк о русском авангарде: Михаил Лифшиц, «Кризис безобразия» и вопрос об ответственности художественного новаторства.", "image": "./articles/assets/first-stage/e33ce8e85e67b130d99bbb5294d2c668c46e4449a953b1f12b5166ab2fe8e132.jpg", "url": "./articles/n4-11b388b7.html"}, {"postId": "blog-f012b691a4774ac2", "title": "Русский авангард. Очерк №5. Ларионов и Гончарова", "short": "Русский авангард. Очерк №5. Ларионов и Гончарова", "topic": "Заметки и истории о художниках", "detail": "Пятый очерк о русском авангарде: Михаил Ларионов и Наталья Гончарова, их творческий союз, живопись и работа для театра. Две части очерка.", "image": "./articles/assets/first-stage/a2e2d3b05605872d04d3a38ca781cb8682cf59be7cd111b7d9e81c69a13bed49.jpg", "url": "./articles/5-a4774ac2.html"}, {"postId": "blog-b2abaaf68714b4db", "title": "Знакомство с Рустамом Хамдамовым", "short": "Знакомство с Рустамом Хамдамовым", "topic": "Человек, культура, общество", "detail": "Знакомство с Рустамом Хамдамовым — режиссёром и художником. Личные впечатления, рассказ о творческой судьбе и иллюстрации.", "image": "./articles/assets/first-stage/5c3dc863bfada31db7f29e809cfa4c613cade8f8de0da9b4667177f74337b265.jpg", "url": "./articles/blog-b2abaaf68714b4db.html"}, {"postId": "blog-e6243a6226849461", "title": "ДЖОРДЖИО ДЕ КИРИКО", "short": "ДЖОРДЖИО ДЕ КИРИКО", "topic": "Заметки и истории о художниках", "detail": "Очерк о Джорджо де Кирико: метафизическая живопись, перемены в творчестве и непростая судьба художника. Иллюстрации и портреты.", "image": "./articles/assets/first-stage/d5775b3933496d144a788f41c2ecd8f72d12de0aeb4c6c3ad58751fdc2d71abc.jpg", "url": "./articles/blog-e6243a6226849461.html"}, {"postId": "blog-e923371bd24a9ea2", "title": "РИСУНКИ НИКОЛАЯ БЛОХИНА", "short": "РИСУНКИ НИКОЛАЯ БЛОХИНА", "topic": "Заметки и истории о художниках", "detail": "Рисунки Николая Блохина, академическая школа и свобода художественного языка. Подборка портретов, фигур и жанровых рисунков.", "image": "./articles/assets/first-stage/5c5072553ee1b34921547484e779857100fc160b9b863a570e841c9b2cb3aa36.jpg", "url": "./articles/blog-e923371bd24a9ea2.html"}, {"postId": "blog-6e55e83fcbb94c6f", "title": "Выставка Павла Пепперштейна в музее «Гараж»", "short": "Выставка Павла Пепперштейна в музее «Гараж»", "topic": "Выставки и художественная среда", "detail": "Фотозаметка с выставки Павла Пепперштейна в музее «Гараж»: экспозиция, графика и живописные работы.", "image": "./articles/assets/first-stage/a90e81acf98925f4fb727d4f6b29164a8e487e1704deb54f01131b038db3c09e.jpg", "url": "./articles/blog-6e55e83fcbb94c6f.html"}, {"postId": "blog-619593ad6b6e106d", "title": "Премьера оперы «Чёрный квадрат»", "short": "Премьера оперы «Чёрный квадрат»", "topic": "Выставки и художественная среда", "detail": "Фотозаметка с премьеры оперы «Чёрный квадрат»: сцена, участники и фрагменты представления.", "image": "./articles/assets/first-stage/314ef5e7a0e9871cd0059dba970c2157f83bed16bec84785b33dc55358f6c6ed.jpg", "url": "./articles/blog-619593ad6b6e106d.html"}, {"postId": "blog-a00f421f8344cae2", "title": "ВЛАДИМИР. УСПЕНСКИЙ СОБОР", "short": "ВЛАДИМИР. УСПЕНСКИЙ СОБОР", "topic": "Заметки и истории о художниках", "detail": "Фотозаметка об Успенском соборе во Владимире: общий вид, белокаменная архитектура и золотые купола.", "image": "./articles/assets/first-stage/3637546c7cb6b2b3252a2197c56430469ebe7165990173618023e0332d44f841.jpg", "url": "./articles/blog-a00f421f8344cae2.html"}, {"postId": "blog-0de8ab9b5d402e08", "title": "ВОЛХВ", "short": "ВОЛХВ", "topic": "Арт-галерея Гардари", "detail": "«Волхв» из серии «12 мудрецов»: уголь на холсте, 100 × 100 см. Общий вид произведения и переход в Галерею.", "image": "./articles/assets/first-stage/c231b55acab1e0707b69d2d469b57c7d3901927a882b8dd1e47562e9ece842ae.jpg", "url": "./articles/blog-0de8ab9b5d402e08.html"}, {"postId": "blog-58e20e68123752d6", "title": "РАЗУМ", "short": "РАЗУМ", "topic": "Человек, культура, общество / Мышление, познание, когнитивность / Творчество, креативность и практика / Арт-галерея Гардари", "detail": "«Разум» из серии «Эволюция»: произведение 2023 года, смешанная техника, 70 × 70 см. Авторское эссе, общий вид и детали.", "image": "./articles/assets/first-stage/4d78eb239f0f2a586bfda98fffd5f91f71ed38715b373920429143db6da94ea2.jpg", "url": "./articles/blog-58e20e68123752d6.html"}, {"postId": "blog-1418b050f3b9d8a4", "title": "ДЕТИ СОЛНЦА", "short": "ДЕТИ СОЛНЦА", "topic": "Арт-галерея Гардари", "detail": "«Дети солнца» из серии «Логос»: произведение 2021 года, смешанная техника, 160 × 90 см. Авторский текст, общий вид и фактурные детали.", "image": "./articles/assets/first-stage/5a06ae17fac93fe68ea6b54bce346cb3046d671e0673a2a64f1955203c1ce34f.jpg", "url": "./articles/blog-1418b050f3b9d8a4.html"}]);
const tabShape = 'M 46.79072656342929 0.5 H 66.666667 A 11.5 11.5 0 0 1 78.166667 12 V 66.666667 A 11.5 11.5 0 0 1 66.666667 78.166667 H 12 A 11.5 11.5 0 0 1 0.5 66.666667 V 46.79072656342929 A 11.5 11.5 0 0 1 12.767732953990608 35.316381871406264 A 21.181818156064274 21.181818156064274 0 0 0 35.316381871406264 12.767732953990608 A 11.5 11.5 0 0 1 46.79072656342929 0.5 Z';
const escapeHtml = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

function buildNavigation() {
 const items=[{label:'Главная',href:'./index.html#top'},{label:'Темы',href:'./topics/'},{label:'···',href:null},{label:'Клуб',href:'#club'}];
 const nav=document.getElementById('matrix-nav');if(!nav||nav.childElementCount)return;
 items.forEach((item,index)=>{const link=document.createElement(item.href?'a':'span');if(item.href)link.href=item.href;link.className='section-tab'+(item.href?'':' is-reserved');link.setAttribute('aria-label',item.href?item.label:'Другая страница, название пока не выбрано');link.innerHTML='<svg class="tab-outline" viewBox="0 0 78.666667 78.666667" aria-hidden="true"><path d="'+tabShape+'"/></svg><span class="tab-number">'+String(index+1).padStart(2,'0')+'</span><span class="tab-name">'+escapeHtml(item.label)+'</span>';nav.append(link);});
}

/* The footer shares the Gallery menu contour and disc-only hover response,
   but uses an outlined, transparent treatment on the graphite surface. */
function buildFooterResources() {
  const nav = document.getElementById('footer-resource-nav');
  if (!nav || nav.childElementCount) return;
  const resources = [
    { label:'Арт-галерея', lines:['АРТ','ГАЛЕРЕЯ'], href:'https://dgardari-ai.github.io/gardari-gallery-preview/' },
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
  accordionArticles.forEach((item,index)=>{
    const panel = document.createElement('article');
    panel.className = 'accordion-panel' + (index === 0 ? ' is-open' : '');
    panel.innerHTML = [
      '<a class="panel-activate" href="',item.url,
      '"',isInternalArticle(item.url)?'':' target="_blank" rel="noopener noreferrer"',' aria-label="Читать статью: ',escapeHtml(item.title),'">',
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
    label.textContent='НАЙДЕНО: '+found.length+' · ПОИСК ПО '+articles.length+' МАТЕРИАЛАМ';
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
      if(!isInternalArticle(a.url)){link.target='_blank';link.rel='noopener noreferrer';}
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
    if(e.key==='Escape'){close();input.focus();}
    if(e.key==='ArrowDown'&&!list.hidden){list.querySelector('.search-result')?.focus();e.preventDefault();}
  });
  form.addEventListener('submit',e=>{e.preventDefault();show();list.querySelector('.search-result')?.focus();});
  document.addEventListener('pointerdown',e=>{if(!form.contains(e.target))close();});
  form.addEventListener('keydown',e=>{if(e.key==='Escape'){e.preventDefault();close();input.focus();}});
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
  const aside = dock?.querySelector('.links-column') || document.querySelector('.links-column');
  if (!aside) return;
  const mobile = window.matchMedia('(max-width: 680px)');
  function update() {
    // CSS sticky is bounded by the reading row. Scrolling back restores it
    // naturally; overflow belongs to the aside, not to the page scroll.
    aside.classList.remove('is-docked', 'is-footer-covered');
    aside.inert = false;
    aside.style.removeProperty('left');
    aside.style.removeProperty('width');
    dock?.style.removeProperty('min-height');
    aside.classList.toggle('is-overflowing', !mobile.matches && aside.scrollHeight > aside.clientHeight + 1);
  }
  update();
  new ResizeObserver(update).observe(aside);
  window.addEventListener('resize', update);
}


function initReadingFooterAccordion() {
  const root = document.getElementById('reading-footer-accordion');
  if (!root) return;
  const folds = [...root.querySelectorAll('details.footer-fold')];
  const summaries = folds.map(fold => fold.querySelector('summary'));
  folds.forEach((fold, index) => {
    fold.addEventListener('toggle', () => {
      fold.classList.toggle('is-open', fold.open);
      fold.querySelector('.footer-fold-mark').textContent = fold.open ? '−' : '+';
      if (fold.open) folds.forEach(other => { if (other !== fold) other.open = false; });
    });
    summaries[index].addEventListener('keydown', event => {
      let target;
      if (event.key === 'ArrowDown') target = (index + 1) % summaries.length;
      else if (event.key === 'ArrowUp') target = (index + summaries.length - 1) % summaries.length;
      else if (event.key === 'Home') target = 0;
      else if (event.key === 'End') target = summaries.length - 1;
      else return;
      event.preventDefault();
      summaries[target].focus();
    });
  });
}


function initArticleShare() {
  const button = document.getElementById('share-article');
  const feedback = document.getElementById('share-feedback');
  if (!button || !feedback) return;
  button.addEventListener('click',async()=>{
    const link = new URL(button.dataset.articleUrl || location.href, location.href);
    link.hash = '';
    link.search = '';
    if (navigator.share) {
      try {
        await navigator.share({
          title: document.querySelector('.main-article h1')?.innerText.replace(/\s+/g,' ').trim() || document.title,
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
initSearch();
initDateTicker();
initAsideDock();
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
