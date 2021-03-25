import React from "react";

const Navigation = () => {
  const preventReloadHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="d-flex flex-column p-4 m-2 border border-primary">
      <a
        href="/products"
        onClick={preventReloadHandler}
        className="link-primary"
      >
        Search
      </a>
      <a href="/about" onClick={preventReloadHandler} className="link-primary">
        About
      </a>
      <a
        href="/products"
        onClick={preventReloadHandler}
        className="link-primary"
      >
        Products
      </a>
      <a
        href="/contacts"
        onClick={preventReloadHandler}
        className="link-primary"
      >
        Contacts
      </a>
      <a
        href="/registration"
        onClick={preventReloadHandler}
        className="link-primary"
      >
        Registration
      </a>
    </div>
  );
};

export default Navigation;
