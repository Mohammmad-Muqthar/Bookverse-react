import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

/* COMPONENTS*/

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Categories from "./components/Categories/Categories";

import FeaturedBooks from "./components/FeaturedBooks/FeaturedBooks";
import BookDetail from "./components/BookDetail/BookDetail";
import Cart from "./components/Cart/Cart";

import TopSellers from "./components/TopSellers/TopSellers";
import MostViewed from "./components/MostViewed/MostViewed";
import NewArrivals from "./components/NewArrivals/NewArrivals";

import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";

import About from "./components/About/About";
import Contact from "./components/Contact/Contact";


function App() {

  /* STATE*/

  // Cart State
  const [cart, setCart] = useState([]);


  // Logged In User State
  const [loggedInUser, setLoggedInUser] = useState(() => {
    const savedUser = localStorage.getItem("bookverseLoggedInUser");

    return savedUser ? JSON.parse(savedUser) : null;
  });


  // Category Filter State
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);


  // Popup Message State
  const [mes, setMes] = useState("");


  /* MESSAGE FUNCTIONS */

  const showMessage = (message) => {
    setMes(message);

    setTimeout(() => {
      setMes("");
    }, 2000);
  };


  const topMessage = (book) => {
    showMessage(`This is the top selling book: ${book.title}`);
  };


  const viewMessage = (book) => {
    showMessage(`This is the most viewed book: ${book.title}`);
  };


  const newMessage = (book) => {
    showMessage(`This is the new arrival: ${book.title}`);
  };


  /* APP*/

  return (
    <BrowserRouter>

      {/* Navbar */}
      <Navbar
        loggedInUser={loggedInUser}
        setLoggedInUser={setLoggedInUser}
      />


      {/* Popup Message */}
      {mes && <div className="popup">{mes}</div>}


      {/* Routes */}
      <Routes>

        {/*HOME*/}

        <Route
          path="/"
          element={
            <>
              <Hero />

              <Categories
                setFilteredBooks={setFilteredBooks}
                setSelectedCategory={setSelectedCategory}
              />

              <TopSellers
                message={topMessage}
              />

              <MostViewed
                message={viewMessage}
              />

              <NewArrivals
                message={newMessage}
              />
            </>
          }
        />


        {/*FEATURED BOOKS*/}

        <Route
          path="/featuredbook"
          element={
            <FeaturedBooks
              filteredBooks={filteredBooks}
              selectedCategory={selectedCategory}
              setFilteredBooks={setFilteredBooks}
              setSelectedCategory={setSelectedCategory}
            />
          }
        />


        {/*BOOKS*/}

        <Route
          path="/books"
          element={<h1>Books Page</h1>}
        />


        {/*BOOK DETAIL */}

        <Route
          path="/book/:id"
          element={
            <BookDetail
              cart={cart}
              setCart={setCart}
              loggedInUser={loggedInUser}
            />
          }
        />


        {/*CART*/}

        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              setCart={setCart}
              loggedInUser={loggedInUser}
            />
          }
        />


        {/*AUTHENTICATION*/}

        <Route
          path="/signup"
          element={<SignUp />}
        />

        <Route
          path="/signin"
          element={
            <SignIn
              setLoggedInUser={setLoggedInUser}
            />
          }
        />


        {/* OTHER PAGES*/}

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

      </Routes>


      {/* Footer */}
      <Footer />

    </BrowserRouter>
  );
}


export default App;