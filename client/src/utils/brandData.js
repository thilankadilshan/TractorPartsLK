// Tafe
import tafeImg from "../assets/brands/tafe.jpg";
import tafecover from "../assets/models/tafe/tafecover.png"
import tafe45Drum from "../assets/models/tafe/tafe-45-drum.jpg";
import tafe45Disc from "../assets/models/tafe/tafe-45-disc.jpg";
import tafe7250 from "../assets/models/tafe/tafe-7250.jpg";
import tafe5245 from "../assets/models/tafe/tafe-5245.jpg";
import tafe45Side from "../assets/models/tafe/tafe-45-side.jpg";
import tafe9500 from "../assets/models/tafe/tafe-9500.jpg";
import tafe8515 from "../assets/models/tafe/tafe-8515.jpg";
import tafe9515 from "../assets/models/tafe/tafe-9515.jpg";
import tafeDynatrack from "../assets/models/tafe/tafe-dynatrack.jpg";

//mahidra

import mahindraImg from "../assets/brands/mahindra.png";
import mahindracover from "../assets/models/mahindra/mahindracover.png";
import mahindra595 from "../assets/models/mahindra/595-di-nst.jpg";
import mahindra5754wd from "../assets/models/mahindra/575-4wd.jpg";
import mahindra95004wd from "../assets/models/mahindra/9500-4wd.png";
import mahindra7554wd from "../assets/models/mahindra/755-4wd.jpg";

// sonalika
import sonalikaImg from "../assets/brands/sonalika.jpg";
import sonalikacover from "../assets/models/sonalika/sonalikacover.png";
import sonalika50rx2wd from "../assets/models/sonalika/di-50rx-2wd.jpg";
import sonalika50rx4wd from "../assets/models/sonalika/di-50rx-4wd.jpg";
import sonalika60rx from "../assets/models/sonalika/60rx.png";
import sonalika75rx2wd from "../assets/models/sonalika/di-75rx-2wd.png";
import sonalikaS90 from "../assets/models/sonalika/s-90.png";
import sonalikaGT22 from "../assets/models/sonalika/gt-22.jpg";
import sonalikaGT26 from "../assets/models/sonalika/gt-26.jpg";

//johndeer
import johndeereImg from "../assets/brands/johndeere.png"
import johndeerecover from "../assets/models/johndeere/johndeercover.png"
import jd5045d from "../assets/models/johndeere/jd-5045d-wrt.jpg";
import jd5047d from "../assets/models/johndeere/5047d.jpg";
import jd5050d from "../assets/models/johndeere/5050d.jpg";

// kubuta 
import kubotaImg from "../assets/brands/kubota.png";
import kubotacover from "../assets/models/kubota/kubotacover.png";
import kubotaL4508 from "../assets/models/kubota/l4508-4wd.png";
import kubotaEK3471 from "../assets/models/kubota/ek3-471-4wd.png";
import kubotaL3408 from "../assets/models/kubota/l3408-4wd.png";


