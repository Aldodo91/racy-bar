import bc from "../assets/glass/corto.webp";
import mela from "../assets/glass/mela.webp";
import uccello from "../assets/glass/uccello.webp";
import bl from "../assets/glass/lungo.webp";
import calice from "../assets/glass/calice.webp";
import imbuto from "../assets/glass/imbuto.webp";
import martini from "../assets/glass/martini.webp";
import moro from "../assets/glass/moro.webp";
import nude from "../assets/glass/nude.webp";
import scodella from "../assets/glass/scodella.webp";
import scrigno from "../assets/glass/scrigno.webp";

/*
  Ordine : 
  - signature 
  - Sprits
  - mocktail
  - vini (bianchi, rose, rossi, spumanti);
  - // distillati (Gin, Vodka, Rum, Tequila, Scoth Whisky, Bourbon Whiskey, Rye Whiskey, Japanese Whisky, Irish Whisky, Cognac, Armagnac,) 
  - softDrink
  - Caffetteria 
  - Food

  Ordine Sidebad: 
  - Signature 
  - Mocktail 
  - Vini | Wine 
  - Distillati | Spirits
  - Soft Drink
  - Caffetteria | Coffee
  - Food 
*/
export const toShare = [
  // immagine Biancha vuota (cambia nome della categoria ex spriz)
  {
    img: bc,
    nome: "Racy Spritz",
    ricetta: {
      it: "Racy Aperitivo, Prosecco, Frutta fresca",
      en: "Racy Aperitivo, Prosecco, Fresh fruit",
    },
  },
  {
    img: mela,
    nome: "50 Shades of Grey Goose",
    ricetta: {
      it: "Vodka, Lampone, Mirtillo, Prosecco",
      en: "Vodka, Raspberry, Cranberry, Prosecco",
    },
  },
];
export const signature = [
  {
    img: bc,
    nome: "Venice",
    ricetta: {
      it: "Pesca fresca, Prosecco, Love",
      en: "Fresh peach, Prosecco, Love",
    },
  },
  {
    img: mela,
    nome: "Cancún",
    ricetta: {
      it: "Tequila, Limone, Mandorla piccante",
      en: "Tequila, Fresh lemon juice, Spicy almond",
    },
  },
  {
    img: uccello,
    nome: "Montréal",
    ricetta: {
      it: "Bourbon, Maple al limone, Smoke bitter",
      en: "Bourbon, Lemon maple syrup, Smoke bitter",
    },
  },
  {
    img: bl,
    nome: "Hong Kong",
    ricetta: {
      it: "Racy herbal liqueur, Chinotto, Limone",
      en: "Racy herbal liqueur, Chinotto, Fresh lemon juice",
    },
  },
  // {
  //   img: b5,
  //   nome: "San Juan",
  //   ricetta: {
  //     it: "Rum cannella & chiodi di garofano, Cioccolato bianco & Cocco, Anans",
  //     en: "Cinnamon & cloves rum, White chocolate & Cocco, Pineapple",
  //   },
  // },
  {
    img: calice,
    nome: "L.A.",
    ricetta: {
      it: "Boubon, Ancho Reyes, Amaro 18, Chinotto",
      en: "Boubon, Ancho Reyes, Amaro 18, Chinotto",
    },
  },
  {
    img: moro,
    nome: "Naples",
    ricetta: {
      it: "Vodka & Rum alla cannella, Espresso, Ciliegia, Nocciola",
      en: "Cinnamon Vodka & Rum, Espresso, Cherry, Hezel",
    },
  },
  // {
  //   img: b5,
  //   nome: "Mykonos",
  //   ricetta: {
  //     it: "Ouzo, Racy Amaro, Ginger beer, Limone",
  //     en: "Ouzo, Racy Amaro, Ginger beer, Fresh lemon juice",
  //   },
  // },
  // {
  //   img: b5,
  //   nome: "Tokyo",
  //   ricetta: {
  //     it: "Gin Roku, Bitter al tartufo, Vermouth Rosso, Umami",
  //     en: "Roku Gin, Truffle Bitter, Swee Vermouth, Umami",
  //   },
  // },
  {
    img: nude,
    nome: "Sydney",
    ricetta: {
      it: "Gin, Anguria, Sour, Prosecco",
      en: "Gin, Watermelon, Sour, Prosecco",
    },
  },
  {
    img: scodella,
    nome: "Folgore",
    ricetta: {
      it: "Vodka & Gin agli agrumi, Riboflavina, Tonica",
      en: "Citrusy Vodka & Gin, Riboflavin, Tonic",
    },
  },
  // {
  //   img: b5,
  //   nome: "London",
  //   ricetta: {
  //     it: "Racy Citrusy Gin, Mela, Menta, Fiori di sanbuco, Cetriolo, Limone",
  //     en: "Racy Citrusy Gin, Apple, Mint, Elderflower, Cucumber, Fresh lemon juice",
  //   },
  // },
  // {
  //   img: b5,
  //   nome: "Lima",
  //   ricetta: {
  //     it: "Pisco, Melograno, Limone, Ananas",
  //     en: "Pisco, Pomegranate, Lemon, Pineapple",
  //   },
  // },
  {
    img: scrigno,
    nome: "Rio",
    ricetta: {
      it: "Cachaça, Limone, Fiori di sambuco, Butterfly pea",
      en: "Cachaça, Fresh lemon juice, Elderflower, Butterfly pea",
    },
  },
  // {
  //   img: b5,
  //   nome: "Cannes",
  //   ricetta: {
  //     it: "Cognac, Pernod, Sciroppo di Champagne, Peychaud bitter",
  //     en: "Cognac, Pernod, Champagne syroup, Peychaud bitter",
  //   },
  // },
];

