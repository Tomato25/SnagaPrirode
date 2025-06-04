const productsData = [
  {
    id:"1",
    category: "Voće i orašasti plodovi",
    categoryDescription: [
      {
        paragraph:
          "Svi nasadi su smješteni na otprilike 350 metara nadmorske visine. Okruženi su šumom, na području bogatom vodom, u potpuno čistoj prirodi. U blizini voćnjaka nema zagađivača, niti velikih poljoprivrednih gospodarstava, pa stoga naše voće raste u odličnim uvjetima, slobodnim od pesticida, kemikalija i raznih onečišćenja.",
      },
      {
        paragraph:
          "Sve voće koje uzgajamo su stare hrvatske sorte cijepljene na divljim podlogama. One su izrazito otporne, bogate mineralima, vitaminima, antioksidansima i svime potrebnim za zdravlje.",
      },
      {
        paragraph:
          "Voćke su tretirane isključivo prirodnim sredstvima za zaštitu. Trudimo se minimalizirati ili u potpunosti zaobići upotrebu kemijskih sredstava.",
      },
      {
        paragraph:
          "Nadamo se da ćete uživati u okusima, mirisima i blagodatima koje pruža naše voće!",
      },
    ],
    categoryImage: "voce",
    products: [
      {
        id: "1",
        name: "Jabuke",
        description: [
          {
            paragraph:
              "Imamo veliki izbor jabuka, za svačiji ukus. Trenutno posađeno 20ak vrsta koje sazrijevaju od srpnja pa skroz do kraja studenog. Od malih do ogromnih, kiselih do slatkih, svih boja i oblika.",
          },
          {
            paragraph:
              "Jabuke koje će vas podsjetiti na djetinjstvo, bogate okusom i mirisom!",
          },
        ],
        imageFolder: "Jabuke",
        images: [{ src: "jabuka1" }, { src: "jabuka2" }, { src: "jabuka3" }],
        ingredients: [],
        actsAs: [],

        benefits: [],
      },
      {
        id: "2",
        name: "Kruške",
        description: [
          {
            paragraph:
              "Posađeno desetak vrsta krušaka, koje sazrijevaju od kolovoza do studenog. Svih mogućih boja, okusa i oblika. Vjerujemo da svatko može pronaći i izabrati baš onu koja je za nju/njega!",
          },
          {
            paragraph:
              "Imamo kruške koje su izvrsne za jesti direktno sa stabla, one koje su odlične za preradu (izradu pekmeza),  te naravno kruške za rakiju i za kiseljenje.",
          },
        ],
        imageFolder: "Kruške",
        images: [
          { src: "kruska1" },
          { src: "kruska2" },
          { src: "kruska3" },
          { src: "kruska4" },
          { src: "kruska5" },
          { src: "kruska6" },
        ],
        ingredients: [],
        actsAs: [],

        benefits: [],
      },
      {
        id: "3",
        name: "Breskve",
        description: [
          {
            paragraph:
              "U nasadima trenutno imamo vinogradarske breskve. Krupne, sočne i ukusne breskve koje dozrijevaju krajem kolovoza. Osvajaju svačije nepce svojim sokom, jednostavno prefine!",
          },
        ],
        imageFolder: "Breskve",
        images: [{ src: "breskva1" }],
        ingredients: [],
        actsAs: [],

        benefits: [],
      },
      {
        id: "4",
        name: "Orasi",
        description: [
          {
            paragraph:
              "Kvalitetni orasi, od srednje veličine do krupnih. Odličnog okusa, dobri za jesti sirovi, kao i za izradu kolača i ostalih slastica. Orah je nevjerojatan izvor vrijednih nutrijenata, sadrži: antioksidanse, željezo, kalcij, magnezij, fosfor, cink, mangan, masne kiseline te vitamine B, E i K.",
          },
          {
            paragraph: "Sirovi orašasti plodovi su melem za tijelo!",
          },
        ],
        imageFolder: "Orasi",
        images: [{ src: "orasi1" }, { src: "orasi2" }],
        ingredients: [],
        actsAs: [],

        benefits: [],
      },
    ],
  },

  {
    id:"2",
    category: "Sadnice",
    categoryDescription: [
      {
        paragraph: "Sadnice odlične kvalitete iz vlastite proizvodnje.",
      },
      {
        paragraph:
          "U ponudi imamo sadnice različitih veličina i starosti. Sve u ponudi uzgajamo i za sebe, u našem vrtu i za ukrašavanje okućnice, tako da za svaku kupljenu sadnicu možete dobiti uputstva za daljnju njegu, brigu i uzgoj biljke iz vlastitog iskustva.",
      },
      {
        paragraph:
          "Svaka biljka je uzgojena i odgojena sa puno ljubavi, te smo sigurni da ćete biti zadovoljni!",
      },
    ],
    categoryImage: "sadnice",
    products: [
      {
        id: "1",
        name: "Kaktusi",
        description: [
          {
            paragraph:
              "U ponudi imamo više vrsta kaktusa. Od vrlo otpornih do jako osjetljivih, bodljikavih do mekanih, plosnatih i okruglih.",
          },
          {
            paragraph:
              "Zahvalan, jednostavan za održavanje i jako lijepi ukras za svačiju kuću.",
          },
        ],
        imageFolder: "Kaktusi",
        images: [
          { src: "kaktus1" },
          { src: "kaktus2" },
          { src: "kaktus3" },
          { src: "kaktus4" },
          { src: "kaktus5" },
          { src: "kaktus6" },
          { src: "kaktus7" },
          { src: "kaktus8" },
          { src: "kaktus9" },
          { src: "kaktus10" },
          { src: "kaktus12" },
          { src: "kaktus13" },
          { src: "kaktus14" },
          { src: "kaktus15" },
          { src: "kaktus16" },
          { src: "kaktus17" },
          { src: "kaktus18" },
          { src: "kaktus19" },
          { src: "kaktus20" },
          { src: "kaktus21" },
        ],
        ingredients: [],
        actsAs: [],
        benefits: [],
      },
      {
        id: "2",
        name: "Sukulenti",
        description: [
          {
            paragraph:
              "Kod nas još možete pronaći razne vrste sukulenata, za svaki dio kuće i dvorišta. Od ljepotana za sunčani prozor spavaće sobe, do onih otpornih na nepovoljne vremenske uvjete, koji će biti savršeni za Vaš kamenjar.",
          },
        ],
        imageFolder: "Sukulenti",

        images: [
          { src: "sukulent1" },
          { src: "sukulent2" },
          { src: "sukulent3" },
          { src: "sukulent4" },
          { src: "sukulent5" },
          { src: "sukulent6" },
          { src: "sukulent7" },
          { src: "sukulent8" },
          { src: "sukulent9" },
          { src: "sukulent10" },
          { src: "sukulent11" },
          { src: "sukulent12" },
          { src: "sukulent13" },
          { src: "sukulent14" },
          { src: "sukulent15" },
          { src: "sukulent16"},
            { src: "sukulent17" },
            { src: "sukulent18" },
            { src: "sukulent19" },
            { src: "sukulent20" },
            { src: "sukulent21" },
            { src: "sukulent22" },
            { src: "sukulent23" },
          { src: "sukulent24" },
          { src: "sukulent25" },
          { src: "sukulent26" },
          { src: "sukulent27" },
          { src: "sukulent28" },
        ],
        ingredients: [],
        actsAs: [],
        benefits: [],
      },
      {
        id: "3",
        name: "Ružmarin",
        description: [
          {
            paragraph:
              " Sadnice ružmarina koje uzgajamo iz reznica i iz sjemena. Raznih vrsta, vrlo otpornih na niske temperature i snijeg.",
          },
          {
            paragraph:
              " Odlični za ukrasiti svačiju okućnicu, koliko izgledom toliko i mirisom. Također odličan i vrlo ukusan začin.",
          },
        ],
        imageFolder: "Ruzmarin",

        images: [{ src: "ruzmarin1" }, { src: "ruzmarin2" }],
        ingredients: [],
        actsAs: [],

        benefits: [],
      },
      {
        id: "4",
        name: "Lavanda",
        description: [
          {
            paragraph:
              "Prekrasne sadnice za Vašu okućnicu, balkon ili prozor. Svojim cvjetovima i mirisom ukrašava svaki prostor. Vrlo korisna kao čaj i zaštita za Vašu odjeću.",
          },
        ],
        imageFolder: "Lavanda",
        images: [{ src: "lavanda1" }],
        ingredients: [],
        actsAs: [],
        benefits: [],
      },
    ],
  },

  {
    id:"3",
    category: "Domaći sokovi",
    categoryDescription: [
      {
        paragraph:
          "100% prirodni, zdravi sokovi bez dodanih šećera i aditiva. Sokovi su pravljeni isključivo od voća iz vlastite proizvodnje :)",
      },
      {
        paragraph: "Dostupni su u pakiranjima od 1 i 5 litara.",
      },
    ],
    categoryImage: "voce",
    products: [
      {
        id: "",
        name: "",
        description: [],
        imageFolder: "",
        images: [],
        actsAs: [],
        benefits: [],
        ingredients: [],
      },
    ],
  },
  {
    id:"4",
    category: "Melemi",
    categoryDescription: [
      {
        paragraph: "Melemi koji su napravljeni da istinski djeluju!",
      },
      {
        paragraph:
          "Ručno izrađujemo vlastite meleme od najkvalitetnijih organskih sastojaka. 100% prirodni, vege i bez dodataka.",
      },
      {
        paragraph:
          " U ponudi imamo:\nMelem Original – naš izvorni melem s kojim je sve krenulo :)\n Melem Extra – namjenjen za najteže slučajeve \nMelem Gavez – naša vege verzija gavezove masti \nBalzam za usne – njega za usne prema originalnoj recepturi u dvije izvedbe: Original i Kakao",
      },
      {
        paragraph: "Sve izrađeno sa puno ljubavi!",
      },
    ],
    categoryImage: "melemi",
    products: [
      {
        id: "1",
        name: "Melem Original",
        description: [
          {
            paragraph:
              "Naš izvorni recept za melem s kojim je sve krenulo i kojega smo s vremenom usavršili i nazvali ga „Melem original” :)",
          },
          {
            paragraph:
              "Dubinski njeguje, obnavlja i štiti kožu. Namjenjen je za svakodnevnu uporabu. Može se nanositi na cijelo tijelo i može se koristiti za sve tipove kože.",
          },
          {
            paragraph: "Dostupan je u pakiranjima od: 7ml, 30ml i 50ml.",
          },
        ],
        actsAs: [],

        ingredients: [
          { ingredient: "kokosovo ulje" },
          { ingredient: "maslinovo ulje" },
          { ingredient: "konopljino ulje" },
	         { ingredient: "pčelinji vosak" },
          { ingredient: "ružmarinovo ulje" },
          { ingredient: "ulje bijelog bora" },
          
        ],
        benefits: [
          { benefit: "iritacije kože", id: "1" },
          { benefit: "crvenila kože", id: "2" },
          { benefit: "hemoroida", id: "3" },
          { benefit: "zarastanja rana", id: "4" },
          { benefit: "zacjeljivanja ožiljaka", id: "5" },
          { benefit: "opekotina", id: "6" },
          { benefit: "seboreje", id: "7" },
          { benefit: "psorijaze", id: "8" },
          { benefit: "neurodermatitisa", id: "9" },
          { benefit: "raznih herpesa", id: "10" },
          { benefit: "ožiljaka od alergija", id: "11" },
          { benefit: "ugriza kukaca", id: "12" },
          { benefit: "još mnogo toga, popis se stalno povećava!", id: "13" },
        ],
        imageFolder: "MelemOriginal",
        images: [
          { src: "melemoriginal1" },
          { src: "melemoriginal2" },
      
        ],
      },
      {
        id: "2",
        name: "Melem Extra",
        description: [
          {
            paragraph:
              "Melem po posebnoj narudžbi, za najteže slučajeve. Namjenjen samo onima kojima je to zaista potrebno!",
          },

          {
            paragraph: "Dostupan je u pakiranjima od: 50ml i 100ml.",
          },
          {
            paragraph:
              "Za sve dodatne informacije stojimo Vam na raspolaganju!",
          },
        ],
        ingredients: [
          { ingredient: "kokosovo ulje" },
          { ingredient: "maslinovo ulje" },
          { ingredient: "konopljino ulje" },
	  { ingredient: "pčelinji vosak" },
          { ingredient: "ružmarinovo ulje" },
          { ingredient: "ulje bijelog bora" },
          
        ],
        actsAs: [],

        benefits: [],
        imageFolder: "MelemExtra",
        images: [
          { src: "melem1" },
          { src: "melem2" },

        ],
      },
           {
        id: "4",
        name: "Melem Gavez",
        description: [
          {
            paragraph:
              "Vege verzija gavezove masti. Ljekovita svojstva gaveza su poznata još od srednjeg vijeka, a danas su i znanstveno dokazana!",
          },
          {
            paragraph:
              "Ubrzava rast i obnovu ozlijeđenih kostiju, te ima protuupalno djelovanje.",
          },
          {
            paragraph: "Dostupan je u pakiranjima od: 50ml",
          },
        ],
        actsAs: [],

        ingredients: [
          { ingredient: "svježi korijen gaveza" },
          { ingredient: "kokosovo ulje" },
          { ingredient: "maslinovo ulje" },
	  { ingredient: "pčelinji vosak" },
          { ingredient: "ulje mente" },
          { ingredient: "ulje eukaliptusa" },
        ],
        benefits: [
          { benefit: "uganuća", id: "1" },
          { benefit: "udaraca", id: "2" },
          { benefit: "nagnječenja tkiva", id: "3" },
          { benefit: "bolova u leđima", id: "4" },
          { benefit: "istegnuća ligamenata i mišića", id: "5" },
          { benefit: "artritisa", id: "6" },
          { benefit: "bolova u zglobovima", id: "7" },
          { benefit: "prijeloma kostiju", id: "8" },
          { benefit: "zarastanja rana", id: "9" },
          { benefit: "čireva", id: "10" },
          { benefit: "reume", id: "11" },
        ],
        imageFolder: "MelemGavez",
        images: [
          { src: "melemgavez1" },
          
        ],
      },
{
        id: "5",
        name: "Balzam za usne",
        description: [
          {
            paragraph:
              "Za njegu usana u ponudi imamo potpuno prirodni balzam za usne na bazi prirodnih maslaca, ulja i pčelinjeg voska. Recept za balzam je temeljen na melemu “Original” koji se pokazao jako učinkovit za njegu i regeneraciju suhih i ispucalih usana.",
          },
          {
            paragraph:
              "Za glatke i nježne usne balzam trenutno dolazi u dvije izvedbe: Original i Kokos kakao.",
          },
          {
            paragraph: "Dostupan je u pakiranju od 50ml.",
          },

        ],
        actsAs: [],

        ingredients: [
    {
      title: "Balzam za usne 'Original'",
      list: [
        "kokosovo ulje",
        "maslinovo ulje",
        "konopljino ulje",
        "pčelinji vosak",
        "ružmarinovo ulje",
        "ulje bijelog bora",
      ],
    },
    {
      title: "Balzam za usne 'Kokos kakao'",
      list: [
        "kokosovo ulje",
        "kakao maslac",
        "konopljino ulje",
        "pčelinji vosak",
      ],
    },
  ],
        benefits: [
                 ],
        imageFolder: "Balzami",
        images: [
          { src: "balzamzausne1" },
          { src: "balzamzausne2" },
        ],
      },

    ],
  },
  {
    id:"5",
    category: "Ljekovito bilje i čajevi",
    categoryDescription: [
      {
        paragraph:
          "“Pijenje šalice čaja dnevno zasigurno će izgladnjeti ljekarne.”",
      },
      {
        paragraph:
          "U našoj ponudi možete pronaći nekoliko vrsta čajeva, od kojih neke sami beremo, a neke nabavljamo u suradnji sa lokalnim travarima i biljnim ljekarnama.",
      },
      {
        paragraph:
          "Biljke imaju biološki aktivne spojeve širokog spektra. Kako liječe ljudski organizam, tako mogu liječiti i prostor otpuštanjem određenih aroma. Čaj umiruje um i misli, a tijelo oslobađa tenzija.",
      },
      {
        paragraph:
          "Ispijanje vruće šalice čaja u bilo koje doba dana ima meditativna svojstva!",
      },
      {
        paragraph: "“Čaj je religija umjetnosti života.”",
      },
    ],
    categoryImage: "ljekovitobilje",
    products: [
      {
        id: "1",
        name: "Menta",
        description: [
          {
            paragraph:
              "Čaj od mente, poznat još i kao čaj od nane, je vrlo poznat diljem svijeta već tisućama godina. Menta (lat. mentha) je višegodišnja biljka koja prirodno raste na područjima Europe i Azije. Metvica spada među čajeve koje bi uvijek trebalo imati kod kuće, jer dobro dođe kod različitih tegoba.",
          },
          {
            paragraph:
              "Sadrži visoku količinu mentola, koji je po mirisu čini prepoznatljivom među tisućama biljaka. Mentol aktivira receptore osjetljive na hladnoću u koži i sluznici tkiva, zbog čega se javlja osjećaj hlađenja, po kojemu je ova biljka prepoznatljiva. Jedno od primarnih svojstava metvice je ublažavanje stresa. Sadrži veće količine triptofana, od kojeg nastaje serotonin koji podiže raspoloženje.",
          },
          {
            paragraph: "Dostupna je u pakiranjima od: 50g i 100g.",
          },
        ],
        ingredients: [],
        actsAs: [],

        benefits: [
          { benefit: "pomaže kod astme i alergije" },
          { benefit: "jača imunitet" },
          { benefit: "suzbija upale i infekcije" },
          { benefit: "pomaže kod probavnih tegoba" },
          { benefit: "sprječava bolesti desni i loš zadah" },
          { benefit: "potpomaže mršavljenju" },
          { benefit: "ublažava stres i nesanicu" },
        ],
        imageFolder: "Menta",
        images: [{ src: "menta1" }, { src: "menta2" }],
      },
      {
        id: "2",
        name: "Kamilica",
        description: [
          {
            paragraph:
              "Kamilica (lat. matricaria chamomilla) je dobro poznata biljka i dobar saveznik u borbi protiv različitih zdravstvenih tegoba. Raširena je po cijeloj Europi i Aziji, a raste samoniklo. Cvjetovi kamilice su ljekoviti i skupljaju se preko ljeta.",
          },
          {
            paragraph:
              "Čaj od kamilice bogat je flavonoidima i seskviterpenima te ostalim antioksidansima koji imaju snažan pozitivan učinak na ljudski organizam.",
          },
          {
            paragraph: "Dostupna je u pakiranjima od: 50g i 100g.",
          },
        ],
        ingredients: [],
        actsAs: [],

        benefits: [
          { benefit: "nesanice" },
          { benefit: "oslabljenog imuniteta" },
          { benefit: "uznemirenog želuca" },
          { benefit: "problema s probavom" },
          { benefit: "menstrualnih tegoba" },
          { benefit: "problema s kožom i kosom" },
        ],
        imageFolder: "Kamilica",
        images: [
          { src: "kamilica1" },
          { src: "kamilica2" },
          { src: "kamilica3" },
        ],
      },
      {
        id: "3",
        name: "Trava iva",
        description: [
          {
            paragraph: "„Trava iva od mrtva pravi živa.”",
          },
          {
            paragraph:
              "Trava iva (lat. teucrium montanum) vrlo je ljekovita biljka koja raste u planinskim krajevima diljem svijeta. Koristila se za liječenje još u doba antike. Postoji staro narodno vjerovanje na Balkanu prema kojemu ova trava omogućuje mentalni i fizički oporavak nakon duge bolesti, teške tjelesne ili duševne iscrpljenosti.",
          },
          {
            paragraph:
              "Iako je manje poznata u široj javnosti, trava iva jedna je od najpouzdanijih ljekovitih biljaka. Jako je cijenjena u planinsko-brdskim krajevima, a kažu da liječi skoro sve teške bolesti!",
          },
          {
            paragraph: "Dostupna je u pakiranjima od: 50g i 100g.",
          },
        ],
        ingredients: [],
        actsAs: [],
        benefits: [
          { benefit: "jača imunitet" },
          { benefit: "smanjuje upale" },
          { benefit: "jak je antioksidans" },
          { benefit: "djeluje protiv bakterija i gljivica" },
          { benefit: "pomaže kod bolesti želuca" },
          { benefit: "pomaže kod depresije" },
          { benefit: "izbacuje višak tekućine iz organizma" },
          { benefit: "primjenjuje se u liječenju bolesti dišnih organa" },
          { benefit: "pomaže kod hemeroida i šećerne bolesti" },
          { benefit: "čisti organizam" },
        ],
        imageFolder: "TravaIva",
        images: [
          { src: "travaiva1" },

          { src: "travaiva4" },
          { src: "travaiva5" },
        ],
      },
      {
        id: "4",
        name: "Timijan",
        description: [
          {
            paragraph:
              "Timijan (lat. thymus vulgaris) je jedan od jeftinijih i svakome dostupnih lijekova. Njegove ljekovitost i hranjivost poznate su od davnina. Smatra se da je ova biljka podrijetlom s Mediterana, a danas je rasprostranjena po cijelom svijetu.",
          },
          {
            paragraph:
              "U njegovom su sastavu između ostalog borneol, karvakrol, timol, saponini, tanin, glikozidi, vitamini A, C, D, B-kompleks, magnezij, fosfor, kalij i cink.",
          },
          {
            paragraph: "Dostupan je u pakiranjima od: 50g i 100g.",
          },
        ],
        ingredients: [],
        actsAs: [
          { benefit: "antireumatik" },
          { benefit: "antiseptik" },
          { benefit: "antikoagulans" },
          { benefit: "baktericid" },
          { benefit: "afrodizijak" },
          { benefit: "tonik" },
          { benefit: "stimulant" },
          { benefit: "relaksant" },
          { benefit: "antiparazitik" },
          { benefit: "prirodni konzervans i insekticid" },
        ],
        benefits: [
          { benefit: "poticanja iskašljavanja" },
          { benefit: "infekcije i bolesti bubrega" },
          { benefit: "depresije i neuroloških problema" },
          { benefit: "tuberkoloze" },
          { benefit: "bolesti probavnog sustava" },
          { benefit: "nesanice i migrene" },
          { benefit: "stimuliranja seksualne želje" },
          { benefit: "anemije" },
        ],
        imageFolder: "Timijan",
        images: [{ src: "timijan2" }, { src: "timijan3" }],
      },
{
        id: "5",
        name: "Matičnjak",
        description: [
          {
            paragraph:
              "Matičnjak (lat. melissa officinalis) je mirisna biljka iz porodice metvice, poznata po ugodnom mirisu i po raznim ljekovitim svojstvima.",
          },
          {
            paragraph:
              "Može se pohvaliti bogatim i raznolikim kemijskim sastavom koji podupire brojne zdravstvene dobrobiti: Ružmarinska kiselina, Citronelal, Luteolin, Kvercetin, Apigenin, Geraniol, Polifenoli, Triterpenoidi, Kavena kiselina, Ursolna kiselina, Kariofilen, Eugeno i brojne druge manje važne spojeve koji pridonose njegovom ukupnom kemijskom sastavu i učincima na zdravlje.",
          },
          {
            paragraph: "Dostupan je u pakiranjima od: 50g i 100g.",
          },
        ],
        ingredients: [],
        actsAs: [],
        benefits: [
          { benefit: "smanjenja stresa i tjeskobe" },
          { benefit: "poboljšava kvalitetu sna i ublažava nesanicu" },
          { benefit: "borbe protiv oksidativnog stresa, štiti od oštećenja stanica i promiče opću dobrobit" },
          { benefit: "poboljšava pamćenje i pažnju" },
          { benefit: "umiruje probavne tegobe i pomaže u ublažavanju nadutosti i probavnih smetnji" },
          { benefit: "ubrzavanja procesa zacjeljivanja herpesa" },
        ],
        imageFolder: "Maticnjak",
        images: [{ src: "maticnjak1" }],
      },
{
        id: "6",
        name: "Valerijana",
        description: [
          {
            paragraph:
              "Valerijana ili ljekoviti odoljen (lat. valeriana officinalis) se tradicionalno koristi za ublažavanje cijelog niza tegoba, a najčešći razlozi zbog kojih je ljudi uzimaju su problemi sa spavanjem, nervoza i tjeskoba.",
          },
          {
            paragraph:
              "Prema dosadašnjim istraživanjima, valerijana sadrži preko 150 aktivnih tvari koje djeluju u sinergiji. Osim eteričnog ulja, najvažniji među njima su valepotrijati, a prisutne su i slobodne aminokiseline, poput gama-aminobutirične kiseline (GABA). Pripravci valerijane povećavaju razinu GABA neurotransmitera u mozgu, što doprinosi smanjenju nervoze i održavanju normalnog sna. Valepotrijati imaju blago anksiolitičko djelovanje, a pri tomu nemaju svojstvo izazivanja ovisnosti.",
          },
          {
            paragraph: "Dostupan je u pakiranjima od: 50g i 100g.",
          },
        ],
        ingredients: [],
        actsAs: [],
        benefits: [
          { benefit: "uklanja napetost" },
          { benefit: "pomaže kod nesanice i depresije" },
          { benefit: "smiruje neurozu srca i želuca" },
          { benefit: "ujednačuje srčane otkucaje" },
          { benefit: "pojačava apetit" },
          { benefit: "pojačava mokrenje" },
	  { benefit: "čisti jetru, slezenu i žuč" },
	{ benefit: "izbacuje žučni kamenac" },
	{ benefit: "pomaže kod slabosti uslijed slabokrvnosti, menstruacijskih i klimakteričnih tegoba" },
	{ benefit: "smetnji u disanju" },
        ],
        imageFolder: "Valerijana",
        images: [{ src: "valerijana1" }, { src: "valerijana2" }],
      },
    ],
  },
{
    id:"6",
    category: "Tinkture od ljekovitog bilja",
    categoryDescription: [
      {
        paragraph:
          "Tinkture su tekući alkoholni ekstrakti iz ljekovitih biljaka. One su vrlo učinkovite kao biljne kapi koje se uzimaju samostalno ili kao dodatak piću i hrani.",
      },
      {
        paragraph: "Tinkture su puno jače i koncentriranije od čaja. samo 2-3 kapi tinkture jednake su, pa čak i jače od cijele jedne šalice čaja. Ljekoviti sastojci tinktura mogu se bolje probaviti i asimilirati nego same sirove biljke, te ulaze u krvotok brzo, gotovo momentalno.",
      },
{
        paragraph: "Alkohol održava tinkturu i znatno produžava rok trajanja, gotovo na neograničeno vrijeme. Za osobe koje ne smiju ili ne žele konzumirati alkohol, svoju dozu tinkture ukapate u vrući čaj ili prelijete vrućom vodom, tako će alkohol u potpunosti ishlapiti, a ostat će svi ljekoviti sastojci.",
      },
{
        paragraph: "Tinkture su puno jače i koncentriranije od čaja. Samo 2-3 kapi tinkture jednake su, pa čak i jače od cijele jedne šalice čaja. Ljekoviti sastojci tinktura mogu se bolje probaviti i asimilirati nego same sirove biljke, te ulaze u krvotok brzo, gotovo momentalno.",
      },
{
        paragraph: "Naše tinkture su izrađene sa premium pročišćenim 70% etilnim alkoholom od pažljivo odabranog biljnog materijala najbolje kvalitete. Jako koncentrirane!",
      },
{
        paragraph: "Inspiracija za izradu tinktura nam je bila 'Trava Iva' i želja da tu biljku približno svima. Iz našeg dugogodišnjeg iskustva, 'Trava Iva' je jedna od, ako ne i najučinkovitija biljka za razne zdravstvene probleme. Kako je sam čaj od 'Trave Ive' jako gorak i većini nas, a naročito djeci, težak i ponekad nemoguć za piti, došli smo na ideju da napravimo biljnu tinkturu, kako bi u svega par kapljica unijeli šalicu čaja u organizam.",
      },
{
        paragraph: "Tinkture su dostupne u pakiranjima: 30, 50 i 100ml.",
      },
      {
paragraph:
          "Dostupne tinkture:\nMenta \nKamilica \nTrava Iva \nTimijan \nMatičnjak \nValerijana",
      },

    ],
    categoryImage: "tinkture",
    products: [
      {
        id: "",
        name: "",
        description: [],
        imageFolder: "",
        images: [],
        actsAs: [],
        benefits: [],
        ingredients: [],
      },
    ],
    imageFolder:"Tinkture",
    images: [{ src: "tinktura1" }, { src: "tinktura2" }],
  },
];

export default productsData;
