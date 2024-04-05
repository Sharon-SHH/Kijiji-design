import React from "react";
import { faker } from "@faker-js/faker";
import "./ProductCard.scss";
import { FaRegHeart } from "react-icons/fa";

const generateMarketplaceData = (numProducts) => {
  return Array.from({ length: numProducts }, () => ({
    productName: faker.commerce.productName(),
    image: faker.image.urlLoremFlickr({ category: "product" }),
    price: faker.commerce.price(),
    category: faker.commerce.department(),
    sellerName: faker.person.fullName(),
    sellerContact: faker.internet.email(),
  }));
};

export default function ProductCard() {
  const products = generateMarketplaceData(50);

  return (
    <div className="product-card-container">
      {products.map((product) => (
        <div key={product.productId} className="product-card">
          <h2 className="product-card__title">{product.productName}</h2>
          <img
            src={product.image}
            alt={product.productName}
            className="product-card__image"
          />
          <div className="product-card__description">
            <p className="product-card__price">
              <strong>Price:</strong> ${product.price}
            </p>
            <FaRegHeart title="product-heart" className="product-card__icon" />
            {/* <p className="product-card__category">
            <strong>Category:</strong> {product.category}
          </p>
          <p className="product-card__seller">
            <strong>Seller:</strong> {product.sellerName}
          </p>
          <p className="product-card__contact">
            <strong>Contact:</strong>
            {product.sellerContact}
          </p> */}
          </div>
        </div>
      ))}
    </div>
  );
}
