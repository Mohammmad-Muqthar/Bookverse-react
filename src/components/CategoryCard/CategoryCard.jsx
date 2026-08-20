import "./CategoryCard.css";

const CategoryCard = ({ category, onCategoryClick }) => {
    return (
        <div className="category-card"
         onClick={() => onCategoryClick(category.id)}>
            <span>{category.icon}</span>
            <h3>{category.name}</h3>
        </div>
    );
};


export default CategoryCard;