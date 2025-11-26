import style from "./Footer.module.css";
import { dcComicsLinks } from "../assets/arraysLists/footerLists.js/dcComicsLinks.js";
import { dcLinks } from "../assets/arraysLists/footerLists.js/dcLinks.js";
import { sitesLinks } from "../assets/arraysLists/footerLists.js/sitesLinks.js";


export default function Footer() {


    return (
        <footer  >
            <div className="container">
                <div className="footer-up py-40 px-40">
                    <div className="d-flex justify-content-start px-40">
                        <div>
                            <div className="mb-20">
                                <h3>DC Comics</h3>
                                <ul>

                                    {dcComicsLinks.map((currentLink, index) => (
                                        <li key={index}>
                                            <a href={currentLink.path}>{currentLink.title}</a>
                                        </li>

                                    ))}

                                </ul>
                            </div>
                            <div >
                                <h3>Shop</h3>
                                <ul>
                                    <li>
                                        <a href="">Shop DC</a>
                                    </li>
                                    <li>
                                        <a href="">Shop DC Collectibles</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <h3>DC</h3>
                            <ul>

                                {dcLinks.map((currentLink, index) => (
                                    <li key={index}>
                                        <a href={currentLink.path}>{currentLink.title}</a>
                                    </li>
                                ))}

                            </ul>
                        </div>

                        <div>
                            <h3>Sites</h3>
                            <ul>

                                {sitesLinks.map((currentLink, index) => (
                                    <li key={index}>
                                        <a href={currentLink.path}>{currentLink.title}</a>
                                    </li>
                                ))}

                            </ul>
                        </div>
                    </div>
                </div>
                <div className={`footer-down ${style.bgGrey}`}>
                    <div className="px-40 py-40 d-flex justify-content-between">
                        <div >
                            <button className={`${style.blueBtn}`}>Sign-up now!</button>
                        </div>

                        <ul>
                            <li className={`${style.follow}`}>Follow us</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer >
    );
}