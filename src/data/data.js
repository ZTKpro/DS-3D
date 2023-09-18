const menu = {
  ABOUT: "about",
  PORTFOLIO: "portfolio",
  CONTACT: "contact",
  DREAMS: "dreams",
  PL: "pl",
};

const portfolio = [
  {
    name: "edumat.pl",
    describe:
      "Edukacyjna platforma online oferująca szeroki zakres kursów i materiałów.",
    tags: ["Edukacja", "Platforma", "Kursy"],
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.tapeciarnia.pl%2Ffotki%2Fd%2F26033_1537299778_6799.jpg&f=1&nofb=1&ipt=fdce78e65d826834ccbff8287a03545c9a76fa0af9dfe3b2540d7c20dcded2e5&ipo=images",
    url: "https://www.edumat.pl",
  },
  {
    name: "pmicareers.pl",
    describe:
      "Portal kariery dedykowany dla profesjonalistów PMI szukających nowych możliwości.",
    tags: ["Kariera", "PMI", "Praca"],
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.tapeciarnia.pl%2Ffotki%2Fd%2F26033_1537299778_6799.jpg&f=1&nofb=1&ipt=fdce78e65d826834ccbff8287a03545c9a76fa0af9dfe3b2540d7c20dcded2e5&ipo=images",
    url: "https://www.pmicareers.pl",
  },
  {
    name: "hrk.pl",
    describe: "Innowacyjna platforma HR dedykowana dla firm i kandydatów.",
    tags: ["HR", "Rekrutacja", "Praca"],
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.tapeciarnia.pl%2Ffotki%2Fd%2F26033_1537299778_6799.jpg&f=1&nofb=1&ipt=fdce78e65d826834ccbff8287a03545c9a76fa0af9dfe3b2540d7c20dcded2e5&ipo=images",
    url: "https://www.hrk.pl",
  },
  {
    name: "leadme.ai",
    describe:
      "Zaawansowane narzędzie AI do generowania leadów i optymalizacji sprzedaży.",
    tags: ["AI", "Leady", "Sprzedaż"],
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.tapeciarnia.pl%2Ffotki%2Fd%2F26033_1537299778_6799.jpg&f=1&nofb=1&ipt=fdce78e65d826834ccbff8287a03545c9a76fa0af9dfe3b2540d7c20dcded2e5&ipo=images",
    url: "https://www.leadme.ai",
  },
  {
    name: "Porfel cryptowalutowy",
    describe: "Aplikacja umożliwiająca zarządzanie portfelem kryptowalutowym.",
    tags: ["Kryptowaluty", "Portfolio", "Inwestycje"],
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.tapeciarnia.pl%2Ffotki%2Fd%2F26033_1537299778_6799.jpg&f=1&nofb=1&ipt=fdce78e65d826834ccbff8287a03545c9a76fa0af9dfe3b2540d7c20dcded2e5&ipo=images",
    url: "https://github.com/ZTKpro/BlockChain",
  },
  {
    name: "Kontrakt Solidity",
    describe:
      "Projekt kontraktu Solidity dla bezpiecznej i efektywnej transakcji blockchain.",
    tags: ["Blockchain", "Solidity", "Kontrakty"],
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.tapeciarnia.pl%2Ffotki%2Fd%2F26033_1537299778_6799.jpg&f=1&nofb=1&ipt=fdce78e65d826834ccbff8287a03545c9a76fa0af9dfe3b2540d7c20dcded2e5&ipo=images",
    url: "https://github.com/ZTKpro/Solidity",
  },
  {
    name: "Konfigurator 3D butów",
    describe:
      "Interaktywny konfigurator 3D umożliwiający personalizację butów.",
    tags: ["3D", "Konfigurator", "Buty"],
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.tapeciarnia.pl%2Ffotki%2Fd%2F26033_1537299778_6799.jpg&f=1&nofb=1&ipt=fdce78e65d826834ccbff8287a03545c9a76fa0af9dfe3b2540d7c20dcded2e5&ipo=images",
    url: "https://ds-3d-configurator.netlify.app/",
  },
  {
    name: "Cały mój świat w metaversie",
    describe:
      "Wirtualny świat stworzony w metaversie, gdzie możesz eksplorować i tworzyć.",
    tags: ["Metawers", "Wirtualny świat", "Eksploracja"],
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.tapeciarnia.pl%2Ffotki%2Fd%2F26033_1537299778_6799.jpg&f=1&nofb=1&ipt=fdce78e65d826834ccbff8287a03545c9a76fa0af9dfe3b2540d7c20dcded2e5&ipo=images",
    url: "https://ds-metaverse.netlify.app/",
  },
  {
    name: "Wykrywacz obiektów na zdjęciach",
    describe: "Aplikacja AI do wykrywania obiektów na zdjęciach.",
    tags: ["AI", "Wykrywanie obiektów", "Zdjęcia"],
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.tapeciarnia.pl%2Ffotki%2Fd%2F26033_1537299778_6799.jpg&f=1&nofb=1&ipt=fdce78e65d826834ccbff8287a03545c9a76fa0af9dfe3b2540d7c20dcded2e5&ipo=images",
    url: "https://ds-code.netlify.app/ai/detector",
  },
  {
    name: "Prosty asystent głosowy",
    describe: "Asystent głosowy obsługujący podstawowe zadania.",
    tags: ["AI", "Asystent głosowy", "Automatyzacja"],
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.tapeciarnia.pl%2Ffotki%2Fd%2F26033_1537299778_6799.jpg&f=1&nofb=1&ipt=fdce78e65d826834ccbff8287a03545c9a76fa0af9dfe3b2540d7c20dcded2e5&ipo=images",
    url: "https://ds-code.netlify.app/ai/voice-assistant",
  },
  {
    name: "Gra oparta na ręcznie napisanym modelu AI",
    describe: "Gra komputerowa, która wykorzystuje ręcznie napisany model AI.",
    tags: ["Gra", "AI", "Rozrywka"],
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.tapeciarnia.pl%2Ffotki%2Fd%2F26033_1537299778_6799.jpg&f=1&nofb=1&ipt=fdce78e65d826834ccbff8287a03545c9a76fa0af9dfe3b2540d7c20dcded2e5&ipo=images",
    url: "https://car-network.netlify.app/",
  },
  {
    name: "Aplikacja z AI TensorFlow do klasyfikacji danych obiektów",
    describe:
      "Aplikacja wykorzystująca TensorFlow do klasyfikacji różnych obiektów.",
    tags: ["AI", "TensorFlow", "Klasyfikacja"],
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.tapeciarnia.pl%2Ffotki%2Fd%2F26033_1537299778_6799.jpg&f=1&nofb=1&ipt=fdce78e65d826834ccbff8287a03545c9a76fa0af9dfe3b2540d7c20dcded2e5&ipo=images",
    url: "https://classifier-js-ds.netlify.app/",
  },
  {
    name: "Aplikacja z AI do wykrywania emocji",
    describe: "Aplikacja wykorzystująca AI do rozpoznawania emocji.",
    tags: ["AI", "Emocje", "Rozpoznawanie"],
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.tapeciarnia.pl%2Ffotki%2Fd%2F26033_1537299778_6799.jpg&f=1&nofb=1&ipt=fdce78e65d826834ccbff8287a03545c9a76fa0af9dfe3b2540d7c20dcded2e5&ipo=images",
    url: "https://motion-detection-ds.netlify.app/",
  },
  {
    name: "Aplikacja AR dla Samsunga",
    describe:
      "Aplikacja rzeczywistości rozszerzonej (AR) dedykowana dla urządzeń Samsung.",
    tags: ["AR", "Samsung", "Rozszerzona rzeczywistość"],
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.tapeciarnia.pl%2Ffotki%2Fd%2F26033_1537299778_6799.jpg&f=1&nofb=1&ipt=fdce78e65d826834ccbff8287a03545c9a76fa0af9dfe3b2540d7c20dcded2e5&ipo=images",
    url: "https://www.przejdznastronefoldow.pl/",
  },
];

const portfolioFilter = ["AI", "Blockchain", "3D"];

export { menu, portfolio, portfolioFilter };
