import { books } from "../../data/books";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import "./TopSellers.css";
const TopSellers = ({mes, message}) => {
    
const navigate = useNavigate();


     const topSellingBooks = [...books]
        .sort((a, b) => b.sales - a.sales)
        .slice(0, 4);

    return (
        <section className="top-sellers">

            <div className="top-sellers-container">

                <h2>Top Sellers</h2>

                <div className="top-sellers-grid">
                 {topSellingBooks.map((book) => (
                        <div className="top-seller-item" key={book.id} 
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

export default TopSellers;