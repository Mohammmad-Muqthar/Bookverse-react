import { books } from "../../data/books";
import { useNavigate } from "react-router-dom";

import "./MostViewed.css";
const MostViewed = ({message, mes}) => {
    const navigate = useNavigate();

     const MostviewedBooks = [...books]
        .sort((a, b) => b.views - a.views)
        .slice(0, 4);

    return (
        <section className="most-viewed">

            <div className="most-viewed-container">

                <h2>Most Viewed</h2>

                <div className="most-viewed-grid" >
                 {MostviewedBooks.map((book) => (
                        <div className="most-viewed-item" key={book.id}
                           onClick={() => {
    message(book);
    navigate(`/book/${book.id}`);
}}>

        <img src={book.images[0]} alt={book.title} />

        <h3>{book.title}</h3>

        <p>{book.author}</p>

        <p>₹{book.price}</p>
        </div>       
    ))}



        </div>

            </div>

        </section>
    );
};

export default MostViewed;