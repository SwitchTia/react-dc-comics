export default function ProductCard({ thumb, title, price }) {

    return (

        <div className={`col`} >

            <img src={thumb} alt={title} />
            <h5 className="upperCase">{title}</h5>
            <p >Price: {price}</p>
        </div>

    );
}