export const gin = [
  {
    nome: "Berto",
    prezzo: 7,
  },
  {
    nome: "Ophir",
    prezzo: 7,
  },
  {
    nome: "Sabatini",
    prezzo: 8,
  },
  {
    nome: "Botanist",
    prezzo: 8,
  },
  {
    nome: "Hendricks",
    prezzo: 7,
  },
  {
    nome: "Copper Head Gin",
    prezzo: 12,
  },
  {
    nome: "Elephant",
    prezzo: 9,
  },
  {
    nome: "Mare",
    prezzo: 8,
  },
  {
    nome: "Colombian",
    prezzo: 8,
  },
  {
    nome: "Sipsmith",
    prezzo: 8,
  },
  {
    nome: "Jizu",
    prezzo: 8,
  },
  {
    nome: "David Luxury",
    prezzo: 11,
  },
  {
    nome: "Caprisius",
    prezzo: 8,
  },
  {
    nome: "Del Professore Madame",
    prezzo: 8,
  },
  {
    nome: "Kinobi",
    prezzo: 11,
  },
  {
    nome: "Monkey 47",
    prezzo: 10,
  },
  {
    nome: "London Dry n3",
    prezzo: 8,
  },
  {
    nome: "Tanqueray",
    prezzo: 10,
  },
  {
    nome: "Roku",
    prezzo: 7,
  },
  {
    nome: "Silent Pool",
    prezzo: 11,
  },
  {
    nome: "Seven Hills",
    prezzo: 7,
  },
  {
    nome: "Ungava",
    prezzo: 7,
  },
  {
    nome: "Brooklin",
    prezzo: 10,
  },
  {
    nome: "Alkkemist",
    prezzo: 10,
  },
];
export const vodka = [
  {
    nome: "Ciroc",
    prezzo: 8,
  },
  {
    nome: "Grey Goose",
    prezzo: 9,
  },
  {
    nome: "Belvedere",
    prezzo: 8,
  },
  {
    nome: "Ketel One",
    prezzo: 7,
  },
  {
    nome: "Nemiroff",
    prezzo: 6,
  },
  {
    nome: "Tito's",
    prezzo: 7,
  },
];
export const rum = [
  {
    nome: "Don q Anejo",
    prezzo: 6,
  },
  {
    nome: "Matusalem 7yo",
    prezzo: 6,
  },
  {
    nome: "Sailor Jerry",
    prezzo: 6,
  },
  {
    nome: "Don Papa 7yo",
    prezzo: 8,
  },
  {
    nome: "Diplomatico 12yo",
    prezzo: 9,
  },
  {
    nome: "Zacapa 23",
    prezzo: 9,
  },
  {
    nome: "Zacapa XO",
    prezzo: 16,
  },
];
export const tequila = [
  {
    nome: "Altos Blanco",
    prezzo: 6,
  },
  {
    nome: "Cazadores Blanco",
    prezzo: 6,
  },
  {
    nome: "Don Julio Anejo",
    prezzo: 11,
  },
  {
    nome: "El Charro silver",
    prezzo: 6,
  },
  {
    nome: "Herradura Reposado",
    prezzo: 9,
  },
  {
    nome: "Arette Reposado",
    prezzo: 9,
  },
  {
    nome: "Mezcal A.D.C. JOVEN",
    prezzo: 9,
  },
];
export const scothWisky = [
  {
    nome: "Black label JW",
    prezzo: 6,
  },
  {
    nome: "Chivas 12 anni",
    prezzo: 6,
  },
  {
    nome: "Talisker 10YO",
    prezzo: 9,
  },
  {
    nome: "Caol ila 12 YO",
    prezzo: 10,
  },
  {
    nome: "Laphroaig 10yo",
    prezzo: 9,
  },
  {
    nome: "Monkey Shoulder",
    prezzo: 9,
  },
];
export const usa = [
  {
    nome: "Bulleit Bourbon",
    prezzo: 7,
  },
  {
    nome: "Woodfort Reserve",
    prezzo: 8,
  },
  {
    nome: "Makers's Mark",
    prezzo: 7,
  },
  {
    nome: "Makers's Mark 46",
    prezzo: 12,
  },
  {
    nome: "Michter's Bourdon",
    prezzo: 11,
  },
  {
    nome: "Jack Daniel",
    prezzo: 6,
  },
];

