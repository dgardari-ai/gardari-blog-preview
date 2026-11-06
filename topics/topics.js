
'use strict';
// Demonstration content only. No imports, requests or bindings to the publication corpus.
const categories = [{"id": "K01", "title": "Человек, культура, общество", "description": "Как человек живёт среди других: культура, ценности, идентичность и общественные изменения.", "count": 8}, {"id": "K02", "title": "Мышление, познание, когнитивность", "description": "Как мы воспринимаем, понимаем, рассуждаем и строим картину мира.", "count": 5}, {"id": "K03", "title": "Творчество, креативность и практика", "description": "Как возникают замыслы и превращаются в сделанное: методы, опыт и творческая работа.", "count": 3}, {"id": "K04", "title": "Искусственный интеллект, ai, нейросети", "description": "Возможности и ограничения ИИ, опыт работы с ним и его влияние на человека и творчество.", "count": 1}, {"id": "K05", "title": "Гардарики, истории из жизни", "description": "Личные истории, встречи, наблюдения и события, из которых складывается прожитый опыт.", "count": 0}, {"id": "K06", "title": "Заметки и истории о художниках", "description": "Художники, их судьбы, произведения и способы видеть мир.", "count": 7}, {"id": "K07", "title": "Теория и философия искусства", "description": "Как устроено искусство, как мы его воспринимаем и какие вопросы оно ставит.", "count": 5}, {"id": "K08", "title": "Выставки и художественная среда", "description": "Выставки, музеи, события и наблюдения за жизнью художественного мира.", "count": 3}, {"id": "K09", "title": "Арт-галерея Гардари", "description": "Произведения, истории их создания и авторские комментарии.", "count": 4}];
// The names identify the proposed cycle catalog; descriptions and cards below are mockup copy.
const cycles = [{"id": "DYAGILEV", "title": "Дягилев. История великого противостояния", "description": "Семь очерков о Дягилеве.", "category": "K06", "long": "Семь очерков о Дягилеве.", "count": 0}, {"id": "FORCE-OR-METHOD", "title": "Сила или метод", "description": "Две выбранные части о силе и методе.", "category": "K03", "long": "Две выбранные части о силе и методе.", "count": 0}, {"id": "LONDON-SCHOOL", "title": "Лондонская школа", "description": "Пять очерков о художниках Лондонской школы.", "category": "K06", "long": "Пять очерков о художниках Лондонской школы.", "count": 0}, {"id": "RUSSIAN-AVANTGARDE", "title": "Русский авангард", "description": "Пять очерков о русском авангарде. Пятый очерк состоит из двух частей.", "category": "K06", "long": "Пять очерков о русском авангарде. Пятый очерк состоит из двух частей.", "count": 2}, {"id": "RUSSIAN-CULTURAL-CODE", "title": "Русский культурный код", "description": "Пять очерков о русском культурном коде.", "category": "K01", "long": "Пять очерков о русском культурном коде.", "count": 0}, {"id": "SOVIET-NONFORMAL", "title": "Советское неформальное искусство", "description": "Одиннадцать частей. Последняя обозначена автором как окончание.", "category": "K06", "long": "Одиннадцать частей. Последняя обозначена автором как окончание.", "count": 0}, {"id": "WHAT-IS-CREATIVITY", "title": "Что есть творчество?", "description": "Беседы о творчестве.", "category": "K03", "long": "Беседы о творчестве.", "count": 0}];
const exampleTitles = [
 ['Как складывается общее представление о мире','Человек среди привычных правил','Культура повседневного выбора','Что меняется вместе с обществом'],
 ['Как мы замечаем то, на что смотрим','Внимание и привычный ход мысли','Что помогает увидеть иначе','От впечатления к пониманию'],
 ['От замысла к первому действию','Когда привычный приём перестаёт работать','Как найти собственный способ','Практика и неожиданный результат'],
 ['Разговор с инструментом, который отвечает','Где начинается самостоятельное решение','Вопросы, с которыми мы приходим к нейросети','Опыт работы и новые возможности'],
 ['Одна встреча по дороге домой','Небольшое событие с продолжением','История, которая вспоминается иначе','Заметки после долгого разговора'],
 ['Художник и его способ смотреть','Решение, изменившее работу','История одного художественного поиска','Люди, встречи и мастерская'],
 ['Почему произведение оставляет вопрос','Как возникает художественный смысл','Между впечатлением и суждением','Язык искусства и опыт зрителя'],
 ['После посещения выставки','Что происходит между работой и зрителем','Музей как место встречи','Художественная среда в движении'],
 ['Замысел и работа над произведением','История одного образа','Наблюдение в мастерской','Как меняется взгляд на собственную работу']
];
const view = document.querySelector('#view');
const aside = document.querySelector('#topics-aside');
const dialog = document.querySelector('#demo-dialog');
const shape = 'M 46.79072656342929 0.5 H 66.666667 A 11.5 11.5 0 0 1 78.166667 12 V 66.666667 A 11.5 11.5 0 0 1 66.666667 78.166667 H 12 A 11.5 11.5 0 0 1 0.5 66.666667 V 46.79072656342929 A 11.5 11.5 0 0 1 12.767732953990608 35.316381871406264 A 21.181818156064274 21.181818156064274 0 0 0 35.316381871406264 12.767732953990608 A 11.5 11.5 0 0 1 46.79072656342929 0.5 Z';
const escapeHtml = value => String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const categoryUrl = id => '?category='+encodeURIComponent(id);
const cycleUrl = id => '?cycle='+encodeURIComponent(id);
const link = (url,label,description='') => '<a class="simple-link" href="'+escapeHtml(url)+'" data-route><span>'+escapeHtml(label)+'</span>'+(description?'<small>'+escapeHtml(description)+'</small>':'')+'</a>';
const block = (label,number,body,extra='') => '<section class="sidebar-block '+extra+'"><div class="sidebar-kicker">'+label+'<span>'+number+'</span></div>'+body+'</section>';
// Local fixtures supply only metadata for the sidebar prototype.
const archiveItems = [{"id": "blog-cc78fdddae9c19ac", "title": "КАК ПРАВИЛЬНО СМОТРЕТЬ КАРТИНЫ?", "description": "Иммерсивное смотрение картины: расстояние, детали, композиция и периферийное зрение.", "date": "2018-06-29", "url": "../articles/kak-smotret-kartiny.html", "cover": {"src": "../articles/assets/paintings.jpg", "width": 780, "height": 780, "alt": "Посетители музея перед большой абстрактной картиной"}, "categoryIds": ["K07", "K08"], "categoryId": "K07", "cycleIds": [], "cycleId": null, "cycleOrder": null, "index": 0, "label": ""}, {"id": "blog-03589706ef46769d", "title": "ПЯТЬ УРОВНЕЙ «Я».", "description": "Размышления об ответственности, поиске своего дела и становлении мировоззрения. Авторская модель пяти уровней «Я».", "date": "2024-03-31", "url": "../articles/pyat-urovney-ya.html", "cover": {"src": "../articles/assets/levels.jpg", "width": 1680, "height": 1680, "alt": "Чёрно-белый портрет автора со сложенными перед собой руками"}, "categoryIds": ["K01", "K02"], "categoryId": "K01", "cycleIds": [], "cycleId": null, "cycleOrder": null, "index": 1, "label": ""}, {"id": "blog-6ab9b0a853909785", "title": "ГАЛЕРЕЯ БРЕРА", "description": "Фотозаметки из миланской Галереи Брера: восемь фотографий искусства предвозрождения.", "date": "2018-07-09", "url": "../articles/galereya-brera.html", "cover": {"src": "../articles/assets/article-tests/g77pn30lp1/00.jpg", "width": 780, "height": 780, "alt": "Галерея Брера: Живописная композиция с бородатым святым в богатой одежде", "gallery_index": 0}, "categoryIds": ["K06"], "categoryId": "K06", "cycleIds": [], "cycleId": null, "cycleOrder": null, "index": 2, "label": ""}, {"id": "blog-4c951a5900931ced", "title": "ФРИДЕНСРАЙХ ХУНДЕРТВАССЕР", "description": "Свобода, живопись и архитектура Фриденсрайха Хундертвассера. Очерк с десятью фотографиями.", "date": "2018-05-03", "url": "../articles/hundertwasser.html", "cover": {"src": "../articles/assets/article-tests/k9lua9c1b1/00.jpg", "width": 780, "height": 780, "alt": "К очерку о Хундертвассере: Художник с седой бородой держит лист с рукописным текстом", "gallery_index": 9}, "categoryIds": ["K06"], "categoryId": "K06", "cycleIds": [], "cycleId": null, "cycleOrder": null, "index": 3, "label": ""}, {"id": "blog-78f5df1a9f291521", "title": "ПОНИМАНИЕ СОВРЕМЕННОГО ИСКУССТВА", "description": "Как смотреть на современное искусство без предубеждения: живое восприятие, ресентимент и уважение к непонятности.", "date": "2018-07-26", "url": "../articles/ponimanie-sovremennogo-iskusstva.html", "cover": {"src": "../articles/assets/article-tests/aoxeinend1/00.jpg", "width": 780, "height": 780, "alt": "Скульптурная композиция из шлангов, колёс и металлических деталей"}, "categoryIds": ["K07"], "categoryId": "K07", "cycleIds": [], "cycleId": null, "cycleOrder": null, "index": 4, "label": ""}, {"id": "blog-157d35351796cde6", "title": "7 СОВЕТОВ НАЧИНАЮЩЕМУ ХУДОЖНИКУ", "description": "Начало творческого пути: самостоятельность, учёба, материалы и отношение к советам мастеров.", "date": "2022-04-05", "url": "../articles/7-sovetov-hudozhniku.html", "cover": {"src": "../articles/assets/article-tests/ts6i2oxbk1/00.jpg", "width": 780, "height": 780, "alt": "Чёрно-белый портрет автора с поднятыми перед лицом руками"}, "categoryIds": ["K03"], "categoryId": "K03", "cycleIds": [], "cycleId": null, "cycleOrder": null, "index": 5, "label": ""}, {"id": "blog-72d45b926e15ffc6", "title": "МЫШЛЕНИЕ ВО МНОЖЕСТВЕННОМ ЧИСЛЕ", "description": "Шесть исторических форм мышления, их сосуществование, разные основания достоверности и вопросы, которые обостряет искусственный интеллект.", "date": "2026-10-22", "url": "../articles/blog-72d45b926e15ffc6.html", "cover": null, "categoryIds": ["K02"], "categoryId": "K02", "cycleIds": [], "cycleId": null, "cycleOrder": null, "index": 6, "label": ""}, {"id": "blog-a0af7ebf813d25e9", "title": "ПРАВДА, ВОЛЯ И АВОСЬ", "description": "Авторская философско-поэтическая модель: правда, воля и авось как многозначные мотивы русской культуры и личного выбора.", "date": "2025-04-17", "url": "../articles/blog-a0af7ebf813d25e9.html", "cover": null, "categoryIds": ["K01"], "categoryId": "K01", "cycleIds": [], "cycleId": null, "cycleOrder": null, "index": 7, "label": ""}, {"id": "blog-f0d2d046cd0930e2", "title": "10 СОВЕТОВ по «вхождению» в мир искусства.", "description": "Десять советов для знакомства с искусством: насмотренность, открытость новому, собственная точка входа, общение и практика посещения музеев.", "date": "2018-11-19", "url": "../articles/10-cd0930e2.html", "cover": null, "categoryIds": ["K03", "K07"], "categoryId": "K03", "cycleIds": [], "cycleId": null, "cycleOrder": null, "index": 8, "label": ""}, {"id": "blog-1e9918a62febdd37", "title": "ИСТОКИ ВООБРАЖЕНИЯ", "description": "Авторское эссе о воображении, реальности и мифе: кружок Эранос, Жильбер Дюран и разные способы понимать мир через искусство.", "date": "2020-03-27", "url": "../articles/blog-1e9918a62febdd37.html", "cover": {"src": "../articles/assets/first-stage/0a746dd55f6e121c2dc4a0653e9a4bc124fadb9ef3c0a326712ca707a668b44d.jpg", "width": 1680, "height": 1680, "alt": "Фрагмент живописной композиции с геометрическими фигурами и цветовыми плоскостями"}, "categoryIds": ["K01", "K02"], "categoryId": "K01", "cycleIds": [], "cycleId": null, "cycleOrder": null, "index": 9, "label": ""}, {"id": "blog-54a72611590df765", "title": "МИР МЕНЯЕТСЯ. А ЧЕЛОВЕК?", "description": "Размышления об ожиданиях от ИИ, исследованиях Anthropic и собственном опыте: как новые возможности меняют деятельность и самого человека.", "date": "2026-10-18", "url": "../articles/blog-54a72611590df765.html", "cover": {"src": "../articles/assets/first-stage/d8295a0b83d7be59c93354ef3aa6238356c8c63af51b3a58a3f59c7cf20d01f1.png", "width": 1080, "height": 1320, "alt": "Инфографика «Разрыв ожиданий»: сравнение ответов сотрудников Anthropic и жителей США о научных возможностях ИИ"}, "categoryIds": ["K01", "K04"], "categoryId": "K01", "cycleIds": [], "cycleId": null, "cycleOrder": null, "index": 10, "label": ""}, {"id": "blog-c4386885939d3e26", "title": "ВОСПРИЯТИЕ ИСКУССТВА", "description": "Восприятие искусства как переживаемый опыт: габитус, изменение картины мира и возможность выйти за пределы привычного понимания.", "date": "2021-09-11", "url": "../articles/blog-c4386885939d3e26.html", "cover": {"src": "../articles/assets/first-stage/e68dc5aedb523b6895877c5359dd6f70f9b636ff1e7abd2335c18ca07a535efd.jpg", "width": 1427, "height": 1427, "alt": "Мужчина с бокалом сидит за столом с художественными материалами"}, "categoryIds": ["K07"], "categoryId": "K07", "cycleIds": [], "cycleId": null, "cycleOrder": null, "index": 11, "label": ""}, {"id": "blog-8288aa0358c39fe4", "title": "ЗООПАРК. СЕРИЯ «ДЕТСКАЯ»", "description": "«Зоопарк» из серии «Детская»: композиция из художественного стекла, 30 × 30 см. Общий вид работы и описание техники фьюзинга.", "date": "2020-01-19", "url": "../articles/blog-8288aa0358c39fe4.html", "cover": {"src": "../articles/assets/first-stage/17744fd42394a0b1e7191f7303be0ac76039b0586fdc4d63080775ba038a23f7.jpg", "width": 1440, "height": 1440, "alt": "Композиция из стекла с яркими условными фигурами животных на тёмном фоне", "gallery_index": 0}, "categoryIds": ["K09"], "categoryId": "K09", "cycleIds": [], "cycleId": null, "cycleOrder": null, "index": 12, "label": ""}, {"id": "blog-d56165b371d16d81", "title": "БАЛАНС ПОВЕДЕНИЯ", "description": "«Баланс поведения» — авторская модель: статус, польза и потенциал в отношениях, когнитивные искажения и различие прагматики и этики.", "date": "2024-12-21", "url": "../articles/blog-d56165b371d16d81.html", "cover": {"src": "../articles/assets/first-stage/c3be59e3baa4f93c8f3a8349d5ab4b2c6434475e37aec7813819ea95469bb5f3.jpg", "width": 1440, "height": 1440, "alt": "Схема баланса поведения: оси статуса, пользы и потенциала, восемь секторов взаимодействия", "gallery_index": 0}, "categoryIds": ["K01"], "categoryId": "K01", "cycleIds": [], "cycleId": null, "cycleOrder": null, "index": 13, "label": ""}, {"id": "blog-938182e0bc3bfde2", "title": "ЧТО ТАКОЕ КУЛЬТУРНЫЙ КАПИТАЛ?", "description": "Культурный капитал и габитус в теории Пьера Бурдьё: образование, искусство, творчество и их роль в изменении человеческих возможностей.", "date": "2020-03-19", "url": "../articles/blog-938182e0bc3bfde2.html", "cover": {"src": "../articles/assets/first-stage/b4a0a76ae778a7bef5bc2664a40b1de5335210cffa61bf1ed05e6629158ee17d.jpg", "width": 780, "height": 780, "alt": "Посетительница перед проекцией портрета и картиной в музейном пространстве"}, "categoryIds": ["K01", "K02"], "categoryId": "K01", "cycleIds": [], "cycleId": null, "cycleOrder": null, "index": 14, "label": ""}, {"id": "blog-e76a689711b388b7", "title": "РУССКИЙ АВАНГАРД. Очерк N4. КРИЗИС БЕЗОБРАЗИЯ.", "description": "Четвёртый очерк о русском авангарде: Михаил Лифшиц, «Кризис безобразия» и вопрос об ответственности художественного новаторства.", "date": "2019-10-19", "url": "../articles/n4-11b388b7.html", "cover": {"src": "../articles/assets/first-stage/e33ce8e85e67b130d99bbb5294d2c668c46e4449a953b1f12b5166ab2fe8e132.jpg", "width": 1036, "height": 1295, "alt": "Михаил Ларионов. Женский портрет с надписью «Весна» и датой 1912"}, "categoryIds": ["K06", "K07"], "categoryId": "K06", "cycleIds": ["RUSSIAN-AVANTGARDE"], "cycleId": "RUSSIAN-AVANTGARDE", "cycleOrder": 4, "index": 3, "label": "ЧАСТЬ 04"}, {"id": "blog-f012b691a4774ac2", "title": "Русский авангард. Очерк №5. Ларионов и Гончарова", "description": "Пятый очерк о русском авангарде: Михаил Ларионов и Наталья Гончарова, их творческий союз, живопись и работа для театра. Две части очерка.", "date": "2019-10-21", "url": "../articles/5-a4774ac2.html", "cover": {"src": "../articles/assets/first-stage/a2e2d3b05605872d04d3a38ca781cb8682cf59be7cd111b7d9e81c69a13bed49.jpg", "width": 1200, "height": 1200, "alt": "Михаил Ларионов. Павлин с раскрытым хвостом на фоне синих и зелёных листьев"}, "categoryIds": ["K06"], "categoryId": "K06", "cycleIds": ["RUSSIAN-AVANTGARDE"], "cycleId": "RUSSIAN-AVANTGARDE", "cycleOrder": 5, "index": 4, "label": "ЧАСТЬ 05"}, {"id": "blog-b2abaaf68714b4db", "title": "Знакомство с Рустамом Хамдамовым", "description": "Знакомство с Рустамом Хамдамовым — режиссёром и художником. Личные впечатления, рассказ о творческой судьбе и иллюстрации.", "date": "2018-04-05", "url": "../articles/blog-b2abaaf68714b4db.html", "cover": {"src": "../articles/assets/first-stage/5c3dc863bfada31db7f29e809cfa4c613cade8f8de0da9b4667177f74337b265.jpg", "width": 518, "height": 518, "alt": "К очерку о Рустаме Хамдамове: Чёрно-белый портрет мужчины в очках с поднятой рукой"}, "categoryIds": ["K01"], "categoryId": "K01", "cycleIds": [], "cycleId": null, "cycleOrder": null, "index": 17, "label": ""}, {"id": "blog-e6243a6226849461", "title": "ДЖОРДЖИО ДЕ КИРИКО", "description": "Очерк о Джорджо де Кирико: метафизическая живопись, перемены в творчестве и непростая судьба художника. Иллюстрации и портреты.", "date": "2020-03-28", "url": "../articles/blog-e6243a6226849461.html", "cover": {"src": "../articles/assets/first-stage/d5775b3933496d144a788f41c2ecd8f72d12de0aeb4c6c3ad58751fdc2d71abc.jpg", "width": 780, "height": 780, "alt": "К очерку о Джорджо де Кирико: Античная голова, оранжевая перчатка и зелёный шар"}, "categoryIds": ["K06"], "categoryId": "K06", "cycleIds": [], "cycleId": null, "cycleOrder": null, "index": 18, "label": ""}, {"id": "blog-e923371bd24a9ea2", "title": "РИСУНКИ НИКОЛАЯ БЛОХИНА", "description": "Рисунки Николая Блохина, академическая школа и свобода художественного языка. Подборка портретов, фигур и жанровых рисунков.", "date": "2020-03-31", "url": "../articles/blog-e923371bd24a9ea2.html", "cover": {"src": "../articles/assets/first-stage/5c5072553ee1b34921547484e779857100fc160b9b863a570e841c9b2cb3aa36.jpg", "width": 780, "height": 780, "alt": "Рисунок Николая Блохина: Мужской портрет с растрёпанными волосами и взглядом в сторону"}, "categoryIds": ["K06"], "categoryId": "K06", "cycleIds": [], "cycleId": null, "cycleOrder": null, "index": 19, "label": ""}, {"id": "blog-6e55e83fcbb94c6f", "title": "Выставка Павла Пепперштейна в музее «Гараж»", "description": "Фотозаметка с выставки Павла Пепперштейна в музее «Гараж»: экспозиция, графика и живописные работы.", "date": "2019-03-31", "url": "../articles/blog-6e55e83fcbb94c6f.html", "cover": {"src": "../articles/assets/first-stage/a90e81acf98925f4fb727d4f6b29164a8e487e1704deb54f01131b038db3c09e.jpg", "width": 599, "height": 800, "alt": "Выставка Павла Пепперштейна в «Гараже»: Зеркальное отражение посетителя поверх текстов экспозиции"}, "categoryIds": ["K08"], "categoryId": "K08", "cycleIds": [], "cycleId": null, "cycleOrder": null, "index": 20, "label": ""}, {"id": "blog-619593ad6b6e106d", "title": "Премьера оперы «Чёрный квадрат»", "description": "Фотозаметка с премьеры оперы «Чёрный квадрат»: сцена, участники и фрагменты представления.", "date": "2018-11-29", "url": "../articles/blog-619593ad6b6e106d.html", "cover": {"src": "../articles/assets/first-stage/314ef5e7a0e9871cd0059dba970c2157f83bed16bec84785b33dc55358f6c6ed.jpg", "width": 449, "height": 800, "alt": "Премьера оперы «Чёрный квадрат»: Исполнитель на переднем плане и группа участников позади него"}, "categoryIds": ["K08"], "categoryId": "K08", "cycleIds": [], "cycleId": null, "cycleOrder": null, "index": 21, "label": ""}, {"id": "blog-a00f421f8344cae2", "title": "ВЛАДИМИР. УСПЕНСКИЙ СОБОР", "description": "Фотозаметка об Успенском соборе во Владимире: общий вид, белокаменная архитектура и золотые купола.", "date": "2019-06-16", "url": "../articles/blog-a00f421f8344cae2.html", "cover": {"src": "../articles/assets/first-stage/3637546c7cb6b2b3252a2197c56430469ebe7165990173618023e0332d44f841.jpg", "width": 1440, "height": 1800, "alt": "Успенский собор во Владимире: Общий вид колокольни и белокаменного собора"}, "categoryIds": ["K06"], "categoryId": "K06", "cycleIds": [], "cycleId": null, "cycleOrder": null, "index": 22, "label": ""}, {"id": "blog-0de8ab9b5d402e08", "title": "ВОЛХВ", "description": "«Волхв» из серии «12 мудрецов»: уголь на холсте, 100 × 100 см. Общий вид произведения и переход в Галерею.", "date": "2023-05-22", "url": "../articles/blog-0de8ab9b5d402e08.html", "cover": {"src": "../articles/assets/first-stage/c231b55acab1e0707b69d2d469b57c7d3901927a882b8dd1e47562e9ece842ae.jpg", "width": 780, "height": 780, "alt": "«Волхв» Дениса Гардари: Обложка: лицо бородатого старца в тёмной раме"}, "categoryIds": ["K09"], "categoryId": "K09", "cycleIds": [], "cycleId": null, "cycleOrder": null, "index": 23, "label": ""}, {"id": "blog-58e20e68123752d6", "title": "РАЗУМ", "description": "«Разум» из серии «Эволюция»: произведение 2023 года, смешанная техника, 70 × 70 см. Авторское эссе, общий вид и детали.", "date": "2023-11-08", "url": "../articles/blog-58e20e68123752d6.html", "cover": {"src": "../articles/assets/first-stage/4d78eb239f0f2a586bfda98fffd5f91f71ed38715b373920429143db6da94ea2.jpg", "width": 1280, "height": 1278, "alt": "«Разум» Дениса Гардари: Обложка: геометрические формы и фактуры в зелёных, жёлтых и фиолетовых тонах"}, "categoryIds": ["K01", "K02", "K03", "K09"], "categoryId": "K01", "cycleIds": [], "cycleId": null, "cycleOrder": null, "index": 24, "label": ""}, {"id": "blog-1418b050f3b9d8a4", "title": "ДЕТИ СОЛНЦА", "description": "«Дети солнца» из серии «Логос»: произведение 2021 года, смешанная техника, 160 × 90 см. Авторский текст, общий вид и фактурные детали.", "date": "2021-03-25", "url": "../articles/blog-1418b050f3b9d8a4.html", "cover": {"src": "../articles/assets/first-stage/5a06ae17fac93fe68ea6b54bce346cb3046d671e0673a2a64f1955203c1ce34f.jpg", "width": 657, "height": 1168, "alt": "«Дети солнца» Дениса Гардари: Обложка: крупная деталь с жёлтым кругом и светлыми складчатыми элементами"}, "categoryIds": ["K09"], "categoryId": "K09", "cycleIds": [], "cycleId": null, "cycleOrder": null, "index": 25, "label": ""}].sort((a,b)=>b.date.localeCompare(a.date)||a.id.localeCompare(b.id));
const archiveIndex = new Map(archiveItems.map(card=>[card.id,card]));
const archiveByDate = new Map();
archiveItems.forEach(card=>{if(!archiveByDate.has(card.date))archiveByDate.set(card.date,[]);archiveByDate.get(card.date).push(card);});
const readerPlace=history.state?.gardariTopics;
let archiveViewMonth = readerPlace?.month || archiveItems[0].date.slice(0,7);
let archiveSelectedDate = readerPlace?.date || null;
const archiveMonthNames=['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'];
const archiveDateLabel = value => new Intl.DateTimeFormat('ru-RU',{day:'numeric',month:'long',year:'numeric',timeZone:'UTC'}).format(new Date(value+'T12:00:00Z'));
function latestPublicationBlock(){
 const items=archiveItems.slice(0,3);
 return block('НОВОЕ В БЛОГЕ','01','<div class="archive-latest-list">'+items.map(card=>'<article class="archive-latest-item"><time datetime="'+card.date+'">'+card.date.split('-').reverse().join('.')+'</time><button type="button" class="archive-feature-title" data-card="'+escapeHtml(card.id)+'">'+escapeHtml(card.title)+'</button></article>').join('')+'</div>','archive-feature');
}
function archiveContext(card){return (card.cycleId?cycles.find(c=>c.id===card.cycleId):categories.find(c=>c.id===card.categoryId)).title;}
function archiveCalendarContent(){
 const [year,month]=archiveViewMonth.split('-').map(Number);
 const years=archiveItems.map(card=>Number(card.date.slice(0,4)));
 const minYear=Math.min(year,...years),maxYear=Math.max(year,...years);
 const yearOptions=Array.from({length:maxYear-minYear+1},(_,i)=>maxYear-i).map(y=>'<option value="'+y+'"'+(y===year?' selected':'')+'>'+y+'</option>').join('');
 const monthOptions=archiveMonthNames.map((label,i)=>'<option value="'+(i+1)+'"'+(i+1===month?' selected':'')+'>'+label+'</option>').join('');
 const first=(new Date(Date.UTC(year,month-1,1)).getUTCDay()+6)%7;
 const dayCount=new Date(Date.UTC(year,month,0)).getUTCDate();
 let days='<span aria-hidden="true"></span>'.repeat(first);
 for(let day=1;day<=dayCount;day++){
  const date=archiveViewMonth+'-'+String(day).padStart(2,'0'),posts=archiveByDate.get(date)||[];
  days+='<button type="button" class="calendar-day'+(posts.length?' has-posts':'')+'" data-archive-date="'+date+'" aria-pressed="'+String(date===archiveSelectedDate)+'" aria-label="'+escapeHtml(archiveDateLabel(date)+'; публикаций: '+posts.length)+'">'+day+'</button>';
 }
 const selected=archiveSelectedDate?archiveByDate.get(archiveSelectedDate)||[]:[];
 const results=archiveSelectedDate?'<h3 class="archive-results-title">'+escapeHtml(archiveDateLabel(archiveSelectedDate))+'</h3>'+(selected.length?selected.map(card=>'<button type="button" class="archive-result" data-card="'+escapeHtml(card.id)+'"><span>'+escapeHtml(card.title)+'</span><small>'+escapeHtml(archiveContext(card))+'</small></button>').join(''):'<p class="archive-empty">В этот день публикаций нет.</p>'):'';
 return '<div class="calendar-header"><button type="button" class="calendar-step" data-archive-step="-1" aria-label="Предыдущий месяц"><svg viewBox="0 0 20 20" aria-hidden="true"><path d="m12 4-6 6 6 6"/></svg></button><select class="calendar-month" data-archive-month aria-label="Месяц публикаций">'+monthOptions+'</select><select class="calendar-year" data-archive-year aria-label="Год публикаций">'+yearOptions+'</select><button type="button" class="calendar-step" data-archive-step="1" aria-label="Следующий месяц"><svg viewBox="0 0 20 20" aria-hidden="true"><path d="m8 4 6 6-6 6"/></svg></button></div><div class="calendar-week" aria-hidden="true">'+['ПН','ВТ','СР','ЧТ','ПТ','СБ','ВС'].map(day=>'<span>'+day+'</span>').join('')+'</div><div class="calendar-days" role="group" aria-label="Выбрать дату публикации">'+days+'</div><p class="calendar-note">Точки — даты публикаций.</p><div class="archive-results" aria-live="polite">'+results+'</div>';
}
function refreshArchiveCalendar(focusSelector){
 const calendar=aside.querySelector('.publication-calendar');
 if(!calendar)return;
 calendar.innerHTML=archiveCalendarContent();saveReaderPlace();
 if(focusSelector)calendar.querySelector(focusSelector)?.focus({preventScroll:true});
}
function stepArchiveMonth(step){
 const [year,month]=archiveViewMonth.split('-').map(Number),next=new Date(Date.UTC(year,month-1+step,1));
 archiveViewMonth=next.getUTCFullYear()+'-'+String(next.getUTCMonth()+1).padStart(2,'0');
 archiveSelectedDate=null;
 refreshArchiveCalendar('[data-archive-step="'+step+'"]');
}

