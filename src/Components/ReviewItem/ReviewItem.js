import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./RevewItem.css";

const ReviewItem = (props) => {
  const { handleRemove, product } = props;
  const { name, img, shipping, price, quantity } = props.product;
  return (
    <div className="review-item">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="review-items-detail-container">
        <div className="review-item-details">
          <h4 title={name}>
            Name:{name.length > 20 ? name.slice(0, 20) + "..." : name}
          </h4>
          <p>
            Price: <span className="orange-color">{price}</span>
          </p>
          <p>
            <small>Shipping Charge:{shipping}</small>
          </p>
          <p>
            <small>Quantity:{quantity}</small>
          </p>
        </div>
        <div className="delet-container">
          <button
            onClick={() => handleRemove(product)}
            className="delete-button"
          >
            <FontAwesomeIcon
              className="icone"
              icon={faTrashAlt}
            ></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
