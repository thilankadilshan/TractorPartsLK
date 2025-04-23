import tafeImg from "../assets/brands/tafe.jpg";
import mahindraImg from "../assets/brands/mahindra.png";
import sonalikaImg from "../assets/brands/sonalika.jpg";
import johnDeereImg from "../assets/brands/john-deere.png";

const brandData = {
    tafe: {
        name: "TAFE",
        description: "TAFE is known for robust and reliable tractors...",
        image: tafeImg,
        models: ["TAFE 45DI", "TAFE 241 DI", "TAFE 5310"]
    },
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
