import { blueBgLinks } from "../assets/arraysLists/mainLists.js/blueBgLinks";
import comicsList from "../assets/arraysLists/mainLists.js/comics";
import style from "./Main.module.css";

export default function Main() {
  return (
    <main>

      <div className={`img-section py-40 text-center ${style.bgImg}`}></div>



      <div className={`comics d-flex wrap ${style.bgBlack}`}>

        {comicsList.map((currentComics) => {
            
            return (
              <div className={`col ${currentComics.type}`} key={currentComics.id}>

                <img src={currentComics.thumb} alt={currentComics.title} />
                <h5>{currentComics.title}</h5>
                <p>Price: {currentComics.price}</p>
              </div>
            );
          })}
      </div>

      <div className={`sectionBlue py-40 text-center ${style.bgBlue}`}>
        <ul className="d-flex justify-content-center text-center g-20">

          {blueBgLinks.map((currentLink, index) => (
            <li key={index}>
            
              <a href={currentLink.path}>{currentLink.title}</a>
            </li>

          ))}
        </ul>
      </div>
    </main>
  );
}