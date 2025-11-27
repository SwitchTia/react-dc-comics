export default function ProductCard(props) {


    const { thumb, title, price } = props;
  

    return (

        <div className={`col`} >

            <img src={thumb} alt={title} />
            <h5 className="upperCase">{title}</h5>
            <p >Price: {price}</p>
        </div>

    );
}