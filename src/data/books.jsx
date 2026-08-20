import book1 from '../assets/book1.jpg';
import book2 from '../assets/book2.jpg';
import book3 from '../assets/book3.jpg';
import book4 from '../assets/book4.jpg';
import book5 from '../assets/book5.jpg';
import book6 from '../assets/book6.jpg';


// book1 images
import book1_1 from '../assets/book1.1.jpg';
import book1_2 from '../assets/book1.2.jpg';
import book1_3 from '../assets/book1.3.jpg';


// book2 images
import book2_1 from '../assets/book2.1.jpg';
import book2_2 from '../assets/book2.2.jpg';
import book2_3 from '../assets/book2.3.jpg';

// book3 images
import book3_1 from '../assets/book3.1.jpg';
import book3_2 from '../assets/book3.2.jpg';
import book3_3 from '../assets/book3.3.jpg';

// book4 images
import book4_1 from '../assets/book4.1.jpg';
import book4_2 from '../assets/book4.2.jpg';
import book4_3 from '../assets/book4.3.jpg';

// book5 images
import book5_1 from '../assets/book5.1.jpg';
import book5_2 from '../assets/book5.2.jpg';
import book5_3 from '../assets/book5.3.jpg';

// book6 images
import book6_1 from '../assets/book6.1.jpg';
import book6_2 from '../assets/book6.2.jpg';
import book6_3 from '../assets/book6.3.jpg';


export const books = [
    {
        id: 1,
        title: "Atomic Habits",
        author: "James Clear",
        price: 499,
        stock: 25,
        rating: 4.8,
        categoryId: 2,
        images: [
            book1,
            book1_1,
            book1_2,
            book1_3
        ],
        views: 200,
        sales: 100,
        isNew: false
    },
    {
        id: 2,
        title: "The Psychology of Money",
        author: "Morgan Housel",
        price: 399,
        stock: 18,
        rating: 4.7,
        categoryId: 2,
        images: [
            book2,
            book2_1,
            book2_2,
            book2_3
        ],
        views: 1200,
        sales: 200,
        isNew: true
    },
    {
        id: 3,
        title: "Ikigai",
        author: "Héctor García",
        price: 349,
        stock: 30,
        rating: 4.6,
        categoryId: 3,
        images: [
            book3,
            book3_1,
            book3_2,
            book3_3
        ],
        views: 1100,
        sales: 700,
        isNew: false
    },
    {
        id: 4,
        title: "Rich Dad Poor Dad",
        author: "Robert Kiyosaki",
        price: 449,
        stock: 15,
        rating: 4.7,
        categoryId: 2,
        images: [
            book4,
            book4_1,
            book4_2,
            book4_3
        ],
        views: 1000,
        sales: 500,
        isNew: true
    },
    {
        id: 5,
        title: "The Alchemist",
        author: "Paulo Coelho",
        price: 299,
        stock: 22,
        rating: 4.8,
        categoryId: 1,
        images: [
            book5,
            book5_1,
            book5_2,
            book5_3
        ],
        views: 900,
        sales: 599,
        isNew: true
    },
    {
        id: 6,
        title: "Deep Work",
        author: "Cal Newport",
        price: 499,
        stock: 12,
        rating: 4.5,
        categoryId: 2,
        images: [
            book6,
            book6_1,
            book6_2,
            book6_3
        ],
        views: 210,
        sales: 300,
        isNew: true
    }
];