import emailjs from "@emailjs/browser";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/Contact.css";

function Contact() {
  const { state } = useLocation();
  const [activeTab, setActiveTab] = useState(state?.tab ?? "contact");

  // Contact form state
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactSubject, setContactSubject] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactError, setContactError] = useState("");

  // Quote form state
  const [quoteName, setQuoteName] = useState("");
  const [quoteEmail, setQuoteEmail] = useState("");
  const [quotePhone, setQuotePhone] = useState("");
  const [quoteEvent, setQuoteEvent] = useState("");
  const [quoteDate, setQuoteDate] = useState("");
  const [quoteDetails, setQuoteDetails] = useState("");
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);
  const [quoteError, setQuoteError] = useState("");

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
  const [orderError, setOrderError] = useState("");
  const [dateAvailable, setDateAvailable] = useState(null);
  const [checkingDate, setCheckingDate] = useState(false);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE,
        {
          contact_name: contactName,
          contact_email: contactEmail,
          contact_subject: contactSubject,
          contact_message: contactMessage,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setContactSubmitted(true);
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        setContactError("Something went wrong. Please try again.");
      });
  };

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_QUOTE_TEMPLATE,
        {
          quote_name: quoteName,
          quote_email: quoteEmail,
          quote_phone: quotePhone,
          quote_event: quoteEvent,
          quote_date: quoteDate,
          quote_details: quoteDetails,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setQuoteSubmitted(true);
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        setQuoteError("Something went wrong. Please try again.");
      });
  };

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    if (dateAvailable === false) {
      alert("Please select an available date before submitting.");
      return;
    }
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_ORDER_TEMPLATE,
        {
          order_name: orderName,
          order_email: orderEmail,
          order_phone: orderPhone,
          order_item: orderItem,
          order_flavor: orderFlavor,
          order_quantity: orderQuantity,
          order_date: orderDate,
          order_instructions: orderInstructions,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setOrderSubmitted(true);
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        setOrderError("Something went wrong. Please try again.");
      });
  };

  const checkDateAvailability = async (date) => {
    if (!date) return;
    setCheckingDate(true);
    setDateAvailable(null);

    const calendarId = encodeURIComponent(
      import.meta.env.VITE_GOOGLE_CALENDAR_ID,
    );
    const apiKey = import.meta.env.VITE_GOOGLE_CALENDAR_API_KEY;
    const timeMin = `${date}T00:00:00Z`;
    const timeMax = `${date}T23:59:59Z`;

    const url = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}&timeMin=${timeMin}&timeMax=${timeMax}&singleEvents=true`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.items && data.items.length > 0) {
        setDateAvailable(false);
      } else {
        setDateAvailable(true);
      }
    } catch {
      setDateAvailable(null);
    } finally {
      setCheckingDate(false);
    }
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
                  {contactError && <p className="form-error">{contactError}</p>}
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
                  {quoteError && <p className="form-error">{quoteError}</p>}
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
                      onChange={(e) => {
                        setOrderDate(e.target.value);
                        checkDateAvailability(e.target.value);
                      }}
                      required
                    />
                    {checkingDate && (
                      <p className="date-checking">Checking availability...</p>
                    )}
                    {dateAvailable === true && (
                      <p className="date-available">
                        ✅ This date is available!
                      </p>
                    )}
                    {dateAvailable === false && (
                      <p className="date-unavailable">
                        ❌ Sorry, this date is unavailable. Please choose
                        another date.
                      </p>
                    )}
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
                  <div className="payment-policy">
                    <h4>Payment Policy</h4>
                    <p>
                      A <strong>50% deposit</strong> is required at the time of
                      booking to secure your order. The remaining balance is due{" "}
                      <strong>14 days before</strong> your service date. Our
                      team will reach out with payment instructions after your
                      order is received.
                    </p>
                  </div>
                  {orderError && <p className="form-error">{orderError}</p>}
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
