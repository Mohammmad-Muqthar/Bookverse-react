import "./BookDetail.css";
import { useParams } from "react-router-dom";
import { books } from "../../data/books";
import { useState } from "react";

const BookDetail = ({cart, setCart, loggedInUser}) => {

    const { id } = useParams();

    const book = books.find(
        (book) => book.id === Number(id)
    );
    
const [selectedImage, setSelectedImage] = useState(book.images[0]);

const [cartMessage, setCartMessage] = useState("");





const addToCart = () => {

    if (!loggedInUser) {
        setCartMessage("Please login to add books to cart");

        setTimeout(() => {
            setCartMessage("");
        }, 2000);

        return;
    }
    const existingBook = cart.find(
        (item) => item.id === book.id
    );

    if (existingBook) {

        if (existingBook.quantity < existingBook.stock) {

            setCart(
                cart.map((item) =>
                    item.id === book.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            );

            setCartMessage(`${book.title} added to cart`);

        } else {

            setCartMessage(`No more ${book.title} available in stock`);

        }

    } else {

        setCart([
            ...cart,
            {
                ...book,
                quantity: 1
            }
        ]);

        setCartMessage(`${book.title} added to cart`);
    }

    // setCartMessage(`${book.title} added to cart`);
    setTimeout(() => {
    setCartMessage("");
}, 2000);
};


    return (

    <section className="book-detail">
        {cartMessage && (
    <div className="cart-popup">
        {cartMessage}
    </div>
)}
        <div className="book-detail-container">

            {/* Left side - Images */}
            <div className="book-images">

                <div className="main-book-image">
                    <img src={selectedImage} alt={book.title} />
                </div>

                <div className="book-image-thumbnails">
                    {book.images.map((image, index) => (
                        <div
                            className="thumbnail"
                            key={index}
                            onClick={() => setSelectedImage(image)}
                        >
                            <img src={image} alt={book.title} />
                        </div>
                    ))}
                </div>

            </div>

            {/* Right side - Book Details */}
            <div className="book-detail-info">

                <span className="book-detail-category">
                    Book Details
                </span>

                <h1>{book.title}</h1>

                <p className="book-detail-author">
                    By <span>{book.author}</span>
                </p>

                <div className="book-detail-rating">
                    ⭐ {book.rating}
                </div>

                <div className="book-detail-price">
                    ₹{book.price}
                </div>

                <div className="book-detail-stock">
                    <strong>Availability:</strong> {book.stock} in stock
                </div>

                <button className="book-detail-cart-btn" onClick={addToCart}>
                    Add to Cart
                </button>

            </div>

        </div>
    </section>
);
  
};

export default BookDetail;