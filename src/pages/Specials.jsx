import SpecialItem from "../components/SpecialItem";
import "../styles/Specials.css";

const specialCategories = [
  {
    id: 1,
    category: "Lorem, ipsum.",
    items: [
      {
        id: 1,
        name: "Lorem, ipsum dolor.",
        description: "Lorem ipsum dolor sit amet.",
        price: "Starting at $15",
      },
      {
        id: 2,
        name: "Lorem, ipsum dolor.",
        description: "Lorem ipsum dolor sit amet.",
        price: "Starting at $25",
      },
      {
        id: 3,
        name: "Lorem, ipsum dolor.",
        description: "Lorem ipsum dolor sit amet.",
        price: "Starting at $45",
      },
    ],
  },
  {
    id: 2,
    category: "Lorem, ipsum.",
    items: [
      {
        id: 1,
        name: "Lorem, ipsum dolor.",
        description: "Lorem ipsum dolor sit amet.",
        price: "Starting at $15",
      },
      {
        id: 2,
        name: "Lorem, ipsum dolor.",
        description: "Lorem ipsum dolor sit amet.",
        price: "Starting at $25",
      },
      {
        id: 3,
        name: "Lorem, ipsum dolor.",
        description: "Lorem ipsum dolor sit amet.",
        price: "Starting at $45",
      },
    ],
  },
  {
    id: 3,
    category: "Lorem, ipsum.",
    items: [
      {
        id: 1,
        name: "Lorem, ipsum dolor.",
        description: "Lorem ipsum dolor sit amet.",
        price: "Starting at $15",
      },
      {
        id: 2,
        name: "Lorem, ipsum dolor.",
        description: "Lorem ipsum dolor sit amet.",
        price: "Starting at $25",
      },
      {
        id: 3,
        name: "Lorem, ipsum dolor.",
        description: "Lorem ipsum dolor sit amet.",
        price: "Starting at $55",
      },
    ],
  },
  {
    id: 4,
    category: "Lorem, ipsum.",
    items: [
      {
        id: 1,
        name: "Lorem, ipsum dolor.",
        description: "Lorem ipsum dolor sit amet.",
        price: "Starting at $25",
      },
      {
        id: 2,
        name: "Lorem, ipsum dolor.",
        description: "Lorem ipsum dolor sit amet.",
        price: "Starting at $45",
      },
      {
        id: 3,
        name: "Lorem, ipsum dolor.",
        description: "Lorem ipsum dolor sit amet.",
        price: "Starting at $65",
      },
    ],
  },
];

function Specials() {
  return (
    <div className="special-container">
      {specialCategories.map((category) => (
        <div className="special-category" key={category.id}>
          <h2 className="special-title">{category.category}</h2>
          <div className="special-items">
            {category.items.map((item) => (
              <SpecialItem
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
  );
}

export default Specials;
