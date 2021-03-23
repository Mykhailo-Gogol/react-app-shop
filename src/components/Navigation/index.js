import React from "react";

const Navigation = () => {
  return (
    <div className="d-flex flex-column p-2 mt-2 mb-2 mr-2 border border-primary">
      <a href="/products" className="link-primary">
        Search
      </a>
      <a href="/about" className="link-primary">
        About
      </a>
      <a href="/products" className="link-primary">
        Products
      </a>
      <a href="/contacts" className="link-primary">
        Contacts
      </a>
      <a href="/registration" className="link-primary">
        Registration
      </a>
    </div>
  );
};

export default Navigation;
