import type { QuizQuestion } from './types/quizQuestions.types';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    answers: [
      { correct: false, text: '2' },
      { correct: true, text: '4' },
      { correct: false, text: '6' },
      { correct: false, text: '8' },
    ],
    category: 'animals',
    difficultyLevel: 0,
    id: 1,
    question: 'Ile łap ma typowy kot domowy?',
  },
  {
    answers: [
      { correct: false, text: '7' },
      { correct: true, text: '8' },
      { correct: false, text: '9' },
      { correct: false, text: '10' },
    ],
    category: 'space',
    difficultyLevel: 0,
    id: 2,
    question: 'Ile planet ma Układ Słoneczny (oficjalnie)?',
  },
  {
    answers: [
      { correct: false, text: 'Mikroskop' },
      { correct: true, text: 'Teleskop' },
      { correct: false, text: 'Termometr' },
      { correct: false, text: 'Barometr' },
    ],
    category: 'science',
    difficultyLevel: 0,
    id: 3,
    question: 'Który instrument służy do obserwacji odległych gwiazd?',
  },
  {
    answers: [
      { correct: false, text: 'Sirius' },
      { correct: true, text: 'Proxima Centauri' },
      { correct: false, text: 'Betelgeza' },
      { correct: false, text: 'Rigel' },
    ],
    category: 'space',
    difficultyLevel: 0,
    id: 4,
    question: 'Jak nazywa się najbliższa gwiazda poza Słońcem?',
  },
  {
    answers: [
      { correct: true, text: 'Albatros' },
      { correct: false, text: 'Pingwin' },
      { correct: false, text: 'Sokół' },
      { correct: false, text: 'Struś' },
    ],
    category: 'animals',
    difficultyLevel: 0,
    id: 5,
    question:
      'Które zwierzę jest znane z długiego migracyjnego lotu nad oceanami?',
  },
  {
    answers: [
      { correct: true, text: 'Wodór' },
      { correct: false, text: 'Hel' },
      { correct: false, text: 'Tlen' },
      { correct: false, text: 'Węgiel' },
    ],
    category: 'chemistry',
    difficultyLevel: 0,
    id: 6,
    question:
      'Który pierwiastek chemiczny jest najlżejszy i podstawowy w gwiazdach?',
  },
  {
    answers: [
      { correct: false, text: 'Pasma Kuipera' },
      { correct: true, text: 'Pas asteroid' },
      { correct: false, text: 'Pasma Oorta' },
      { correct: false, text: 'Pas Orion' },
    ],
    category: 'space',
    difficultyLevel: 0,
    id: 7,
    question: 'Jak nazywa się pas planetarny między Marsem a Jowiszem?',
  },
  {
    answers: [
      { correct: true, text: 'Kameleon' },
      { correct: false, text: 'Lew' },
      { correct: false, text: 'Krokodyl' },
      { correct: false, text: 'Słoń' },
    ],
    category: 'animals',
    difficultyLevel: 0,
    id: 8,
    question: 'Które zwierzę potrafi zmieniać kolor ciała, by się kamuflować?',
  },
  {
    answers: [
      { correct: false, text: 'Płaska' },
      { correct: true, text: 'Sferyczny (z lekkim spłaszczeniem)' },
      { correct: false, text: 'Czworokąt' },
      { correct: false, text: 'Trójkąt' },
    ],
    category: 'space',
    difficultyLevel: 0,
    id: 9,
    question: 'Jaki kształt ma Ziemia z dużej odległości?',
  },
  {
    answers: [
      { correct: false, text: 'Barometr' },
      { correct: true, text: 'Termometr' },
      { correct: false, text: 'Higrometr' },
      { correct: false, text: 'Galwanometr' },
    ],
    category: 'science',
    difficultyLevel: 0,
    id: 10,
    question: 'Które urządzenie wykorzystuje się do mierzenia temperatury?',
  },

  {
    answers: [
      { correct: true, text: 'Nietoperz' },
      { correct: false, text: 'Orzeł' },
      { correct: false, text: 'Wiewiórka' },
      { correct: false, text: 'Delfin' },
    ],
    category: 'animals',
    difficultyLevel: 0,
    id: 11,
    question: 'Jaki ssak jest znany z latania?',
  },
  {
    answers: [
      { correct: true, text: 'Księżyc' },
      { correct: false, text: 'Phobos' },
      { correct: false, text: 'Europa' },
      { correct: false, text: 'Ganimedes' },
    ],
    category: 'space',
    difficultyLevel: 0,
    id: 12,
    question: 'Jak nazywa się naturalny satelita Ziemi?',
  },
  {
    answers: [
      { correct: false, text: 'Temperaturę' },
      { correct: true, text: 'Siłę trzęsienia ziemi' },
      { correct: false, text: 'Ciśnienie' },
      { correct: false, text: 'Wilgotność' },
    ],
    category: 'science',
    difficultyLevel: 0,
    id: 13,
    question: 'Co mierzy skala Richtera?',
  },
  {
    answers: [
      { correct: false, text: 'Kraków' },
      { correct: false, text: 'Gdańsk' },
      { correct: true, text: 'Warszawa' },
      { correct: false, text: 'Wrocław' },
    ],
    category: 'geography',
    difficultyLevel: 0,
    id: 14,
    question: 'Które miasto jest stolicą Polski?',
  },
  {
    answers: [
      { correct: false, text: 'Saturn' },
      { correct: true, text: 'Jowisz' },
      { correct: false, text: 'Mars' },
      { correct: false, text: 'Neptun' },
    ],
    category: 'space',
    difficultyLevel: 0,
    id: 15,
    question: 'Jak nazywa się największa planeta w Układzie Słonecznym?',
  },
  {
    answers: [
      { correct: true, text: 'Kangur' },
      { correct: false, text: 'Koala' },
      { correct: false, text: 'Wombat' },
      { correct: false, text: 'Dingo' },
    ],
    category: 'animals',
    difficultyLevel: 0,
    id: 16,
    question: 'Które zwierzę jest symbolem Australii i skacze na dwóch nogach?',
  },
  {
    answers: [
      { correct: false, text: 'Tlen' },
      { correct: true, text: 'Azot' },
      { correct: false, text: 'Dwutlenek węgla' },
      { correct: false, text: 'Hel' },
    ],
    category: 'chemistry',
    difficultyLevel: 0,
    id: 17,
    question: 'Który gaz dominująco występuje w atmosferze Ziemi?',
  },
  {
    answers: [
      {
        correct: true,
        text: 'Kamień, który wszedł w atmosferę i spadł na Ziemię',
      },
      { correct: false, text: 'Płatek śniegu' },
      { correct: false, text: 'Lód na Marsie' },
      { correct: false, text: 'Gwiazdą' },
    ],
    category: 'space',
    difficultyLevel: 0,
    id: 18,
    question: 'Czym jest meteoryt?',
  },
  {
    answers: [
      { correct: false, text: 'Słoń' },
      { correct: true, text: 'Płetwal błękitny' },
      { correct: false, text: 'Rekin wielorybi' },
      { correct: false, text: 'Hipopotam' },
    ],
    category: 'animals',
    difficultyLevel: 0,
    id: 19,
    question: 'Które stworzenie jest największym ssakiem na Ziemi?',
  },
  {
    answers: [
      { correct: false, text: 'Botanika' },
      { correct: true, text: 'Zoologia' },
      { correct: false, text: 'Geologia' },
      { correct: false, text: 'Astronomia' },
    ],
    category: 'science',
    difficultyLevel: 0,
    id: 20,
    question: 'Jak nazywa się nauka o zwierzętach?',
  },

  {
    answers: [
      { correct: false, text: 'Żyrafa' },
      { correct: false, text: 'Kameleon' },
      { correct: true, text: 'Jaszczurka' },
      { correct: false, text: 'Słoń' },
    ],
    category: 'animals',
    difficultyLevel: 0,
    id: 21,
    question:
      'Które żywe stworzenie potrafi regenerować utracone części ciała, np. ogon?',
  },
  {
    answers: [
      {
        correct: true,
        text: 'Zbiór gwiazd, pyłu i gazu związanych grawitacyjnie',
      },
      { correct: false, text: 'Planeta' },
      { correct: false, text: 'Księżyc' },
      { correct: false, text: 'Meteor' },
    ],
    category: 'space',
    difficultyLevel: 0,
    id: 22,
    question: 'Co to jest galaktyka?',
  },
  {
    answers: [
      { correct: false, text: 'Pszczoła' },
      { correct: false, text: 'Kameleon' },
      { correct: false, text: 'Mrówkojad' },
      { correct: true, text: 'Gąsienica' },
    ],
    category: 'animals',
    difficultyLevel: 0,
    id: 23,
    question:
      'Które zwierzę jest znane z tego, że ma przednie kończyny w formie szczęk (młode)?',
  },
  {
    answers: [
      { correct: true, text: 'Kilogram' },
      { correct: false, text: 'Metr' },
      { correct: false, text: 'Sekunda' },
      { correct: false, text: 'Amper' },
    ],
    category: 'science',
    difficultyLevel: 0,
    id: 24,
    question: 'Jak nazywa się jednostka podstawowa masy w układzie SI?',
  },
  {
    answers: [
      { correct: false, text: 'Norwegia' },
      { correct: false, text: 'Kanada' },
      { correct: true, text: 'Rosja' },
      { correct: false, text: 'Australia' },
    ],
    category: 'geography',
    difficultyLevel: 0,
    id: 25,
    question: 'Który kraj leży najbardziej na północ?',
  },
  {
    answers: [
      { correct: false, text: 'Miedź' },
      { correct: true, text: 'Żelazo' },
      { correct: false, text: 'Fluor' },
      { correct: false, text: 'Fosfor' },
    ],
    category: 'chemistry',
    difficultyLevel: 0,
    id: 26,
    question: 'Który pierwiastek jest symbolem Fe?',
  },
  {
    answers: [
      { correct: true, text: 'Bobry' },
      { correct: false, text: 'Borsuki' },
      { correct: false, text: 'Wydry' },
      { correct: false, text: 'Dzięcioły' },
    ],
    category: 'animals',
    difficultyLevel: 0,
    id: 27,
    question: 'Które zwierzę buduje tamy z drewna?',
  },
  {
    answers: [
      { correct: true, text: 'Merkury' },
      { correct: false, text: 'Wenus' },
      { correct: false, text: 'Ziemia' },
      { correct: false, text: 'Mars' },
    ],
    category: 'space',
    difficultyLevel: 0,
    id: 28,
    question: 'Jak nazywa się najbliższa do Słońca planeta?',
  },
  {
    answers: [
      { correct: false, text: 'Rekin' },
      { correct: false, text: 'Pchła' },
      { correct: false, text: 'Pająk' },
      { correct: true, text: 'Krokodyl' },
    ],
    category: 'animals',
    difficultyLevel: 0,
    id: 29,
    question:
      'Które zwierzę ma najsilniejszy uścisk szczęk w odniesieniu do masy ciała?',
  },
  {
    answers: [
      {
        correct: true,
        text: 'Zbiór organizmów i środowiska, które ze sobą współdziałają',
      },
      { correct: false, text: 'Typ skały' },
      { correct: false, text: 'Rodzaj chmury' },
      { correct: false, text: 'Instrument muzyczny' },
    ],
    category: 'science',
    difficultyLevel: 0,
    id: 30,
    question: 'Co to jest ekosystem?',
  },

  {
    answers: [
      { correct: false, text: 'Atlantycki' },
      { correct: true, text: 'Spokojny (Pacyfik)' },
      { correct: false, text: 'Indyjski' },
      { correct: false, text: 'Arktyczny' },
    ],
    category: 'geography',
    difficultyLevel: 0,
    id: 31,
    question: 'Który ocean jest największy na Ziemi?',
  },
  {
    answers: [
      { correct: false, text: 'Ryba' },
      { correct: true, text: 'Delfin' },
      { correct: false, text: 'Krewetka' },
      { correct: false, text: 'Pingwin' },
    ],
    category: 'animals',
    difficultyLevel: 0,
    id: 32,
    question: 'Które zwierzę potrafi poruszać się po wodzie, ale jest ssakiem?',
  },
  {
    answers: [
      { correct: false, text: 'Wenus' },
      { correct: true, text: 'Mars' },
      { correct: false, text: 'Jowisz' },
      { correct: false, text: 'Saturn' },
    ],
    category: 'space',
    difficultyLevel: 0,
    id: 33,
    question: 'Które ciało niebieskie jest znane jako "czerwona planeta"?',
  },
  {
    answers: [
      { correct: true, text: 'Afryka' },
      { correct: false, text: 'Europa' },
      { correct: false, text: 'Azja' },
      { correct: false, text: 'Ameryka Południowa' },
    ],
    category: 'geography',
    difficultyLevel: 0,
    id: 34,
    question: 'Który kontynent ma najwięcej krajów?',
  },
  {
    answers: [
      { correct: false, text: 'Fizyka' },
      { correct: true, text: 'Chemia' },
      { correct: false, text: 'Biologia' },
      { correct: false, text: 'Geologia' },
    ],
    category: 'chemistry',
    difficultyLevel: 0,
    id: 35,
    question: 'Jak nazywa się nauka badająca pierwiastki i ich związki?',
  },
  {
    answers: [
      { correct: false, text: 'Płetwal' },
      { correct: false, text: 'Delfin' },
      { correct: false, text: 'Morski ślimak' },
      { correct: true, text: 'Morświn' },
    ],
    category: 'animals',
    difficultyLevel: 0,
    id: 36,
    question: 'Które zwierzę potrafi pływać najdłużej bez przerwy?',
  },
  {
    answers: [
      { correct: true, text: 'Zaćmienie Słońca' },
      { correct: false, text: 'Zaćmienie Księżyca' },
      { correct: false, text: 'Równonoc' },
      { correct: false, text: 'Zaćmienie Marsa' },
    ],
    category: 'space',
    difficultyLevel: 0,
    id: 37,
    question:
      'Które zjawisko występuje, gdy Księżyc przechodzi między Słońcem a Ziemią?',
  },
  {
    answers: [
      { correct: false, text: 'Trąbka' },
      { correct: true, text: 'Gitara' },
      { correct: false, text: 'Bęben' },
      { correct: false, text: 'Flet' },
    ],
    category: 'popculture',
    difficultyLevel: 0,
    id: 38,
    question: 'Który instrument muzyczny jest typowo strunowy?',
  },
  {
    answers: [
      { correct: false, text: 'Oddychanie' },
      { correct: true, text: 'Fotosynteza' },
      { correct: false, text: 'Fermentacja' },
      { correct: false, text: 'Hydroliza' },
    ],
    category: 'science',
    difficultyLevel: 0,
    id: 39,
    question:
      'Jak nazywa się proces, w którym roślina przekształca światło w energię?',
  },
  {
    answers: [
      { correct: false, text: 'Panda' },
      { correct: false, text: 'Lenistwo (leniwiec)' },
      { correct: true, text: 'Kapucynka (małpa kapucyn)' },
      { correct: false, text: 'Nosorożec' },
    ],
    category: 'animals',
    difficultyLevel: 0,
    id: 40,
    question:
      'Które zwierzę ma długi ogon i wspina się po drzewach, żyje w Ameryce Południowej?',
  },

  {
    answers: [
      { correct: false, text: 'Ziemia' },
      { correct: true, text: 'Słońce' },
      { correct: false, text: 'Księżyc' },
      { correct: false, text: 'Mars' },
    ],
    category: 'space',
    difficultyLevel: 1,
    id: 41,
    question: 'Które ciało niebieskie jest największe?',
  },
  {
    answers: [
      { correct: true, text: 'Żyrafa' },
      { correct: false, text: 'Zebra' },
      { correct: false, text: 'Lampart' },
      { correct: false, text: 'Antylopa' },
    ],
    category: 'animals',
    difficultyLevel: 1,
    id: 42,
    question:
      'Które zwierzę znane jest z długiego szyi i plamistego umaszczenia?',
  },
  {
    answers: [
      { correct: false, text: 'Jurij Gagarin' },
      { correct: true, text: 'Neil Armstrong' },
      { correct: false, text: 'Buzz Aldrin' },
      { correct: false, text: 'Michael Collins' },
    ],
    category: 'history',
    difficultyLevel: 1,
    id: 43,
    question: 'Kto był pierwszym człowiekiem na Księżycu?',
  },
  {
    answers: [
      { correct: true, text: 'Warstwa gazów otaczająca planetę' },
      { correct: false, text: 'Część skały' },
      { correct: false, text: 'Ciecz pod powierzchnią' },
      { correct: false, text: 'Rodzaj rośliny' },
    ],
    category: 'science',
    difficultyLevel: 1,
    id: 44,
    question: 'Co to jest atmosfera?',
  },
  {
    answers: [
      { correct: false, text: 'Stany Zjednoczone' },
      { correct: true, text: 'Rosja' },
      { correct: false, text: 'Chiny' },
      { correct: false, text: 'Brazylia' },
    ],
    category: 'geography',
    difficultyLevel: 1,
    id: 45,
    question: 'Który kraj ma największą powierzchnię?',
  },
  {
    answers: [
      { correct: false, text: 'Kondensacja' },
      { correct: true, text: 'Parowanie' },
      { correct: false, text: 'Zamarzanie' },
      { correct: false, text: 'Sublimacja' },
    ],
    category: 'science',
    difficultyLevel: 1,
    id: 46,
    question: 'Jak nazywa się proces, w którym woda zmienia się w parę?',
  },
  {
    answers: [
      { correct: true, text: 'Wielbłąd' },
      { correct: false, text: 'Kangur' },
      { correct: false, text: 'Koala' },
      { correct: false, text: 'Panda' },
    ],
    category: 'animals',
    difficultyLevel: 1,
    id: 47,
    question:
      'Które zwierzę potrafi przetrwać długie okresy bez wody — pustynne "statek pustyni"?',
  },
  {
    answers: [
      { correct: false, text: 'Tlen' },
      { correct: true, text: 'Azot' },
      { correct: false, text: 'Dwutlenek węgla' },
      { correct: false, text: 'Hel' },
    ],
    category: 'chemistry',
    difficultyLevel: 1,
    id: 48,
    question: 'Jaki gaz jest głównym składnikiem powietrza, którym oddychamy?',
  },
  {
    answers: [
      { correct: true, text: 'Węgiel' },
      { correct: false, text: 'Żelazo' },
      { correct: false, text: 'Sód' },
      { correct: false, text: 'Krzem' },
    ],
    category: 'chemistry',
    difficultyLevel: 1,
    id: 49,
    question:
      'Który pierwiastek chemiczny jest kluczowy dla tworzenia plastycznych tworzyw (polimerów)?',
  },
  {
    answers: [
      { correct: false, text: 'Lew' },
      { correct: true, text: 'Niedźwiedź polarny' },
      { correct: false, text: 'Tygrys' },
      { correct: false, text: 'Hiena' },
    ],
    category: 'animals',
    difficultyLevel: 1,
    id: 50,
    question: 'Jak nazywa się największy lądowy drapieżnik świata?',
  },

  {
    answers: [
      { correct: false, text: 'Satelita' },
      { correct: true, text: 'Spadający meteoroid — meteor' },
      { correct: false, text: 'Kometa' },
      { correct: false, text: 'Planeta karłowata' },
    ],
    category: 'space',
    difficultyLevel: 1,
    id: 51,
    question:
      'Które z poniższych jest typowym meteorem spalającym się w atmosferze?',
  },
  {
    answers: [
      { correct: true, text: 'Pies' },
      { correct: false, text: 'Słoń' },
      { correct: false, text: 'Kot' },
      { correct: false, text: 'Kaczka' },
    ],
    category: 'animals',
    difficultyLevel: 1,
    id: 52,
    question: 'Które zwierzę ma najbardziej rozwinięty zmysł węchu?',
  },
  {
    answers: [
      { correct: false, text: 'Stany Zjednoczone' },
      { correct: true, text: 'ZSRR (Związek Radziecki)' },
      { correct: false, text: 'Chiny' },
      { correct: false, text: 'Francja' },
    ],
    category: 'history',
    difficultyLevel: 1,
    id: 53,
    question: 'Które państwo jako pierwsze wysłało człowieka w kosmos?',
  },
  {
    answers: [
      { correct: false, text: 'Termometr' },
      { correct: true, text: 'Barometr' },
      { correct: false, text: 'Higrometr' },
      { correct: false, text: 'Woltomierz' },
    ],
    category: 'science',
    difficultyLevel: 1,
    id: 54,
    question: 'Jak nazywa się instrument do pomiaru ciśnienia atmosferycznego?',
  },
  {
    answers: [
      { correct: false, text: 'Nowy Jork' },
      { correct: true, text: 'Paryż' },
      { correct: false, text: 'Tokio' },
      { correct: false, text: 'Los Angeles' },
    ],
    category: 'popculture',
    difficultyLevel: 1,
    id: 55,
    question: 'Które miasto jest znane jako "Miasto świateł"?',
  },
  {
    answers: [
      { correct: false, text: 'Srebro' },
      { correct: true, text: 'Złoto' },
      { correct: false, text: 'Argentum' },
      { correct: false, text: 'Miedź' },
    ],
    category: 'chemistry',
    difficultyLevel: 1,
    id: 56,
    question: 'Jak nazywa się pierwiastek o symbolu Au?',
  },
  {
    answers: [
      { correct: true, text: 'Gepard' },
      { correct: false, text: 'Struś' },
      { correct: false, text: 'Kangur' },
      { correct: false, text: 'Antylopa' },
    ],
    category: 'animals',
    difficultyLevel: 1,
    id: 57,
    question: 'Które zwierzę uchodzi za najszybsze na lądzie?',
  },
  {
    answers: [
      {
        correct: true,
        text: 'Obiekt z ogromną gęstością i silną grawitacją, nawet światło nie ucieka',
      },
      { correct: false, text: 'Rodzaj gwiazdy' },
      { correct: false, text: 'Kometa' },
      { correct: false, text: 'Mgławica' },
    ],
    category: 'space',
    difficultyLevel: 1,
    id: 58,
    question: 'Co to jest czarna dziura?',
  },
  {
    answers: [
      { correct: false, text: 'Europa' },
      { correct: true, text: 'Afryka' },
      { correct: false, text: 'Ameryka Północna' },
      { correct: false, text: 'Australia' },
    ],
    category: 'geography',
    difficultyLevel: 1,
    id: 59,
    question:
      'Który kontynent słynie z wielkiej różnorodności dzikiej przyrody i sawann?',
  },
  {
    answers: [
      { correct: true, text: 'NaCl (chlorek sodu)' },
      { correct: false, text: 'KCl' },
      { correct: false, text: 'CaCO3' },
      { correct: false, text: 'H2O' },
    ],
    category: 'chemistry',
    difficultyLevel: 1,
    id: 60,
    question:
      'Który związek chemiczny jest głównym składnikiem soli kuchennej?',
  },

  {
    answers: [
      { correct: false, text: 'Księżyc' },
      { correct: true, text: 'Ganimedes (Jowisz)' },
      { correct: false, text: 'Titan' },
      { correct: false, text: 'Europa' },
    ],
    category: 'space',
    difficultyLevel: 1,
    id: 61,
    question:
      'Który satelita naturalny ma największą średnicę w Układzie Słonecznym?',
  },
  {
    answers: [
      { correct: true, text: 'Pingwin' },
      { correct: false, text: 'Albatros' },
      { correct: false, text: 'Struś' },
      { correct: false, text: 'Kormoran' },
    ],
    category: 'animals',
    difficultyLevel: 1,
    id: 62,
    question:
      'Który ptak nie lata, ale świetnie pływa i żyje głównie na Antarktydzie?',
  },
  {
    answers: [
      { correct: false, text: 'Mozart' },
      { correct: true, text: 'Beethoven' },
      { correct: false, text: 'Bach' },
      { correct: false, text: 'Chopin' },
    ],
    category: 'popculture',
    difficultyLevel: 1,
    id: 63,
    question: 'Kto skomponował "Symfonię ósmy" (Beethoven)?',
  },
  {
    answers: [
      { correct: false, text: 'Pies' },
      { correct: true, text: 'Ryba' },
      { correct: false, text: 'Wąż' },
      { correct: false, text: 'Słoń' },
    ],
    category: 'animals',
    difficultyLevel: 1,
    id: 64,
    question: 'Które zwierzę ma system oddechowy oparty na skrzelach?',
  },
  {
    answers: [
      {
        correct: false,
        text: 'Pierwsze lądowanie człowieka na Księżycu (1969)',
      },
      { correct: false, text: 'Wybuch II wojny światowej (1939)' },
      { correct: false, text: 'Konferencja w Wersalu (1919)' },
      { correct: true, text: 'Rewolucja francuska (1789)' },
    ],
    category: 'history',
    difficultyLevel: 1,
    id: 65,
    question: 'Które wydarzenie historyczne miało miejsce jako pierwsze?',
  },
  {
    answers: [
      { correct: true, text: 'Transpiracja' },
      { correct: false, text: 'Respiracja' },
      { correct: false, text: 'Kondensacja' },
      { correct: false, text: 'Sublimacja' },
    ],
    category: 'science',
    difficultyLevel: 1,
    id: 66,
    question:
      'Jak nazywa się proces, w którym roślina oddaje wodę przez liście?',
  },
  {
    answers: [
      { correct: true, text: 'Lit' },
      { correct: false, text: 'Żelazo' },
      { correct: false, text: 'Miedź' },
      { correct: false, text: 'Srebro' },
    ],
    category: 'chemistry',
    difficultyLevel: 1,
    id: 67,
    question: 'Który metal jest najlżejszy?',
  },
  {
    answers: [
      { correct: false, text: 'Zaćmienie' },
      { correct: true, text: 'Równonoc' },
      { correct: false, text: 'Przesilenie' },
      { correct: false, text: 'Eklipsa' },
    ],
    category: 'space',
    difficultyLevel: 1,
    id: 68,
    question:
      'Jak nazywa się zjawisko, gdy Słońce znajduje się bezpośrednio nad równikiem (dwa razy w roku)?',
  },
  {
    answers: [
      { correct: true, text: 'Sokół wędrowny' },
      { correct: false, text: 'Jastrząb' },
      { correct: false, text: 'Orzeł' },
      { correct: false, text: 'Wrona' },
    ],
    category: 'animals',
    difficultyLevel: 1,
    id: 69,
    question: 'Które zwierzę jest najszybsze w locie nurkującym?',
  },
  {
    answers: [
      { correct: false, text: 'Kr' },
      { correct: true, text: 'Krzem (Si)' },
      { correct: false, text: 'Cyna (Sn)' },
      { correct: false, text: 'Aluminium (Al)' },
    ],
    category: 'chemistry',
    difficultyLevel: 1,
    id: 70,
    question:
      'Który pierwiastek chemiczny jest podstawą krzemu używanego w elektronice?',
  },

  {
    answers: [
      { correct: true, text: 'Hubble' },
      { correct: false, text: 'Spitzer' },
      { correct: false, text: 'Kepler' },
      { correct: false, text: 'Voyager' },
    ],
    category: 'space',
    difficultyLevel: 2,
    id: 71,
    question:
      'Który teleskop kosmiczny dostarczył wielu szczegółowych zdjęć wszechświata?',
  },
  {
    answers: [
      { correct: false, text: 'Pingwin' },
      { correct: false, text: 'Wąż' },
      { correct: true, text: 'Żółw, niektóre gatunki' },
      { correct: false, text: 'Kot' },
    ],
    category: 'animals',
    difficultyLevel: 2,
    id: 72,
    question: 'Które zwierzę potrafi przeżyć najdłużej bez jedzenia?',
  },
  {
    answers: [
      { correct: false, text: 'Prędkość orbitalna' },
      {
        correct: false,
        text: 'Prędkość ucieczki czarnej dziury (event horizon — nie istnieje)',
      },
      {
        correct: true,
        text: 'Prędkość ucieczki równa prędkości światła to definicja horyzontu zdarzeń',
      },
      { correct: false, text: 'Prędkość dźwięku' },
    ],
    category: 'space',
    difficultyLevel: 2,
    id: 73,
    question:
      'Jak nazywa się prędkość, przy której ucieczkowa z ciała nieba jest równa prędkości światła?',
  },
  {
    answers: [
      { correct: false, text: 'H2O' },
      { correct: true, text: 'SO2 i NOx w atmosferze przekształcane w kwasy' },
      { correct: false, text: 'O2' },
      { correct: false, text: 'N2' },
    ],
    category: 'chemistry',
    difficultyLevel: 2,
    id: 74,
    question: 'Który związek odpowiada za kwasowość w kwaśnym deszczu?',
  },
  {
    answers: [
      { correct: false, text: 'Koszykówka' },
      { correct: true, text: 'Piłka nożna (soccer)' },
      { correct: false, text: 'Krykiet' },
      { correct: false, text: 'Baseball' },
    ],
    category: 'popculture',
    difficultyLevel: 2,
    id: 75,
    question:
      'Który sport jest uważany za najpopularniejszy na świecie pod względem liczby fanów?',
  },
  {
    answers: [
      { correct: true, text: 'Ridge Atlantycki (Grzbiet Środkowoatlantycki)' },
      { correct: false, text: 'Rów Mariański' },
      { correct: false, text: 'Płaskowyż Suzuka' },
      { correct: false, text: 'Góry Skalist' },
    ],
    category: 'geography',
    difficultyLevel: 2,
    id: 76,
    question: 'Jak nazywa się największy oceaniczny grzbiet podwodny?',
  },
  {
    answers: [
      { correct: false, text: 'Wątroba' },
      { correct: false, text: 'Płuco' },
      { correct: true, text: 'Serce' },
      { correct: false, text: 'Nerka' },
    ],
    category: 'science',
    difficultyLevel: 2,
    id: 77,
    question: 'Który organ w ciele kręgowca pompuje krew?',
  },
  {
    answers: [
      { correct: true, text: 'Nietoperz' },
      { correct: false, text: 'Krab' },
      { correct: false, text: 'Słoń' },
      { correct: false, text: 'Żyrafa' },
    ],
    category: 'animals',
    difficultyLevel: 2,
    id: 78,
    question: 'Które zwierzę ma najbardziej złożony system echolokacji?',
  },
  {
    answers: [
      { correct: false, text: 'Pas asteroid' },
      { correct: true, text: 'Pasma Kuipera (Pasa Kuipera)' },
      { correct: false, text: 'Obłok Oorta' },
      { correct: false, text: 'Mgławica Orion' },
    ],
    category: 'space',
    difficultyLevel: 2,
    id: 79,
    question:
      'Jak nazywa się region Układu Słonecznego poza orbitą Neptuna pełen małych ciał niebieskich?',
  },
  {
    answers: [
      { correct: true, text: 'Wodór (fuzja wodoru w hel)' },
      { correct: false, text: 'Tlen' },
      { correct: false, text: 'Azot' },
      { correct: false, text: 'Węgiel' },
    ],
    category: 'chemistry',
    difficultyLevel: 2,
    id: 80,
    question:
      'Który związek chemiczny jest podstawowym paliwem gwiazd w procesie fuzji?',
  },

  {
    answers: [
      { correct: false, text: 'Smok' },
      { correct: true, text: 'Feniks' },
      { correct: false, text: 'Minotaur' },
      { correct: false, text: 'Hydra' },
    ],
    category: 'fun',
    difficultyLevel: 2,
    id: 81,
    question:
      'Który stwór z mitologii często porównywany jest do wielkiej gwiazdy czy planety w popkulturze?',
  },
  {
    answers: [
      { correct: false, text: 'Krab' },
      { correct: true, text: 'Ośmiornica' },
      { correct: false, text: 'Ślimak' },
      { correct: false, text: 'Dżdżownica' },
    ],
    category: 'animals',
    difficultyLevel: 2,
    id: 82,
    question:
      'Które zwierzę wykazuje największą inteligencję wśród bezkręgowców?',
  },
  {
    answers: [
      { correct: false, text: 'Pulsar' },
      { correct: true, text: 'Supernowa' },
      { correct: false, text: 'Meteor' },
      { correct: false, text: 'Kometa' },
    ],
    category: 'space',
    difficultyLevel: 2,
    id: 83,
    question:
      'Jak nazywa się zjawisko, gdy gwiazda eksploduje i przez krótki czas jest bardzo jasna?',
  },
  {
    answers: [
      { correct: false, text: 'Isaac Newton' },
      { correct: true, text: 'Albert Einstein' },
      { correct: false, text: 'Niels Bohr' },
      { correct: false, text: 'Galileusz' },
    ],
    category: 'history',
    difficultyLevel: 2,
    id: 84,
    question: 'Który słynny fizyk sformułował teorię względności?',
  },
  {
    answers: [
      { correct: false, text: 'Metan' },
      { correct: true, text: 'Dwutlenek węgla (CO2)' },
      { correct: false, text: 'Hel' },
      { correct: false, text: 'Azot' },
    ],
    category: 'chemistry',
    difficultyLevel: 2,
    id: 85,
    question:
      'Który gaz przyczynia się najbardziej do efektu cieplarnianego (ze względów ilościowych i wpływu)?',
  },
  {
    answers: [
      { correct: true, text: 'USA' },
      { correct: false, text: 'ZSRR' },
      { correct: false, text: 'Chiny' },
      { correct: false, text: 'Japonia' },
    ],
    category: 'history',
    difficultyLevel: 2,
    id: 86,
    question:
      'Które państwo było pierwsze, które wysłało sondę, której celem było dotknięcie powierzchni Marsa?',
  },
  {
    answers: [
      { correct: true, text: 'Rów Mariański' },
      { correct: false, text: 'Row Atakama' },
      { correct: false, text: 'Rów Tonga' },
      { correct: false, text: 'Rów Filipiński' },
    ],
    category: 'geography',
    difficultyLevel: 2,
    id: 87,
    question: 'Jak nazywa się największy znany oceaniczny rów?',
  },
  {
    answers: [
      { correct: true, text: 'Rekin (niektóre gatunki)' },
      { correct: false, text: 'Pies' },
      { correct: false, text: 'Koń' },
      { correct: false, text: 'Krowa' },
    ],
    category: 'animals',
    difficultyLevel: 2,
    id: 88,
    question: 'Które zwierzę ma najwięcej zębów?',
  },
  {
    answers: [
      { correct: true, text: 'Kilka sekund (ok. 1,3 s)' },
      { correct: false, text: 'Kilka minut' },
      { correct: false, text: 'Kilka godzin' },
      { correct: false, text: 'Kilka dni' },
    ],
    category: 'space',
    difficultyLevel: 2,
    id: 89,
    question:
      'Jaki jest przybliżony czas, w którym światło podróżuje z Księżyca do Ziemi?',
  },
  {
    answers: [
      { correct: true, text: 'Krzem (Si)' },
      { correct: false, text: 'Węgiel' },
      { correct: false, text: 'Żelazo' },
      { correct: false, text: 'Magnez' },
    ],
    category: 'chemistry',
    difficultyLevel: 2,
    id: 90,
    question:
      'Który pierwiastek chemiczny jest podstawą szkła (w typowym szkle krzemowym)?',
  },

  {
    answers: [
      { correct: true, text: 'Albatros (niektóre gatunki)' },
      { correct: false, text: 'Bocian' },
      { correct: false, text: 'Jaskółka' },
      { correct: false, text: 'Gęś' },
    ],
    category: 'animals',
    difficultyLevel: 2,
    id: 91,
    question:
      'Które zwierzę potrafi latać na największe odległości podczas migracji?',
  },
  {
    answers: [
      { correct: true, text: 'Terminator (linia terminatora)' },
      { correct: false, text: 'Eklipsa' },
      { correct: false, text: 'Równonoc' },
      { correct: false, text: 'Strefa cienia' },
    ],
    category: 'space',
    difficultyLevel: 2,
    id: 92,
    question:
      'Jak nazywa się linia oddzielająca dzień od nocy na powierzchni Ziemi?',
  },
  {
    answers: [
      { correct: true, text: 'Uran (U-235)' },
      { correct: false, text: 'Wodór' },
      { correct: false, text: 'Hel' },
      { correct: false, text: 'Lit' },
    ],
    category: 'chemistry',
    difficultyLevel: 2,
    id: 93,
    question:
      'Który pierwiastek jest używany jako najczęstszy paliwo w reaktorach jądrowych typu lekkowodnego?',
  },
  {
    answers: [
      { correct: false, text: 'Delfiny' },
      { correct: true, text: 'Szympansy' },
      { correct: false, text: 'Papugi' },
      { correct: false, text: 'Kaczki' },
    ],
    category: 'animals',
    difficultyLevel: 2,
    id: 94,
    question:
      'Które zwierzę jest znane z wysokiej inteligencji społecznej i używania narzędzi w naturze?',
  },
  {
    answers: [
      { correct: false, text: 'Konstelacja' },
      { correct: true, text: 'Gromada gwiazd' },
      { correct: false, text: 'Superklaster' },
      { correct: false, text: 'Halo' },
    ],
    category: 'space',
    difficultyLevel: 2,
    id: 95,
    question:
      'Który astronomiczny termin opisuje "rodzinę" gwiazd tworzących gromadę?',
  },
  {
    answers: [
      { correct: false, text: 'Indonezja' },
      { correct: true, text: 'Papua-Nowa Gwinea' },
      { correct: false, text: 'Indie' },
      { correct: false, text: 'Chiny' },
    ],
    category: 'geography',
    difficultyLevel: 2,
    id: 96,
    question:
      'Który kraj ma najwięcej języków mówionych oficjalnie i nieoficjalnie?',
  },
  {
    answers: [
      { correct: true, text: 'Redukcja/utlenianie (reakcje redoks)' },
      { correct: false, text: 'Sublimacja' },
      { correct: false, text: 'Polimeryzacja' },
      { correct: false, text: 'Hydroliza' },
    ],
    category: 'chemistry',
    difficultyLevel: 2,
    id: 97,
    question:
      'Jak nazywa się proces, gdy atom rzesze elektronów traci lub zyskuje żeby stać się jonem?',
  },
  {
    answers: [
      { correct: false, text: 'Radar' },
      { correct: true, text: 'Sonar' },
      { correct: false, text: 'Teleskop' },
      { correct: false, text: 'Mikroskop' },
    ],
    category: 'science',
    difficultyLevel: 2,
    id: 98,
    question:
      'Który instrument używany jest do wykrywania obiektów pod wodą (np. ryb)?',
  },
  {
    answers: [
      { correct: true, text: 'Pies' },
      { correct: false, text: 'Koń' },
      { correct: false, text: 'Kot' },
      { correct: false, text: 'Słoń' },
    ],
    category: 'animals',
    difficultyLevel: 2,
    id: 99,
    question:
      'Które zwierzę posiada system chłodzenia ciała polegający na poceniu się głównie przez język?',
  },
  {
    answers: [
      { correct: false, text: 'Pas Kuipera' },
      { correct: true, text: 'Obłok Oorta' },
      { correct: false, text: 'Pas asteroid' },
      { correct: false, text: 'Mgławica' },
    ],
    category: 'space',
    difficultyLevel: 2,
    id: 100,
    question:
      'Jak nazywa się obszar przestrzeni, w którym większość komet stacjonuje i skąd pochodzą niektóre długookresowe komety?',
  },

  {
    answers: [
      { correct: false, text: 'Szybki chomik' },
      { correct: true, text: 'Gryzoń myszy (około 19–21 dni)' },
      { correct: false, text: 'Słoń' },
      { correct: false, text: 'Krokodyl' },
    ],
    category: 'animals',
    difficultyLevel: 2,
    id: 101,
    question: 'Które zwierzę ma najkrótszy czas ciąży (gestacji)?',
  },
  {
    answers: [
      { correct: false, text: 'Krzem' },
      { correct: true, text: 'Węgiel' },
      { correct: false, text: 'Fluor' },
      { correct: false, text: 'Sód' },
    ],
    category: 'chemistry',
    difficultyLevel: 2,
    id: 102,
    question:
      'Który pierwiastek jest kluczowy w chemii organicznej (tworzy szkielety cząsteczek organicznych)?',
  },
  {
    answers: [
      { correct: false, text: '1959' },
      { correct: true, text: '1969' },
      { correct: false, text: '1979' },
      { correct: false, text: '1989' },
    ],
    category: 'history',
    difficultyLevel: 2,
    id: 103,
    question: 'W którym roku odbyło się pierwsze lądowanie na Księżycu?',
  },
  {
    answers: [
      { correct: false, text: 'Ceres' },
      { correct: true, text: 'Eris' },
      { correct: false, text: 'Pluton' },
      { correct: false, text: 'Makemake' },
    ],
    category: 'space',
    difficultyLevel: 2,
    id: 104,
    question:
      'Jak nazywa się największa znana planeta karłowata w Pasie Kuipera (przykładowo)?',
  },
  {
    answers: [
      { correct: true, text: 'Pawie (pióropusz)' },
      { correct: false, text: 'Krowy' },
      { correct: false, text: 'Lwy' },
      { correct: false, text: 'Jelenie' },
    ],
    category: 'animals',
    difficultyLevel: 2,
    id: 105,
    question:
      'Które zwierzę żyje w stadach zwanych "pióropuszami" lub "ruhami"?',
  },
  {
    answers: [
      { correct: false, text: 'Klimat kontynentalny' },
      { correct: true, text: 'Klimat subarktyczny (polarny)' },
      { correct: false, text: 'Klimat równikowy' },
      { correct: false, text: 'Klimat śródziemnomorski' },
    ],
    category: 'geography',
    difficultyLevel: 2,
    id: 106,
    question:
      'Który klimat charakteryzuje długie, zimne zimy i krótkie, chłodne lata — typowy dla obszarów blisko koła podbiegunowego?',
  },
  {
    answers: [
      { correct: false, text: 'Przewodzenie' },
      { correct: true, text: 'Konwekcja' },
      { correct: false, text: 'Promieniowanie' },
      { correct: false, text: 'Dyfuzja' },
    ],
    category: 'science',
    difficultyLevel: 2,
    id: 107,
    question:
      'Które z poniższych zjawisk to przykład przenoszenia ciepła przez ruch mas powietrza?',
  },
  {
    answers: [
      { correct: true, text: 'Płetwal błękitny' },
      { correct: false, text: 'Orka' },
      { correct: false, text: 'Kaszalot' },
      { correct: false, text: 'Bielik' },
    ],
    category: 'animals',
    difficultyLevel: 2,
    id: 108,
    question:
      'Który gatunek wieloryba jest znany z emitowania najgłośniejszych odgłosów?',
  },
  {
    answers: [
      { correct: true, text: 'Faza czerwonego olbrzyma' },
      { correct: false, text: 'Główny ciąg' },
      { correct: false, text: 'Biały karzeł' },
      { correct: false, text: 'Supernowa' },
    ],
    category: 'space',
    difficultyLevel: 2,
    id: 109,
    question:
      'Jak nazywa się etap życia gwiazdy podobnej do Słońca, w którym rozszerza się i staje czerwonym olbrzymem?',
  },
  {
    answers: [
      { correct: true, text: 'Diament' },
      { correct: false, text: 'Grafit' },
      { correct: false, text: 'Kwarc' },
      { correct: false, text: 'Mika' },
    ],
    category: 'chemistry',
    difficultyLevel: 2,
    id: 110,
    question: 'Który materiał jest najtwardszy naturalnie występujący?',
  },

  {
    answers: [
      { correct: false, text: 'Kruk' },
      { correct: true, text: 'Papuga' },
      { correct: false, text: 'Sikorka' },
      { correct: false, text: 'Bocian' },
    ],
    category: 'animals',
    difficultyLevel: 1,
    id: 111,
    question:
      'Który ptak jest znany ze swojej zdolności do naśladowania ludzkiej mowy?',
  },
  {
    answers: [
      { correct: false, text: 'Czas' },
      { correct: false, text: 'Długość fali' },
      { correct: true, text: 'Odległość (ok. 3.26 lat świetlnych)' },
      { correct: false, text: 'Masa gwiazdy' },
    ],
    category: 'space',
    difficultyLevel: 2,
    id: 112,
    question: 'Co mierzy jednostka parsek w astronomii?',
  },
  {
    answers: [
      { correct: false, text: 'Pająk (8)' },
      { correct: true, text: 'Stonoga (setki)' },
      { correct: false, text: 'Królik (4)' },
      { correct: false, text: 'Ptak (2)' },
    ],
    category: 'animals',
    difficultyLevel: 1,
    id: 113,
    question: 'Które zwierzę ma najwięcej nóg?',
  },
  {
    answers: [
      { correct: false, text: 'Kształt orbity Ziemi (elipsa)' },
      { correct: true, text: 'Nachylenie osi ziemskiej i ruch orbitalny' },
      { correct: false, text: 'Odległość od Księżyca' },
      { correct: false, text: 'Aktywność słoneczna' },
    ],
    category: 'space',
    difficultyLevel: 1,
    id: 114,
    question: 'Które zjawisko powoduje powstawanie pór roku na Ziemi?',
  },
  {
    answers: [
      { correct: false, text: 'Lądowanie na Marsie' },
      {
        correct: true,
        text: 'Badanie zewnętrznych planet i przesłanie danych międzygwiezdnych',
      },
      { correct: false, text: 'Budowa stacji kosmicznej' },
      { correct: false, text: 'Wysyłanie ludzi na Jowisza' },
    ],
    category: 'space',
    difficultyLevel: 2,
    id: 115,
    question: 'Jaki był pierwotny cel programów Voyager?',
  },
  {
    answers: [
      { correct: true, text: 'Mrówki' },
      { correct: false, text: 'Żółwie' },
      { correct: false, text: 'Koty' },
      { correct: false, text: 'Delfiny' },
    ],
    category: 'animals',
    difficultyLevel: 2,
    id: 116,
    question:
      'Które zwierzę ma najbardziej rozwinięty system społeczny przypominający stado z hierarchią (mrówki, pszczoły)?',
  },
  {
    answers: [
      { correct: false, text: 'Europa' },
      { correct: true, text: 'Australia' },
      { correct: false, text: 'Antarktyda' },
      { correct: false, text: 'Ameryka Południowa' },
    ],
    category: 'geography',
    difficultyLevel: 1,
    id: 117,
    question: 'Który kontynent jest najmniejszy pod względem powierzchni?',
  },
  {
    answers: [
      { correct: false, text: 'RNA' },
      { correct: true, text: 'DNA' },
      { correct: false, text: 'ATP' },
      { correct: false, text: 'Glukoza' },
    ],
    category: 'science',
    difficultyLevel: 2,
    id: 118,
    question:
      'Która cząsteczka przenosi informację genetyczną u większości organizmów?',
  },
  {
    answers: [
      { correct: true, text: 'Gołąb' },
      { correct: false, text: 'Sokół' },
      { correct: false, text: 'Kruk' },
      { correct: false, text: 'Orzeł' },
    ],
    category: 'animals',
    difficultyLevel: 1,
    id: 119,
    question:
      'Które zwierzę zwykle ma status symbolu pokoju w wielu kulturach (ptak)?',
  },
  {
    answers: [
      {
        correct: false,
        text: 'Eksplozja masywnej gwiazdy z zapadniętym jądrem',
      },
      {
        correct: true,
        text: 'Eksplozja białego karła po akrecji do masy krytycznej',
      },
      { correct: false, text: 'Naturalne gasnące gwiazdy' },
      { correct: false, text: 'Zderzenie planet' },
    ],
    category: 'space',
    difficultyLevel: 2,
    id: 120,
    question: 'Co określa się mianem supernowej typu Ia w astronomii?',
  },

  {
    answers: [
      { correct: false, text: 'Jeż' },
      { correct: true, text: 'Żółw' },
      { correct: false, text: 'Koala' },
      { correct: false, text: 'Lew' },
    ],
    category: 'animals',
    difficultyLevel: 1,
    id: 121,
    question:
      'Które zwierzę posiada pancerz i często chowa się w nim przed drapieżnikami?',
  },
  {
    answers: [
      { correct: false, text: 'Zwrotnik Raka' },
      { correct: true, text: 'Równik' },
      { correct: false, text: 'Południk Greenwich' },
      { correct: false, text: 'Zwrotnik Koziorożca' },
    ],
    category: 'geography',
    difficultyLevel: 1,
    id: 122,
    question:
      'Jak nazywa się linia równoległa do równika, dzieląca Ziemię na północ i południe?',
  },
  {
    answers: [
      { correct: false, text: 'Aktywność sejsmiczna' },
      {
        correct: true,
        text: 'Interakcja wiatru słonecznego z ziemskim polem magnetycznym',
      },
      { correct: false, text: 'Pływy oceaniczne' },
      { correct: false, text: 'Chmury burzowe' },
    ],
    category: 'space',
    difficultyLevel: 2,
    id: 123,
    question: 'Które zjawisko powoduje zorze polarne?',
  },
  {
    answers: [
      { correct: true, text: 'Fosfor (P)' },
      { correct: false, text: 'Sód' },
      { correct: false, text: 'Magnez' },
      { correct: false, text: 'Chlor' },
    ],
    category: 'chemistry',
    difficultyLevel: 2,
    id: 124,
    question:
      'Który pierwiastek jest najważniejszy dla tworzenia kwasów nukleinowych (DNA/RNA)?',
  },
  {
    answers: [
      { correct: false, text: 'Einstein' },
      { correct: true, text: 'Watson i Crick (oraz Wilkins)' },
      { correct: false, text: 'Curie' },
      { correct: false, text: 'Bohr' },
    ],
    category: 'history',
    difficultyLevel: 2,
    id: 125,
    question:
      'Który laureat Nagrody Nobla jest znany z pracy nad strukturą DNA?',
  },
  {
    answers: [
      { correct: true, text: 'Tlen (mniej dostępny przy dużej wysokości)' },
      { correct: false, text: 'Azot' },
      { correct: false, text: 'Hel' },
      { correct: false, text: 'Dwutlenek węgla' },
    ],
    category: 'science',
    difficultyLevel: 2,
    id: 126,
    question:
      'Który gaz powoduje "zadyszanie" przy dużej wysokości z powodu niższego ciśnienia parcjalnego?',
  },
  {
    answers: [
      { correct: false, text: 'Sahara (największa gorąca)' },
      { correct: true, text: 'Antarktyczna pustynia' },
      { correct: false, text: 'Gobi' },
      { correct: false, text: 'Atakama' },
    ],
    category: 'geography',
    difficultyLevel: 2,
    id: 127,
    question:
      'Jak nazywa się największa pustynia świata (niezależnie od temperatury)?',
  },
  {
    answers: [
      { correct: false, text: 'Pingwin' },
      { correct: false, text: 'Płetwal' },
      { correct: true, text: 'Płaszczka' },
      { correct: false, text: 'Delfin' },
    ],
    category: 'animals',
    difficultyLevel: 2,
    id: 128,
    question:
      'Które zwierzę jest znane z posiadania "płetwy piersiowej" używanej jak skrzydła pod wodą?',
  },
  {
    answers: [
      { correct: false, text: 'Jowisz' },
      { correct: true, text: 'Saturn' },
      { correct: false, text: 'Mars' },
      { correct: false, text: 'Merkury' },
    ],
    category: 'space',
    difficultyLevel: 1,
    id: 129,
    question: 'Które ciało niebieskie ma pierścienie widoczne z daleka?',
  },
  {
    answers: [
      { correct: false, text: 'Układ nerwowy' },
      { correct: true, text: 'Układ krążenia (krwionośny)' },
      { correct: false, text: 'Układ pokarmowy' },
      { correct: false, text: 'Układ rozrodczy' },
    ],
    category: 'science',
    difficultyLevel: 2,
    id: 130,
    question:
      'Który układ ciała odpowiada za transport tlenu i składników odżywczych?',
  },

  {
    answers: [
      { correct: true, text: 'Sowa' },
      { correct: false, text: 'Lis' },
      { correct: false, text: 'Kruk' },
      { correct: false, text: 'Słoń' },
    ],
    category: 'popculture',
    difficultyLevel: 1,
    id: 131,
    question: 'Które zwierzę jest symbolem mądrości w wielu kulturach?',
  },
  {
    answers: [
      { correct: false, text: 'Efekt Dopplera' },
      { correct: true, text: 'Rozpraszanie Rayleigha' },
      { correct: false, text: 'Załamanie' },
      { correct: false, text: 'Dyfrakcja' },
    ],
    category: 'science',
    difficultyLevel: 2,
    id: 132,
    question:
      'Jak nazywa się zjawisko rozproszenia światła powodujące, że niebo jest niebieskie?',
  },
  {
    answers: [
      { correct: false, text: 'Śmiercionośny pająk australijski' },
      { correct: true, text: 'Rozdymka (tetrodotoksyna)' },
      { correct: false, text: 'Kobra' },
      { correct: false, text: 'Skorpion' },
    ],
    category: 'animals',
    difficultyLevel: 2,
    id: 133,
    question:
      'Które zwierzę jest uważane za najbardziej jadowite względem ilości toksyny na wagę ciała?',
  },
  {
    answers: [
      { correct: false, text: 'Wietnam' },
      { correct: true, text: 'Brazylia' },
      { correct: false, text: 'Kolumbia' },
      { correct: false, text: 'Etiopia' },
    ],
    category: 'geography',
    difficultyLevel: 1,
    id: 134,
    question: 'Który kraj jest największym producentem kawy na świecie?',
  },
  {
    answers: [
      { correct: true, text: 'Lit (Li)' },
      { correct: false, text: 'Wapń (Ca)' },
      { correct: false, text: 'Krzem (Si)' },
      { correct: false, text: 'Rtęć (Hg)' },
    ],
    category: 'chemistry',
    difficultyLevel: 2,
    id: 135,
    question:
      'Który pierwiastek chemiczny znajduje się w grupie alkalicznych metali i jest używany w bateriach? ',
  },
  {
    answers: [
      { correct: false, text: 'Jezioro Bajkał' },
      { correct: false, text: 'Morze Kaspijskie (słone)' },
      { correct: true, text: 'Jezioro Górne (Lake Superior)' },
      { correct: false, text: 'Jezioro Wiktorii' },
    ],
    category: 'geography',
    difficultyLevel: 2,
    id: 136,
    question:
      'Jak nazywa się największe jezioro słodkowodne na świecie (powierzchniowo)?',
  },
  {
    answers: [
      { correct: true, text: 'Lew afrykański' },
      { correct: false, text: 'Lew azjatycki' },
      { correct: false, text: 'Lampart' },
      { correct: false, text: 'Tygrys' },
    ],
    category: 'animals',
    difficultyLevel: 1,
    id: 137,
    question: 'Który gatunek lwa jest największy i najbardziej rozpoznawalny?',
  },
  {
    answers: [
      { correct: true, text: 'Planeta krążąca wokół innej gwiazdy niż Słońce' },
      { correct: false, text: 'Planeta w Układzie Słonecznym' },
      { correct: false, text: 'Księżyc' },
      { correct: false, text: 'Kometa' },
    ],
    category: 'space',
    difficultyLevel: 2,
    id: 138,
    question: 'Co to jest egzoplaneta?',
  },
  {
    answers: [
      { correct: false, text: 'Krowa' },
      { correct: true, text: 'Świnia' },
      { correct: false, text: 'Koń' },
      { correct: false, text: 'Koala' },
    ],
    category: 'animals',
    difficultyLevel: 1,
    id: 139,
    question: 'Które z poniższych zwierząt jest wszystkożerne?',
  },
  {
    answers: [
      { correct: false, text: 'Węgiel' },
      { correct: true, text: 'Wodór' },
      { correct: false, text: 'Sód' },
      { correct: false, text: 'Ręcznie wykalkulowany' },
    ],
    category: 'chemistry',
    difficultyLevel: 1,
    id: 140,
    question:
      'Który pierwiastek jest kluczowy do życia i jest składnikiem cząsteczek wody i organicznych związków?',
  },

  {
    answers: [
      { correct: true, text: 'Tatooine (Gwiezdne Wojny)' },
      { correct: false, text: 'Krypton' },
      { correct: false, text: 'Vulcan' },
      { correct: false, text: 'Pandora' },
    ],
    category: 'popculture',
    difficultyLevel: 2,
    id: 141,
    question:
      'Który gwiezdny układ planetarny (fikcyjny) jest często przedstawiany w popkulturze jako dom obcych (użyj opcji najbardziej związanej z kulturą)?',
  },
  {
    answers: [
      { correct: true, text: 'Krab pustelnik (zmiana muszli)' },
      { correct: false, text: 'Żółw' },
      { correct: false, text: 'Pszczoła' },
      { correct: false, text: 'Słoń' },
    ],
    category: 'animals',
    difficultyLevel: 2,
    id: 142,
    question:
      'Które zwierzę jest zdolne do opuszczania swojego pancerza lub muszli i wrażenia nazywanego "odnową"?',
  },
  {
    answers: [
      { correct: false, text: 'Prawo Archimedesa' },
      { correct: true, text: 'Zasada zachowania energii' },
      { correct: false, text: 'Prawo Ohma' },
      { correct: false, text: 'Prawo powszechnego ciążenia' },
    ],
    category: 'science',
    difficultyLevel: 2,
    id: 143,
    question:
      'Które prawo fizyki mówi, że energii nie można stworzyć ani zniszczyć, tylko przekształcić?',
  },
  {
    answers: [
      { correct: false, text: 'ZSRR' },
      { correct: true, text: 'USA' },
      { correct: false, text: 'Chiny' },
      { correct: false, text: 'UE' },
    ],
    category: 'history',
    difficultyLevel: 2,
    id: 144,
    question:
      'Które państwo jako pierwsze wysłało sondę kosmiczną, która opuściła heliosferę (Voyager 1)?',
  },
  {
    answers: [
      { correct: true, text: 'Diament' },
      { correct: false, text: 'Gips' },
      { correct: false, text: 'Kreda' },
      { correct: false, text: 'Sól' },
    ],
    category: 'chemistry',
    difficultyLevel: 1,
    id: 145,
    question:
      'Który minerał jest najczęściej używany do wyrobu biżuterii i jest bardzo twardy?',
  },
  {
    answers: [
      { correct: false, text: 'Szympans' },
      { correct: true, text: 'Delfin' },
      { correct: false, text: 'Słoń' },
      { correct: false, text: 'Pies' },
    ],
    category: 'animals',
    difficultyLevel: 2,
    id: 146,
    question:
      'Które zwierzę ma największe mózgi w stosunku do rozmiaru ciała, kojarzone z inteligencją?',
  },
  {
    answers: [
      { correct: false, text: 'Rok' },
      { correct: true, text: 'Dzień (około 24 godziny)' },
      { correct: false, text: 'Miesiąc' },
      { correct: false, text: 'Dekada' },
    ],
    category: 'space',
    difficultyLevel: 1,
    id: 147,
    question:
      'Jak nazywa się linia czasowa, w której Ziemia wykonuje pełny obrót wokół swojej osi?',
  },
  {
    answers: [
      { correct: false, text: 'Tlen' },
      { correct: true, text: 'Dwutlenek węgla (CO2)' },
      { correct: false, text: 'Azot' },
      { correct: false, text: 'Hel' },
    ],
    category: 'chemistry',
    difficultyLevel: 2,
    id: 148,
    question:
      'Który element jest powszechny w atmosferze Marsa (dominujący składnik)?',
  },
  {
    answers: [
      { correct: false, text: 'Bocian' },
      {
        correct: true,
        text: 'Sieweczka białooka (lub siewka) — rekordy długich przelotów',
      },
      { correct: false, text: 'Albatros' },
      { correct: false, text: 'Jaskółka' },
    ],
    category: 'animals',
    difficultyLevel: 2,
    id: 149,
    question:
      'Które zwierzę ma rekord w długości lotu bez przerwy wśród ptaków migrujących (przelot bez lądowania)?',
  },
  {
    answers: [
      { correct: false, text: 'Obszar w wnętrzu Jowisza' },
      {
        correct: true,
        text: 'Obszar wpływu wiatru słonecznego otaczający Układ Słoneczny',
      },
      { correct: false, text: 'Część planety' },
      { correct: false, text: 'Inna nazwa komety' },
    ],
    category: 'space',
    difficultyLevel: 2,
    id: 150,
    question: 'Które z poniższych stwierdzeń najlepiej opisuje heliosferę?',
  },
  {
    answers: [
      { correct: false, text: 'Beata Kozidrak' },
      { correct: false, text: 'Joanna Jabłczyńska' },
      { correct: true, text: 'Joanna Liszowska' },
      { correct: false, text: 'Natalia Siwiec' },
    ],
    category: 'celebrities',
    difficultyLevel: 1,
    id: 151,
    question: 'Uzupełnij: "__ kieliszek do kolacji __"',
  },
  {
    answers: [
      { correct: true, text: 'Katy Perry' },
      { correct: false, text: 'Lady Gaga' },
      { correct: false, text: 'Beyoncé' },
      { correct: false, text: 'Rihanna' },
    ],
    category: 'celebrities',
    difficultyLevel: 0,
    id: 152,
    question:
      'Która światowa gwiazda pop wzięła udział w misji Blue Origin w 2025 roku jako jedna z pierwszych kobiet w kosmosie?',
  },
  {
    answers: [
      { correct: true, text: 'Lauren Sánchez' },
      { correct: false, text: 'Gayle King' },
      { correct: false, text: 'Kim Kardashian' },
      { correct: false, text: 'Oprah Winfrey' },
    ],
    category: 'celebrities',
    difficultyLevel: 1,
    id: 153,
    question:
      'Która celebrytka i partnerka Jeffa Bezosa była na pokładzie misji Blue Origin razem z Katy Perry?',
  },
  {
    answers: [
      { correct: true, text: 'Marka Monse' },
      { correct: false, text: 'Balenciaga' },
      { correct: false, text: 'Gucci' },
      { correct: false, text: 'Stella McCartney' },
    ],
    category: 'celebrities',
    difficultyLevel: 2,
    id: 154,
    question:
      'Kto zaprojektował skafandry astronautyczne dla uczestniczek kobiecej misji Blue Origin w 2025 roku?',
  },
  {
    answers: [
      { correct: true, text: 'około 105 km' },
      { correct: false, text: 'około 50 km' },
      { correct: false, text: 'około 300 km' },
      { correct: false, text: 'około 10 km' },
    ],
    category: 'space',
    difficultyLevel: 2,
    id: 155,
    question:
      'Jaką wysokość osiągnęła rakieta Blue Origin NS-31 podczas misji z udziałem Katy Perry?',
  },
  {
    answers: [
      { correct: true, text: '2025' },
      { correct: false, text: '2023' },
      { correct: false, text: '2027' },
      { correct: false, text: '2020' },
    ],
    category: 'space',
    difficultyLevel: 0,
    id: 156,
    question:
      'W którym roku odbyła się misja kosmiczna Sławosza Uznańskiego, dzięki której został drugim Polakiem w kosmosie?',
  },
  {
    answers: [
      { correct: true, text: 'CERN (Europejska Organizacja Badań Jądrowych)' },
      { correct: false, text: 'NASA' },
      { correct: false, text: 'SpaceX' },
      { correct: false, text: 'Polska Agencja Kosmiczna' },
    ],
    category: 'science',
    difficultyLevel: 2,
    id: 157,
    question:
      'Z jaką organizacją współpracował Sławosz Uznański zanim został astronautą Europejskiej Agencji Kosmicznej?',
  },
  {
    answers: [
      { correct: true, text: 'Axiom Mission 4 (Ignis)' },
      { correct: false, text: 'Apollo Next' },
      { correct: false, text: 'Polaris Dawn' },
      { correct: false, text: 'Dragon Starlink' },
    ],
    category: 'space',
    difficultyLevel: 2,
    id: 158,
    question:
      'Jak nazywała się misja kosmiczna, w której Sławosz Uznański poleciał na orbitę w 2025 roku?',
  },
  {
    answers: [
      { correct: true, text: 'Bo ma otwarte okna' },
      { correct: false, text: 'Bo nie ma grzałki' },
      { correct: false, text: 'Bo siedzi w piwnicy' },
      { correct: false, text: 'Bo zapomniał się zrestartować' },
    ],
    category: 'lameJoke',
    difficultyLevel: 0,
    id: 159,
    question: 'Dlaczego komputerowi jest zimno?',
  },
  {
    answers: [
      { correct: false, text: 'Gotuje opowieść' },
      { correct: false, text: 'Pisze przepis' },
      { correct: true, text: 'Czyta makaron' },
      { correct: false, text: 'Układa rozdziały w garnku' },
    ],
    category: 'lameJoke',
    difficultyLevel: 0,
    id: 160,
    question: 'Co robi książka w kuchni?',
  },
  {
    answers: [
      { correct: true, text: 'Bo boi się myszy' },
      { correct: false, text: 'Bo nie umie pisać' },
      { correct: false, text: 'Bo ma za duże uszy' },
      { correct: false, text: 'Bo nie ma internetu w dżungli' },
    ],
    category: 'lameJoke',
    difficultyLevel: 0,
    id: 161,
    question: 'Dlaczego słoń nie używa komputera?',
  },
  {
    answers: [
      { correct: false, text: 'Słońce' },
      { correct: false, text: 'Kot w butach' },
      { correct: true, text: 'Panda' },
      { correct: false, text: 'Kameleon' },
    ],
    category: 'lameJoke',
    difficultyLevel: 0,
    id: 162,
    question: 'Jakie zwierzę nosi okulary przeciwsłoneczne?',
  },
  {
    answers: [
      { correct: true, text: 'Bo mają podejrzane korzenie' },
      { correct: false, text: 'Bo rosną za szybko' },
      { correct: false, text: 'Bo szeptają między sobą' },
      { correct: false, text: 'Bo zrzucają liście' },
    ],
    category: 'lameJoke',
    difficultyLevel: 0,
    id: 163,
    question: 'Dlaczego nie można ufać drzewom?',
  },
  {
    answers: [
      { correct: true, text: 'Nie mam bagażu, podróżuję bez masy!' },
      { correct: false, text: 'Proszę o pokój z widokiem na galaktykę' },
      { correct: false, text: 'Czy jest tu Wi-Fi?' },
      { correct: false, text: 'Mam tylko światło dzienne' },
    ],
    category: 'lameJoke',
    difficultyLevel: 1,
    id: 164,
    question: 'Co mówi foton, gdy zatrzymuje się przy hotelu?',
  },
  {
    answers: [
      { correct: true, text: 'Bo zawsze ściąga z Ziemi' },
      { correct: false, text: 'Bo jest zbyt odległy' },
      { correct: false, text: 'Bo woli świecić niż myśleć' },
      { correct: false, text: 'Bo ciągle znika' },
    ],
    category: 'lameJoke',
    difficultyLevel: 1,
    id: 165,
    question: 'Dlaczego księżyc nigdy nie zdaje egzaminów?',
  },
  {
    answers: [
      { correct: false, text: 'Bo zawsze mówi w reakcjach' },
      { correct: false, text: 'Bo ma zbyt wiele pierwiastków prawdy' },
      { correct: true, text: 'Bo wszystko wychodzi w próbnówce' },
      { correct: false, text: 'Bo ma zbyt czyste sumienie' },
    ],
    category: 'lameJoke',
    difficultyLevel: 1,
    id: 166,
    question: 'Dlaczego chemik nie potrafi kłamać?',
  },
  {
    answers: [
      { correct: true, text: 'Bo nie miał doświadczenia ziemskiego' },
      { correct: false, text: 'Bo miał zielone referencje' },
      { correct: false, text: 'Bo nie mówił po ludzku' },
      { correct: false, text: 'Bo zapomniał CV na innej planecie' },
    ],
    category: 'lameJoke',
    difficultyLevel: 1,
    id: 167,
    question: 'Dlaczego kosmita nie znalazł pracy?',
  },
  {
    answers: [
      { correct: false, text: 'Hello, World... żono!' },
      { correct: true, text: 'Commituję się na zawsze' },
      { correct: false, text: 'Zmieniam status na "occupied"' },
      { correct: false, text: 'Ctrl+Z już nie działa' },
    ],
    category: 'lameJoke',
    difficultyLevel: 1,
    id: 168,
    question: 'Co mówi programista po ślubie?',
  },
];
