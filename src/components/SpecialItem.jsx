function SpecialItem({ name, description, price }) {
  return (
    <div className="special-item">
      <div className="special-item-info">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <span className="special-item-price">{price}</span>
    </div>
  );
}

export default SpecialItem;