export const japaniseWisky = [];
export const irishWisky = [
  {
    nome: "Jameson",
    prezzo: 6,
  },
];
export const cognac = [
  {
    nome: "Calvados Michel Biron",
    prezzo: 5,
  },
  {
    nome: "Leyrat",
    prezzo: 5,
  },
  {
    nome: "Remy Martin Vsop",
    prezzo: 7,
  },
  {
    nome: "Hennissy XO",
    prezzo: 19,
  },
];
export const grappa = [
  {
    nome: "Grappa Nonino",
    prezzo: 4,
  },
  {
    nome: "Quaglia Barolo",
    prezzo: 8,
  },
];
export const caffetteria = [
  {
    nome: "Espresso",
    prezzo: 1.5,
  },
  {
    nome: "Cappuccino",
    prezzo: 3,
  },
  {
    nome: "Cortado",
    prezzo: 2,
  },
  {
    nome: "Americano",
    prezzo: 3,
  },
  {
    nome: "Tea",
    prezzo: 3,
  },
  {
    nome: "Caffe freddo",
    prezzo: 3,
  },
  {
    nome: "Yogurt",
    prezzo: 4,
  },
  {
    nome: "Cornetto",
    prezzo: 1.5,
  },
  {
    nome: "Spremuta",
    prezzo: 3.5,
  },
  {
    nome: "Soft drink",
    prezzo: 3,
  },
];
export const birra = [
  {
    nome: "Umbri Bianca cappelli",
    prezzo: 7,
  },
  {
    nome: "Umbri California",
    prezzo: 7,
  },
];
export const softDrink = [
  {
    nome: "Aperitivo analcolico",
    prezzo: 3,
  },
];
export const food = [
  {
    img: null,
    nome: "Summer Salad",
    prezzo: 7,
    ricetta: {
      it: "Italiano",
      en: "Inglese",
    },
  },
  {
    img: null,
    nome: "Humus di Rapa Rossa",
    prezzo: 7,
    ricetta: {
      it: "Italiano",
      en: "Inglese",
    },
  },
  {
    img: null,
    nome: "Tris di Bruschette",
    prezzo: 7,
    ricetta: {
      it: "Italiano",
      en: "Inglese",
    },
  },
];
export const noAlcol = [
  {
    img: imbuto,
    nome: "Shanghai",
    ricetta: {
      it: "Menta, Chinotto, Limone",
      en: "Hand-pickhed Mint, Chinotto, Fresh lemon juice",
    },
  },
  {
    img: martini,
    nome: "Sacramento",
    ricetta: {
      it: "Mirtillo, Lamponi, Soda ",
      en: "Cramberry, Raspberry, Soda",
    },
  },
  // {
  //   img: b5,
  //   nome: "Santo Domingo",
  //   ricetta: {
  //     it: "Anans, Cioccolato bianco & Cocco",
  //     en: "Pineapple, White chocolate & Cocco",
  //   },
  // },
  {
    img: uccello,
    nome: "Melbourne",
    ricetta: {
      it: "Anguria, Sour, Soda",
      en: "Watermelon, Sour, Soda",
    },
  },
  // {
  //   img: b1,
  //   nome: "Brighton",
  //   ricetta: {
  //     it: "Mela, Menta, Fiori di sanbuco, Cetriolo, Limone",
  //     en: "Apple, Mint, Elderflower, Cucumber, Fresh lemon juice",
  //   },
  // },
  // {
  //   img: b1,
  //   nome: "Ica",
  //   ricetta: {
  //     it: "Melograno, Limone, Ananas",
  //     en: "Pomegranate, Lemon, Pineapple",
  //   },
  // },
];
export const redWine = [
  {
    nome: "Sangue di Giuda",
    bottleCost: 27,
    glassCost: 7,
  },
  {
    nome: "Moio 57",
    bottleCost: 30,
    glassCost: 8,
  },
  {
    nome: "Chianti Classico Carpineto",
    bottleCost: 30,
    glassCost: 8,
  },
  {
    nome: "Barolo 2012 Castiglione Vietti",
    bottleCost: 64,
  },
  {
    nome: "Amarone Costasera Masi 2016",
    bottleCost: 62,
  },
];
export const whiteWine = [
  {
    nome: "FiaGre Antonio Caggiano",
    bottleCost: 28,
    glassCost: 7,
  },
  {
    nome: "Biancolella Casa d'Ambra",
    bottleCost: 30,
  },
  {
    nome: "Chardonnay Cantina Mori",
    bottleCost: 28,
    glassCost: 7,
  },
  {
    nome: "Pinot Grigio Collio Livion",
    bottleCost: 30,
    glassCost: 8,
  },
  {
    nome: "Quintodecimo Exultet Fiano",
    bottleCost: 60,
  },
];
export const roseWine = [
  {
    nome: "Vetere Bio S. Salvatore",
    bottleCost: 30,
    glassCost: 8,
  },
];
export const bollicine = [
  {
    nome: "Prosecco",
    bottleCost: 28,
    glassCost: 7,
  },
  {
    nome: "CA del bosco",
    bottleCost: 60,
  },
  {
    nome: "Louis Roederer 242",
    bottleCost: 110,
  },
  {
    nome: "Laurent-Perrier Rosè",
    bottleCost: 120,
  },
];

/**
 * TODO
 * usare la card grande per il food, senza immagine
 * cambiare dimensione voci di menu
 */
