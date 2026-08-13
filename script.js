document.querySelectorAll('#year').forEach((element) => {
  element.textContent = new Date().getFullYear();
});

const translations = {
  en: ['Ždrelac · Pašman island','A peaceful place by the sea.','Comfortable apartments for a carefree holiday on Pašman island.','to the sea','walk to Ždrelac centre','Sandy beach','natural and ideal for children','Peaceful holiday','an ideal place for a family holiday','Accommodation','Choose your apartment','Bright and comfortable apartment with a terrace, ideal for couples and a small family.','Spacious apartment for family or friends, with room to spend time together.','Peaceful and practical apartment, an excellent choice for couples.','Details and availability','Simple and stress-free','Arrange your stay directly with us.','Fast response','Send an inquiry and we will quickly confirm availability.','Clear availability','Available days are clearly marked on every apartment page.','Warm welcome','We are here with recommendations for beaches, restaurants or trips.','Reservations and inquiries','Found your dates?','Send us a message with the apartment, desired dates and number of guests.','Send a WhatsApp message'],
  sl: ['Ždrelac · otok Pašman','Mirni dnevi ob morju.','Udobni apartmaji za brezskrbne počitnice na otoku Pašmanu.','do morja','peš do središča Ždrelca','Peščena plaža','naravna in idealna za otroke','Mirne počitnice','idealno za družinske počitnice','Namestitev','Izberite apartma','Svetel in udoben apartma s teraso, idealen za pare in manjšo družino.','Prostoren apartma za družino ali prijatelje, s prostorom za druženje.','Miren in praktičen apartma, odlična izbira za pare.','Podrobnosti in prosti termini','Enostavno in brez stresa','Bivanje dogovorite neposredno z nami.','Hiter odgovor','Pošljite povpraševanje in hitro bomo potrdili razpoložljivost.','Jasni termini','Prosti dnevi so označeni na strani vsakega apartmaja.','Topla dobrodošlica','Tu smo za priporočila za plaže, restavracije ali izlete.','Rezervacije in povpraševanja','Ste našli svoj termin?','Pošljite nam sporočilo z apartmajem, želenimi datumi in številom oseb.','Pošlji WhatsApp sporočilo'],
  it: ['Ždrelac · isola di Pašman','Un luogo tranquillo vicino al mare.','Appartamenti confortevoli per una vacanza spensierata sull’isola di Pašman.','dal mare','a piedi dal centro di Ždrelac','Spiaggia sabbiosa','naturale e ideale per bambini','Vacanza tranquilla','un luogo ideale per le famiglie','Alloggio','Scegli il tuo appartamento','Appartamento luminoso e confortevole con terrazza, ideale per coppie e piccole famiglie.','Appartamento spazioso per famiglia o amici, con spazio per stare insieme.','Appartamento tranquillo e pratico, ottima scelta per coppie.','Dettagli e disponibilità','Semplice e senza stress','Organizza il tuo soggiorno direttamente con noi.','Risposta rapida','Invia una richiesta e confermeremo presto la disponibilità.','Disponibilità chiara','I giorni disponibili sono indicati su ogni pagina.','Caloroso benvenuto','Siamo qui per consigli su spiagge, ristoranti o escursioni.','Prenotazioni e richieste','Hai trovato le tue date?','Inviaci un messaggio con appartamento, date e numero di ospiti.','Invia un messaggio WhatsApp'],
  de: ['Ždrelac · Insel Pašman','Ein ruhiger Ort am Meer.','Komfortable Apartments für einen unbeschwerten Urlaub auf der Insel Pašman.','bis zum Meer','zu Fuß ins Zentrum von Ždrelac','Sandstrand','natürlich und ideal für Kinder','Ruhiger Urlaub','ideal für einen Familienurlaub','Unterkunft','Wählen Sie Ihr Apartment','Helles, gemütliches Apartment mit Terrasse, ideal für Paare und kleine Familien.','Geräumiges Apartment für Familie oder Freunde mit Platz zum Zusammensein.','Ruhiges, praktisches Apartment – ideal für Paare.','Details und Verfügbarkeit','Einfach und stressfrei','Vereinbaren Sie Ihren Aufenthalt direkt mit uns.','Schnelle Antwort','Senden Sie eine Anfrage, wir bestätigen die Verfügbarkeit schnell.','Klare Verfügbarkeit','Freie Tage sind auf jeder Apartmentseite markiert.','Herzlich willkommen','Wir empfehlen gern Strände, Restaurants oder Ausflüge.','Reservierungen und Anfragen','Ihre Daten gefunden?','Schreiben Sie uns Apartment, gewünschte Daten und Gästezahl.','WhatsApp-Nachricht senden'],
  pl: ['Ždrelac · wyspa Pašman','Spokojne miejsce nad morzem.','Wygodne apartamenty na beztroski urlop na wyspie Pašman.','do morza','spacerem do centrum Ždrelaca','Piaszczysta plaża','naturalna i idealna dla dzieci','Spokojny wypoczynek','idealne miejsce na rodzinne wakacje','Zakwaterowanie','Wybierz apartament','Jasny i wygodny apartament z tarasem, idealny dla par i małej rodziny.','Przestronny apartament dla rodziny lub przyjaciół.','Spokojny i praktyczny apartament, doskonały dla par.','Szczegóły i dostępność','Prosto i bez stresu','Uzgodnij pobyt bezpośrednio z nami.','Szybka odpowiedź','Wyślij zapytanie, szybko potwierdzimy dostępność.','Jasna dostępność','Wolne dni są oznaczone na stronie każdego apartamentu.','Ciepłe powitanie','Polecimy plaże, restauracje lub wycieczki.','Rezerwacje i zapytania','Znalazłeś termin?','Napisz nam apartament, terminy i liczbę gości.','Wyślij wiadomość WhatsApp'],
  sk: ['Ždrelac · ostrov Pašman','Pokojné miesto pri mori.','Pohodlné apartmány pre bezstarostnú dovolenku na ostrove Pašman.','od mora','pešo do centra Ždrelaca','Piesočná pláž','prírodná a ideálna pre deti','Pokojná dovolenka','ideálne miesto pre rodinnú dovolenku','Ubytovanie','Vyberte si apartmán','Svetlý a pohodlný apartmán s terasou, ideálny pre páry a malú rodinu.','Priestranný apartmán pre rodinu alebo priateľov.','Pokojný a praktický apartmán, výborný pre páry.','Podrobnosti a dostupnosť','Jednoducho a bez stresu','Dohodnite si pobyt priamo s nami.','Rýchla odpoveď','Pošlite dopyt a rýchlo potvrdíme dostupnosť.','Jasná dostupnosť','Voľné dni sú označené na stránke každého apartmánu.','Srdečné privítanie','Odporučíme pláže, reštaurácie alebo výlety.','Rezervácie a dopyty','Našli ste termín?','Napíšte nám apartmán, termíny a počet hostí.','Poslať správu WhatsApp'],
  cs: ['Ždrelac · ostrov Pašman','Klidné místo u moře.','Pohodlné apartmány pro bezstarostnou dovolenou na ostrově Pašman.','od moře','pěšky do centra Ždrelace','Písečná pláž','přírodní a ideální pro děti','Klidná dovolená','ideální místo pro rodinnou dovolenou','Ubytování','Vyberte si apartmán','Světlý a pohodlný apartmán s terasou, ideální pro páry a malou rodinu.','Prostorný apartmán pro rodinu nebo přátele.','Klidný a praktický apartmán, skvělý pro páry.','Podrobnosti a dostupnost','Jednoduše a bez stresu','Domluvte si pobyt přímo s námi.','Rychlá odpověď','Pošlete dotaz a rychle potvrdíme dostupnost.','Jasná dostupnost','Volné dny jsou označeny na stránce každého apartmánu.','Srdečné přivítání','Doporučíme pláže, restaurace nebo výlety.','Rezervace a dotazy','Našli jste termín?','Napište nám apartmán, termíny a počet hostů.','Poslat zprávu WhatsApp']
};
const translationKeys = ['heroLocation','heroTitle','heroText','sea','centre','beachTitle','beachText','quietTitle','quietText','accommodation','chooseApartment','blueCard','yellowCard','studioCard','details','simple','directBooking','fastTitle','fastText','datesTitle','datesText','welcomeTitle','welcomeText','reservations','foundDates','contactText','whatsapp'];
const languagePicker = document.querySelector('[data-language-picker]');
const languageTrigger = document.querySelector('[data-language-trigger]');
const languageMenu = document.querySelector('[data-language-menu]');
const languageFlag = document.querySelector('[data-language-flag]');
const languageCurrent = document.querySelector('[data-language-current]');
const languageOptions = [...document.querySelectorAll('[data-language-option]')];
const detailTranslations = {
  hr: { back: '← Svi apartmani', air: 'Klima-uređaj', kitchen: 'Opremljena kuhinja', terrace: 'Terasa', balcony: 'Balkon', parking: 'Parkirno mjesto', calendar: 'Kalendar', free: 'Slobodno', booked: 'Zauzeto', reservations: 'Rezervacije i upiti', want: 'Želite ovaj apartman?', contact: 'Pošaljite nam datume i broj osoba, pa ćemo vam brzo odgovoriti.', inquire: 'Pošaljite upit' },
  en: { back: '← All apartments', air: 'Air conditioning', kitchen: 'Equipped kitchen', terrace: 'Terrace', balcony: 'Balcony', parking: 'Parking space', calendar: 'Availability calendar', free: 'Available', booked: 'Booked', reservations: 'Reservations and inquiries', want: 'Would you like this apartment?', contact: 'Send us your dates and number of guests, and we will reply shortly.', inquire: 'Send an inquiry' },
  sl: { back: '← Vsi apartmaji', air: 'Klimatska naprava', kitchen: 'Opremljena kuhinja', terrace: 'Terasa', balcony: 'Balkon', parking: 'Parkirno mesto', calendar: 'Koledar razpoložljivosti', free: 'Prosto', booked: 'Zasedeno', reservations: 'Rezervacije in povpraševanja', want: 'Želite ta apartma?', contact: 'Pošljite nam datume in število oseb, kmalu vam odgovorimo.', inquire: 'Pošlji povpraševanje' },
  it: { back: '← Tutti gli appartamenti', air: 'Aria condizionata', kitchen: 'Cucina attrezzata', terrace: 'Terrazza', balcony: 'Balcone', parking: 'Posto auto', calendar: 'Calendario disponibilità', free: 'Libero', booked: 'Occupato', reservations: 'Prenotazioni e richieste', want: 'Vuoi questo appartamento?', contact: 'Inviaci le date e il numero di ospiti, ti risponderemo presto.', inquire: 'Invia richiesta' },
  de: { back: '← Alle Apartments', air: 'Klimaanlage', kitchen: 'Ausgestattete Küche', terrace: 'Terrasse', balcony: 'Balkon', parking: 'Parkplatz', calendar: 'Verfügbarkeitskalender', free: 'Frei', booked: 'Belegt', reservations: 'Reservierungen und Anfragen', want: 'Möchten Sie dieses Apartment?', contact: 'Senden Sie uns Ihre Daten und Gästezahl – wir antworten schnell.', inquire: 'Anfrage senden' },
  pl: { back: '← Wszystkie apartamenty', air: 'Klimatyzacja', kitchen: 'Wyposażona kuchnia', terrace: 'Taras', balcony: 'Balkon', parking: 'Miejsce parkingowe', calendar: 'Kalendarz dostępności', free: 'Wolne', booked: 'Zajęte', reservations: 'Rezerwacje i zapytania', want: 'Chcesz ten apartament?', contact: 'Wyślij nam daty i liczbę gości, a szybko odpowiemy.', inquire: 'Wyślij zapytanie' },
  sk: { back: '← Všetky apartmány', air: 'Klimatizácia', kitchen: 'Vybavená kuchyňa', terrace: 'Terasa', balcony: 'Balkón', parking: 'Parkovacie miesto', calendar: 'Kalendár dostupnosti', free: 'Voľné', booked: 'Obsadené', reservations: 'Rezervácie a dopyty', want: 'Chcete tento apartmán?', contact: 'Pošlite nám dátumy a počet hostí, čoskoro odpovieme.', inquire: 'Poslať dopyt' },
  cs: { back: '← Všechny apartmány', air: 'Klimatizace', kitchen: 'Vybavená kuchyně', terrace: 'Terasa', balcony: 'Balkon', parking: 'Parkovací místo', calendar: 'Kalendář dostupnosti', free: 'Volné', booked: 'Obsazeno', reservations: 'Rezervace a dotazy', want: 'Chcete tento apartmán?', contact: 'Pošlete nám termíny a počet hostů, brzy odpovíme.', inquire: 'Poslat dotaz' }
};
const apartmentCopy = { hr: { blue: ['Plavi Apartman', 'Svijetao, opremljen i miran apartman s terasom za opuštene dane. Ima jednu spavaću sobu s bračnim krevetom i balkonom te trosjed na razvlačenje za još dvije osobe.'], yellow: ['Žuti Apartman', 'Prostran apartman za druženja nakon dana provedenog na moru. Ima jednu spavaću sobu s bračnim krevetom, dvosjedom na razvlačenje i terasom te drugu sobu s dva odvojena ležaja i terasom.'], studio: ['Studio Apartman', 'Miran i ugodan apartman za opušten boravak u dvoje. Ima jednu spavaću sobu s bračnim krevetom i balkonom.'] }, en: { blue: ['Blue Apartment', 'A bright, well-equipped and peaceful apartment with a terrace for relaxed days. It has one bedroom with a double bed and balcony, plus a sofa bed for two more guests.'], yellow: ['Yellow Apartment', 'A spacious apartment for time together after a day at the sea. It has a double bedroom, a sofa bed and terrace, plus a second room with twin beds and a terrace.'], studio: ['Studio Apartment', 'A calm, comfortable apartment for a relaxed stay for two. It has one bedroom with a double bed and a balcony.'] }, sl: { blue: ['Modri apartma', 'Svetel, opremljen in miren apartma s teraso za sproščene dni. Ima spalnico z zakonsko posteljo in balkonom ter raztegljiv kavč za še dve osebi.'], yellow: ['Rumeni apartma', 'Prostoren apartma za druženje po dnevu ob morju. Ima spalnico z zakonsko posteljo, raztegljiv kavč in teraso ter drugo sobo z dvema ločenima ležiščema in teraso.'], studio: ['Studio apartma', 'Miren in prijeten apartma za sproščeno bivanje v dvoje. Ima spalnico z zakonsko posteljo in balkonom.'] }, it: { blue: ['Appartamento Blu', 'Un appartamento luminoso, attrezzato e tranquillo con terrazza per giornate rilassanti. Dispone di una camera con letto matrimoniale e balcone e di un divano letto per altri due ospiti.'], yellow: ['Appartamento Giallo', 'Un appartamento spazioso per stare insieme dopo una giornata al mare. Ha una camera matrimoniale, un divano letto e una terrazza, più una seconda camera con due letti singoli e terrazza.'], studio: ['Monolocale', 'Un appartamento tranquillo e accogliente per un soggiorno rilassante in due. Ha una camera con letto matrimoniale e balcone.'] }, de: { blue: ['Blaues Apartment', 'Ein helles, gut ausgestattetes und ruhiges Apartment mit Terrasse für entspannte Tage. Es verfügt über ein Schlafzimmer mit Doppelbett und Balkon sowie ein Schlafsofa für zwei weitere Gäste.'], yellow: ['Gelbes Apartment', 'Ein geräumiges Apartment für gemeinsame Zeit nach einem Tag am Meer. Es hat ein Schlafzimmer mit Doppelbett, Schlafsofa und Terrasse sowie ein zweites Zimmer mit zwei Einzelbetten und Terrasse.'], studio: ['Studio-Apartment', 'Ein ruhiges, gemütliches Apartment für einen entspannten Aufenthalt zu zweit. Es hat ein Schlafzimmer mit Doppelbett und Balkon.'] }, pl: { blue: ['Niebieski Apartament', 'Jasny, dobrze wyposażony i spokojny apartament z tarasem na relaksujące dni. Ma sypialnię z łóżkiem podwójnym i balkonem oraz rozkładaną sofę dla dwóch dodatkowych gości.'], yellow: ['Żółty Apartament', 'Przestronny apartament do wspólnego spędzania czasu po dniu nad morzem. Ma sypialnię z łóżkiem podwójnym, rozkładaną sofę i taras oraz drugi pokój z dwoma pojedynczymi łóżkami i tarasem.'], studio: ['Apartament Studio', 'Spokojny i przytulny apartament na relaksujący pobyt we dwoje. Ma sypialnię z łóżkiem podwójnym i balkonem.'] }, sk: { blue: ['Modrý apartmán', 'Svetlý, vybavený a pokojný apartmán s terasou na oddychové dni. Má spálňu s manželskou posteľou a balkónom aj rozkladaciu pohovku pre ďalšie dve osoby.'], yellow: ['Žltý apartmán', 'Priestranný apartmán na spoločné chvíle po dni pri mori. Má spálňu s manželskou posteľou, rozkladaciu pohovku a terasu, ako aj druhú izbu s dvoma samostatnými lôžkami a terasou.'], studio: ['Štúdio apartmán', 'Pokojný a útulný apartmán pre oddychový pobyt vo dvojici. Má spálňu s manželskou posteľou a balkónom.'] }, cs: { blue: ['Modrý apartmán', 'Světlý, vybavený a klidný apartmán s terasou pro odpočinkové dny. Má ložnici s manželskou postelí a balkonem i rozkládací pohovku pro další dvě osoby.'], yellow: ['Žlutý apartmán', 'Prostorný apartmán pro společné chvíle po dni u moře. Má ložnici s manželskou postelí, rozkládací pohovku a terasu, stejně jako druhý pokoj se dvěma samostatnými lůžky a terasou.'], studio: ['Studiový apartmán', 'Klidný a útulný apartmán pro odpočinkový pobyt ve dvou. Má ložnici s manželskou postelí a balkonem.'] } };
const apartmentNames = { hr: { blue: 'Plavi Apartman', yellow: 'Žuti Apartman', studio: 'Studio Apartman' }, en: { blue: 'Blue Apartment', yellow: 'Yellow Apartment', studio: 'Studio Apartment' }, sl: { blue: 'Modri apartma', yellow: 'Rumeni apartma', studio: 'Studio apartma' }, it: { blue: 'Appartamento Blu', yellow: 'Appartamento Giallo', studio: 'Monolocale' }, de: { blue: 'Blaues Apartment', yellow: 'Gelbes Apartment', studio: 'Studio-Apartment' }, pl: { blue: 'Niebieski Apartament', yellow: 'Żółty Apartament', studio: 'Apartament Studio' }, sk: { blue: 'Modrý apartmán', yellow: 'Žltý apartmán', studio: 'Štúdio apartmán' }, cs: { blue: 'Modrý apartmán', yellow: 'Žlutý apartmán', studio: 'Studiový apartmán' } };
const siteCopy = { hr: ['Apartmani', 'Ždrelac, otok Pašman'], en: ['Apartments', 'Ždrelac, Pašman island'], sl: ['Apartmaji', 'Ždrelac, otok Pašman'], it: ['Appartamenti', 'Ždrelac, isola di Pašman'], de: ['Apartments', 'Ždrelac, Insel Pašman'], pl: ['Apartamenty', 'Ždrelac, wyspa Pašman'], sk: ['Apartmány', 'Ždrelac, ostrov Pašman'], cs: ['Apartmány', 'Ždrelac, ostrov Pašman'] };
const applyLanguage = (language) => { const words = translations[language]; if (words) translationKeys.forEach((key, index) => document.querySelectorAll(`[data-i18n="${key}"]`).forEach((element) => { element.textContent = words[index]; })); const detail = detailTranslations[language]; if (detail) document.querySelectorAll('[data-detail-i18n]').forEach((element) => { const value = detail[element.dataset.detailI18n]; if (value) element.textContent = value; }); const apartment = document.body.dataset.apartment; const copy = apartmentCopy[language]?.[apartment]; if (copy) document.querySelector('[data-detail-i18n="lead"]')?.replaceChildren(copy[1]); const names = apartmentNames[language]; if (names) { const name = names[apartment]; if (name) document.querySelector('[data-detail-i18n="title"]')?.replaceChildren(name); ['blue', 'yellow', 'studio'].forEach((key, index) => document.querySelectorAll('.apartment-card h3 a')[index]?.replaceChildren(names[key])); } const site = siteCopy[language]; if (site) { document.querySelectorAll('.logo').forEach((logo) => { if (logo.firstChild) logo.firstChild.textContent = `${site[0]} `; }); document.querySelectorAll('.header-location').forEach((location) => { location.textContent = site[1]; }); document.querySelectorAll('footer p').forEach((copyright) => { if (copyright.lastChild) copyright.lastChild.textContent = ` ${site[0]} Sanja`; }); } document.documentElement.lang = language; document.querySelectorAll('a[href*=".html"]').forEach((link) => { const url = new URL(link.href, window.location.href); url.searchParams.set('lang', language); link.href = url.pathname + url.search + url.hash; }); };
if (languagePicker) {
  const setLanguage = (language) => {
    const option = languageOptions.find((item) => item.dataset.languageOption === language);
    if (!option) return;
    languageFlag.dataset.language = language;
    languageCurrent.textContent = option.querySelectorAll('span')[1].textContent;
    languageOptions.forEach((item) => item.setAttribute('aria-selected', String(item === option)));
    applyLanguage(language);
  };
  const closeLanguageMenu = () => { languageMenu.hidden = true; languageTrigger.setAttribute('aria-expanded', 'false'); };
  const language = new URLSearchParams(window.location.search).get('lang') || localStorage.getItem('apartmani-language') || 'hr';
  setLanguage(language);
  languageTrigger.addEventListener('click', () => { const opening = languageMenu.hidden; languageMenu.hidden = !opening; languageTrigger.setAttribute('aria-expanded', String(opening)); });
  languageOptions.forEach((option) => option.addEventListener('click', () => { const selectedLanguage = option.dataset.languageOption; localStorage.setItem('apartmani-language', selectedLanguage); setLanguage(selectedLanguage); closeLanguageMenu(); languageTrigger.focus(); }));
  document.addEventListener('click', (event) => { if (!languagePicker.contains(event.target)) closeLanguageMenu(); });
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') { closeLanguageMenu(); languageTrigger.focus(); } });
}

