import { blueBgLinks } from "../assets/arraysLists/mainLists.js/blueBgLinks";
import style from "./Main.module.css";

export default function Main() {
  return (
    <main>
      <div className={`py-40 text-center ${style.bgBlack}`}>
        <h1>Content goes here</h1>
      </div>

      <div className={`sectionBlue py-40 text-center ${style.bgBlue}`}>
        <ul className="d-flex justify-content-center text-center g-20">

          {blueBgLinks.map((currentLink, index) => (
            <li key={index}>

              <a href={currentLink.path}>{currentLink.title}</a>
            </li>

          ))};
        </ul>
      </div>
    </main>
  );
}