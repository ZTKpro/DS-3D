import { portfolio_en } from "../portfolio";

const translation = {
  ...portfolio_en,
  menu: {
    about: "about",
    portfolio: "portfolio",
    contact: "contact",
  },
  about: {
    scan: "Scan",
    classification: "Classification  unit",
    programmer: "Programmer",
    netrunner: "Netrunner",
    name: "Name",
    skill: "Skills",
    experience: "Experience",
    info: "Informaction",
    about: {
      quality:
        "High-quality JavaScript programming skills are possessed, with experience in Web3 technology.",
      experience:
        "Experience gained through collaboration with popular brands such as Polska Press, Samsung, Pekeo, and Biedronka, has allowed for the development of complex projects using the latest technologies.",
      skill: "High technical skills and understanding of business",
    },
    abilities: "Abilities",
    combat: "Combat",
    hacking: "Hacking",
  },
  porfolio: {
    name: "Name",
    description: "Description",
    tech: "Tech",
    items: [
      {
        name: "Object detector",
        description:
          "High-quality JavaScript programming skills are possessed, with experience in Web3 technology.",
      },
    ],
  },
  contact: "Contact",
};
export default translation;
