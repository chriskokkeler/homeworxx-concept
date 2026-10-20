// Inhoud van de voorbeeldsite. Feiten komen van de huidige homeworxx.nl (oktober 2026).
// Niets toevoegen wat de klant niet heeft bevestigd.

export const site = {
  name: 'HomeworXX',
  tagline: 'Huiswerkbegeleiding en bijles in Zutphen',
  owner: 'Geertruud Dorhout',
  street: 'Berkelkade 14-08',
  postcode: '7201 JE',
  city: 'Zutphen',
  phone: '06 83591098',
  phoneHref: 'tel:+31683591098',
  email: 'geertruud@homeworxx.nl',
  kvk: '66408881',
  terms: 'https://homeworxx.nl/wp-content/uploads/2016/08/algemene-voorwaarden.pdf',
  termsBijles: 'https://homeworxx.nl/wp-content/uploads/2016/11/Bijles-algemene-voorwaarden.pdf',
  mapsHref: 'https://www.google.com/maps/search/?api=1&query=Berkelkade+14-08+Zutphen',
};

export const nav = [
  { href: 'huiswerkbegeleiding', label: 'Huiswerkbegeleiding' },
  { href: 'bijles', label: 'Bijles' },
  { href: 'basisschool', label: 'Basisschool' },
  { href: 'tarieven', label: 'Tarieven' },
  { href: 'werkwijze', label: 'Werkwijze' },
  { href: 'team', label: 'Team' },
];

export const hbPrices = [
  { days: 2, price: 210 },
  { days: 3, price: 290 },
  { days: 4, price: 345 },
  { days: 5, price: 405 },
];

export const classPrices = [
  { days: 2, price: 115 },
  { days: 3, price: 175 },
  { days: 4, price: 230 },
  { days: 5, price: 290 },
];

export const bijlesPrice = 45;

export type Teacher = {
  slug: string;
  name: string;
  initials: string;
  role: string;
  subjects: string[];
  bio: string;
  tone: 'a' | 'b' | 'c';
};

export const owner = {
  name: 'Geertruud Dorhout',
  initials: 'GD',
  bio: 'Drs. Geertruud Dorhout was jarenlang vestigingsmanager bij een keten van huiswerkinstituten en begon daarna voor zichzelf aan de Berkelkade. Ze geeft zelf de huiswerkbegeleiding en een deel van de bijlessen, en kent elke leerling bij naam.',
};

export const teachers: Teacher[] = [
  {
    slug: 'joelle',
    name: 'Joëlle Servais',
    initials: 'JS',
    role: 'Eerstegraads docent',
    subjects: ['Maatschappijleer', 'Maatschappijwetenschappen'],
    bio: 'Antropoloog met 17 jaar ervaring in het voortgezet onderwijs, waarvan negen jaar op de Vrijeschool Zutphen. Helpt leerlingen hun talenten te ontdekken en met meer zelfvertrouwen hun doelen te halen.',
    tone: 'a',
  },
  {
    slug: 'marta',
    name: 'Marta Alzola',
    initials: 'MA',
    role: 'Docent talen en economie',
    subjects: ['Spaans', 'Engels', 'Wiskunde in het Engels', 'Economie in het Engels'],
    bio: 'Geboren in Spanje, werkte in Engeland, China, Spanje en Duitsland en woont sinds 2007 in Zutphen. Geeft ook les in het tweetalig onderwijs, tot en met 6 vwo.',
    tone: 'b',
  },
  {
    slug: 'marian',
    name: 'Marian te Riele',
    initials: 'MR',
    role: 'Docent bètavakken',
    subjects: ['Wiskunde', 'Natuurkunde', 'Scheikunde', 'Natuur en Techniek', 'Economie'],
    bio: 'Studeerde scheikunde en milieukunde en werkte op diverse scholen in Zutphen. Geeft bijles tot en met 6 vwo.',
    tone: 'c',
  },
  {
    slug: 'stance',
    name: 'Stance Westerhoud',
    initials: 'SW',
    role: 'Docent Frans',
    subjects: ['Frans', 'Conversatielessen'],
    bio: 'Opgegroeid in Zutphen, woonde ruim zes jaar in Parijs en studeerde aan de Sorbonne. Neemt de tijd voor leerlingen: luisteren, motiveren en leren leuk maken.',
    tone: 'a',
  },
  {
    slug: 'kirsten',
    name: 'Kirsten Cooiman',
    initials: 'KC',
    role: 'Docent talen en maatschappijvakken',
    subjects: ['Engels', 'Duits', 'Nederlands', 'Frans en Spaans onderbouw', 'Aardrijkskunde', 'Levensbeschouwing', 'Maatschappijleer'],
    bio: 'Vloog 17 jaar voor de KLM de wereld over en leerde zich in alle talen soepel uitdrukken. Coacht ook bij de obstakels die leerlingen zichzelf soms opwerpen bij het studeren.',
    tone: 'b',
  },
  {
    slug: 'hans',
    name: 'Hans Krommenhoek',
    initials: 'HK',
    role: 'Docent economie',
    subjects: ['Economie onderbouw', 'Economie bovenbouw'],
    bio: 'Studeerde economie aan de Radboud Universiteit en gaf al tijdens zijn studie bijles. Woont sinds 2020 in Zutphen en geeft daar leiding bij een scoutingvereniging.',
    tone: 'c',
  },
  {
    slug: 'pieter',
    name: 'Pieter Arkesteijn',
    initials: 'PA',
    role: 'Docent economie en maatschappijvakken',
    subjects: ['Economie', 'Bedrijfseconomie', 'Geschiedenis', 'Maatschappijleer'],
    bio: 'Bedrijfseconoom en oud-docent economie, daarna een loopbaan in de uitgeverij, retail en energie. Begeleidt leerlingen van alle niveaus op weg naar het eindexamen.',
    tone: 'a',
  },
];

