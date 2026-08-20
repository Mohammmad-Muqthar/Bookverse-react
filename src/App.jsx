import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

// components
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Categories from "./components/Categories/Categories";
import FeaturedBooks from "./components/FeaturedBooks/FeaturedBooks";
import Cart from "./components/Cart/Cart";
import BookDetail from "./components/BookDetail/BookDetail";
import Footer from "./components/Footer/Footer";

import TopSellers from "./components/TopSellers/TopSellers";
import MostViewed from "./components/MostViewed/MostViewed";
import NewArrivals from "./components/NewArrivals/NewArrivals";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

function App() {

  const [cart, setCart] = useState([]);

  const [loggedInUser, setLoggedInUser] = useState(() => {
    const savedUser = localStorage.getItem("bookverseLoggedInUser");

    return savedUser ? JSON.parse(savedUser) : null;
  });
  
  
const [filteredBooks, setFilteredBooks] = useState([]);

const [selectedCategory, setSelectedCategory] = useState(null);


const [mes, setnew] = useState("");
const topmessage = (book) => {
    setnew(`This is the top selled book ${book.title}`);

    setTimeout(() => {
        setnew("");
    }, 2000);
};

const viewmessage = (book) => {
    setnew(`This is the Most viewed book ${book.title}`);

    setTimeout(() => {
        setnew("");
    }, 2000);
};

const newmessage = (book) => {
    setnew(`This is the new arrived book ${book.title}`);

    setTimeout(() => {
        setnew("");
    }, 2000);
};

  return (
    <BrowserRouter>

      <Navbar
  loggedInUser={loggedInUser}
  setLoggedInUser={setLoggedInUser}
/>
      {mes && <div className="popup">{mes}</div>}

      <Routes>

        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero /> 
            <Categories setFilteredBooks={setFilteredBooks}
            setSelectedCategory={setSelectedCategory}
             /> 
            <TopSellers
            message={topmessage} /> 
           
            <MostViewed 
             message={viewmessage} />
            <NewArrivals 
            message={newmessage}/>
            </>       }
        />
<Route
  path="/featuredbook"
          element={
            
             <FeaturedBooks
                // cart={cart}
                // setCart={setCart}
    filteredBooks={filteredBooks}
    selectedCategory={selectedCategory}       
    setFilteredBooks={setFilteredBooks}  
    setSelectedCategory={setSelectedCategory} />
              
       }
        />
              

            

        {/* Books Page */}
        <Route
          path="/books"
          element={<h1>Books Page</h1>}
        />
         <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              setCart={setCart} 
              loggedInUser={loggedInUser}/>}/>

                    <Route
          path="/book/:id"
          element={
            <BookDetail
                          cart={cart}
              setCart={setCart} />}/>


  <Route
    path="/signup"
    element={<SignUp />}
  />

  <Route path="/signin" element={<SignIn 
    setLoggedInUser={setLoggedInUser}/> }/>


      <Route path="/About" element={<About/> }/>

      
      <Route path="/contact" element={<Contact/> }/>

      </Routes>
            <Footer />
    </BrowserRouter>
  );
}

export default App;