import SamsungImg from "../assets/porfolio/Samsung.jpg";
import EdumatImg from "../assets/porfolio/Edumat.png";
import HrkImg from "../assets/porfolio/Hrk.png";
import DonotblinkImg from "../assets/porfolio/Donotblink.png";
import LeadmeImg from "../assets/porfolio/Leadme.png";
import WalletImg from "../assets/porfolio/Wallet.png";
import SmartImg from "../assets/porfolio/Smart.png";
import ShoeImg from "../assets/porfolio/Shoe.png";
import MetaverseImg from "../assets/porfolio/Metaverse.png";
import SelfImg from "../assets/porfolio/Self.png";
import EmotionImg from "../assets/porfolio/Emotion.png";
import AssistantImg from "../assets/porfolio/Assistant.png";
import AnimalImg from "../assets/porfolio/Animal.png";
import ObjectImg from "../assets/porfolio/Object.png";

const menu = {
  ABOUT: "about",
  PORTFOLIO: "portfolio",
  CONTACT: "contact",
};

const portfolio = [
  {
    name: "Samsunga AR",
    describe:
      "Aplikacja rzeczywistości rozszerzonej (AR) dedykowana dla urządzeń Samsung.",
    tags: ["AR", "Samsung", "Rozszerzona rzeczywistość"],
    image: SamsungImg,
    url: "https://www.przejdznastronefoldow.pl/",
  },
  {
    name: "Porfel cryptowalutowy",
    describe: "Aplikacja umożliwiająca zarządzanie portfelem kryptowalutowym.",
    tags: ["Kryptowaluty", "Portfolio", "Inwestycje"],
    image: WalletImg,
    url: "https://github.com/ZTKpro/BlockChain",
  },
  {
    name: "Kontrakt Solidity",
    describe:
      "Projekt kontraktu Solidity dla bezpiecznej i efektywnej transakcji blockchain.",
    tags: ["Blockchain", "Solidity", "Kontrakty"],
    image: SmartImg,
    url: "https://github.com/ZTKpro/Solidity",
  },
  {
    name: "Konfigurator 3D butów",
    describe:
      "Interaktywny konfigurator 3D umożliwiający personalizację butów.",
    tags: ["3D", "Konfigurator", "Buty"],
    image: ShoeImg,
    url: "https://ds-3d-configurator.netlify.app/",
  },
  {
    name: "Metaverse",
    describe:
      "Wirtualny świat stworzony w metaversie, gdzie możesz eksplorować i tworzyć.",
    tags: ["Metawers", "Wirtualny świat", "Eksploracja"],
    image: MetaverseImg,
    url: "https://ds-metaverse.netlify.app/",
  },
  {
    name: "Wykrywacz obiektów na zdjęciach",
    describe: "Aplikacja AI do wykrywania obiektów na zdjęciach.",
    tags: ["AI", "Wykrywanie obiektów", "Zdjęcia"],
    image: ObjectImg,
    url: "https://ds-code.netlify.app/ai/detector",
  },
  {
    name: "AI asystent głosowy",
    describe: "Asystent głosowy obsługujący podstawowe zadania.",
    tags: ["AI", "Asystent głosowy", "Automatyzacja"],
    image: AssistantImg,
    url: "https://ds-code.netlify.app/ai/voice-assistant",
  },
  {
    name: "Self-driving Car JavsScript",
    describe: "Gra komputerowa, która wykorzystuje ręcznie napisany model AI.",
    tags: ["Gra", "AI", "Rozrywka"],
    image: SelfImg,
    url: "https://car-network.netlify.app/",
  },
  {
    name: "Classification AI animal",
    describe:
      "Aplikacja wykorzystująca TensorFlow do klasyfikacji różnych obiektów.",
    tags: ["AI", "TensorFlow", "Klasyfikacja"],
    image: AnimalImg,
    url: "https://classifier-js-ds.netlify.app/",
  },
  {
    name: "Emotion Detection",
    describe: "Aplikacja wykorzystująca AI do rozpoznawania emocji.",
    tags: ["AI", "Emocje", "Rozpoznawanie"],
    image: EmotionImg,
    url: "https://motion-detection-ds.netlify.app/",
  },
  {
    name: "Edumat",
    describe:
      "Edukacyjna platforma online oferująca szeroki zakres kursów i materiałów.",
    tags: ["Edukacja", "Platforma", "Kursy"],
    image: EdumatImg,
    url: "https://edumat.pl/",
  },
  {
    name: "HRK",
    describe: "Innowacyjna platforma HR dedykowana dla firm i kandydatów.",
    tags: ["HR", "Rekrutacja", "Praca"],
    image: HrkImg,
    url: "https://www.hrk.pl",
  },
  {
    name: "leadme.ai",
    describe:
      "Zaawansowane narzędzie AI do generowania leadów i optymalizacji sprzedaży.",
    tags: ["AI", "Leady", "Sprzedaż"],
    image: LeadmeImg,
    url: "https://www.leadme.ai",
  },
  {
    name: "donotblink",
    describe: "Mini gra oparta na JavaScript",
    tags: ["Game"],
    image: DonotblinkImg,
    url: "https://ds-donotblink.netlify.app/",
  },
];

const portfolioFilter = ["AI", "Blockchain", "3D"];

export { menu, portfolio, portfolioFilter };