let currentCards = [];
let currentKey = location.search+location.hash;
const scrollPositions = new Map();
try{history.scrollRestoration='manual';}catch{}
function tabContent(label,number){return '<svg class="tab-outline" viewBox="0 0 78.666667 78.666667" aria-hidden="true"><path d="'+shape+'"/></svg><span class="tab-number">'+number+'</span><span class="tab-name">'+label+'</span>';}
function buildHeader(){
 const nav = document.querySelector('#matrix-nav');
 nav.innerHTML='<a class="section-tab" aria-label="Главная" href="../index.html">'+tabContent('ГЛАВНАЯ','01')+'</a>'
 +'<a class="section-tab is-active" aria-label="Темы" aria-current="page" href="./" data-route>'+tabContent('ТЕМЫ','02')+'</a>'
 +'<span class="section-tab is-reserved" aria-label="Другая страница, название пока не выбрано" title="Место другой страницы. Название пока не выбрано.">'+tabContent('···','03')+'</span>'
 +'<a class="section-tab" aria-label="Клуб" href="https://gardari.art/gardari_club" target="_blank" rel="noopener noreferrer">'+tabContent('КЛУБ','04')+'</a>';
 const resources=[['АРТ<br>ГАЛЕРЕЯ','Арт-галерея','https://dgardari-ai.github.io/gardari-gallery-preview/'],['КОНЦЕПТ<br>БЮРО','Концепт-бюро','https://dgardari-ai.github.io/kb-gardari/'],['ПЛАТФОРМА<br>МЕТОДОВ','Платформа методов','https://dgardari-ai.github.io/gardari-tools-platform/'],['КЛУБ<br>ГАРДАРИ','Клуб Гардари','https://gardari.art/gardari_club']];
 document.querySelector('#footer-resource-nav').innerHTML=resources.map((r,i)=>'<a class="section-tab footer-resource-tab" href="'+r[2]+'" target="_blank" rel="noopener noreferrer" aria-label="'+r[1]+'">'+tabContent(r[0],String(i+1).padStart(2,'0'))+'</a>').join('');
}
function club(){return "<section class=\"sidebar-block resource-promo promo-d promo-b promo-gallery\" id=\"gallery-promo\" aria-label=\"Галерея Гардари\" data-banner-resource=\"gallery\" data-banner-current=\"gallery-pool-01\" data-banner-images=\"[{&quot;id&quot;: &quot;gallery-pool-01&quot;, &quot;src&quot;: &quot;../articles/assets/resource-banners/gallery-pool-01.webp&quot;, &quot;width&quot;: 548, &quot;height&quot;: 548, &quot;alt&quot;: &quot;Фрагмент рельефного произведения с цветными фактурами и выступающими элементами&quot;, &quot;position&quot;: &quot;50% 50%&quot;}, {&quot;id&quot;: &quot;gallery-pool-02&quot;, &quot;src&quot;: &quot;../articles/assets/resource-banners/gallery-pool-02.webp&quot;, &quot;width&quot;: 548, &quot;height&quot;: 548, &quot;alt&quot;: &quot;Крупный план зелёного художественного стекла с блестящими цветными деталями&quot;, &quot;position&quot;: &quot;50% 50%&quot;}, {&quot;id&quot;: &quot;gallery-pool-03&quot;, &quot;src&quot;: &quot;../articles/assets/resource-banners/gallery-pool-03.webp&quot;, &quot;width&quot;: 548, &quot;height&quot;: 548, &quot;alt&quot;: &quot;Фрагмент произведения с белой фигурой птицы на бирюзовом и розовом фоне&quot;, &quot;position&quot;: &quot;50% 50%&quot;}, {&quot;id&quot;: &quot;gallery-pool-04&quot;, &quot;src&quot;: &quot;../articles/assets/resource-banners/gallery-pool-04.webp&quot;, &quot;width&quot;: 548, &quot;height&quot;: 548, &quot;alt&quot;: &quot;Мужчина с микрофоном рядом с работами в выставочном пространстве&quot;, &quot;position&quot;: &quot;50% 50%&quot;}, {&quot;id&quot;: &quot;gallery-pool-05&quot;, &quot;src&quot;: &quot;../articles/assets/resource-banners/gallery-pool-05.webp&quot;, &quot;width&quot;: 548, &quot;height&quot;: 548, &quot;alt&quot;: &quot;Ладони, покрытые цветной краской&quot;, &quot;position&quot;: &quot;50% 50%&quot;}]\"><a class=\"promo-image\" href=\"https://dgardari-ai.github.io/gardari-gallery-preview/\" target=\"_blank\" rel=\"noopener noreferrer\" aria-label=\"СМОТРЕТЬ ГАЛЕРЕЮ\"><img src=\"../articles/assets/resource-banners/gallery-pool-01.webp\" width=\"548\" height=\"548\" alt=\"Фрагмент рельефного произведения с цветными фактурами и выступающими элементами\" style=\"object-position:50% 50%\" loading=\"lazy\"><h2>ГАЛЕРЕЯ ГАРДАРИ</h2></a><div class=\"promo-copy\"><p>Живопись, графика, диджитал и художественное стекло.</p><a class=\"promo-action\" href=\"https://dgardari-ai.github.io/gardari-gallery-preview/\" target=\"_blank\" rel=\"noopener noreferrer\"><span>СМОТРЕТЬ ГАЛЕРЕЮ</span></a></div></section><section class=\"sidebar-block resource-promo promo-d promo-b promo-club\" id=\"club\" aria-label=\"Клуб Гардари\" data-banner-resource=\"club\" data-banner-current=\"club-pool-01\" data-banner-images=\"[{&quot;id&quot;: &quot;club-pool-01&quot;, &quot;src&quot;: &quot;../articles/assets/resource-banners/club-pool-01.webp&quot;, &quot;width&quot;: 548, &quot;height&quot;: 548, &quot;alt&quot;: &quot;Четверо мужчин в пальто и куртках, чёрно-белый кадр&quot;, &quot;position&quot;: &quot;50% 50%&quot;}, {&quot;id&quot;: &quot;club-pool-02&quot;, &quot;src&quot;: &quot;../articles/assets/resource-banners/club-pool-02.webp&quot;, &quot;width&quot;: 548, &quot;height&quot;: 548, &quot;alt&quot;: &quot;Мастер Йода на чёрном фоне&quot;, &quot;position&quot;: &quot;50% 50%&quot;}]\"><a class=\"promo-image\" href=\"https://gardari.art/gardari_club\" target=\"_blank\" rel=\"noopener noreferrer\" aria-label=\"ПЕРЕЙТИ В КЛУБ\"><img src=\"../articles/assets/resource-banners/club-pool-01.webp\" width=\"548\" height=\"548\" alt=\"Четверо мужчин в пальто и куртках, чёрно-белый кадр\" style=\"object-position:50% 50%\" loading=\"lazy\"><h2>КЛУБ ГАРДАРИ</h2></a><div class=\"promo-copy\"><p>Лекции об искусстве, культуре, творчестве и мышлении.</p><a class=\"promo-action\" href=\"https://gardari.art/gardari_club\" target=\"_blank\" rel=\"noopener noreferrer\"><span>ПЕРЕЙТИ В КЛУБ</span></a></div></section>";}
function row(item,type){
 const url=type==='category'?categoryUrl(item.id):cycleUrl(item.id);
 return '<article class="catalog-row" data-'+type+'="'+item.id+'"><div><h3 class="catalog-title"><a href="'+url+'" data-route>'+escapeHtml(item.title)+'</a></h3><p class="catalog-description">'+escapeHtml(item.description)+'</p></div><a class="catalog-open" href="'+url+'" data-route aria-label="'+(type==='category'?'Открыть категорию: ':'Открыть цикл: ')+escapeHtml(item.title)+'"><svg viewBox="0 0 20 20" aria-hidden="true"><path d="m8 4 6 6-6 6"/></svg></a></article>';
}
function overview(){
 currentCards=[];
 document.title='Темы — Блог Гардари';
 view.innerHTML='<section class="catalog-group" aria-labelledby="categories"><h1 class="section-heading" id="categories"><span>ТЕМЫ / КАТЕГОРИИ</span><span>09</span></h1>'+categories.map(c=>row(c,'category')).join('')+'</section>'
 +'<section class="catalog-group" aria-labelledby="cycles"><h2 class="section-heading" id="cycles"><span>ТЕМЫ / ЦИКЛЫ</span><span>07</span></h2>'+cycles.map(c=>row(c,'cycle')).join('')+'</section>';
 aside.innerHTML=latestPublicationBlock()+block('ПО ДАТЕ','02','<div class="publication-calendar">'+archiveCalendarContent()+'</div>')+club();
}
function categoryCards(cat){return archiveItems.filter(card=>card.categoryIds.includes(cat.id));}
function cycleCards(cycle){return archiveItems.filter(card=>card.cycleIds.includes(cycle.id)).sort((a,b)=>a.cycleOrder-b.cycleOrder);}
function thumbnail(card){if(!card.cover)return '<div class="card-media card-placeholder" role="img" aria-label="Без иллюстрации"></div>';return '<a class="card-media" href="'+escapeHtml(card.url)+'" aria-label="'+escapeHtml(card.title)+'"><img src="'+escapeHtml(card.cover.src)+'" width="'+card.cover.width+'" height="'+card.cover.height+'" alt="'+escapeHtml(card.cover.alt)+'" loading="lazy"></a>';}
function cardHtml(card){return '<article class="material-card'+(card.cover?'':' no-cover')+'" id="card-'+escapeHtml(card.id)+'">'+thumbnail(card)+'<div class="card-body"><time class="card-date" datetime="'+card.date+'">'+card.date.split('-').reverse().join('.')+'</time><h2 class="card-title"><a href="'+escapeHtml(card.url)+'">'+escapeHtml(card.title)+'</a></h2>'+(card.description===card.title?'':'<p class="card-description">'+escapeHtml(card.description)+'</p>')+(card.label?'<span class="card-label">'+escapeHtml(card.label)+'</span>':'')+'</div></article>';}
function detail(item,type){
 const isCycle=type==='cycle';
 currentCards=isCycle?cycleCards(item):categoryCards(item);
 document.title=item.title+' — Блог Гардари';
 view.innerHTML=(isCycle?'<h1 class="page-title">'+escapeHtml(item.title)+'</h1><p class="detail-description">'+escapeHtml(item.long)+'</p>':'<h1 class="category-heading">Темы, категории / '+escapeHtml(item.title)+'</h1>')
 +(isCycle?'<details class="sidebar-block mobile-cycle-contents"><summary>ЧАСТИ ЦИКЛА</summary><nav aria-label="Части цикла на телефоне">'+currentCards.map(c=>link(cycleUrl(item.id)+'#card-'+encodeURIComponent(c.id),String(c.index+1).padStart(2,'0')+' · '+c.title)).join('')+'</nav></details>':'')
 +'<div class="material-list">'+currentCards.map(cardHtml).join('')+'</div>'+(currentCards.length?'':'<p class="page-lead">В этой теме пока нет доступных публикаций.</p>');
 if(isCycle){const cat=categories.find(c=>c.id===item.category);aside.innerHTML=block('ЧАСТИ ЦИКЛА','01',currentCards.map(c=>link(cycleUrl(item.id)+'#card-'+encodeURIComponent(c.id),String(c.index+1).padStart(2,'0')+' · '+c.title)).join(''))+block('ДРУГИЕ МАРШРУТЫ','02',link('./#cycles','ВСЕ ЦИКЛЫ')+link(categoryUrl(cat.id),cat.title))+club();}
 else{const related=cycles.filter(c=>c.category===item.id);aside.innerHTML=block('КАТЕГОРИИ','01',link('./','ВСЕ КАТЕГОРИИ')+categories.filter(c=>c.id!==item.id).map(c=>link(categoryUrl(c.id),c.title)).join(''))+(related.length?block('ЦИКЛЫ В ЭТОЙ ТЕМЕ','02',related.map(c=>link(cycleUrl(c.id),c.title)).join('')):block('ЦИКЛЫ','02',link('./#cycles','ВЫБРАТЬ ЦИКЛ','Все связанные последовательности')))+club();}
}
function render(){
 const params=new URLSearchParams(location.search),cat=params.get('category'),cycle=params.get('cycle');
 if(cat&&cycle){errorView();return;}
 const item=cat?categories.find(c=>c.id===cat):cycle?cycles.find(c=>c.id===cycle):null;
 if((cat||cycle)&&!item){errorView();return;}
 if(item)detail(item,cat?'category':'cycle');else overview();
 document.querySelector('#route-status').textContent=item?item.title:'Все категории и циклы';
}
function errorView(){currentCards=[];document.title='Категория не найдена — Блог Гардари';view.innerHTML='<div class="error-view"><h1 class="page-title">КАТЕГОРИЯ НЕ НАЙДЕНА</h1><p class="page-lead">Такая категория или цикл не найдены.</p><a class="catalog-action" href="./" data-route>Все темы</a></div>';aside.innerHTML=club();}
function closeSearch(){document.querySelector('#search-results').hidden=true;document.querySelector('#material-search').setAttribute('aria-expanded','false');}
function saveScroll(){scrollPositions.set(currentKey,window.scrollY);}
function moveToLocation(restore=false){
 const remembered=scrollPositions.get(currentKey);
 if(restore&&remembered!==undefined){window.scrollTo(0,remembered);return;}
 const id=decodeURIComponent(location.hash.slice(1));
 const target=id&&document.getElementById(id);
 if(target)target.scrollIntoView({block:'start'});else window.scrollTo(0,0);
}
function navigate(url){
 saveScroll();
 saveReaderPlace();history.pushState({},'',url);
 currentKey=location.search+location.hash;
 if(dialog.open)dialog.close();
 closeSearch();render();
 requestAnimationFrame(()=>{view.focus({preventScroll:true});moveToLocation();});
}
document.addEventListener('click',event=>{
 const step=event.target.closest('[data-archive-step]');
 if(step){stepArchiveMonth(Number(step.dataset.archiveStep));return;}
 const day=event.target.closest('[data-archive-date]');
 if(day){archiveSelectedDate=day.dataset.archiveDate;refreshArchiveCalendar('[data-archive-date="'+archiveSelectedDate+'"]');return;}
 const route=event.target.closest('a[data-route]');
 if(route&&new URL(route.href).pathname===location.pathname&&!event.ctrlKey&&!event.metaKey&&!event.shiftKey&&!event.altKey&&event.button===0){event.preventDefault();navigate(route.href);return;}
 const button=event.target.closest('[data-card]');
 if(button){const card=currentCards.find(c=>c.id===button.dataset.card)||archiveIndex.get(button.dataset.card);if(card){saveReaderPlace();location.href=card.url;}}
 if(!event.target.closest('#search-form'))closeSearch();
});
document.addEventListener('change',event=>{
 const field=event.target;
 if(!field.matches('[data-archive-month],[data-archive-year]'))return;
 const [year,month]=archiveViewMonth.split('-').map(Number);
 archiveViewMonth=(field.matches('[data-archive-year]')?Number(field.value):year)+'-'+String(field.matches('[data-archive-month]')?Number(field.value):month).padStart(2,'0');
 archiveSelectedDate=null;
 refreshArchiveCalendar(field.matches('[data-archive-year]')?'[data-archive-year]':'[data-archive-month]');
});
window.addEventListener('popstate',()=>{saveScroll();currentKey=location.search+location.hash;closeSearch();if(dialog.open)dialog.close();render();requestAnimationFrame(()=>moveToLocation(true));});
window.addEventListener('hashchange',()=>{currentKey=location.search+location.hash;});
document.querySelector('#return-to-list').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
const input=document.querySelector('#material-search');
const searchIndex=[...categories.map(c=>({...c,url:categoryUrl(c.id),kind:'КАТЕГОРИЯ'})),...cycles.map(c=>({...c,url:cycleUrl(c.id),kind:'ЦИКЛ'})),...archiveItems.map(c=>({...c,kind:'СТАТЬЯ'}))];
function search(){const q=input.value.trim().toLocaleLowerCase('ru-RU'),results=document.querySelector('#search-results');if(!q){closeSearch();return;}const matches=searchIndex.filter(x=>(x.title+' '+x.description).toLocaleLowerCase('ru-RU').includes(q));results.innerHTML='<p class="search-results-label">СТАТЬИ, КАТЕГОРИИ И ЦИКЛЫ</p>'+(matches.length?matches.map(x=>'<a class="search-result" href="'+x.url+'" data-route><strong>'+escapeHtml(x.title)+'</strong><small>'+x.kind+'</small></a>').join(''):'<p class="search-empty">Ничего не найдено. Попробуйте другое слово.</p>');results.hidden=false;input.setAttribute('aria-expanded','true');}
input.addEventListener('input',search);
document.querySelector('#search-form').addEventListener('submit',event=>{event.preventDefault();search();});
document.addEventListener('keydown',event=>{if(event.key==='Escape'){closeSearch();}});
buildHeader();buildTopicsFooter();initReadingFooterAccordion();initBlogShare();render();requestAnimationFrame(()=>{if(readerPlace?.key===currentKey)window.scrollTo(0,readerPlace.scroll);else moveToLocation();});


