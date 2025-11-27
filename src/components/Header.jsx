import Logo from "./Logo";
import style from "./Header.module.css";

import { headerLinks } from "../assets/arraysLists/headerLists/headerLinks";

export default function Header() {

  return (
    <header className="py-20 d-flex justify-content-between align-items-center">
      <Logo/>
      <nav className={style.nav}>
        <ul className="d-flex justify-content-center text-center g-20">
          {headerLinks.map((currentLink, index) => (
              <li key={index}>
               <a className={currentLink.active ? "active" : ""} href={currentLink.path}>{currentLink.title}</a>
              </li>

          ))};

        </ul>
      </nav>
    </header>
  );
}