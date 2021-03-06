const Images = {
  imageOne: require("./chill.png"),
  imageTwo: require("./lumia.png"),
  imageThree: require("./hardies.png"),
  imageFour: require("./adonis.gif"),
  imageFive: require("./heart.png"),
  imageSix: require("./logo192.png"),
  imageSeven: require("./mirror.png"),
};

const Data = [
  {
    id: 1,
    image: Images.imageFive,
    descrip: "143",
    words:
      "This is a site I built using React Three Fiber to host a Valentine's Day Mix recorded with Ableton. A combination of two of my loves, tech and music :). Deployed with Vercel.",
    isOn: false,
    url: "https://www.143.studio",
  },
  {
    id: 2,
    image: Images.imageSix,
    descrip: "Ski Mask Punks NFT",
    words:
      "I built this site and wrote the smart contract for a budding NFT Project, Ski Mask Punks. Technologies used, React, Styled Components, Solidity. Deployed with Vercel.",
    isOn: false,
    url: "https://www.skimaskpunks.com",
  },
  {
    id: 3,
    image: Images.imageSeven,
    descrip: "Smart Mirror Final",
    words:
      "A video shot to showcase my Physical Computing final. An NFT Smart Mirror, loaded with modules, including a custom module to display the NFT. Technologies used, HTML, CSS, JS, Python, Raspberry Pi.",
    isOn: true,
    url: "https://vimeo.com/656724782",
  },
  {
    id: 4,
    image: Images.imageOne,
    descrip: "Choosing How I Live Life",
    words:
      "A live chat site I built for a clothing brand. It includes different interactivities, primarily pertaining to the chat. Messages are sent and received in realtime. Technologies used, React, CSS, Firebase. Deployed with Vercel.",
    isOn: true,
    url: "https://c-h-i-l-l.us",
  },
  {
    id: 5,
    image: Images.imageTwo,
    descrip: "Lumia Nocito",
    words:
      "A photo portfolio I built for photographer, Lumia Nocito. Technologies used, React, React Router Dom, Styled Components, Device Detect, Python. Deployed with Vercel.",
    isOn: false,
    url: "https://www.lumianocito.com",
  },
  {
    id: 6,
    image: Images.imageThree,
    descrip: "Hardies",
    words:
      "A webstore I built for Pro Skateboarder Tyshawn Jones' brand, Hardies Hardware. Technologies used, Shopify Liquid, HTML, CSS.",
    isOn: false,
    url: "https://www.hardieshardware.com",
  },
  {
    id: 7,
    image: Images.imageFour,
    descrip: "Old Portfolio",
    words:
      "My old portfolio. It was very fun to build and whilst displaying novicity, also showed my budding creativity. Technologies used, HTML, CSS, Vanilla JS, JQuery. Deployed using Github Pages.",
    isOn: false,
    url: "https://aaaadonis.github.io/adonisedwards/",
  },
];

export { Images, Data };
