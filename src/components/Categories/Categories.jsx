
import { useNavigate } from "react-router-dom";


import { categories } from "../../data/categories";
import { books } from "../../data/books";
import CategoryCard from "../CategoryCard/CategoryCard";

import "./Categories.css";



const Categories = ({ setFilteredBooks, setSelectedCategory }) => {

 const navigate = useNavigate();

const handleCategoryClick = (categoryId) => {

    const filtered = books.filter(
        (book) => book.categoryId === categoryId
    );
setFilteredBooks(filtered);
setSelectedCategory(categoryId);


    navigate("/featuredbook");
   
};

    return (
        <section className="categories">
            <div className="categories-container">
                <h2>Browse by Categories</h2>


                <div className="categories-grid">

                    {/*map function   where the category display card is in the CategoryCard map is here*/}
                    {categories.map((category) => (

                        <CategoryCard
                            key={category.id}
                            category={category}
                            onCategoryClick={handleCategoryClick}
                        />
                    ))}


                </div>
            </div>
        </section>

    );
};

export default Categories;