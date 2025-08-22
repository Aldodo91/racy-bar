import * as images from "./images";

const ALL = {
  xmas: {
    img: images.lungo,
    nome: "Xmas",
    ricetta: {
      it: "Whiskey, cannella e ogni cosa è bella",
      en: "Whiskey, cinnamon and everything is beautiful",
    },
  },
  sydney2: {
    img: images.martini,
    nome: "Sydney 2.0",
    ricetta: {
      it: "Gin, Lamponi, Bacche",
      en: "Gin, Raspberries, berries",
    },
  },
  chai: {
    img: images.vino,
    nome: "Chai",
    ricetta: {
      it: "Aged Rum, indian chai, ginger beer",
      en: "Aged Rum, indian chai, ginger beer",
    },
  },
  santaCokie: {
    img: images.corto,
    nome: "Santa's cookie",
    ricetta: {
      it: "Gin, cannella, winter spice",
      en: "Gin, cannella, winter spice",
    },
  },
  melaCannella: {
    img: images.lungoBlu,
    nome: "Mela e Cannella",
    ricetta: {
      it: "Vodka, mela limoncella, cannella ",
      en: "Vodka, apple limoncella, cinnamon",
    },
  },
  winter: {
    img: images.corto,
    nome: "Winter breeze",
    ricetta: {
      it: "Bourbon, cannella, peperoncino, clementine",
      en: "Bourbon, cinnamon, chili, clementines",
    },
  },
  montreal: {
    img: images.scrigno,
    nome: "Montréal",
    ricetta: {
      it: "Bourbon, Maple al limone, Smoke bitter",
      en: "Bourbon, Lemon maple syrup, Smoke bitter",
    },
  },
  ccc: {
    img: images.corto,
    nome: "CCC",
    ricetta: {
      it: "Cognac, Cioccolato, bitter alla ciliegia",
      en: "Cognac, Chocolate, cherry bitters",
    },
  },
  vitaminaC: {
    img: images.vasetto,
    nome: "Vitamina C",
    ricetta: {
      it: "Antiossidante & Ipocalorico",
      en: "Antioxidant & Low-calorie",
    },
  },
  roulette: {
    img: images.question,
    nome: "Cocktail roulette",
    ricetta: {
      it: "Dimmi ciò che ti piace",
      en: "Tell me what you like",
    },
  },
  cinnamon: {
    img: images.moro,
    nome: "Cinnamon Roll",
    ricetta: {
      it: "Cannella, gin, limone",
      en: "Cinnamon, gin, lemon",
    },
  },
  barcellona: {
    img: images.lungo,
    nome: "Barcellona",
    ricetta: {
      it: "Vodka & Gin agli agrumi, Riboflavina, Tonica",
      en: "Citrusy Vodka & Gin, Riboflavin, Tonic",
    },
  },
  cancun: {
    img: images.corto,
    nome: "Cancún",
    ricetta: {
      it: "Tequila, Limone, Mandorla piccante",
      en: "Tequila, Fresh lemon juice, Spicy almond",
    },
  },
  sottobosco: {
    img: images.lungoBlu,
    nome: "Sottobosco",
    ricetta: {
      it: "Vermouth ai funghi Porcini, bitter al rosmarino, soda al pompelmo",
      en: "Porcini mushroom vermouth, rosemary bitters, grapefruit soda",
    },
  },
  cuba: {
    img: images.corto,
    nome: "Cuba ",
    ricetta: {
      it: "Aged rum, fumo di quercia, caffè ",
      en: "Aged rum, oak smoke, coffee",
    },
  },
  nocciolaSour: {
    img: images.martini,
    nome: "Nocciola sour",
    ricetta: {
      it: "Nocciola, sour",
      en: "Hazelnut, sour",
    },
  },
  montella: {
    img: images.lungoBlu,
    nome: "Montella",
    ricetta: {
      it: "Castagna, Rabarbaro, Vermouth, Limone",
      en: "Chestnut, Rhubarb, Vermouth, Lemon",
    },
  },

  fallingLove: {
    img: images.mela,
    nome: "FALLing in love",
    ricetta: {
      it: "Bourbon Whiskey, zucca, cannella",
      en: "Bourbon Whiskey, pumpkin, Cinnamon",
    },
  },
  venice: {
    img: images.flute,
    nome: "Venice",
    ricetta: {
      it: "Pesca fresca, Prosecco, Love",
      en: "Fresh peach, Prosecco, Love",
    },
  },
  sydney: {
    img: images.martiniBlu,
    nome: "Sydney",
    ricetta: {
      it: "Gin, Anguria, Sour, Prosecco",
      en: "Gin, Watermelon, Sour, Prosecco",
    },
  },
  tiramisu: {
    img: images.moka,
    nome: "Tiramisù Martini",
    ricetta: {
      it: "Better than s*x",
      en: "Better than s*x",
    },
  },
  sunset: {
    img: images.flute,
    nome: "Sunset in Costiera",
    ricetta: {
      it: "Limoncello, fragole, prosecco",
      en: "Limoncello, strawberry, prosecco",
    },
  },
  amsterdam: {
    img: images.ams,
    nome: "Amsterdam",
    ricetta: {
      it: "Gin, marijuana, sale al basilico, zenzero ",
      en: "Gin, marijuana, basil salt, ginger",
    },
  },

  abucaneva: {
    img: images.martini,
    nome: "AƁƁükkyneva",
    ricetta: {
      it: "Mela Limoncella, vodka,limone, piccante",
      en: "Sant'Agata apple, vodka, fresh lemon juice, spicy",
    },
  },
  spicy: {
    img: images.cortoBlu,
    nome: "Spicy night",
    ricetta: {
      it: "Tequila, Anguria, piccante ",
      en: "Tequila, fresh Watermelon, Spicy",
    },
  },
  flowerPower: {
    img: images.vino,
    nome: "Flower power",
    ricetta: {
      it: "Come uno spritz, ma meglio",
      en: "Just like a spritz, but better",
    },
  },
  rio: {
    img: images.lungoBlu,
    nome: "Rio",
    ricetta: {
      it: "Cachaça, Limone, Fiori di sambuco, Ananas, Butterfly pea",
      en: "Cachaça, Fresh lemon juice, Elderflower, Pineapple, Butterfly pea",
    },
  },
  hongCong: {
    img: images.moro,
    nome: "Hong Kong",
    ricetta: {
      it: "Racy herbal liqueur, Chinotto, Limone",
      en: "Racy herbal liqueur, Chinotto, Fresh lemon juice",
    },
  },
  springBreak: {
    img: images.imbuto,
    nome: "Spring break",
    ricetta: {
      it: "Gin, acqua di mare, basilico, velluto di ananas & Campari",
      en: "Gin, sea water, basil, pineapple & Campari velvet",
    },
  },
  sanJuan: {
    img: images.lungo,
    nome: "San Juan",
    ricetta: {
      it: "Rum bianco, menta fresca, lager",
      en: "Light rum, fresh mint, lager ",
    },
  },
  santiago: {
    img: images.martini,
    nome: "Santiago",
    ricetta: {
      it: "Pisco, Ananas, Melograno",
      en: "Pisco, Pineapple, Pomegranate",
    },
  },
  negroniPrimavera: {
    img: images.corto,
    nome: "Negroni primavera",
    ricetta: {
      it: "Negroni, carciofo, lager ",
      en: "Negroni, artichoke, lager",
    },
  },
  honeyMoon: {
    img: images.uccello,
    nome: "Honey moon",
    ricetta: {
      it: "Racy Gin, sherbet di miele agrumi & camomilla, soia, acqua di mare",
      en: "Racy Gin, citrus honey sherbet & chamomile, soy, sea water",
    },
  },
  carnevale: {
    img: images.martini,
    nome: "Cocktail di carnevale",
    ricetta: {
      it: "Coriandolo, Strega, sour",
      en: "Coriandolo, Strega, sour",
    },
  },
  atlanta: {
    img: images.cola,
    nome: "Atlanta",
    ricetta: {
      it: "House spiced Rum, Carlo Cola, lime",
      en: "House spiced rum, Carlo Cola, lime",
    },
  },
  forestaRossa: {
    img: images.lungo,
    nome: "Foresta Rossa",
    ricetta: {
      it: "Funghi porcini, vodka, pomodoro, umami",
      en: "Porcini mushrooms, vodka, tomatoes, umami",
    },
  },
  camomile75: {
    img: images.flute,
    nome: "Chamomile 75",
    ricetta: {
      it: "Gin, camomilla, fiori, Prosecco",
      en: "Gin, chamomile, flowers, prosecco",
    },
  },
  la: {
    img: images.martini,
    nome: "L.A.",
    ricetta: {
      it: "Bourbon, Ancho Reyes, Amaro 18, Chinotto",
      en: "Bourbon, Ancho Reyes, Amaro 18, Chinotto",
    },
  },
  naples: {
    img: images.moka,
    nome: "Naples",
    ricetta: {
      it: "Rum, Ciocolato, Caffè, Nocciola",
      en: "Rum, Chocolate, Coffee, Hazelnut",
    },
  },
  myconos: {
    img: images.corto, // ?
    nome: "Mykonos",
    ricetta: {
      it: "Ouzo, Racy Amaro, Ginger beer, Limone",
      en: "Ouzo, Racy Amaro, Ginger beer, Fresh lemon juice",
    },
  },
  tokyo: {
    img: images.corto, // ?
    nome: "Tokyo",
    ricetta: {
      it: "Gin Roku, Bitter al tartufo, Vermouth Rosso, Umami",
      en: "Roku Gin, Truffle Bitter, Swee Vermouth, Umami",
    },
  },
  london: {
    img: images.corto, // ?
    nome: "London",
    ricetta: {
      it: "Racy Citrusy Gin, Mela, Menta, Fiori di sanbuco, Cetriolo, Limone",
      en: "Racy Citrusy Gin, Apple, Mint, Elderflower, Cucumber, Fresh lemon juice",
    },
  },
  lima: {
    img: images.corto, // ?
    nome: "Lima",
    ricetta: {
      it: "Pisco, Melograno, Limone, Ananas",
      en: "Pisco, Pomegranate, Lemon, Pineapple",
    },
  },
  cannes: {
    img: images.corto, // ?
    nome: "Cannes",
    ricetta: {
      it: "Cognac, Pernod, Sciroppo di Champagne, Peychaud bitter",
      en: "Cognac, Pernod, Champagne syroup, Peychaud bitter",
    },
  },
  negroniMediterraneo: {
    img: images.corto,
    nome: "Negroni Mediterraneo",
    ricetta: {
      it: "Gin, Campari, Profumi Mediterranei",
      en: "Gin, Campari, Mediterranean Perfumes",
    },
  },
  santagata: {
    img: images.lungo,
    nome: "Sant'Agata",
    ricetta: {
      it: "Sorbetto al Limone, Limoncello, Prosecco, Fragola",
      en: " Lemon sorbetto, Limoncello, Prosecco, strawberry",
    },
  },
  firenze: {
    img: images.corto,
    nome: "Firenze",
    ricetta: {
      it: "Negroni Viola",
      en: "Purple Negroni",
    },
  },
  malabar: {
    img: images.lungo,
    nome: "Malabar",
    ricetta: {
      it: "Rum scuro, Zenzero, Limone, Mandorla ",
      en: "Dark rum, Ginger, Lemon, Almond",
    },
  },
  fijian: {
    img: images.moro,
    nome: "Fujian",
    ricetta: {
      it: "Mix segreto, limone, Lapsang souchong",
      en: "Secret mix, Lemon, Lapsang souchoung",
    },
  },
  Jasmine75: {
    img: images.nudeFat,
    nome: "Jasmine 75",
    ricetta: {
      it: "Gin, gelsomino, bollicine ",
      en: "Gin, jaemine, prosecco",
    },
  },
  negroniTerraSirene: {
    img: images.corto,
    nome: "Negroni Terra delle Sirene",
    ricetta: {
      it: "Gin, Campari, Vermouth, Olio di Oliva,Gocce di acqua di mare",
      en: "Gin, Campari, Vermouth, Olive Oil, Drops of sea water",
    },
  },
  winterBellini: {
    img: images.nudeCristal,
    nome: "Winter bellini",
    ricetta: {
      it: "'Pesca invernale', prosecco, magia",
      en: "'Winter peach', prosecco, magic",
    },
  },
  candyCane: {
    img: images.lungo,
    nome: "Candy cane",
    ricetta: {
      it: "Vodka, menta, candy cane",
      en: "Vodka, menta, candy cane",
    },
  },
  afterdinner: {
    img: images.fenicottero,
    nome: "The afterdinner",
    ricetta: {
      it: "Baileys, cioccolato, mandorle, latte",
      en: "Baileys, cioccolato, mandorle, latte",
    },
  },
  tropicalOasis: {
    img: images.rame,
    nome: "Tropical Oasis",
    ricetta: {
      it: "Rum, fragola, cocco, arancia",
      en: "Rum, strawberry, coconut, orange",
    },
  },
  bitterTruth: {
    img: images.corto,
    nome: "The bitter truth",
    ricetta: {
      it: "Blend di Amari italo-giapponesi, sour",
      en: "Italian-Japanese Amari blend, sour",
    },
  },
  myTai: {
    img: images.nero,
    nome: "My Tai",
    ricetta: {
      it: "Rum chiaro, dark rum, arancia, limone, mandorle",
      en: "Rum, dark rum, orange, lemon, almond",
    },
  },
};

export const signature = [
  ALL.roulette,
  // ALL.xmas,
  //ALL.negroniTerraSirene,
  //ALL.winterBellini,
  ALL.tropicalOasis,
  ALL.bitterTruth,
  ALL.myTai,
  ALL.flowerPower,
  ALL.afterdinner,
  // ALL.sydney2,
  ALL.sydney,
  // ALL.winter,
  // ALL.candyCane,
  //ALL.Jasmine75,
  // ALL.nocciolaSour,

  //ALL.negroniMediterraneo,
  // ALL.santagata,
  // ALL.montella,
  ALL.tiramisu,
  //ALL.malabar,
  //ALL.firenze,
  ALL.amsterdam,
  ALL.cancun,
  ALL.montreal,
  ALL.venice,
  ALL.barcellona,
  ALL.cuba,
  //ALL.sunset,
  //ALL.fijian,
];

export const negroniWeek = [
  // {
  //   img: images.nudeCristal,
  //   nome: "Winter bellini",
  //   ricetta: {
  //     it: "'Pesca invernale', prosecco, magia",
  //     en: "'Winter peach', prosecco, magic",
  //   },
  // },
];
