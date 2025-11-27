import { blueBgLinks } from "../assets/arraysLists/mainLists/blueBgLinks";
import comicsList from "../assets/arraysLists/mainLists/comics";
import style from "./Main.module.css";
import ProductCard from "./ProductCard";

export default function Main() {
  return (
    <main>

      <div className={`img-section py-40 text-center ${style.bgImg}`}></div>



      <div className={`comics d-flex wrap ${style.bgBlack}`}>

        {comicsList.map((currentComics) => {

          return (
            <div className={`col  ${currentComics.type}`} key={currentComics.id}>

              <img src={currentComics.thumb} alt={currentComics.title} />
              <h5 className="upperCase">{currentComics.title}</h5>
              <p >Price: {currentComics.price}</p>
            </div>
          )
        })}

        <div className="d-flex justify-content-center align-items-center text-center" >
          <button className={`${style.loadBtn}`}>Load more</button>
        </div>
      </div>



      <div className={`sectionBlue py-40 text-center ${style.bgBlue}`}>
        <div className="d-flex justify-content-center g-20">

          {blueBgLinks.map((currentLink, index) => (
            <div key={index} className="d-flex justify-content-center align-items-end">
              <img src={currentLink.src} alt={currentLink.title} />
              {/* <a href={currentLink.path}>{currentLink.title}</a> */}
              <h4 className="upperCase">{currentLink.title}</h4>
            </div>

          ))}
        </div>
      </div>
      
    </main>
  );
}