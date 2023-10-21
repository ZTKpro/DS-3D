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

const portfolio_pl = {
  samsung: {
    name: "Samsunga AR",
    describe:
      "Aplikacja rzeczywistości rozszerzonej (AR) dedykowana dla urządzeń Samsung.",
  },
  selfDrivingCar: {
    name: "Self-driving Car JavsScript",
    describe: "Gra komputerowa, która wykorzystuje ręcznie napisany model AI.",
  },
  edumat: {
    name: "Edumat",
    describe:
      "Edukacyjna platforma online oferująca szeroki zakres kursów i materiałów.",
  },
  cryptoWallet: {
    name: "Porfel cryptowalutowy",
    describe: "Aplikacja umożliwiająca zarządzanie portfelem kryptowalutowym.",
  },
  solidityContract: {
    name: "Kontrakt Solidity",
    describe:
      "Projekt kontraktu Solidity dla bezpiecznej i efektywnej transakcji blockchain.",
  },
  shoeConfigurator: {
    name: "Konfigurator 3D butów",
    describe:
      "Interaktywny konfigurator 3D umożliwiający personalizację butów.",
  },
  metaverse: {
    name: "Metaverse",
    describe:
      "Wirtualny świat stworzony w metaversie, gdzie możesz eksplorować i tworzyć.",
  },
  objectDetection: {
    name: "Wykrywacz obiektów na zdjęciach",
    describe: "Aplikacja AI do wykrywania obiektów na zdjęciach.",
  },
  leadmeAi: {
    name: "leadme.ai",
    describe:
      "Zaawansowane narzędzie AI do generowania leadów i optymalizacji sprzedaży.",
  },
  donotblink: {
    name: "donotblink",
    describe: "Mini gra oparta na JavaScript.",
  },
  voiceAssistant: {
    name: "AI asystent głosowy",
    describe: "Asystent głosowy obsługujący podstawowe zadania.",
  },
  classificationAi: {
    name: "Classification AI animal",
    describe:
      "Aplikacja wykorzystująca TensorFlow do klasyfikacji różnych obiektów.",
  },
  emotionDetection: {
    name: "Emotion Detection",
    describe: "Aplikacja wykorzystująca AI do rozpoznawania emocji.",
  },
  hrk: {
    name: "HRK",
    describe: "Innowacyjna platforma HR dedykowana dla firm i kandydatów.",
  },
};

const portfolio_en = {
  samsung: {
    name: "Samsung AR",
    describe:
      "Augmented Reality (AR) application dedicated to Samsung devices.",
  },
  selfDrivingCar: {
    name: "Self-driving Car JavaScript",
    describe: "A computer game that utilizes a hand-written AI model.",
  },
  edumat: {
    name: "Edumat",
    describe:
      "An online educational platform offering a wide range of courses and materials.",
  },
  cryptoWallet: {
    name: "Crypto Wallet",
    describe: "An application for managing a cryptocurrency wallet.",
  },
  solidityContract: {
    name: "Solidity Contract",
    describe:
      "Solidity contract project for secure and efficient blockchain transactions.",
  },
  shoeConfigurator: {
    name: "3D Shoe Configurator",
    describe: "Interactive 3D configurator allowing shoe customization.",
  },
  metaverse: {
    name: "Metaverse",
    describe:
      "A virtual world created in the metaverse where you can explore and create.",
  },
  objectDetection: {
    name: "Object Detection on Images",
    describe: "AI application for detecting objects in images.",
  },
  leadmeAi: {
    name: "leadme.ai",
    describe: "Advanced AI tool for lead generation and sales optimization.",
  },
  donotblink: {
    name: "donotblink",
    describe: "A mini-game based on JavaScript.",
  },
  voiceAssistant: {
    name: "Voice Assistant AI",
    describe: "Voice assistant handling basic tasks.",
  },
  classificationAi: {
    name: "Classification AI for Animals",
    describe: "Application using TensorFlow for classifying various objects.",
  },
  emotionDetection: {
    name: "Emotion Detection",
    describe: "Application using AI to recognize emotions.",
  },
  hrk: {
    name: "HRK",
    describe: "Innovative HR platform dedicated to companies and candidates.",
  },
};

const portfolio = [
  {
    name: "samsung",
    tags: ["AR", "3D"],
    image: SamsungImg,
    url: "https://www.przejdznastronefoldow.pl/",
    label: 0,
  },
  {
    name: "selfDrivingCar",
    tags: ["Game", "AI"],
    image: SelfImg,
    url: "https://car-network.netlify.app/",
    label: 0,
  },
  {
    name: "edumat",
    tags: ["Javascript"],
    image: EdumatImg,
    url: "https://edumat.pl/",
    label: 1,
  },
  {
    name: "cryptoWallet",
    tags: ["Blockchain"],
    image: WalletImg,
    url: "https://github.com/ZTKpro/BlockChain",
    label: 1,
  },
  {
    name: "solidityContract",
    tags: ["Blockchain"],
    image: SmartImg,
    url: "https://github.com/ZTKpro/Solidity",
    label: 1,
  },
  {
    name: "shoeConfigurator",
    tags: ["3D"],
    image: ShoeImg,
    url: "https://ds-3d-configurator.netlify.app/",
    label: 1,
  },
  {
    name: "metaverse",
    tags: ["3D"],
    image: MetaverseImg,
    url: "https://ds-metaverse.netlify.app/",
    label: 1,
  },
  {
    name: "objectDetection",
    tags: ["AI"],
    image: ObjectImg,
    url: "https://ds-code.netlify.app/ai/detector",
    label: 1,
  },
  {
    name: "leadmeAi",
    tags: ["AI"],
    image: LeadmeImg,
    url: "https://www.leadme.ai",
    label: 1,
  },
  {
    name: "donotblink",
    tags: ["Game"],
    image: DonotblinkImg,
    url: "https://ds-donotblink.netlify.app/",
    label: 1,
  },
  {
    name: "voiceAssistant",
    tags: ["AI"],
    image: AssistantImg,
    url: "https://ds-code.netlify.app/ai/voice-assistant",
    label: 2,
  },

  {
    name: "classificationAi",
    tags: ["AI"],
    image: AnimalImg,
    url: "https://classifier-js-ds.netlify.app/",
    label: 2,
  },
  {
    name: "emotionDetection",
    tags: ["AI"],
    image: EmotionImg,
    url: "https://motion-detection-ds.netlify.app/",
    label: 2,
  },

  {
    name: "hrk",
    tags: ["JavaScript"],
    image: HrkImg,
    url: "https://www.hrk.pl",
    label: 2,
  },
];

const portfolioFilter = ["AI", "Blockchain", "3D"];

export { portfolio, portfolioFilter, portfolio_pl, portfolio_en };
