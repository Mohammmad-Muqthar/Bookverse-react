
import "./FeaturedBooks.css";


import { categories } from "../../data/categories";
import { books } from "../../data/books";
import BookCard from "../BookCard/BookCard";

const FeaturedBooks = ({ selectedCategory, setSelectedCategory, setFilteredBooks, filteredBooks }) => {

    // this will do if displayed book is greater than 0 filteredbook else all the books
const booksToDisplay =
    selectedCategory ? filteredBooks : books;

    const handleCategoryClick = (categoryId) => {
    const filtered = books.filter(
        (book) => book.categoryId === categoryId
    );

        setFilteredBooks(filtered);
        setSelectedCategory(categoryId);
};

    return (
        <section className="featured-books">
            <div className="featured-books-container">

                <h2>Featured Books</h2>
                {/* this is the div for show categories */}
                <div className="book-filter">
                    <p     onClick={() => {
        setSelectedCategory(null);
        setFilteredBooks([]);
    }}>All</p>
                    {categories.map((category) => (
                        <p key={category.id} onClick={() => handleCategoryClick(category.id)}>
                            {category.name}</p>
                    ))
                    }
                </div>

                {/* the below is for map for all the books */}
                {booksToDisplay.length > 0 ? (
                
                <div className="books-grid">
                     
                    {booksToDisplay.map((book) => (
                        <BookCard
                            key={book.id}
                            book={book}
                            // cart={cart}
                            // setCart={setCart}
                        />
                     
                       
                    ))} 
                    </div>)
                    : (
<div className="no-books-content">
    <div className="no-books-message">
        <h3>No books found in this category</h3>
        <p>Here are some other books you might like.</p>
    </div>

    <div className="books-grid">
        {books.map((book) => (
            <BookCard
                key={book.id}
                book={book}
                // cart={cart}
                // setCart={setCart}
            />
        ))}
    </div>
</div>
    )}
                

                

            </div>
        </section>
    );
};

export default FeaturedBooks;