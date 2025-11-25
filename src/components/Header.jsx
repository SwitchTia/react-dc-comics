import Logo from "./Logo";
import style from "./Header.module.css";

export default function Header() {
  return (
    <header className="py-20 d-flex justify-content-between align-items-center">
      <Logo />
      <nav className={style.nav}>
        <ul className="d-flex justify-content-center text-center g-20">
          <li>
            <a href="">Characters</a>
          </li>
          <li >
            <a href="">Comics</a>
          </li>
          <li>
            <a href="">Movies</a>
          </li>
          <li>
            <a href="">TV</a>
          </li>
          <li className={style.active}>
            <a href="">Games</a>
          </li>
          <li>
            <a href="">Collectibles</a>
          </li>
          <li>
            <a href="">Videos</a>
          </li>
          <li>
            <a href="">Funs</a>
          </li>
          <li>
            <a href="">News</a>
          </li>
          <li>
            <a href="">Shop</a>
          </li>

        </ul>
      </nav>
    </header>
  );
}