// network.js

// Mock data
let mockAboutContent = "This is the About page content that has been saved.";
let mockContactContent = "This is the Contact page content that has been saved.";

let mockArticles = [
  {
    id: "1",
    title: "Campanie de înșelăciuni pe e-mail.",
    description:
      "Atacatorii trimit citații falsificate pentru a obține informații personale.",
    content: `<p>Poliția Română avertizează asupra unui nou tip de înșelăciune denumit “Government Impersonation Scam”. În cadrul acestei metode, atacatorii trimit emailuri ce par a proveni de la instituții oficiale, cum ar fi Poliția Română, solicitând informații personale sau financiare sub pretextul unor acuzații false de infracțiuni grave.</p>
    <p>Aceste emailuri sunt periculoase și pot duce la furt de identitate sau pierderi financiare. Autoritățile recomandă să nu se ofere astfel de informații și să se contacteze direct instituția menționată pentru verificări.</p>`,
    timeAgo: "2 ore",
    author: "John Doe",
    date: "Dec 1, 2023",
  },
  {
    id: "2",
    title: "Raport: Creșterea numărului de mașini electrice.",
    description:
      "Numărul de mașini electrice înmatriculate a crescut cu 25% în ultimul an.",
    content: `<p>Potrivit unui nou raport al Asociației Producătorilor Auto, numărul de mașini electrice înmatriculate în Europa a crescut cu 25% față de anul precedent. Aceasta reflectă o tendință crescută către vehicule mai prietenoase cu mediul.</p>
    <p>Raportul sugerează că principalele motive pentru această creștere includ politicile guvernamentale de subvenționare a achizițiilor de mașini electrice și creșterea infrastructurii pentru încărcarea acestora.</p>`,
    timeAgo: "3 ore",
    author: "Jane Smith",
    date: "Dec 2, 2023",
  },
  {
    id: "3",
    title: "Proteste în fața Parlamentului.",
    description:
      "Mii de oameni au protestat astăzi în fața Parlamentului față de noile măsuri fiscale.",
    content: `<p>Astăzi, mii de oameni s-au adunat în fața Parlamentului pentru a protesta împotriva noilor măsuri fiscale propuse de guvern. Manifestanții au cerut retragerea imediată a proiectului de lege, pe care îl consideră inechitabil și dăunător pentru economia națională.</p>
    <p>Protestele s-au desfășurat pașnic, dar autoritățile au fost prezente în număr mare pentru a asigura ordinea publică.</p>`,
    timeAgo: "5 ore",
    author: "Alice Johnson",
    date: "Dec 3, 2023",
  },
  {
    id: "4",
    title: "Noul sezon al serialului „Misterele Orașului”.",
    description:
      "Sezonul al doilea al serialului a fost lansat cu mare succes.",
    content: `<p>Serialul „Misterele Orașului” a revenit cu un al doilea sezon mult așteptat de fani. Noul sezon explorează noi intrigi și personaje, iar criticii deja îl numesc un succes răsunător.</p>
    <p>În primele 24 de ore de la lansare, serialul a fost vizionat de milioane de oameni, stabilind noi recorduri pentru platforma de streaming pe care este difuzat.</p>`,
    timeAgo: "1 zi",
    author: "Michael Brown",
    date: "Dec 4, 2023",
  },
  {
    id: "5",
    title: "Descoperire arheologică impresionantă în Egipt.",
    description:
      "O echipă de arheologi a descoperit un nou mormânt faraonic intact.",
    content: `<p>O echipă de arheologi din Egipt a anunțat descoperirea unui mormânt faraonic intact, datând din perioada Vechiului Regat. Mormântul conține artefacte rare și picturi murale bine conservate, oferind noi perspective asupra vieții în Egiptul Antic.</p>
    <p>„Este una dintre cele mai importante descoperiri din ultimele decenii”, a declarat șeful echipei arheologice.</p>`,
    timeAgo: "2 zile",
    author: "Emily Clark",
    date: "Dec 5, 2023",
  },
];

const API_URL = process.env.REACT_APP_API_URL;

// Fetch About Content
export const fetchAboutContent = async () => {
  await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate network delay
  return mockAboutContent;
};

// Fetch Contact Content
export const fetchContactContent = async () => {
  await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate network delay
  return mockContactContent;
};

// Save About Content
export const saveAboutContent = async (content) => {
  await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate network delay
  mockAboutContent = content;
  return mockAboutContent;
};

// Save Contact Content
export const saveContactContent = async (content) => {
  await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate network delay
  mockContactContent = content;
  return mockContactContent;
};

// Fetch Articles
export const fetchArticles = async () => {
  await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate network delay
  return mockArticles;
};

// Fetch Article by ID
export const fetchArticleById = async (id) => {
  await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate network delay
  return mockArticles.find((article) => article.id === id);
};

// Create or Update Article
export const saveArticle = async (article) => {
  await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate network delay
  if (article.id) {
    const index = mockArticles.findIndex((a) => a.id === article.id);
    mockArticles[index] = article;
  } else {
    article.id = String(mockArticles.length + 1);
    mockArticles.push(article);
  }
  return article;
};

// Delete Article
export const deleteArticle = async (id) => {
  await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate network delay
  mockArticles = mockArticles.filter((article) => article.id !== id);
  return id;
};
