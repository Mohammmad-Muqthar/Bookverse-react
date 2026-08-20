import "./BookCard.css";
import { useNavigate } from "react-router-dom";



const BookCard = ({ book, /*cart, setCart */}) => {
   const navigate = useNavigate();
//         const addToCart = () => {

//     const existingBook = cart.find(
//         (item) => item.id === book.id
//     );

//     if (existingBook) {

//         setCart(
//             cart.map((item) =>
//                 item.id === book.id && item.quantity < item.stock
//                     ? { ...item, quantity: item.quantity + 1 }
//                     : item
//             )
//         )
//     } else {

//         setCart([
//             ...cart,
//             {
//                 ...book,
//                 quantity: 1
//             }
//         ]);

//     }
// };

    return (

        <div
    className="book-card"
    onClick={() => navigate(`/book/${book.id}`)}>
            <img src={book.images[0]} alt={book.title} />
            <div className="book-info">
                {/* we are using each meaning full class for styling  */}
                <h3 className="book-title">
                    {book.title}
                </h3>

                <p className="book-author">
                    {book.author}
                </p>

                <p className="book-rating">
                    ⭐ {book.rating}
                </p>

                <div className="book-bottom">

                    <span className="book-price">
                        ₹{book.price}
                    </span>

                    <span className="book-stock">
                        in : {book.stock}
                    </span>

                </div>
                {/* add to cart button */}
                {/* <button className="add-cart-btn"   
                 onClick={addToCart} >
                    Add to Cart
                </button> */}
                

            </div>
 
        </div>
       
    );
};

export default BookCard;