function buildTopicsFooter(){
 const record=(url,title)=>'<div class="footer-date-record"><a class="footer-record-title" href="'+escapeHtml(url)+'"'+(url.startsWith('http')?'':' data-route')+'>'+escapeHtml(title)+'</a></div>';
 const fold=(id,label,body,always=false)=>'<section class="footer-fold'+(always?' is-open is-always-open':'')+'"><h3'+(always?' class="footer-fold-heading"':'')+'>'+(always?label:'<button class="footer-fold-trigger" id="footer-trigger-'+id+'" type="button" aria-expanded="false" aria-controls="footer-panel-'+id+'"><span>'+label+'</span><span class="footer-fold-mark" aria-hidden="true">+</span></button>')+'</h3><div class="footer-fold-panel" id="footer-panel-'+id+'"'+(always?'':' role="region" aria-labelledby="footer-trigger-'+id+'" aria-hidden="true" inert')+'><div class="footer-fold-inner">'+body+'</div></div></section>';
 const routes=record('./#categories','КАТЕГОРИИ')+record('./#cycles','ЦИКЛЫ')+record('https://dgardari-ai.github.io/gardari-blog-preview/','ГЛАВНАЯ СТРАНИЦА')+record('https://gardari.art/gardari_club','КЛУБ ГАРДАРИ');
 document.querySelector('#reading-footer-accordion').innerHTML=fold('routes','В БЛОГЕ',routes,true)+fold('categories','КАТЕГОРИИ',categories.map(c=>record(categoryUrl(c.id),c.title.toLocaleUpperCase('ru-RU'))).join(''))+fold('cycles','ЦИКЛЫ',cycles.map(c=>record(cycleUrl(c.id),c.title.toLocaleUpperCase('ru-RU'))).join(''))+fold('info','ИНФОРМАЦИЯ','<div class="footer-info-placeholder"><p>БЛОГ ДЕНИСА ГАРДАРИ</p></div>');
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
function initBlogShare() {
  const button = document.getElementById('share-article');
  const feedback = document.getElementById('share-feedback');
  if (!button || !feedback) return;
  button.addEventListener('click',async()=>{
    const link = new URL("https://dgardari-ai.github.io/gardari-blog-preview/");
    link.hash = '';
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(link.href);
      }
    } catch(error) { /* Show a selectable link if clipboard access is restricted. */ }
    feedback.replaceChildren();
    feedback.classList.add('needs-copy');
    const label = document.createElement('span');
    label.textContent = 'ССЫЛКА НА БЛОГ';
    const field = document.createElement('input');
    field.type = 'text';
    field.readOnly = true;
    field.className = 'share-link-field';
    field.value = link.href;
    field.setAttribute('aria-label','Ссылка на блог для копирования');
    feedback.append(label,field);
    field.focus();
    field.select();
  });
}

function saveReaderPlace(){history.replaceState({...history.state,gardariTopics:{month:archiveViewMonth,date:archiveSelectedDate,scroll:scrollY,key:location.search+location.hash}},'');}
document.addEventListener('click',event=>{const anchor=event.target.closest('a');if(anchor&&!anchor.hasAttribute('data-route'))saveReaderPlace();},true);

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

initAsideDock();
