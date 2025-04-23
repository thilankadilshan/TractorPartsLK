// Tafe
import tafeImg from "../assets/brands/tafe.jpg";
import tafe45Drum from "../assets/models/tafe/tafe-45-drum.jpg";
import tafe45Disc from "../assets/models/tafe/tafe-45-disc.jpg";
import tafe7250 from "../assets/models/tafe/tafe-7250.jpg";
import tafe5245 from "../assets/models/tafe/tafe-5245.jpg";
import tafe45Side from "../assets/models/tafe/tafe-45-side.jpg";
import tafe9500 from "../assets/models/tafe/tafe-9500.jpg";
import tafe8515 from "../assets/models/tafe/tafe-8515.jpg";
import tafe9515 from "../assets/models/tafe/tafe-9515.jpg";
import tafeDynatrack from "../assets/models/tafe/tafe-dynatrack.jpg";

import mahindraImg from "../assets/brands/mahindra.png";
import sonalikaImg from "../assets/brands/sonalika.jpg";
import johnDeereImg from "../assets/brands/john-deere.png"

export const brandData = {
    tafe: {
        name: "TAFE",
        logo: tafeImg,
        description: "Tractors and Farm Equipment Limited or TAFE, is an Indian tractor manufacturer founded in Chennai, India in 1960. It is the third-largest tractor manufacturer in the world by volume and the second-largest in India, with a market share of 23% and annual sales of over 180,000 tractors, both locally and globally.  TAFE tractors are tough, durable, and efficient and are known for their dependability and optimised technology.Used in Africa, Sri Lanka, Bangladesh, and parts of Europe, Tafe tractors have proven their worth in tough terrains and varied soil conditions. Browns Group PLC is the sole dealer for TAFE tractors in Sri Lanka.The brand enjoys an enviable market share of more than 50%.TAFE is the third largest tractor manufacturer in the world.Built on Massey Ferguson’s technology platform, Tafe’s research- led designs offer economy in operation and uncompromised performance. Browns Group offers brand- new TAFE tractors for affordable prices",
        models: [
            { name: "TAFE 45 DI DRUM BRAKE", image: tafe45Drum, link: "/models/tafe-45-drum-brake" },
            { name: "TAFE 45 DI DISC BRAKE", image: tafe45Disc, link: "/models/tafe-45-disc-brake" },
            { name: "TAFE 7250 2WD", image: tafe7250, link: "/models/tafe-7250-2wd" },
            { name: "TAFE 5245 4WD", image: tafe5245, link: "/models/tafe-5245-4wd" },
            { name: "TAFE 45DI Side Shift", image: tafe45Side, link: "/models/tafe-45di-side-shift" },
            { name: "TAFE 9500", image: tafe9500, link: "/models/tafe-9500" },
            { name: "TAFE 8515 Magna", image: tafe8515, link: "/models/tafe-8515-magna" },
            { name: "TAFE 9515 Magna", image: tafe9515, link: "/models/tafe-9515-magna" },
            { name: "TAFE Dynatrack", image: tafeDynatrack, link: "/models/tafe-dynatrack" },
        ],
    },
    // Add more brands later here...
    mahindra: {
        name: "Mahindra",
        description: "Mahindra tractors are popular for their efficiency...",
        image: mahindraImg,
        models: ["Mahindra 475 DI", "Mahindra Arjun 555", "Mahindra Yuvo 265"]
    },
    sonalika: {
        name: "Sonalika",
        description: "Sonalika offers a wide range of tractors...",
        image: sonalikaImg,
        models: ["Sonalika DI 60", "Sonalika Tiger 55", "Sonalika RX 47"]
    },
    "john-deere": {
        name: "John Deere",
        description: "John Deere is a globally trusted brand...",
        image: johnDeereImg,
        models: ["John Deere 5310", "John Deere 5050D", "John Deere 5405"]
    }
};

export default brandData;
