// network.js
export const fetchArticles = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
  
    return [
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
        {
          id: "6",
          title: "Lansarea noului smartphone Zeta.",
          description:
            "Compania Zeta a lansat un nou model de smartphone cu funcții inovative.",
          content: `<p>Compania Zeta a lansat astăzi noul său model de smartphone, care vine cu funcții inovative, inclusiv o cameră cu inteligență artificială și un ecran pliabil. Noul dispozitiv promite să revoluționeze piața smartphone-urilor, oferind performanțe de top și un design futurist.</p>
          <p>Specialiștii din industrie anticipează un succes major pentru acest model, care deja a generat un interes considerabil înainte de lansare.</p>`,
          timeAgo: "3 zile",
          author: "Sophia Lee",
          date: "Dec 6, 2023",
        },
        {
          id: "7",
          title: "Ghid de călătorie: Cele mai frumoase locuri din Japonia.",
          description:
            "Descoperă cele mai frumoase destinații turistice din Japonia.",
          content: `<p>Japonia este o țară cu o bogată istorie și cultură, oferind turiștilor o gamă largă de destinații fascinante. De la agitația orașului Tokyo, la liniștea templelor din Kyoto și frumusețea naturală a Muntelui Fuji, Japonia are câte ceva pentru fiecare vizitator.</p>
          <p>Ghidul nostru include cele mai frumoase locuri de vizitat, sfaturi de călătorie și informații practice pentru a vă face șederea în Japonia de neuitat.</p>`,
          timeAgo: "4 zile",
          author: "Daniela Vasquez",
          date: "Dec 7, 2023",
        },
        {
          id: "8",
          title: "Studiu: Impactul schimbărilor climatice asupra agriculturii.",
          description:
            "Un nou studiu arată efectele devastatoare ale schimbărilor climatice asupra agriculturii.",
          content: `<p>Un studiu recent realizat de cercetători de la Universitatea din Oxford a arătat că schimbările climatice au un impact devastator asupra producției agricole globale. Temperaturile extreme, seceta și schimbările în tiparele de precipitații pun în pericol securitatea alimentară mondială.</p>
          <p>Cercetătorii cer măsuri urgente pentru a combate schimbările climatice și pentru a proteja agricultura globală.</p>`,
          timeAgo: "5 zile",
          author: "Robert King",
          date: "Dec 8, 2023",
        },
        {
          id: "9",
          title: "Concert caritabil pentru victimele cutremurului.",
          description:
            "Mai mulți artiști de renume au participat la un concert caritabil.",
          content: `<p>Artiști de renume din întreaga lume au participat la un concert caritabil organizat pentru a strânge fonduri pentru victimele recentului cutremur din Asia de Sud-Est. Concertul, care a avut loc la New York, a strâns milioane de dolari pentru ajutor umanitar.</p>
          <p>Evenimentul a fost un succes major, iar organizatorii speră să continue eforturile de sprijinire a celor afectați de dezastre naturale.</p>`,
          timeAgo: "6 zile",
          author: "Linda Green",
          date: "Dec 9, 2023",
        },
        {
          id: "10",
          title: "Lansarea primei stații spațiale comerciale.",
          description: "Compania SpaceX a lansat prima stație spațială comercială.",
          content: `<p>SpaceX a lansat prima stație spațială comercială, marcând un nou capitol în explorarea spațială. Stația, numită „Freedom”, este destinată cercetării științifice și turismului spațial, oferind companiilor și persoanelor particulare oportunitatea de a experimenta viața în spațiu.</p>
          <p>Este un pas important pentru privatizarea explorării spațiale și deschiderea cosmosului pentru scopuri comerciale.</p>`,
          timeAgo: "1 săptămână",
          author: "James Scott",
          date: "Dec 10, 2023",
        },
      ];
  };
  
  export const fetchArticleById = async (id) => {
    const articles = await fetchArticles();
    return articles.find((article) => article.id === id);
  };
  
  export const fetchAboutContent = async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return "Welcome to our platform! We are dedicated to providing high-quality, verified news and insightful articles on a variety of topics. Our mission is to keep you informed and engaged with content that matters.";
  };
  
  export const fetchContactContent = async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return "We'd love to hear from you! For inquiries, feedback, or support, please reach out to us via email at support@medium.com or fill out the contact form below. We’re here to help!";
  };
  