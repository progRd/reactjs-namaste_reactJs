const HeaderComponent = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <a href="#">
          <img
            className="logo"
            src="https://thumbs.dreamstime.com/b/food-delivery-logo-design-template-134749604.jpg"
          />
        </a>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </header>
  );
};

export default HeaderComponent;
