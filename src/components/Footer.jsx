import style from "./Footer.module.css";
import { linksDCComics } from "../assets/footerLists.js/dcComicsLinks.js";
import { linksDC } from "../assets/footerLists.js/dcLinks.js";


export default function Footer() {


    return (
        <footer  >
            <div className="container">
                <div className={`footer-up py-40 px-40 ${style.bgImg}`}>
                    <div className="d-flex justify-content-start px-40">
                        <div>
                            <div className="mb-20">
                                <h3>DC Comics</h3>
                                <ul>
                                    {linksDCComics.map((currentLink, index) => (
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
                                {linksDC.map((currentLink, index) => (
                                    <li key={index}>
                                        <a href={currentLink.path}>{currentLink.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3>Sites</h3>
                            <ul>
                                <li>
                                    <a href="">DC</a>
                                </li>
                                <li>
                                    <a href="">MAD MAgazine</a>
                                </li>
                                <li>
                                    <a href="">DC Kids</a>
                                </li>
                                <li>
                                    <a href="">DC Universe</a>
                                </li>
                                <li>
                                    <a href="">DC Power Visa</a>
                                </li>
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