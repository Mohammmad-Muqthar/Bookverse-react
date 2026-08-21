import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

const Checkout = ({ cart, setCart }) => {
    const navigate = useNavigate();

    const [paymentSuccess, setPaymentSuccess] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        address: "",
        paymentMethod: "Cash on Delivery",
    });

    // Calculate total
    const total = cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Place order
    const handlePlaceOrder = (e) => {
        e.preventDefault();

        // Basic validation
        if (
            !formData.name ||
            !formData.phone ||
            !formData.address
        ) {
            alert("Please fill in all delivery details.");
            return;
        }

        // Show payment/order success
        setPaymentSuccess(true);

        // Clear cart and redirect after 3 seconds
        setTimeout(() => {
            setCart([]);
            navigate("/");
        }, 6000);
    };

    // If cart is empty, go back to cart
    if (cart.length === 0 && !paymentSuccess) {
        return (
            <section className="checkout-page">
                <div className="checkout-container">
                    <div className="payment-success">
                        <h1>Your Cart is Empty</h1>
                        <p>Please add some books before checkout.</p>

                        <button
                            className="place-order-btn"
                            onClick={() => navigate("/featuredbook")}
                        >
                            Browse Books
                        </button>
                    </div>
                </div>
            </section>
        );
    }

    // Success screen
    if (paymentSuccess) {
        return (
            <section className="checkout-page">
                <div className="payment-success">
                    <div className="success-icon">✓</div>

                    <h1>Order Placed Successfully!</h1>

                    <p>Your order has been placed successfully.</p>

                    <p>
                        Payment Method: <strong>{formData.paymentMethod}</strong>
                    </p>

                    <p>Redirecting you to the home page...</p>
                </div>
            </section>
        );
    }

    return (
        <section className="checkout-page">

            <div className="checkout-container">

                <h1>Checkout</h1>

                <div className="checkout-layout">

                    {/* LEFT SIDE - DELIVERY FORM */}
                    <form
                        className="checkout-form"
                        onSubmit={handlePlaceOrder}
                    >

                        <h2>Delivery Details</h2>

                        {/* Name */}
                        <div className="checkout-input">
                            <label>Full Name</label>

                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your full name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Phone */}
                        <div className="checkout-input">
                            <label>Phone Number</label>

                            <input
                                type="tel"
                                name="phone"
                                placeholder="Enter your phone number"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Address */}
                        <div className="checkout-input">
                            <label>Delivery Address</label>

                            <textarea
                                name="address"
                                placeholder="Enter your complete delivery address"
                                value={formData.address}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Payment */}
                        <div className="payment-section">

                            <h2>Payment Method</h2>

                            <label className="payment-option">
                                <input
                                    type="radio"
                                    name="paymentMethod"
                                    value="Cash on Delivery"
                                    checked={
                                        formData.paymentMethod ===
                                        "Cash on Delivery"
                                    }
                                    onChange={handleChange}
                                />

                                Cash on Delivery
                            </label>

                            <label className="payment-option">
                                <input
                                    type="radio"
                                    name="paymentMethod"
                                    value="UPI"
                                    checked={
                                        formData.paymentMethod === "UPI"
                                    }
                                    onChange={handleChange}
                                />

                                UPI Payment
                            </label>

                            <label className="payment-option">
                                <input
                                    type="radio"
                                    name="paymentMethod"
                                    value="Card"
                                    checked={
                                        formData.paymentMethod === "Card"
                                    }
                                    onChange={handleChange}
                                />

                                Credit / Debit Card
                            </label>

                        </div>

                        <button
                            type="submit"
                            className="place-order-btn"
                        >
                            Place Order • ₹{total}
                        </button>

                    </form>


                    {/* RIGHT SIDE - ORDER SUMMARY */}
                    <div className="checkout-summary">

                        <h2>Order Summary</h2>

                        {cart.map((book) => (
                            <div
                                className="checkout-book"
                                key={book.id}
                            >

                                <div>
                                    <h3>{book.title}</h3>

                                    <p>
                                        ₹{book.price} × {book.quantity}
                                    </p>
                                </div>

                                <strong>
                                    ₹{book.price * book.quantity}
                                </strong>

                            </div>
                        ))}

                        <div className="checkout-line"></div>

                        <div className="checkout-total">
                            <span>Total</span>

                            <strong>₹{total}</strong>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default Checkout;