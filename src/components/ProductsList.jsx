import comicsList from "../assets/arraysLists/mainLists/comics";
import ProductCard from "./ProductCard";

export default function ProductsList() {
    return (
        <div className={`comics d-flex wrap ${style.bgBlack}`}>

            {comicsList.map((currentComics) => {


                <ProductCard
                    key={currentComics.id}
                    image={currentComics.thumb}
                    title={currentComics.title}
                    price={currentComics.type}
                />

            })}

            <div className="d-flex justify-content-center align-items-center text-center" >
                <button className={`${style.loadBtn}`}>Load more</button>
            </div>
        </div>
    );
}




















{/* <div className="d-flex wrap">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.src}
            title={product.title}
            type={product.type}
            time={product.time}
          />
        ))}
      </div> */}