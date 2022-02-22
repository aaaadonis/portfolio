const Images = {
  imageOne: require("./chill.png"),
  imageTwo: require("./lumia.png"),
  imageThree: require("./hardies.png"),
  imageFour: require("./adonis.gif"),
  imageFive: require("./heart.png"),
  imageSix: require("./logo192.png"),
};

const Data = [
  {
    id: 1,
    image: Images.imageOne,
    descrip: "Choosing How I Live Life",
    isOn: true,
    url: "https://c-h-i-l-l.us",
  },
  {
    id: 2,
    image: Images.imageTwo,
    descrip: "Lumia Nocito",
    isOn: false,
    url: "https://lumia-site.vercel.app",
  },
  {
    id: 3,
    image: Images.imageThree,
    descrip: "Hardies",
    isOn: false,
    url: "https://www.hardieshardware.com",
  },
  {
    id: 4,
    image: Images.imageFour,
    descrip: "Old Portfolio",
    isOn: false,
    url: "https://aaaadonis.github.io/adonisedwards/",
  },
  {
    id: 5,
    image: Images.imageFive,
    descrip: "143",
    isOn: false,
    url: "https://www.143.studio",
  },
  {
    id: 6,
    image: Images.imageSix,
    descrip: "Ski Mask Punks NFT",
    isOn: false,
    url: "https://www.skimaskpunks.com",
  },
];

export { Images, Data };
