
import digitalComics from "../../img/buy-comics-digital-comics.png";
import madMagazine from "../../img/buy-comics-merchandise.png";
import dcKids from "../../img/buy-comics-subscriptions.png";
import dcUniverse from "../../img/buy-comics-shop-locator.png";
import dcPowerVisa from "../../img/buy-dc-power-visa.svg";

const blueBgLinks = [
        {
            title: "Digital comics",
            path: "/digital comics",
            src: digitalComics,
            active: false,
        },
        {
            title: "MAD Magazine",
            path: "/mad",
            src: madMagazine,
            active: true,
        },
        {
            title: "DC Kids",
            path: "/kids",
            src: dcKids,
            active: false,
        },
        {
            title: "DC Universe",
            path: "/universe",
            src: dcUniverse,
            active: false,
        },
        {
            title: "DC Power Visa",
            path: "/viza",
            src: dcPowerVisa,
            active: false,
        }
     
]

export { blueBgLinks };
