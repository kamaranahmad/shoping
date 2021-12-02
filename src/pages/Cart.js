import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeCard } from "../screens/CartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart.value);

  const dispatch = useDispatch();

  return (
    <div>
      <div>
        {cart.map((key, index) => (
          <div>
            <div>
              <div>
                <div>{key.id}</div>
                <div>{key.name}</div>
                <div>{key.category}</div>
              </div>
              <div>
                <button
                  onClick={() => {
                    dispatch(removeCard(key.id));
                  }}
                >
                  Remove it
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;