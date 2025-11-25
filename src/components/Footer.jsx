import style from "./Footer.module.css";


export default function Footer() {
    return (
        <footer  >
            <div className="container">
                <div className={`footer-up py-40 px-40 ${style.background}`}>
                    <div className="d-flex">
                        <div>
                            <div className={style.col}>
                                <h3>DC Comics</h3>
                                <ul>
                                    <li>Characters</li>
                                    <li>Comisc</li>
                                    <li>Movies</li>
                                    <li>TV</li>
                                    <li>Games</li>
                                    <li>Videos</li>
                                    <li>News</li>
                                </ul>
                            </div>
                            <div >
                                <h3>Shop</h3>
                                <ul>
                                    <li>Shop DC</li>
                                    <li>Shop DC Collectibles</li>
                                </ul>
                            </div>
                        </div>
                        <div className={style.col}>
                            <h3>DC</h3>
                            <ul>
                                <li>Terms of use</li>
                                <li>Privacy policy</li>
                                <li>Ad Choices</li>
                                <li>Advertising</li>
                                <li>Jobs</li>
                                <li>Subscriptions</li>
                                <li>Talent Workshops</li>
                                <li>CPSC Certifications</li>
                                <li>Ratings</li>
                                <li>Shop Help</li>
                                <li>Contact us</li>
                            </ul>
                        </div>
                        <div className={style.col}>
                            <h3>Sites</h3>
                            <ul>
                                <li>DC</li>
                                <li>MAD MAgazine</li>
                                <li>DC Kids</li>
                                <li>DC Universe</li>
                                <li>DC Power Visa</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-down d-flex">
                    <div className="px-40 py-40">
                        <button>Sign-up now!</button>
                    </div>
                </div>
            </div>
        </footer >
    );
}