export const brandData = {
    tafe: {
        name: "Tafe",
        logo: tafeImg,
        subtitle: "Trusted Power for Sri Lankan Farmers",
        description: "Tractors and Farm Equipment Limited (TAFE), founded in Chennai in 1960, is the third-largest tractor manufacturer globally and the second-largest in India, holding a 23% market share with annual sales exceeding 180,000 tractors. Known for their toughness, durability, and efficiency, TAFE tractors are utilized in diverse terrains across Africa, Sri Lanka, Bangladesh, and parts of Europe. In Sri Lanka, Browns Group PLC serves as the sole dealer, enjoying a market share of over 50%. Built on Massey Ferguson’s technology platform, TAFE's research-driven designs ensure economical operation and high performance, with Browns Group offering brand-new TAFE tractors at affordable prices.",
        image: tafecover,
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

    sonalika: {
        name: "Sonalika",
        logo: sonalikaImg,
        subtitle: "Empowering Agriculture: Sonalika's Vision",
        description: "Sonalika, a leading tractor brand and top exporter from India, aims to become a Mega Agri Brand with its vision of Leading Agri Evolution. The company focuses on innovating the agri value chain through a range of technologically advanced heavy-duty tractors (20-120HP), diverse crop-centric implements, and financing innovative agri technologies. Committed to corporate social responsibility, Sonalika supports women, children, and farming communities while bridging the gap between farm and market with processed agri outputs. With its World No.1 Integrated Tractor Manufacturing Plant in Hoshiarpur, Punjab, Sonalika serves over 1.7 million farmers in 150+ countries. The company has received multiple accolades, including the Global Agriculture Leadership Award, and plays a key role in NITI Aayog's initiative to double farmers' income by 2022.",
        image: sonalikacover,
        models: [
            { name: "SONALIKA DI 50RX 2WD", image: sonalika50rx2wd, link: "/models/di-50rx-2wd" },
            { name: "SONALIKA DI 50RX 4WD", image: sonalika50rx4wd, link: "/models/di-50rx-4wd" },
            { name: "SONALIKA 60RX", image: sonalika60rx, link: "/models/60rx" },
            { name: "SONALIKA DI 75RX 2WD", image: sonalika75rx2wd, link: "/models/di-75rx-2wd" },
            { name: "SONALIKA S 90", image: sonalikaS90, link: "/models/s-90" },
            { name: "SONALIKA GT 22", image: sonalikaGT22, link: "/models/gt-22" },
            { name: "SONALIKA GT 26", image: sonalikaGT26, link: "/models/gt-26" },
        ],
    },

    mahindra: {
        name: "Mahindra",
        logo: mahindraImg,
        subtitle: "Empowering Sri Lankan Farmers with Reliable Solutions",
        description: "For over 15 years, Mahindra Tractors has supported Sri Lankan farmers, particularly with our popular 35-50 HP models known for paddy applications and various farming tasks. With reliable service and an expanding sales network, Mahindra has established a strong presence in the country. Recognized for their fuel efficiency and dependability, our tractors are used for puddling, cultivating, ploughing, and more. We continue to earn the trust of Sri Lankan farmers, helping them grow stronger every day. Our products are sold and serviced through Diesel and Motor Engineering PLC (DIMO), headquartered in Colombo.",
        image: mahindracover,
        models: [
            { name: "MAHINDRA 595 DI NST", image: mahindra595, link: "/models/595-di-nst" },
            { name: "MAHINDRA 575 4WD", image: mahindra5754wd, link: "/models/575-4wd" },
            { name: "MAHINDRA 9500 4WD", image: mahindra95004wd, link: "/models/9500-4wd" },
            { name: "MAHINDRA 755 4WD", image: mahindra7554wd, link: "/models/755-4wd" },
        ],
    },

    johndeere: {
        name: "Jhon Deer",
        logo: johndeereImg,
        subtitle: "Driving Agricultural Innovation",
        description: "John Deere tractors are renowned for their power and efficiency, catering to various agricultural needs. The company offers a wide range of models, including the D and E series, with features designed to enhance productivity and ease of use in farming operations. The tractors are equipped with advanced technology, such as GPS guidance systems and precision agriculture tools, which help farmers optimize their operations. Additionally, John Deere focuses on sustainability, incorporating fuel-efficient engines and environmentally friendly practices in their manufacturing processes. The brand also provides extensive support and service options, ensuring that customers have access to maintenance and repair resources.",
        image: johndeerecover,
        models: [
            { name: "John Deere JD-5045D-WRT", image: jd5045d, link: "/models/jd-5045d-wrt" },
            { name: "John Deere 5047D", image: jd5047d, link: "/models/5047d" },
            { name: "John Deere 5050D", image: jd5050d, link: "/models/5050d" },
        ],
    },

    kubota: {
        name: "Kubota",
        logo: kubotaImg,
        subtitle: "Japanese Precision, Engineered for Productivity",
        description: "Kubota is a globally respected Japanese brand, renowned for its compact and high-performing agricultural machinery. Designed for power, efficiency, and ease of use, Kubota tractors are ideal for a wide range of farming applications. In Sri Lanka, Kubota has become a preferred choice for farmers seeking reliable and innovative farming solutions.",
        image: kubotacover,
        models: [
            { name: "Kubota L4508 4WD", image: kubotaL4508, link: "/models/l4508-4wd" },
            { name: "EK3 - 471 4WD", image: kubotaEK3471, link: "/models/ek3-471-4wd" },
            { name: "Kubota L3408 4WD", image: kubotaL3408, link: "/models/l3408-4wd" },
        ],
    },


};

export default brandData;
