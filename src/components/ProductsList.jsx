import  comicsList  from "../assets/arraysLists/mainLists/comics";
import ProductCard from "./ProductCard";
import style from "./Main.module.css";


export default function ProductsList() {
    return (
        <section>
            <div className={`d-flex wrap ${style.bgBlack}`}>

                {comicsList.map(({id, thumb, title, price}) => {
                    
                    return <ProductCard
                        key={id}
                        thumb={thumb}
                        title={title}
                        price={price}
                    />
                })}

                <div className="d-flex justify-content-center align-items-center text-center" >
                    <button className={`${style.loadBtn}`}>Load more</button>
                </div>
            </div>
        </section>
    );
}
