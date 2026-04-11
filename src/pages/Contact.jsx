import { useState } from "react";
import "../styles/Contact.css";

function Contact() {
  const [activeTab, setActiveTab] = useState("contact");

  // Contact form state
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactSubject, setContactSubject] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [contactSubmitted, setContactSubmitted] = useState(false);

  // Quote form state
  const [quoteName, setQuoteName] = useState("");
  const [quoteEmail, setQuoteEmail] = useState("");
  const [quotePhone, setQuotePhone] = useState("");
  const [quoteEvent, setQuoteEvent] = useState("");
  const [quoteDate, setQuoteDate] = useState("");
  const [quoteDetails, setQuoteDetails] = useState("");
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);

  // Order form state
  const [orderName, setOrderName] = useState("");
  const [orderEmail, setOrderEmail] = useState("");
  const [orderPhone, setOrderPhone] = useState("");
  const [orderItem, setOrderItem] = useState("");
  const [orderFlavor, setOrderFlavor] = useState("");
  const [orderQuantity, setOrderQuantity] = useState("");
  const [orderDate, setOrderDate] = useState("");
  const [orderInstructions, setOrderInstructions] = useState("");
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    console.log({ contactName, contactEmail, contactSubject, contactMessage });
    setContactSubmitted(true);
  };

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    console.log({
      quoteName,
      quoteEmail,
      quotePhone,
      quoteEvent,
      quoteDate,
      quoteDetails,
    });
    setQuoteSubmitted(true);
  };

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    console.log({
      orderName,
      orderEmail,
      orderPhone,
      orderItem,
      orderFlavor,
      orderQuantity,
      orderDate,
      orderInstructions,
    });
    setOrderSubmitted(true);
  };

  return (
    <main>
      <section className="contact-header">
        <h1 className="contact-header-title">Order & Contact</h1>
        <p className="contact-header-subtitle">
          Ready to place an order, request a custom quote, or simply have a
          question? We're here for you.
        </p>
      </section>

      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-tabs">
            <button
              className={`tab-btn ${activeTab === "contact" ? "active" : ""}`}
              onClick={() => setActiveTab("contact")}
            >
              Contact Us
            </button>
            <button
              className={`tab-btn ${activeTab === "quote" ? "active" : ""}`}
              onClick={() => setActiveTab("quote")}
            >
              Request a Quote
            </button>
            <button
              className={`tab-btn ${activeTab === "order" ? "active" : ""}`}
              onClick={() => setActiveTab("order")}
            >
              Place an Order
            </button>
          </div>

          {activeTab === "contact" && (
            <div className="tab-content">
              {contactSubmitted ? (
                <div className="form-success">
                  <p>
                    Thank you for reaching out! We'll get back to you shortly.
                    💕
                  </p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleContactSubmit}>
                  <div className="form-group">
                    <label htmlFor="contactName">Your Name</label>
                    <input
                      type="text"
                      id="contactName"
                      placeholder="Enter your name"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contactEmail">Your Email</label>
                    <input
                      type="email"
                      id="contactEmail"
                      placeholder="Enter your email"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contactSubject">Subject</label>
                    <input
                      type="text"
                      id="contactSubject"
                      placeholder="What is this regarding?"
                      value={contactSubject}
                      onChange={(e) => setContactSubject(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contactMessage">Message</label>
                    <textarea
                      id="contactMessage"
                      placeholder="Write your message here..."
                      value={contactMessage}
                      onChange={(e) => setContactMessage(e.target.value)}
                      rows="5"
                      required
                    />
                  </div>
                  <button type="submit" className="form-submit-btn">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          )}

          {activeTab === "quote" && (
            <div className="tab-content">
              {quoteSubmitted ? (
                <div className="form-success">
                  <p>
                    Thank you for your request! We'll be in touch with your
                    custom quote soon. 🎂
                  </p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleQuoteSubmit}>
                  <div className="form-group">
                    <label htmlFor="quoteName">Your Name</label>
                    <input
                      type="text"
                      id="quoteName"
                      placeholder="Enter your name"
                      value={quoteName}
                      onChange={(e) => setQuoteName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="quoteEmail">Your Email</label>
                    <input
                      type="email"
                      id="quoteEmail"
                      placeholder="Enter your email"
                      value={quoteEmail}
                      onChange={(e) => setQuoteEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="quotePhone">Phone Number</label>
                    <input
                      type="tel"
                      id="quotePhone"
                      placeholder="Enter your phone number"
                      value={quotePhone}
                      onChange={(e) => setQuotePhone(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="quoteEvent">Type of Event</label>
                    <select
                      id="quoteEvent"
                      value={quoteEvent}
                      onChange={(e) => setQuoteEvent(e.target.value)}
                      required
                    >
                      <option value="">Select an event type</option>
                      <option value="birthday">Birthday</option>
                      <option value="wedding">Wedding</option>
                      <option value="babyshower">Baby Shower</option>
                      <option value="bridal">Bridal Shower</option>
                      <option value="corporate">Corporate Event</option>
                      <option value="church">Church Event</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="quoteDate">Event Date</label>
                    <input
                      type="date"
                      id="quoteDate"
                      value={quoteDate}
                      onChange={(e) => setQuoteDate(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="quoteDetails">Order Details</label>
                    <textarea
                      id="quoteDetails"
                      placeholder="Describe what you're looking for — flavors, size, design ideas, quantity, etc."
                      value={quoteDetails}
                      onChange={(e) => setQuoteDetails(e.target.value)}
                      rows="5"
                      required
                    />
                  </div>
                  <button type="submit" className="form-submit-btn">
                    Request Quote
                  </button>
                </form>
              )}
            </div>
          )}

          {activeTab === "order" && (
            <div className="tab-content">
              {orderSubmitted ? (
                <div className="form-success">
                  <p>
                    Thank you for your order! We'll confirm the details and get
                    back to you shortly. 🎉
                  </p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleOrderSubmit}>
                  <div className="form-group">
                    <label htmlFor="orderName">Your Name</label>
                    <input
                      type="text"
                      id="orderName"
                      placeholder="Enter your name"
                      value={orderName}
                      onChange={(e) => setOrderName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="orderEmail">Your Email</label>
                    <input
                      type="email"
                      id="orderEmail"
                      placeholder="Enter your email"
                      value={orderEmail}
                      onChange={(e) => setOrderEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="orderPhone">Phone Number</label>
                    <input
                      type="tel"
                      id="orderPhone"
                      placeholder="Enter your phone number"
                      value={orderPhone}
                      onChange={(e) => setOrderPhone(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="orderItem">
                      What would you like to order?
                    </label>
                    <select
                      id="orderItem"
                      value={orderItem}
                      onChange={(e) => setOrderItem(e.target.value)}
                      required
                    >
                      <option value="">Select an item</option>
                      <option value="custom-cake">Custom Cake</option>
                      <option value="cupcakes">Cupcakes</option>
                      <option value="cheesecake">Cheesecake</option>
                      <option value="pie">Pie</option>
                      <option value="cinnamon-rolls">Cinnamon Rolls</option>
                      <option value="cookies">Cookies</option>
                      <option value="dessert-cups">Dessert Cups</option>
                      <option value="dessert-table">Dessert Table</option>
                      <option value="dipped-treats">Dipped Treats</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="orderFlavor">Flavor Preference</label>
                    <input
                      type="text"
                      id="orderFlavor"
                      placeholder="e.g. Chocolate, Vanilla, Strawberry, Red Velvet"
                      value={orderFlavor}
                      onChange={(e) => setOrderFlavor(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="orderQuantity">Quantity / Size</label>
                    <input
                      type="text"
                      id="orderQuantity"
                      placeholder="e.g. 1 dozen cupcakes, 8 inch cake, 24 servings"
                      value={orderQuantity}
                      onChange={(e) => setOrderQuantity(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="orderDate">Date Needed</label>
                    <input
                      type="date"
                      id="orderDate"
                      value={orderDate}
                      onChange={(e) => setOrderDate(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="orderInstructions">
                      Special Instructions
                    </label>
                    <textarea
                      id="orderInstructions"
                      placeholder="Any allergies, design ideas, or special requests..."
                      value={orderInstructions}
                      onChange={(e) => setOrderInstructions(e.target.value)}
                      rows="5"
                    />
                  </div>
                  <button type="submit" className="form-submit-btn">
                    Place Order
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      </section>

      <section className="contact-social">
        <h2 className="contact-social-title">Follow Us</h2>
        <p className="contact-social-subtitle">
          Stay up to date with our latest creations on social media
        </p>
        <div className="social-links">
          <a
            href="https://www.instagram.com/kingdom_sweetz_n_treatz/"
            target="_blank"
            rel="noreferrer"
            className="social-btn instagram"
          >
            Instagram
          </a>
        </div>
      </section>
    </main>
  );
}

export default Contact;