// Vakken-overzicht voor de bijlespagina, afgeleid van de docenten hierboven.
export const subjectGroups = [
  { title: 'Talen', items: ['Engels', 'Duits', 'Nederlands', 'Frans', 'Spaans'] },
  { title: 'Bèta', items: ['Wiskunde', 'Natuurkunde', 'Scheikunde', 'Natuur en Techniek'] },
  { title: 'Economie', items: ['Economie', 'Bedrijfseconomie'] },
  { title: 'Maatschappij', items: ['Geschiedenis', 'Aardrijkskunde', 'Maatschappijleer', 'Maatschappijwetenschappen', 'Levensbeschouwing'] },
];

export type Quote = { text: string; who: string; place?: string };

export const quotes: Quote[] = [
  {
    text: 'Onze dochter heeft de laatste drie jaar geweldige cijfers weten te behalen. Het fijnste vinden we nog dat er thuis niet langer spanningen zijn over het schoolwerk.',
    who: 'Ouder',
  },
  {
    text: 'Het is erg fijn dat onze zoon door HomeworXX net dat beetje extra aandacht kreeg dat hij weer met plezier naar school ging en mooie cijfers haalde.',
    who: 'Hendy',
  },
  {
    text: 'Geertruud is een warme persoonlijkheid met voeling naar mijn dochter. Ze heeft haar duidelijkheid gegeven en toch ook een plek waar ze veilig was.',
    who: 'Birgit',
  },
  {
    text: 'Hij heeft zijn zelfvertrouwen terug met betrekking tot wiskunde en voelt dat hij de stof beheerst.',
    who: 'Ingrid T.',
    place: 'over de Summerschool',
  },
  {
    text: 'Hartelijk dank voor alle steun en geduld voor onze zoon. Dankzij jou heeft hij zijn Mavo-diploma gehaald!',
    who: 'Moeder',
  },
  {
    text: 'Ik verwijs de ouders en leerlingen van mijn coachgroep altijd graag aan je door.',
    who: 'Docent middelbare school Zutphen',
  },
];

export const faq = [
  {
    q: 'Wat kost huiswerkbegeleiding?',
    a: 'Dat hangt af van het aantal dagen per week. Twee dagen kost € 210 per vier aaneengesloten weken, vijf dagen € 405. Alle tarieven staan op de tarievenpagina.',
  },
  {
    q: 'Hoe lang moet ik minimaal afnemen?',
    a: 'Huiswerkbegeleiding loopt per vier aaneengesloten weken, met minimaal twee dagen per week. Bijles neem je af in een pakket van minimaal vier lessen van een uur.',
  },
  {
    q: 'Op welke tijden kan mijn kind komen?',
    a: 'Huiswerkbegeleiding is elke schooldag van 14.00 tot 18.00 uur, soms zijn andere tijden mogelijk. Bijles is in overleg elke schooldag tussen 9.00 en 18.00 uur.',
  },
  {
    q: 'Voor welke leerlingen is het bedoeld?',
    a: 'Voor leerlingen van alle middelbare schooltypen, ruwweg van 12 tot en met 20 jaar. Ook basisschoolleerlingen zijn welkom.',
  },
  {
    q: 'Hoe weet ik hoe het met mijn kind gaat?',
    a: 'Elke vier weken ontvangen de leerling, de ouders of verzorgers en eventueel de mentor een korte schriftelijke rapportage over werkhouding, sterke en zwakke leereigenschappen en aanbevelingen.',
  },
  {
    q: 'Kunnen we eerst kennismaken?',
    a: 'Ja. Maak vrijblijvend een afspraak, dan kijken we samen wat past bij je kind.',
  },
  {
    q: 'Wat is HomeworXX Class?',
    a: 'Een eigen werkplek om zonder begeleiding je huiswerk te maken. Je gebruikt dezelfde rustige ruimte, tegen een lager tarief: vanaf € 115 per vier weken.',
  },
  {
    q: 'Waar zit HomeworXX?',
    a: 'Aan de Berkelkade 14-08 in Zutphen. Elke leerling heeft er een eigen werktafel, stoel en lampje.',
  },
];
