export default function ProductCard(props) {


    const { thumb, title, price } = props;
    let colClass = "col ";

    return (

        <div className={`col  ${currentComics.type}`} key={currentComics.id}>

            <img src={thumb} alt={currentComics.title} />
            <h5 className="upperCase">{title}</h5>
            <p >Price: {price}</p>
        </div>

        // <div className={`col ${type}`}>
        //   <img src={image} alt={title} />
        //   <h3>{title}</h3>
        //   <p>Tipologia: {type}</p>
        // </div>
    );
}