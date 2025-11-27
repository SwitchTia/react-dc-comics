import style from "./Footer.module.css";
import Facebook from "./FollowLinks.jsx";


import { dcComicsLinks } from "../assets/arraysLists/footerLists/dcComicsLinks.js";
import { dcLinks } from "../assets/arraysLists/footerLists/dcLinks.js";
import { sitesLinks } from "../assets/arraysLists/footerLists/sitesLinks.js";
import Socials from "./FollowLinks.jsx";


export default function Footer() {


    return (
        <footer  >
            <div className="container">
                <div className="footer-up py-40 px-40">
                    <div className="d-flex justify-content-start px-40">
                        <div>
                            <div className="mb-20">
                                <h3 className="upperCase">DC Comics</h3>
                                <ul>

                                    {dcComicsLinks.map((currentLink, index) => (
                                        <li key={index}>
                                            <a href={currentLink.path}>{currentLink.title}</a>
                                        </li>

                                    ))}

                                </ul>
                            </div>
                            <div >
                                <h3 className="upperCase">Shop</h3>
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
                            <h3 className="upperCase">Sites</h3>
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

                        <div className="d-flex ">
                            <h3 className={`${style.follow}`}>Follow us</h3>
                            <Socials/>
                         
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    );
}