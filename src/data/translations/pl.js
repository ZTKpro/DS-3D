import { portfolio_pl } from "../portfolio";

const translation = {
  ...portfolio_pl,
  menu: {
    about: "O mnie",
    portfolio: "Portfolio",
    contact: "Kontakt",
  },
  about: {
    scan: "Skanowanie",
    classification: "Klastfikacja jednostki",
    programmer: "Programista",
    netrunner: "Netrunner",
    name: "Dane",
    skill: "Umiejętności",
    experience: "Doświadczenie",
    info: "Informacje",
    about: {
      quality:
        "Posiada wysokiej jakości umiejętności programowania w JavaScript, z doświadczeniem w technologii Web3.",
      experience:
        "Doświadczenie zdobyte dzięki współpracy z popularnymi markami, takimi jak Polska Press, Samsung, Pekeo i Biedronka, pozwoliło na rozwijanie skomplikowanych projektów przy użyciu najnowszych technologii.",
      skill: "Wysokie umiejętności techniczne i zrozumienie biznesu.",
    },
    abilities: "umiejętności",
    combat: "Walka",
    hacking: "Hacking",
  },
  porfolio: {
    back: "Zamknij",
    name: "Nazwa",
    description: "Opis",
    tech: "Tech",
    items: [
      {
        name: "Object detector",
        description:
          "High-quality JavaScript programming skills are possessed, with experience in Web3 technology.",
      },
    ],
  },
  contact: "Kontakt",
};

export default translation;
