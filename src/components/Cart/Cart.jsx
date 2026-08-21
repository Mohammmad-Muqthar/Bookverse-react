import { useNavigate } from "react-router-dom";
import "./Cart.css";

const Cart = ({ cart, setCart }) => {
    const navigate = useNavigate();

    const increaseQuantity = (bookId) => {
        setCart(
            cart.map((item) =>
                item.id === bookId && item.quantity < item.stock
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    };

    const decreaseQuantity = (bookId) => {
        setCart(
            cart.map((item) =>
                item.id === bookId
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            ).filter((item) => item.quantity > 0)
        );
    };

    // Total calculation
    const subtotal = cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    return (
        <section className="cart-page">

            <div className="cart-container">

                <h2 className="cart-title">Your Cart</h2>

                <div className="cart-layout">

                    {/* LEFT SIDE - CART ITEMS */}
                    <div className="cart-items-section">

                        {cart.length === 0 ? (

                            <div className="empty-cart">
                                <h3>Your cart is empty</h3>
                                <p>Add some books to your cart.</p>
                            </div>

                        ) : (

                            cart.map((book) => (

                                <div className="cart-item" key={book.id}>

                                    <img
                                        src={book.images[0]}
                                        alt={book.title}
                                    />

                                    <div className="cart-item-info">

                                        <h3>{book.title}</h3>

                                        <p className="cart-author">
                                            {book.author}
                                        </p>

                                        <p className="cart-price">
                                            ₹{book.price}
                                        </p>

                                    </div>

                                    <div className="quantity-section">

                                        <p>Quantity</p>

                                        <div className="quantity-control">

                                            <button
                                                className="quantity-btn"
                                                onClick={() =>
                                                    decreaseQuantity(book.id)
                                                }
                                            >
                                                −
                                            </button>

                                            <span>{book.quantity}</span>

                                            <button
                                                className="quantity-btn"
                                                onClick={() =>
                                                    increaseQuantity(book.id)
                                                }
                                            >
                                                +
                                            </button>

                                        </div>

                                    </div>

                                    <div className="item-total">

                                        <p>Total</p>

                                        <strong>
                                            ₹{book.price * book.quantity}
                                        </strong>

                                    </div>

                                </div>

                            ))
                        )}

                    </div>


                    {/* RIGHT SIDE - ORDER SUMMARY */}
                    <div className="order-summary">

                        <h3>Order Summary</h3>

                        <div className="summary-row">
                            <span>Subtotal</span>
                            <span>₹{subtotal}</span>
                        </div>

                        <div className="summary-row">
                            <span>Delivery</span>
                            <span className="free-delivery">FREE</span>
                        </div>

                        <div className="summary-line"></div>

                        <div className="summary-total">
                            <span>Total</span>
                            <strong>₹{subtotal}</strong>
                        </div>

                        <button
                            className="checkout-btn"
                            onClick={() => navigate("/checkout")}
                            disabled={cart.length === 0}>
                            Proceed to Checkout
                        </button>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default Cart;