document.querySelectorAll('[data-carousel]').forEach((carousel) => {
  const image = carousel.querySelector('[data-carousel-image]');
  const current = carousel.querySelector('[data-carousel-current]');
  const thumbnailContainer = carousel.querySelector('.carousel-thumbnails');
  const sourceList = carousel.dataset.carouselImages?.split('|');
  if (sourceList) {
    sourceList.forEach((source, index) => {
      const thumbnail = document.createElement('button');
      const preview = document.createElement('img');
      thumbnail.type = 'button';
      thumbnail.dataset.carouselThumb = '';
      thumbnail.dataset.src = source;
      thumbnail.dataset.alt = `Fotografija ${index + 1}`;
      thumbnail.setAttribute('aria-label', `Prikaži fotografiju ${index + 1}`);
      preview.src = source;
      preview.alt = '';
      thumbnail.append(preview);
      thumbnailContainer.append(thumbnail);
    });
  }
  const thumbnails = [...carousel.querySelectorAll('[data-carousel-thumb]')];
  thumbnails[0].classList.add('is-active');
  let selected = 0;

  const showImage = (index) => {
    selected = (index + thumbnails.length) % thumbnails.length;
    const thumbnail = thumbnails[selected];
    image.src = thumbnail.dataset.src;
    image.alt = thumbnail.dataset.alt;
    current.textContent = selected + 1;
    thumbnails.forEach((item, itemIndex) => item.classList.toggle('is-active', itemIndex === selected));
    thumbnail.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  };

  thumbnails.forEach((thumbnail, index) => thumbnail.addEventListener('click', () => showImage(index)));
  carousel.querySelector('[data-carousel-prev]').addEventListener('click', () => showImage(selected - 1));
  carousel.querySelector('[data-carousel-next]').addEventListener('click', () => showImage(selected + 1));
});

