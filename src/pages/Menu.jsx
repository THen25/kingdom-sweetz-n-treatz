import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";

const menuCategories = [
  {
    id: 1,
    category: "Cakes",
    items: [
      {
        id: 1,
        name: "Custom Celebration Cake",
        description:
          "Handcrafted from scratch and decorated to match your vision and occasion.",
        price: "Starting at $65",
      },
      {
        id: 2,
        name: "Chocolate Drip Cake",
        description:
          "Rich chocolate cake with ganache drip and custom decorations.",
        price: "Starting at $75",
      },
      {
        id: 3,
        name: "Cheesecake",
        description:
          "Creamy homemade cheesecake available in a variety of flavors.",
        price: "Starting at $45",
      },
    ],
  },
  {
    id: 2,
    category: "Cupcakes",
    items: [
      {
        id: 1,
        name: "Custom Cupcakes",
        description:
          "Beautifully decorated cupcakes perfect for any event or celebration.",
        price: "Starting at $35/dozen",
      },
      {
        id: 2,
        name: "Strawberry Cupcakes",
        description:
          "Light and fluffy cupcakes topped with fresh strawberries and cream.",
        price: "Starting at $38/dozen",
      },
    ],
  },
  {
    id: 3,
    category: "Sweet Treats",
    items: [
      {
        id: 1,
        name: "Dessert Cups",
        description:
          "Layered dessert cups made with fresh fruit, cream, and cake crumbles.",
        price: "Starting at $5/each",
      },
      {
        id: 2,
        name: "Cinnamon Rolls",
        description:
          "Soft, fluffy homemade cinnamon rolls with cream cheese icing.",
        price: "Starting at $30/dozen",
      },
      {
        id: 3,
        name: "Cookies",
        description: "Freshly baked cookies available in a variety of flavors.",
        price: "Starting at $20/dozen",
      },
    ],
  },
  {
    id: 4,
    category: "Pies",
    items: [
      {
        id: 1,
        name: "Sweet Potato Pie",
        description:
          "A southern classic made from scratch with love and warm spices.",
        price: "Starting at $35",
      },
      {
        id: 2,
        name: "Seasonal Pies",
        description: "Ask about our seasonal and holiday pie offerings.",
        price: "Price varies",
      },
    ],
  },
  {
    id: 5,
    category: "Dipped Treats",
    items: [
      {
        id: 1,
        name: "Chocolate Dipped Rice Krispies",
        description:
          "A tray of 1/2 dozen chocolate dipped Rice Krispies treats, perfect for children.",
        price: "Starting at $25",
      },
      {
        id: 2,
        name: "Chocolate Covered Strawberries",
        description:
          "Fresh strawberries hand dipped in premium chocolate, available in milk, dark, or white chocolate.",
        price: "Starting at $25/dozen",
      },
    ],
  },
];

function Menu() {
  return (
    <div className="menu-page">
      <div className="menu-header">
        <h1>Our Menu</h1>
        <p>
          All items are made from scratch with quality ingredients and baked
          with purpose. Prices may vary based on size and customization.
        </p>
      </div>

      <div className="menu-container">
        {menuCategories.map((category) => (
          <div className="menu-category" key={category.id}>
            <h2 className="category-title">{category.category}</h2>
            <div className="menu-items">
              {category.items.map((item) => (
                <MenuItem
                  key={item.id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="menu-note">
        <p>
          Don't see what you're looking for? <a href="/contact">Contact us</a>{" "}
          for custom orders and special requests.
        </p>
      </div>
    </div>
  );
}

export default Menu;
