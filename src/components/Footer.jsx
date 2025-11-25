import style from "./Footer.module.css";


export default function Footer() {
    return (
        <footer  >
            <div className="container">
                <div className={`footer-up py-40 px-40 ${style.bgImg}`}>
                    <div className="d-flex">
                        <div>
                            <div className={style.col}>
                                <h3>DC Comics</h3>
                                <ul>
                                    <li>
                                        <a href="">Characters</a>
                                    </li>
                                    <li>
                                        <a href="">Comisc</a>
                                    </li>
                                    <li>
                                        <a href="">Movies</a>
                                    </li>
                                    <li>
                                        <a href="">TV</a>
                                    </li>
                                    <li>
                                        <a href="">Games</a>
                                    </li>
                                    <li>
                                        <a href="">Videos</a>
                                    </li>
                                    <li>
                                        <a href="">News</a>
                                    </li>
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
                        <div className={style.col}>
                            <h3>DC</h3>
                            <ul>
                                <li>
                                    <a href="">Terms of use</a>
                                </li>
                                <li>
                                    <a href="">Privacy policy</a>
                                </li>
                                <li>
                                    <a href="">Ad Choices</a>
                                </li>
                                <li>
                                    <a href="">Advertising</a>
                                </li>
                                <li>
                                    <a href="">Jobs</a>
                                </li>
                                <li>
                                    <a href="Subscriptions"></a>
                                </li>
                                <li>
                                    <a href="Talent Workshops"></a>
                                </li>
                                <li>
                                    <a href="">CPSC Certifications</a>
                                </li>
                                <li>
                                    <a href="">Ratings</a>
                                </li>
                                <li>
                                    <a href="">Shop Help</a>
                                </li>
                                <li>
                                    <a href="">Contact us</a>
                                </li>
                            </ul>
                        </div>
                        <div className={style.col}>
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
                        <div className="btn">
                            <button>Sign-up now!</button>
                        </div>
                        
                        <ul>
                            <li className="Follow">Follow us</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer >
    );
}