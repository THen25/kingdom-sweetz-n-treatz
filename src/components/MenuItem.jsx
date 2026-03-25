function MenuItem({ name, description, price }) {
  return (
    <div className="menu-item">
      <div className="menu-item-info">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <span className="menu-item-price">{price}</span>
    </div>
  );
}

export default MenuItem;