const monthsHr = ['Siječanj', 'Veljača', 'Ožujak', 'Travanj', 'Svibanj', 'Lipanj', 'Srpanj', 'Kolovoz', 'Rujan', 'Listopad', 'Studeni', 'Prosinac'];
const weekdaysHr = ['P', 'U', 'S', 'Č', 'P', 'S', 'N'];
const seasonYear = new Date().getFullYear();

document.querySelectorAll('[data-booking-calendar]').forEach((calendar) => {
  const monthsContainer = calendar.querySelector('.calendar-months');
  const freeRanges = (calendar.dataset.freeRanges || '').split('|').filter(Boolean).map((range) => range.split(':'));
  const isFree = (date) => freeRanges.some(([start, end]) => date >= start && date <= end);
  for (let month = 4; month <= 9; month += 1) {
    const firstDay = new Date(seasonYear, month, 1);
    const daysInMonth = new Date(seasonYear, month + 1, 0).getDate();
    const startOffset = (firstDay.getDay() + 6) % 7;
    const monthElement = document.createElement('section');
    monthElement.className = 'calendar-month';
    monthElement.innerHTML = `<h3>${monthsHr[month]} ${seasonYear}</h3><div class="calendar-weekdays">${weekdaysHr.map((day) => `<span>${day}</span>`).join('')}</div><div class="calendar-days"></div>`;
    const daysContainer = monthElement.querySelector('.calendar-days');
    for (let empty = 0; empty < startOffset; empty += 1) daysContainer.append(document.createElement('span'));
    for (let day = 1; day <= daysInMonth; day += 1) {
      const dayElement = document.createElement('span');
      const date = `${seasonYear}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      dayElement.className = isFree(date) ? 'day-free' : 'day-booked';
      dayElement.textContent = day;
      dayElement.title = isFree(date) ? 'Slobodno' : 'Zauzeto';
      daysContainer.append(dayElement);
    }
    monthsContainer.append(monthElement);
  }
});
