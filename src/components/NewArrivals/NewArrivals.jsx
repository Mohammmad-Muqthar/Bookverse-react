import { books } from "../../data/books";
import { useNavigate } from "react-router-dom";

import "./NewArrivals.css";
const NewArrivals = ({message, mes}) => {
const navigate = useNavigate();

     const NewArrivalBooks = [...books]
        .filter((book) => book.isNew === true)
        .slice(0,4);
//.filter((book) => book.isNew)is the shortest way
    return (
        <section className="New-Arrivals">

            <div className="New-Arrivals-container">

                <h2>New Arrived</h2>

                <div className="New-Arrivals-grid">
                 {NewArrivalBooks.map((book) => (
                        <div className="New-Arrivals-item" key={book.id} 
                        onClick={() =>{
                        message(book); navigate(`/book/${book.id}`);}}>

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

export default NewArrivals;