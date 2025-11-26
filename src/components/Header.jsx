import Logo from "./Logo";
import style from "./Header.module.css";

export default function Header() {

const links = [
    {
      title: "Characters",
      path: "/characters",
      active: false,
    },
    {
      title: "Comics",
      path: "/comics",
      active: true,
    },
    {
      title: "Movies",
      path: "/movies",
      active: false,
    },
    {
      title: "TV",
      path: "/tv",
      active: false,
    },
    {
      title: "Games",
      path: "/games",
      active: false,
    },
    {
      title: "Collectibles",
      path: "/collectibles",
      active: false,
    },
    {
      title: "Videos",
      path: "/videos",
      active: false,
    },
    {
      title: "Funs",
      path: "/funs",
      active: false,
    },
    {
      title: "News",
      path: "/news",
      active: false,
    },
    {
      title: "Shop",
      path: "/shop",
      active: false,
    },
    
    
  ];

  return (
    <header className="py-20 d-flex justify-content-between align-items-center">
      <Logo/>
      <nav className={style.nav}>
        <ul className="d-flex justify-content-center text-center g-20">
          {links.map((currentLink, index) => (
              <li key={index}>
               <a href={currentLink.path}>{currentLink.title}</a>
              </li>

          ))}

        </ul>
      </nav>
    </header>
  );
}